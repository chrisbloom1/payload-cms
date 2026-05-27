import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { readFile } from 'fs/promises'
import path from 'path'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SESSION_COOKIE, verifySession, type SessionClaims } from '@/lib/kb-auth/session'
import { renderHazmatPdfHtml } from '@/lib/hazmat/pdf-template'
import type { ShipmentDraft } from '@/components/hazmat/types'

// POST /api/hazmat/generate
// Body: { draft: ShipmentDraft }
// Renders the declaration HTML, launches headless Chromium via
// @sparticuz/chromium + puppeteer-core, returns a PDF buffer.
//
// Step 5 returns the PDF directly to the client for download. Step 6
// will additionally persist it to Payload media and link it to the
// HazmatShipments record.
//
// Auth: kb-auth session cookie (same gate as the page).

export const runtime = 'nodejs'
// PDF generation on a cold start takes ~5-8s; warm requests are sub-2s.
// 60s budget is comfortable.
export const maxDuration = 60

function unauthorized() {
  return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
}

// When the caller supplies a shipmentId, the generated PDF is uploaded
// to Payload's media collection and the shipment's `generatedPdf`
// relation is updated to point at it. An audit-trail event is also
// appended. Required for §172.201(e) 2-year retention (the PDF blob
// is the system of record once signed/transmitted).
async function persistPdfToShipment(args: {
  shipmentId: string
  pdf: Buffer | Uint8Array
  filename: string
  session: SessionClaims
}): Promise<{ mediaId: number | string } | null> {
  try {
    const payload = await getPayload({ config: configPromise })

    // Upload PDF buffer to media. Payload's local API accepts a File
    // object via the `file` arg in Node 20+ (which Vercel runs).
    const file = new File([new Uint8Array(args.pdf)], args.filename, {
      type: 'application/pdf',
    })

    const media = (await payload.create({
      collection: 'media' as never,
      data: { alt: `Shipper's Declaration ${args.filename}` } as never,
      file: {
        data: Buffer.from(await file.arrayBuffer()),
        mimetype: file.type,
        name: file.name,
        size: file.size,
      },
    })) as { id: number | string }

    // Append audit + update shipment's generatedPdf relation.
    const existing = (await payload.findByID({
      collection: 'hazmat-shipments' as never,
      id: args.shipmentId,
    })) as { auditTrail?: unknown[] }
    const auditTrail = Array.isArray(existing.auditTrail) ? existing.auditTrail : []

    await payload.update({
      collection: 'hazmat-shipments' as never,
      id: args.shipmentId,
      data: {
        generatedPdf: media.id,
        auditTrail: [
          ...auditTrail,
          {
            event: 'generated_pdf',
            timestamp: new Date().toISOString(),
            changes: { actor: args.session.email, mediaId: media.id, filename: args.filename },
          },
        ],
      } as never,
    })
    return { mediaId: media.id }
  } catch {
    // Don't fail the whole request — the user still gets the PDF
    // downloaded. Persistence is a best-effort side-effect.
    return null
  }
}

async function loadAssetBase64(relativeName: string): Promise<string | null> {
  try {
    const p = path.join(process.cwd(), 'public', 'hazmat', relativeName)
    const buf = await readFile(p)
    return buf.toString('base64')
  } catch {
    // Not fatal — template falls back to text rendering.
    return null
  }
}

export async function POST(request: Request): Promise<Response> {
  const sessionCookie = (await cookies()).get(SESSION_COOKIE)?.value
  const session = sessionCookie ? verifySession(sessionCookie) : null
  if (!session) return unauthorized()

  let body: { draft?: ShipmentDraft; shipmentId?: string | number }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'expected JSON body' }, { status: 400 })
  }
  const draft = body.draft
  if (!draft) {
    return NextResponse.json({ error: 'missing `draft` field' }, { status: 400 })
  }

  const [signaturePngBase64, logoPngBase64] = await Promise.all([
    loadAssetBase64('signer-chris-nolte.png'),
    loadAssetBase64('bloom-logo.png'),
  ])
  const html = renderHazmatPdfHtml(draft, { signaturePngBase64, logoPngBase64 })

  // Lazy-import chromium + puppeteer-core only when actually generating —
  // keeps the route's import graph small for other endpoints and lets
  // bundlers tree-shake when this route isn't loaded.
  const chromium = (await import('@sparticuz/chromium')).default
  const puppeteer = await import('puppeteer-core')

  const isLocal = !process.env.AWS_REGION && !process.env.VERCEL
  const browser = await puppeteer.launch(
    isLocal
      ? { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }
      : {
          args: chromium.args,
          executablePath: await chromium.executablePath(),
          headless: true,
        },
  )

  try {
    const page = await browser.newPage()
    // HTML is fully self-contained (inline CSS, base64 signature) so
    // 'load' is sufficient — no network-idle wait needed.
    await page.setContent(html, { waitUntil: 'load' })
    const pdf = await page.pdf({
      format: 'letter',
      printBackground: true,
      margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
    })

    const filename = `shipper-declaration-${draft.bolRef || 'draft'}.pdf`

    // If the client is editing a saved shipment, persist this PDF to
    // Payload media and link it back. Best-effort — failure here does
    // not block the response, since the user still gets the download.
    let persisted: { mediaId: number | string } | null = null
    if (body.shipmentId) {
      persisted = await persistPdfToShipment({
        shipmentId: String(body.shipmentId),
        pdf,
        filename,
        session,
      })
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${filename}"`,
      'Content-Length': String(pdf.length),
    }
    if (persisted?.mediaId !== undefined) {
      headers['X-Hazmat-Media-Id'] = String(persisted.mediaId)
    }

    return new Response(new Uint8Array(pdf), { status: 200, headers })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  } finally {
    await browser.close()
  }
}
