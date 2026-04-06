import { NextRequest, NextResponse } from 'next/server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

// Simple in-memory rate limiting: 10 requests per minute per IP
const rateMap = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60_000
  const maxRequests = 10

  const timestamps = (rateMap.get(ip) || []).filter((t) => now - t < windowMs)
  if (timestamps.length >= maxRequests) {
    rateMap.set(ip, timestamps)
    return true
  }

  timestamps.push(now)
  rateMap.set(ip, timestamps)
  return false
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const ip = request.headers.get('x-forwarded-for') || 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const payload = await getPayload({ config: configPromise })

    const doc = await payload.findByID({
      collection: 'feature-requests',
      id,
    })

    if (!doc) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const newVotes = (doc.votes || 0) + 1

    await payload.update({
      collection: 'feature-requests',
      id,
      data: { votes: newVotes },
    })

    return NextResponse.json({ votes: newVotes })
  } catch {
    return NextResponse.json({ error: 'Failed to vote' }, { status: 500 })
  }
}
