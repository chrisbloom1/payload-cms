import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SESSION_COOKIE, verifySession, type SessionClaims } from '@/lib/kb-auth/session'
import { coerceDraftToCollection } from '@/lib/hazmat/shipment-mapper'
import type { ShipmentDraft } from '@/components/hazmat/types'

export const runtime = 'nodejs'

async function requireSession(): Promise<SessionClaims | null> {
  const cookie = (await cookies()).get(SESSION_COOKIE)?.value
  if (!cookie) return null
  return verifySession(cookie)
}

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function GET(
  _request: Request,
  { params }: RouteContext,
): Promise<NextResponse> {
  const session = await requireSession()
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const { id } = await params
  const payload = await getPayload({ config: configPromise })
  try {
    const doc = await payload.findByID({
      collection: 'hazmat-shipments' as never,
      id,
    })
    return NextResponse.json(doc)
  } catch {
    return NextResponse.json({ error: 'not found' }, { status: 404 })
  }
}

export async function PATCH(
  request: Request,
  { params }: RouteContext,
): Promise<NextResponse> {
  const session = await requireSession()
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const { id } = await params
  let body: { draft?: ShipmentDraft; event?: string; patch?: Record<string, unknown> }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'expected JSON body' }, { status: 400 })
  }

  const payload = await getPayload({ config: configPromise })

  // Two modes: full draft replace (form save), or targeted patch
  // (e.g. linking the freshly generated PDF or flipping status). Audit
  // trail entry is appended for either path.
  const existing = (await payload.findByID({
    collection: 'hazmat-shipments' as never,
    id,
  })) as { auditTrail?: unknown[] }
  const auditTrail = Array.isArray(existing.auditTrail) ? existing.auditTrail : []
  const updateData: Record<string, unknown> = body.draft
    ? coerceDraftToCollection(body.draft)
    : { ...(body.patch ?? {}) }

  const updated = await payload.update({
    collection: 'hazmat-shipments' as never,
    id,
    data: {
      ...updateData,
      auditTrail: [
        ...auditTrail,
        {
          event: body.event ?? (body.draft ? 'edited' : 'patched'),
          timestamp: new Date().toISOString(),
          changes: {
            actor: session.email,
            ...(body.patch ? { patch: Object.keys(body.patch) } : {}),
          },
        },
      ],
    } as never,
  })
  return NextResponse.json(updated)
}
