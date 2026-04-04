import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { GuidesPageClient } from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function GuidesPage() {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'guides',
    depth: 1,
    limit: 100,
    sort: 'sortOrder',
    where: { _status: { equals: 'published' } },
  })

  return <GuidesPageClient guides={result.docs || []} />
}

export function generateMetadata(): Metadata {
  return {
    title: 'Platform Guides',
    description: 'Short video walkthroughs of key Bloom workflows.',
  }
}
