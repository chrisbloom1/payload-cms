import { NextRequest, NextResponse } from 'next/server'

import { SESSION_COOKIE, verifySession } from '@/lib/kb-auth/session'

/**
 * Next.js 16 renamed middleware → proxy. Proxy always runs on the
 * Node.js runtime and no longer supports the `export const config`
 * matcher pattern from the middleware days — path matching has to
 * happen inline in the proxy function.
 *
 * Gates /kb/* and /guides/* behind a Bloom team session cookie.
 *
 * Excluded:
 * - /kb/login (the login page itself)
 * - everything else — short-circuits with NextResponse.next()
 */
const GATED_PREFIXES = ['/kb/', '/guides/']

function isGated(pathname: string): boolean {
  if (pathname.startsWith('/kb/login')) return false
  return GATED_PREFIXES.some((p) => pathname.startsWith(p)) || pathname === '/kb' || pathname === '/guides'
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl
  if (!isGated(url.pathname)) return NextResponse.next()

  const cookie = request.cookies.get(SESSION_COOKIE)?.value
  if (cookie && verifySession(cookie)) {
    return NextResponse.next()
  }

  const loginUrl = url.clone()
  loginUrl.pathname = '/kb/login'
  loginUrl.search = `?return=${encodeURIComponent(url.pathname + url.search)}`
  return NextResponse.redirect(loginUrl)
}
