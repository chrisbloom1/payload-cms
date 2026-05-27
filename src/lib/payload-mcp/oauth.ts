import { createHash, createHmac } from 'crypto'
import jwt from 'jsonwebtoken'

import { getServerSideURL } from '@/utilities/getURL'

const ISSUER = () => getServerSideURL()

/**
 * Derive a stable HMAC signing key from PAYLOAD_MCP_TOKEN so the OAuth
 * JWTs we issue are not signed with the user-facing token itself. If the
 * token rotates, all previously issued OAuth tokens stop validating —
 * intended behavior.
 */
function signingKey(): string {
  const secret = process.env.PAYLOAD_MCP_TOKEN
  if (!secret) throw new Error('PAYLOAD_MCP_TOKEN is not set')
  return createHmac('sha256', secret).update('mcp-oauth-key-v1').digest('hex')
}

export const AUTH_CODE_AUD = 'mcp:authcode'
export const ACCESS_TOKEN_AUD = 'mcp:access'

export type AuthCodeClaims = {
  client_id: string
  redirect_uri: string
  code_challenge: string
  code_challenge_method: 'S256'
  scope?: string
}

export type AccessTokenClaims = {
  client_id: string
  scope: string
}

export function signAuthCode(claims: AuthCodeClaims): string {
  return jwt.sign(claims, signingKey(), {
    issuer: ISSUER(),
    audience: AUTH_CODE_AUD,
    expiresIn: '5m',
  })
}

export function verifyAuthCode(token: string): AuthCodeClaims {
  const decoded = jwt.verify(token, signingKey(), {
    issuer: ISSUER(),
    audience: AUTH_CODE_AUD,
  })
  if (typeof decoded === 'string') throw new Error('invalid auth code payload')
  return decoded as AuthCodeClaims & jwt.JwtPayload
}

export function signAccessToken(claims: AccessTokenClaims, ttlSeconds = 365 * 24 * 3600): string {
  return jwt.sign(claims, signingKey(), {
    issuer: ISSUER(),
    audience: ACCESS_TOKEN_AUD,
    expiresIn: ttlSeconds,
  })
}

export function verifyAccessToken(token: string): AccessTokenClaims | null {
  try {
    const decoded = jwt.verify(token, signingKey(), {
      issuer: ISSUER(),
      audience: ACCESS_TOKEN_AUD,
    })
    if (typeof decoded === 'string') return null
    return decoded as AccessTokenClaims & jwt.JwtPayload
  } catch {
    return null
  }
}

/** PKCE: verifier matches challenge via S256? */
export function pkceVerify(challenge: string, verifier: string): boolean {
  const hash = createHash('sha256').update(verifier).digest('base64url')
  return hash === challenge
}

/**
 * Deterministic client_id from the registered redirect_uri so we don't
 * need persistent storage. claude.ai uses a stable redirect_uri per
 * workspace, so this acts like a stable client ID.
 */
export function deriveClientId(redirectUri: string): string {
  return createHash('sha256').update(redirectUri).digest('hex').slice(0, 32)
}
