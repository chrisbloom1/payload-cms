import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { GlossaryPageClient } from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export function generateMetadata(): Metadata {
  return {
    title: 'Glossary',
    description: 'Key terms and definitions used across the Bloom platform.',
  }
}

export default async function GlossaryPage() {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'glossary',
    limit: 500,
    sort: 'term',
    depth: 1,
  })

  return <GlossaryPageClient terms={result.docs as any[]} />
}
