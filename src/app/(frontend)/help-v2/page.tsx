import type { Metadata } from 'next/types'
import Link from 'next/link'
import { ArrowRight, BookOpen, Map, MessageCircle } from 'lucide-react'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { Suspense } from 'react'

import { KBPageClient } from '../kb/page.client'

export const dynamic = 'force-static'
export const revalidate = 600

const heroQuickLinks = [
  {
    href: '/kb',
    icon: BookOpen,
    label: 'Knowledge Base',
    description: 'Browse articles by category',
  },
  {
    href: '/guides',
    icon: Map,
    label: 'Guides',
    description: 'Step-by-step playbooks',
  },
  {
    href: '/contact-us',
    icon: MessageCircle,
    label: 'Contact',
    description: 'Talk to the Bloom team',
  },
]

export default async function HelpV2Page() {
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
    // Tables may not exist before migration runs
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-bloom-navy/5 bg-gradient-to-b from-white to-bloom-cream">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-bloom-muted">
              Help Center
            </p>
            <h1 className="mt-3 text-balance text-[40px] font-bold leading-[1.1] tracking-tight text-bloom-navy md:text-[56px]">
              How can we help?
            </h1>
            <p className="mt-5 text-balance text-[16px] leading-relaxed text-bloom-navy/70 md:text-[18px]">
              Articles, guides, and answers for hardware brands and the providers who build,
              deliver, and service their products.
            </p>
          </div>

          {/* Quick-link cards */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroQuickLinks.map(({ href, icon: Icon, label, description }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-3 rounded-md border border-bloom-navy/10 bg-white p-5 shadow-bloom-card transition-all hover:border-bloom-navy/20 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bloom-mint text-bloom-navy">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-1 text-[14px] font-semibold text-bloom-navy">
                    {label}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="text-[12px] leading-snug text-bloom-muted">
                    {description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KB content reused from /kb */}
      <section className="bg-bloom-cream">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 md:py-16">
          <Suspense>
            <KBPageClient articles={articles} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Help Center',
    description:
      'Articles, guides, and answers for hardware brands and providers using Bloom.',
  }
}
