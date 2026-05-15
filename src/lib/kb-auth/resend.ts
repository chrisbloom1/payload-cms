import { Resend } from 'resend'

let cached: Resend | null = null

function client(): Resend {
  if (cached) return cached
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY is not set')
  cached = new Resend(apiKey)
  return cached
}

function fromAddress(): string {
  return process.env.RESEND_FROM_EMAIL ?? 'noreply@togetherwebloom.us'
}

export async function sendLoginCode(email: string, code: string): Promise<void> {
  const html = `
<!doctype html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif; background:#faf7f2; color:#1a2238; padding: 32px; max-width: 480px; margin: 0 auto;">
  <h2 style="margin: 0 0 16px;">Your Bloom KB access code</h2>
  <p style="line-height: 1.5;">Enter this code in the login page to access the Bloom knowledge base:</p>
  <div style="font-size: 36px; font-weight: 700; letter-spacing: 6px; background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding: 16px; text-align: center; margin: 16px 0;">${code}</div>
  <p style="color:#718096; font-size: 14px; line-height: 1.5;">This code expires in 10 minutes. If you didn't try to sign in, you can ignore this email.</p>
</body>
</html>`

  const plainText = `Your Bloom KB access code: ${code}\n\nThis code expires in 10 minutes.`

  await client().emails.send({
    from: fromAddress(),
    to: email,
    subject: `Bloom KB code: ${code}`,
    html,
    text: plainText,
  })
}
