import Anthropic from '@anthropic-ai/sdk'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { SESSION_COOKIE, verifySession } from '@/lib/kb-auth/session'

// POST /api/hazmat/extract
// Multipart form with `file` (carrier BOL PDF). Server-side Anthropic
// call extracts the structured shipment fields. Returns JSON matching
// the ShipmentDraft shape (keys aligned with the hazmat-shipments
// collection so the UI can shallow-merge the response into draft state).
//
// Auth: same kb-auth session cookie as the /ops/* gate. We double-check
// in the route handler so an attacker can't bypass proxy.ts by hitting
// /api/hazmat/extract directly with a forged Origin.

export const runtime = 'nodejs'
// 60s — extraction usually completes in <15s, but PDFs with many pages
// can run longer. The route is a single Anthropic round-trip, no DB.
export const maxDuration = 60

const EXTRACTION_PROMPT = `Extract structured data from this freight Bill of Lading (BOL). Return ONLY a valid JSON object with these exact keys (use empty string for fields you cannot find — do NOT invent data):

{
  "bolRef": "Customer ref / BL number",
  "proNumber": "Carrier pro/waybill number",
  "dateTendered": "YYYY-MM-DD",
  "carrier": "Carrier name",
  "shipperCompany": "",
  "shipperAddress": "",
  "shipperCityStateZip": "",
  "shipperSiteContact": "Site contact + phone if available, formatted as 'Name — Phone'",
  "consigneeName": "",
  "consigneeAddress": "",
  "consigneeCityStateZip": "",
  "consigneePhone": "",
  "productName": "Item description",
  "numUnits": "<integer as string>",
  "containerType": "Crate / Box / Pallet (default Crate)",
  "dimensions": "L × W × H in inches",
  "totalWeight": "<number lbs as string>",
  "productType": "ONE OF: escooter|ebike|emotorcycle|ev_other|drone|robot|equipment_installed|battery_packed|battery_alone|lithium_metal_alone"
}

Return ONLY the JSON. No markdown fences, no preamble.`

function unauthorized() {
  return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

export async function POST(request: Request): Promise<NextResponse> {
  const sessionCookie = (await cookies()).get(SESSION_COOKIE)?.value
  if (!sessionCookie || !verifySession(sessionCookie)) return unauthorized()

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'ANTHROPIC_API_KEY is not configured' },
      { status: 500 },
    )
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return badRequest('expected multipart/form-data with a `file` field')
  }

  const file = formData.get('file')
  if (!(file instanceof File)) return badRequest('missing `file` field')
  if (file.type !== 'application/pdf') return badRequest('file must be application/pdf')
  if (file.size > 10 * 1024 * 1024) return badRequest('file exceeds 10MB limit')

  const arrayBuffer = await file.arrayBuffer()
  const base64 = Buffer.from(arrayBuffer).toString('base64')

  const client = new Anthropic({ apiKey })

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1500,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'document',
              source: {
                type: 'base64',
                media_type: 'application/pdf',
                data: base64,
              },
            },
            { type: 'text', text: EXTRACTION_PROMPT },
          ],
        },
      ],
    })

    const textBlock = response.content.find((b) => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json(
        { error: 'no text response from claude' },
        { status: 502 },
      )
    }

    // Strip any accidental code fences, then JSON-parse.
    const raw = textBlock.text
      .trim()
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/, '')
      .replace(/```\s*$/, '')
      .trim()

    let extracted: Record<string, unknown>
    try {
      extracted = JSON.parse(raw)
    } catch {
      return NextResponse.json(
        { error: 'claude returned non-JSON', raw },
        { status: 502 },
      )
    }

    return NextResponse.json({ extracted, usage: response.usage })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
