import { NextResponse } from 'next/server'
import { randomBytes } from 'crypto'

import { isTeamEmail, normalizeEmail } from '@/lib/kb-auth/domain'
import { sendLoginCode } from '@/lib/kb-auth/resend'
import { generateCode, hashCode, signChallenge } from '@/lib/kb-auth/session'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { email?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  if (typeof body.email !== 'string' || !body.email.includes('@')) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
  }

  const email = normalizeEmail(body.email)

  // Don't leak whether the email is on the allowlist — always return the
  // same response shape with a challenge token. Only actually send the
  // code if the email is a team email.
  const code = generateCode()
  const salt = randomBytes(16).toString('hex')
  const challenge = signChallenge({
    email,
    codeHash: hashCode(code, salt),
    salt,
  })

  if (isTeamEmail(email)) {
    try {
      await sendLoginCode(email, code)
    } catch (err) {
      console.error('[kb-auth] failed to send code', err)
      return NextResponse.json({ error: 'send_failed' }, { status: 502 })
    }
  } else {
    // Pretend to send but don't. Burn a small amount of time so timing
    // doesn't reveal which emails are allowlisted.
    await new Promise((r) => setTimeout(r, 250))
  }

  return NextResponse.json({ challenge, expiresIn: 600 })
}
