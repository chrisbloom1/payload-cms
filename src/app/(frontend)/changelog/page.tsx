import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { ChangelogPageClient } from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ChangelogPage() {
  let entries: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const releaseNotes = await payload.find({
      collection: 'release-notes',
      depth: 0,
      limit: 50,
      sort: '-releaseDate',
      overrideAccess: false,
    })
    entries = releaseNotes.docs || []
  } catch {
    // Table may not exist yet before migration runs
  }

  return <ChangelogPageClient entries={entries} />
}

export function generateMetadata(): Metadata {
  return {
    title: 'Changelog',
    description: 'Latest updates, fixes, and new features on the Bloom platform.',
  }
}
