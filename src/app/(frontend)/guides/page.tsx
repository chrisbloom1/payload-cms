import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { GuidesPageClient } from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

async function fetchLoomThumbnail(loomEmbedId: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://www.loom.com/v1/oembed?url=https://www.loom.com/share/${loomEmbedId}`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return null
    const data = await res.json()
    return data.thumbnail_url || null
  } catch {
    return null
  }
}

export default async function GuidesPage() {
  let guides: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'guides',
      depth: 1,
      limit: 100,
      sort: 'sortOrder',
      where: { _status: { equals: 'published' } },
    })
    guides = result.docs || []
  } catch {
    // Table may not exist yet before migration runs
  }

  // Fetch thumbnails from Loom oembed API in parallel
  const thumbnails = await Promise.all(
    guides.map((g) => fetchLoomThumbnail(g.loomEmbedId)),
  )
  const thumbnailMap: Record<string, string> = {}
  guides.forEach((g, i) => {
    if (thumbnails[i]) thumbnailMap[g.loomEmbedId] = thumbnails[i]!
  })

  return <GuidesPageClient guides={guides} thumbnails={thumbnailMap} />
}

export function generateMetadata(): Metadata {
  return {
    title: 'Platform Guides',
    description: 'Short video walkthroughs of key Bloom workflows.',
  }
}
