import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { Suspense } from 'react'

import { KBPageClient } from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function KBPage() {
  let articles: any[] = []
  let categories: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    const [articlesResult, categoriesResult] = await Promise.all([
      payload.find({
        collection: 'articles',
        depth: 1,
        limit: 100,
        where: { _status: { equals: 'published' } },
      }),
      payload.find({
        collection: 'kb-categories',
        limit: 100,
        sort: 'sortOrder',
      }),
    ])

    articles = articlesResult.docs || []
    categories = categoriesResult.docs || []
  } catch {
    // Table may not exist yet before migration runs
  }

  return (
    <Suspense>
      <KBPageClient articles={articles} categories={categories} />
    </Suspense>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Knowledge Base',
    description: 'Browse articles, guides, and documentation for Bloom hardware brands and providers.',
  }
}
