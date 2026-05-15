import { NextRequest, NextResponse } from 'next/server'

import { SESSION_COOKIE, verifySession } from '@/lib/kb-auth/session'

/**
 * Next.js 16 renamed middleware → proxy. Same shape, same behavior.
 *
 * Gates /kb/* and /guides/* behind a Bloom team session cookie.
 *
 * Excluded:
 * - /kb/login (the login page itself)
 * - /api/* — MCP route has bearer/OAuth, kb login routes need to work
 *   while logged-out, Payload's own /api/* has its own access control.
 */
export const config = {
  matcher: ['/kb/:path*', '/guides/:path*'],
  // jsonwebtoken pulls in node:crypto, which isn't available on the
  // edge runtime. Pin to nodejs explicitly.
  runtime: 'nodejs',
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl

  if (url.pathname.startsWith('/kb/login')) return NextResponse.next()

  const cookie = request.cookies.get(SESSION_COOKIE)?.value
  if (cookie && verifySession(cookie)) {
    return NextResponse.next()
  }

  const loginUrl = url.clone()
  loginUrl.pathname = '/kb/login'
  loginUrl.search = `?return=${encodeURIComponent(url.pathname + url.search)}`
  return NextResponse.redirect(loginUrl)
}
