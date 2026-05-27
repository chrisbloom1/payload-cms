import { createHmac, randomInt } from 'crypto'
import jwt from 'jsonwebtoken'

const ISSUER = 'bloom-kb'
const SESSION_AUD = 'kb:session'
const CHALLENGE_AUD = 'kb:challenge'

const SESSION_TTL_SECONDS = 30 * 24 * 3600 // 30 days
const CHALLENGE_TTL_SECONDS = 10 * 60 // 10 minutes

function signingKey(): string {
  const secret = process.env.PAYLOAD_SECRET
  if (!secret) throw new Error('PAYLOAD_SECRET is not set')
  return createHmac('sha256', secret).update('bloom-kb-auth-v1').digest('hex')
}

export function hashCode(code: string, salt: string): string {
  return createHmac('sha256', signingKey()).update(`${salt}:${code}`).digest('hex')
}

export function generateCode(): string {
  // 6-digit numeric code, zero-padded
  return String(randomInt(0, 1_000_000)).padStart(6, '0')
}

export type ChallengeClaims = {
  email: string
  codeHash: string
  salt: string
}

export function signChallenge(claims: ChallengeClaims): string {
  return jwt.sign(claims, signingKey(), {
    issuer: ISSUER,
    audience: CHALLENGE_AUD,
    expiresIn: CHALLENGE_TTL_SECONDS,
  })
}

export function verifyChallenge(token: string): ChallengeClaims | null {
  try {
    const decoded = jwt.verify(token, signingKey(), {
      issuer: ISSUER,
      audience: CHALLENGE_AUD,
    })
    if (typeof decoded === 'string') return null
    return decoded as ChallengeClaims & jwt.JwtPayload
  } catch {
    return null
  }
}

export type SessionClaims = {
  email: string
}

export function signSession(claims: SessionClaims): string {
  return jwt.sign(claims, signingKey(), {
    issuer: ISSUER,
    audience: SESSION_AUD,
    expiresIn: SESSION_TTL_SECONDS,
  })
}

export function verifySession(token: string): SessionClaims | null {
  try {
    const decoded = jwt.verify(token, signingKey(), {
      issuer: ISSUER,
      audience: SESSION_AUD,
    })
    if (typeof decoded === 'string') return null
    return decoded as SessionClaims & jwt.JwtPayload
  } catch {
    return null
  }
}

export const SESSION_COOKIE = 'bloom_kb_session'
export const SESSION_COOKIE_MAX_AGE = SESSION_TTL_SECONDS
