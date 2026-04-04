import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { FAQsPageClient } from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export function generateMetadata(): Metadata {
  return {
    title: 'FAQs',
    description: 'Common questions about accounts, deliverables, and the Bloom platform.',
  }
}

export default async function FAQsPage() {
  const payload = await getPayload({ config: configPromise })

  const [faqsResult, categoriesResult] = await Promise.all([
    payload.find({
      collection: 'faqs',
      limit: 200,
      sort: 'sortOrder',
      depth: 1,
    }),
    payload.find({
      collection: 'kb-categories',
      limit: 100,
      sort: 'sortOrder',
    }),
  ])

  return (
    <FAQsPageClient
      faqs={faqsResult.docs as any[]}
      categories={categoriesResult.docs as any[]}
    />
  )
}
