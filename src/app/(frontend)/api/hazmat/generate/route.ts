import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { readFile } from 'fs/promises'
import path from 'path'
import { SESSION_COOKIE, verifySession } from '@/lib/kb-auth/session'
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

async function loadSignatureBase64(): Promise<string | null> {
  try {
    const p = path.join(process.cwd(), 'public', 'hazmat', 'signer-chris-nolte.png')
    const buf = await readFile(p)
    return buf.toString('base64')
  } catch {
    // Not fatal — template falls back to typed name in a script font.
    return null
  }
}

export async function POST(request: Request): Promise<Response> {
  const sessionCookie = (await cookies()).get(SESSION_COOKIE)?.value
  if (!sessionCookie || !verifySession(sessionCookie)) return unauthorized()

  let body: { draft?: ShipmentDraft }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'expected JSON body' }, { status: 400 })
  }
  const draft = body.draft
  if (!draft) {
    return NextResponse.json({ error: 'missing `draft` field' }, { status: 400 })
  }

  const signaturePngBase64 = await loadSignatureBase64()
  const html = renderHazmatPdfHtml(draft, { signaturePngBase64 })

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
    return new Response(new Uint8Array(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
        'Content-Length': String(pdf.length),
      },
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  } finally {
    await browser.close()
  }
}
