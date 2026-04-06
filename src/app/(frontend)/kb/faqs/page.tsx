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

function richTextToPlain(content: any): string {
  if (!content?.root?.children) return ''
  function extract(nodes: any[]): string {
    return nodes
      .map((n: any) => {
        if (n.text) return n.text
        if (n.children) return extract(n.children)
        return ''
      })
      .join('')
  }
  return extract(content.root.children)
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

  const faqs = faqsResult.docs as any[]
  const categories = categoriesResult.docs as any[]

  // FAQPage JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: richTextToPlain(faq.answer),
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQsPageClient faqs={faqs} categories={categories} />
    </>
  )
}
