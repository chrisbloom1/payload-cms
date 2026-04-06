import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'

import RichText from '@/components/RichText'
import { SearchInput } from '@/components/SearchInput'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const dynamic = 'force-static'
export const revalidate = 600

export function generateMetadata(): Metadata {
  return {
    title: 'Bloom Knowledge Base',
    description: 'Guides, articles, and answers for hardware brands and providers on the Bloom platform.',
  }
}

const PILLARS = [
  {
    name: 'Build',
    description: 'Account setup, profiles, and workspace config.',
    color: '#FF9800',
    slug: 'build',
  },
  {
    name: 'Deliver',
    description: 'Deliverables, campaign tracking, and active orders.',
    color: '#F94D00',
    slug: 'deliver',
  },
  {
    name: 'Service',
    description: 'Service requests, repairs, and support workflows.',
    color: '#F4364C',
    slug: 'service',
  },
]

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const [articlesResult, faqsResult] = await Promise.all([
    payload.find({
      collection: 'articles',
      limit: 6,
      sort: '-createdAt',
      depth: 0,
      where: { _status: { equals: 'published' } },
    }),
    payload.find({
      collection: 'faqs',
      limit: 5,
      sort: 'sortOrder',
      depth: 0,
    }),
  ])

  const articles = articlesResult.docs
  const faqs = faqsResult.docs

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 px-4 pb-16 pt-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Bloom Knowledge Base</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Guides, articles, and answers for hardware brands and providers on the Bloom platform.
        </p>
        <SearchInput className="w-full max-w-md" placeholder="Search articles..." />
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/kb">Browse Articles</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/changelog">View Changelog</Link>
          </Button>
        </div>
      </section>

      {/* Pillar Cards */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">Explore by Category</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link key={pillar.slug} href={`/kb?category=${pillar.slug}`}>
              <Card className="h-full border-t-4" style={{ borderTopColor: pillar.color }}>
                <CardHeader>
                  <CardTitle className="text-xl">{pillar.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      {articles.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="mb-8 text-center text-2xl font-semibold">Recent Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.id} href={`/kb/${article.slug}`}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base">{article.title}</CardTitle>
                  </CardHeader>
                  {article.summary && (
                    <CardContent>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {article.summary}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Preview */}
      {faqs.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 pb-16">
          <h2 className="mb-8 text-center text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={String(faq.id)}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <RichText content={faq.answer} enableGutter={false} enableProse={true} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <Link href="/kb/faqs">View all FAQs</Link>
            </Button>
          </div>
        </section>
      )}
    </main>
  )
}
