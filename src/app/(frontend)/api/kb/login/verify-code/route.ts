import { NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'

import { isTeamEmail } from '@/lib/kb-auth/domain'
import {
  SESSION_COOKIE,
  SESSION_COOKIE_MAX_AGE,
  hashCode,
  signSession,
  verifyChallenge,
} from '@/lib/kb-auth/session'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function constantTimeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

export async function POST(request: Request) {
  let body: { challenge?: unknown; code?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  if (typeof body.challenge !== 'string' || typeof body.code !== 'string') {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  const claims = verifyChallenge(body.challenge)
  if (!claims) {
    return NextResponse.json({ error: 'expired_or_invalid' }, { status: 401 })
  }

  if (!isTeamEmail(claims.email)) {
    // The challenge was issued for a non-team email. We accept any code
    // input here to avoid revealing the allowlist via differential
    // response, but never issue a session.
    return NextResponse.json({ error: 'invalid_code' }, { status: 401 })
  }

  const submittedHash = hashCode(body.code.trim(), claims.salt)
  if (!constantTimeEqual(submittedHash, claims.codeHash)) {
    return NextResponse.json({ error: 'invalid_code' }, { status: 401 })
  }

  const session = signSession({ email: claims.email })

  const response = NextResponse.json({ ok: true, email: claims.email })
  response.cookies.set(SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_COOKIE_MAX_AGE,
  })
  return response
}
