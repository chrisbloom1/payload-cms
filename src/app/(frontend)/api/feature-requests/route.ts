import { NextRequest, NextResponse } from 'next/server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const errors: Record<string, string> = {}
    if (!body.title || body.title.length < 5) {
      errors.title = 'Title must be at least 5 characters'
    }
    if (!body.description || body.description.length < 10) {
      errors.description = 'Description must be at least 10 characters'
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 })
    }

    const slug = body.title
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      .toLowerCase()

    const payload = await getPayload({ config: configPromise })

    const doc = await payload.create({
      collection: 'feature-requests',
      data: {
        title: body.title,
        slug,
        description: body.description,
        submitterName: body.submitterName || '',
        submitterEmail: body.submitterEmail || '',
        audience: body.audience || 'both',
        status: 'new',
        votes: 0,
        _status: 'draft',
      },
    })

    return NextResponse.json({ id: doc.id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 })
  }
}
