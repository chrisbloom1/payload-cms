import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { KBSidebar } from '@/components/KBSidebar'
import { Badge } from '@/components/ui/badge'

const audienceLabel: Record<string, string> = {
  brand: 'For Brands',
  provider: 'For Providers',
  ops: 'For Ops',
  both: 'Everyone',
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const guides = await payload.find({
    collection: 'guides',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: { slug: true },
    where: { _status: { equals: 'published' } },
  })

  return guides.docs.map(({ slug }) => ({ slug }))
}

export default async function GuidePage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const guide = await queryGuideBySlug({ slug })

  if (!guide) return notFound()

  const label = guide.audience ? audienceLabel[guide.audience] : null

  return (
    <article className="pt-8 pb-24">
      <div className="container">
        <Link
          href="/guides"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Guides
        </Link>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 max-w-3xl">
            <div className="mb-6">
              {label && (
                <Badge variant="secondary" className="mb-3">
                  {label}
                </Badge>
              )}
              <h1 className="text-3xl font-bold mb-2">{guide.title}</h1>
              {guide.description && (
                <p className="text-muted-foreground">{guide.description}</p>
              )}
            </div>

            <div className="aspect-video rounded-xl overflow-hidden bg-muted">
              <iframe
                src={`https://www.loom.com/embed/${guide.loomEmbedId}`}
                allowFullScreen
                className="w-full h-full border-0"
                title={guide.title}
              />
            </div>
          </div>

          <KBSidebar />
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const guide = await queryGuideBySlug({ slug })

  return {
    title: guide?.title || 'Guide Not Found',
    description: guide?.description || undefined,
  }
}

const queryGuideBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'guides',
    draft,
    limit: 1,
    overrideAccess: draft,
    depth: 1,
    pagination: false,
    where: {
      slug: { equals: slug },
    },
  })

  return result.docs?.[0] || null
})
