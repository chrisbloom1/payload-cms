import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Video } from 'lucide-react'

import { KBSidebar } from '@/components/KBSidebar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/cn'

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
  const [guide, allGuides] = await Promise.all([
    queryGuideBySlug({ slug }),
    queryAllGuides(),
  ])

  if (!guide) return notFound()

  const label = guide.audience ? audienceLabel[guide.audience] : null
  const currentIndex = allGuides.findIndex((g: any) => g.slug === slug)
  const prevGuide = currentIndex > 0 ? allGuides[currentIndex - 1] : null
  const nextGuide = currentIndex < allGuides.length - 1 ? allGuides[currentIndex + 1] : null

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

            {/* Prev / Next navigation */}
            {(prevGuide || nextGuide) && (
              <div className="mt-8 flex items-stretch gap-4">
                {prevGuide ? (
                  <Link
                    href={`/guides/${prevGuide.slug}`}
                    className="flex-1 flex items-center gap-3 rounded-lg border p-4 text-sm hover:bg-muted/50 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">Previous</div>
                      <div className="font-medium truncate">{prevGuide.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {nextGuide ? (
                  <Link
                    href={`/guides/${nextGuide.slug}`}
                    className="flex-1 flex items-center justify-end gap-3 rounded-lg border p-4 text-sm text-right hover:bg-muted/50 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">Next</div>
                      <div className="font-medium truncate">{nextGuide.title}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            )}
          </div>

          {/* Sidebar: KB nav + guide list */}
          <KBSidebar>
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                All Guides
              </h3>
              <nav className="flex flex-col gap-0.5">
                {allGuides.map((g: any) => {
                  const isActive = g.slug === slug
                  return (
                    <Link
                      key={g.id}
                      href={`/guides/${g.slug}`}
                      className={cn(
                        'flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all',
                        isActive
                          ? 'bg-white font-medium text-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
                    >
                      <Video className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{g.title}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </KBSidebar>
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

const queryAllGuides = cache(async () => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'guides',
    draft: false,
    limit: 100,
    overrideAccess: false,
    sort: 'sortOrder',
    select: { slug: true, title: true },
    where: { _status: { equals: 'published' } },
  })

  return result.docs
})
