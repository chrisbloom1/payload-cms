'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'

import { KBSidebar } from '@/components/KBSidebar'
import { cn } from '@/utilities/cn'

interface KBCategory {
  id: number
  name: string
  slug?: string | null
}

interface Guide {
  id: number
  title: string
  slug: string
  description?: string | null
  loomUrl: string
  loomEmbedId: string
  audience?: 'brand' | 'provider' | 'ops' | 'both' | null
  category?: KBCategory | number | null
  sortOrder?: number | null
}

const audienceBadge: Record<string, { label: string; className: string }> = {
  brand: { label: 'For Brands', className: 'bg-[#36ED85]/15 text-[#1a8a4a]' },
  provider: { label: 'For Providers', className: 'bg-[#FF9800]/15 text-[#b36b00]' },
  ops: { label: 'For Ops', className: 'bg-[#2E1A47] text-white' },
  both: { label: 'Everyone', className: 'bg-accent/10 text-accent' },
}

export const GuidesPageClient: React.FC<{ guides: Guide[] }> = ({ guides }) => {
  return (
    <div className="pt-8 pb-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Platform Guides</h1>
          <p className="text-sm text-muted-foreground">
            Short video walkthroughs of key Bloom workflows.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <KBSidebar />

          {/* Guides grid */}
          <div className="flex-1 min-w-0">
            {guides.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
                <Play className="h-10 w-10 opacity-40" />
                <p>Video guides coming soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide) => {
                  const badge = guide.audience ? audienceBadge[guide.audience] : null

                  return (
                    <div
                      key={guide.id}
                      className="relative rounded-xl bg-white shadow-sm overflow-hidden"
                    >
                      {badge && (
                        <span
                          className={cn(
                            'absolute top-3 right-3 z-10 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                            badge.className,
                          )}
                        >
                          {badge.label}
                        </span>
                      )}

                      <Link
                        href={`/guides/${guide.slug}`}
                        className="block aspect-video relative bg-muted overflow-hidden"
                      >
                        <Image
                          src={`https://cdn.loom.com/sessions/thumbnails/${guide.loomEmbedId}-with-play.gif`}
                          alt={guide.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </Link>

                      <div className="p-4">
                        <Link href={`/guides/${guide.slug}`}>
                          <h3 className="font-medium text-foreground hover:underline">{guide.title}</h3>
                        </Link>
                        {guide.description && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {guide.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
