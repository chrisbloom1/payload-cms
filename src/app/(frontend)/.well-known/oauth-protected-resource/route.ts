import { NextResponse } from 'next/server'

import { getServerSideURL } from '@/utilities/getURL'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export function GET() {
  const base = getServerSideURL()
  return NextResponse.json(
    {
      resource: `${base}/api/mcp`,
      authorization_servers: [base],
      scopes_supported: ['payload:read', 'payload:write'],
      bearer_methods_supported: ['header'],
    },
    { headers: { 'Cache-Control': 'public, max-age=300' } },
  )
}
