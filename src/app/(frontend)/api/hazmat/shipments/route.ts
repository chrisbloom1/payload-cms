import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SESSION_COOKIE, verifySession, type SessionClaims } from '@/lib/kb-auth/session'
import { coerceDraftToCollection } from '@/lib/hazmat/shipment-mapper'
import type { ShipmentDraft } from '@/components/hazmat/types'

// /api/hazmat/shipments
// GET  → list paginated shipments
// POST → create a new shipment from a draft + record audit event

export const runtime = 'nodejs'

async function requireSession(): Promise<SessionClaims | null> {
  const cookie = (await cookies()).get(SESSION_COOKIE)?.value
  if (!cookie) return null
  return verifySession(cookie)
}

export async function GET(request: Request): Promise<NextResponse> {
  const session = await requireSession()
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const url = new URL(request.url)
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '25', 10) || 25, 100)
  const page = parseInt(url.searchParams.get('page') || '1', 10) || 1
  const status = url.searchParams.get('status') || undefined

  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'hazmat-shipments' as never,
    limit,
    page,
    sort: '-updatedAt',
    where: status ? { status: { equals: status } } : undefined,
  })
  return NextResponse.json(result)
}

export async function POST(request: Request): Promise<NextResponse> {
  const session = await requireSession()
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  let body: { draft?: ShipmentDraft }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'expected JSON body' }, { status: 400 })
  }
  if (!body.draft) {
    return NextResponse.json({ error: 'missing draft' }, { status: 400 })
  }

  const payload = await getPayload({ config: configPromise })
  const data = coerceDraftToCollection(body.draft)

  const created = await payload.create({
    collection: 'hazmat-shipments' as never,
    data: {
      ...data,
      auditTrail: [
        {
          event: 'created',
          timestamp: new Date().toISOString(),
          changes: { actor: session.email, source: 'ops-hazmat-page' },
        },
      ],
    } as never,
  })
  return NextResponse.json(created, { status: 201 })
}
