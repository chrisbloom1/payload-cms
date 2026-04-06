import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { RoadmapPageClient } from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function RoadmapPage() {
  let requests: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'feature-requests',
      depth: 1,
      limit: 200,
      sort: '-votes',
      where: { _status: { equals: 'published' } },
    })
    requests = result.docs || []
  } catch {
    // Table may not exist yet before migration runs
  }

  return <RoadmapPageClient requests={requests} />
}

export function generateMetadata(): Metadata {
  return {
    title: 'Roadmap',
    description: 'Submit feature ideas and vote on what gets built next.',
  }
}
