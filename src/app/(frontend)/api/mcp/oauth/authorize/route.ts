import { NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'

import { signAuthCode } from '@/lib/payload-mcp/oauth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function constantTimeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

type AuthParams = {
  response_type: string | null
  client_id: string | null
  redirect_uri: string | null
  code_challenge: string | null
  code_challenge_method: string | null
  state: string | null
  scope: string | null
}

function readParams(searchParams: URLSearchParams): AuthParams {
  return {
    response_type: searchParams.get('response_type'),
    client_id: searchParams.get('client_id'),
    redirect_uri: searchParams.get('redirect_uri'),
    code_challenge: searchParams.get('code_challenge'),
    code_challenge_method: searchParams.get('code_challenge_method'),
    state: searchParams.get('state'),
    scope: searchParams.get('scope'),
  }
}

function validateParams(p: AuthParams): string | null {
  if (p.response_type !== 'code') return 'response_type must be "code"'
  if (!p.client_id) return 'client_id is required'
  if (!p.redirect_uri) return 'redirect_uri is required'
  if (!p.code_challenge) return 'code_challenge is required (PKCE)'
  if (p.code_challenge_method !== 'S256') return 'code_challenge_method must be S256'
  return null
}

function approvalPage(p: AuthParams): string {
  // Forward original params via hidden inputs so POST can rebuild the auth code.
  const fields = Object.entries(p)
    .filter(([, v]) => v != null)
    .map(([k, v]) => `<input type="hidden" name="${k}" value="${escapeHtml(v!)}">`)
    .join('\n')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Authorize MCP access</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif; background: #faf7f2; color: #1a2238; margin: 0; padding: 2rem; display: grid; place-items: center; min-height: 100vh; }
  .card { background: white; border-radius: 12px; padding: 2rem; max-width: 460px; width: 100%; box-shadow: 0 2px 24px rgba(0,0,0,0.06); }
  h1 { margin: 0 0 0.5rem; font-size: 1.5rem; }
  p { color: #4a5568; line-height: 1.5; }
  input[type=password] { width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 1rem; box-sizing: border-box; }
  button { width: 100%; padding: 0.85rem; background: #ff6b35; color: white; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-top: 1rem; }
  button:hover { background: #e85a25; }
  .meta { font-size: 0.85rem; color: #718096; margin-top: 1rem; }
  .err { color: #c53030; font-size: 0.9rem; margin-top: 0.5rem; }
</style>
</head>
<body>
<form class="card" method="POST" autocomplete="off">
  <h1>Authorize MCP access</h1>
  <p>An MCP client wants to connect to your Payload instance. Paste your <code>PAYLOAD_MCP_TOKEN</code> to authorize this client.</p>
  <input type="password" name="token" placeholder="PAYLOAD_MCP_TOKEN" required autofocus>
  ${fields}
  <button type="submit">Authorize</button>
  <div class="meta">Client: <code>${escapeHtml(p.client_id ?? '')}</code><br>Redirect: <code>${escapeHtml(p.redirect_uri ?? '')}</code></div>
</form>
</body>
</html>`
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (ch) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!,
  )
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const params = readParams(url.searchParams)
  const err = validateParams(params)
  if (err) {
    return new NextResponse(`Invalid request: ${err}`, { status: 400 })
  }
  return new NextResponse(approvalPage(params), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const params: AuthParams = {
    response_type: (formData.get('response_type') as string) ?? null,
    client_id: (formData.get('client_id') as string) ?? null,
    redirect_uri: (formData.get('redirect_uri') as string) ?? null,
    code_challenge: (formData.get('code_challenge') as string) ?? null,
    code_challenge_method: (formData.get('code_challenge_method') as string) ?? null,
    state: (formData.get('state') as string) ?? null,
    scope: (formData.get('scope') as string) ?? null,
  }
  const token = (formData.get('token') as string) ?? ''
  const validationErr = validateParams(params)
  if (validationErr) {
    return new NextResponse(`Invalid request: ${validationErr}`, { status: 400 })
  }

  const expected = process.env.PAYLOAD_MCP_TOKEN
  if (!expected || !constantTimeEqual(token, expected)) {
    return new NextResponse(approvalPage(params).replace(
      '<button',
      '<div class="err">Incorrect token.</div><button',
    ), {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  const code = signAuthCode({
    client_id: params.client_id!,
    redirect_uri: params.redirect_uri!,
    code_challenge: params.code_challenge!,
    code_challenge_method: 'S256',
    scope: params.scope ?? 'payload:read payload:write',
  })

  const redirect = new URL(params.redirect_uri!)
  redirect.searchParams.set('code', code)
  if (params.state) redirect.searchParams.set('state', params.state)

  return NextResponse.redirect(redirect, { status: 302 })
}
