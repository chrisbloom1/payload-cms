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
  brand: { label: 'For Brands', className: 'bg-emerald-50 text-emerald-700' },
  provider: { label: 'For Providers', className: 'bg-orange-50 text-orange-700' },
  ops: { label: 'For Ops', className: 'bg-violet-50 text-violet-700' },
  both: { label: 'Everyone', className: 'bg-gray-100 text-gray-600' },
}

export const GuidesPageClient: React.FC<{
  guides: Guide[]
  thumbnails?: Record<string, string>
}> = ({ guides, thumbnails = {} }) => {
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
                      className="rounded-xl bg-white shadow-sm overflow-hidden"
                    >
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="block aspect-video relative bg-muted overflow-hidden group"
                      >
                        {thumbnails[guide.loomEmbedId] ? (
                          <Image
                            src={thumbnails[guide.loomEmbedId]}
                            alt={guide.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="absolute inset-0 bg-muted" />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 shadow-lg">
                            <Play className="h-6 w-6 text-foreground ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                      </Link>

                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Link href={`/guides/${guide.slug}`} className="min-w-0">
                            <h3 className="font-medium text-foreground hover:underline truncate">{guide.title}</h3>
                          </Link>
                          {badge && (
                            <span
                              className={cn(
                                'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium shrink-0',
                                badge.className,
                              )}
                            >
                              {badge.label}
                            </span>
                          )}
                        </div>
                        {guide.description && (
                          <p className="text-sm text-muted-foreground">
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
