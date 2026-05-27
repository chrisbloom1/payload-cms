import { NextResponse } from 'next/server'

import { deriveClientId } from '@/lib/payload-mcp/oauth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type RegistrationRequest = {
  redirect_uris?: string[]
  client_name?: string
  token_endpoint_auth_method?: string
  grant_types?: string[]
  response_types?: string[]
}

/**
 * RFC 7591 dynamic client registration. We don't persist clients — the
 * client_id is derived deterministically from redirect_uri so the same
 * caller (e.g. claude.ai) gets the same id every time it registers.
 */
export async function POST(request: Request) {
  let body: RegistrationRequest
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid_client_metadata' }, { status: 400 })
  }

  const redirectUris = body.redirect_uris ?? []
  if (redirectUris.length === 0) {
    return NextResponse.json(
      { error: 'invalid_redirect_uri', error_description: 'redirect_uris is required' },
      { status: 400 },
    )
  }

  const clientId = deriveClientId(redirectUris[0])

  return NextResponse.json(
    {
      client_id: clientId,
      client_id_issued_at: Math.floor(Date.now() / 1000),
      redirect_uris: redirectUris,
      client_name: body.client_name ?? 'MCP Client',
      grant_types: ['authorization_code'],
      response_types: ['code'],
      token_endpoint_auth_method: 'none',
      scope: 'payload:read payload:write',
    },
    { status: 201 },
  )
}
