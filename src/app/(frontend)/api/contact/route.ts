import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type ContactPayload = {
  role?: string
  seeking?: string
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  message?: string
  website?: string // honeypot — should always be empty
}

const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL ?? 'hello@bloomnetwork.ai'

function escape(s: string): string {
  return s.replace(/[&<>"']/g, (ch) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!,
  )
}

function valid(p: ContactPayload): string | null {
  if (typeof p.firstName !== 'string' || !p.firstName.trim()) return 'firstName required'
  if (typeof p.lastName !== 'string' || !p.lastName.trim()) return 'lastName required'
  if (typeof p.email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(p.email)) return 'invalid email'
  if (typeof p.company !== 'string' || !p.company.trim()) return 'company required'
  if (typeof p.message !== 'string' || p.message.trim().length < 10) return 'message too short'
  return null
}

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  // Honeypot — bots fill the hidden `website` field. Silently return
  // success so they think the submission worked.
  if (body.website && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const validationError = valid(body)
  if (validationError) {
    return NextResponse.json({ error: 'validation_failed', detail: validationError }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'email_not_configured' }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const fromAddress = process.env.RESEND_FROM_EMAIL ?? 'noreply@bloomnetwork.ai'

  const subject = `Contact: ${body.firstName} ${body.lastName} (${body.company})`
  const text = [
    `From: ${body.firstName} ${body.lastName} <${body.email}>`,
    `Company: ${body.company}`,
    `Role: ${body.role ?? '(unspecified)'}`,
    `Seeking: ${body.seeking ?? '(unspecified)'}`,
    '',
    body.message,
  ].join('\n')

  const html = `
<!doctype html>
<html><body style="font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif; color: #1a2238; padding: 24px; max-width: 600px;">
  <h2 style="margin: 0 0 16px;">New contact form submission</h2>
  <table style="border-collapse: collapse; width: 100%;">
    <tr><td style="padding: 6px 0; color:#718096;">From</td><td style="padding: 6px 0;">${escape(body.firstName!)} ${escape(body.lastName!)} &lt;<a href="mailto:${escape(body.email!)}">${escape(body.email!)}</a>&gt;</td></tr>
    <tr><td style="padding: 6px 0; color:#718096;">Company</td><td style="padding: 6px 0;">${escape(body.company!)}</td></tr>
    <tr><td style="padding: 6px 0; color:#718096;">Role</td><td style="padding: 6px 0;">${escape(body.role ?? '(unspecified)')}</td></tr>
    <tr><td style="padding: 6px 0; color:#718096;">Seeking</td><td style="padding: 6px 0;">${escape(body.seeking ?? '(unspecified)')}</td></tr>
  </table>
  <h3 style="margin: 24px 0 8px;">Message</h3>
  <p style="white-space: pre-wrap; line-height: 1.5; background: #faf7f2; padding: 16px; border-radius: 8px;">${escape(body.message!)}</p>
</body></html>`

  try {
    await resend.emails.send({
      from: fromAddress,
      to: TO_EMAIL,
      replyTo: body.email,
      subject,
      text,
      html,
    })
  } catch (err) {
    console.error('[contact] resend.send failed', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
