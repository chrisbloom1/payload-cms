import { NextResponse } from 'next/server'

import { pkceVerify, signAccessToken, verifyAuthCode } from '@/lib/payload-mcp/oauth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ACCESS_TOKEN_TTL_SECONDS = 365 * 24 * 3600

function oauthError(error: string, description?: string, status = 400) {
  return NextResponse.json(
    { error, ...(description ? { error_description: description } : {}) },
    { status },
  )
}

export async function POST(request: Request) {
  let params: URLSearchParams
  const contentType = request.headers.get('content-type') ?? ''
  if (contentType.includes('application/x-www-form-urlencoded')) {
    params = new URLSearchParams(await request.text())
  } else if (contentType.includes('application/json')) {
    const body = (await request.json()) as Record<string, string>
    params = new URLSearchParams(body)
  } else {
    return oauthError('invalid_request', 'unsupported content-type')
  }

  const grantType = params.get('grant_type')
  if (grantType !== 'authorization_code') {
    return oauthError('unsupported_grant_type', `grant_type=${grantType ?? '(missing)'}`)
  }

  const code = params.get('code')
  const redirectUri = params.get('redirect_uri')
  const clientId = params.get('client_id')
  const codeVerifier = params.get('code_verifier')

  if (!code) return oauthError('invalid_request', 'code is required')
  if (!redirectUri) return oauthError('invalid_request', 'redirect_uri is required')
  if (!clientId) return oauthError('invalid_request', 'client_id is required')
  if (!codeVerifier) return oauthError('invalid_request', 'code_verifier is required (PKCE)')

  let claims
  try {
    claims = verifyAuthCode(code)
  } catch {
    return oauthError('invalid_grant', 'authorization code is invalid or expired')
  }

  if (claims.client_id !== clientId) {
    return oauthError('invalid_grant', 'client_id does not match authorization code')
  }
  if (claims.redirect_uri !== redirectUri) {
    return oauthError('invalid_grant', 'redirect_uri does not match authorization code')
  }
  if (!pkceVerify(claims.code_challenge, codeVerifier)) {
    return oauthError('invalid_grant', 'PKCE verifier does not match challenge')
  }

  const accessToken = signAccessToken(
    {
      client_id: claims.client_id,
      scope: claims.scope ?? 'payload:read payload:write',
    },
    ACCESS_TOKEN_TTL_SECONDS,
  )

  return NextResponse.json({
    access_token: accessToken,
    token_type: 'Bearer',
    expires_in: ACCESS_TOKEN_TTL_SECONDS,
    scope: claims.scope ?? 'payload:read payload:write',
  })
}
