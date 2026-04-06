'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { BookOpen, FileText, HelpCircle, BookA, Play, Video, Lightbulb } from 'lucide-react'

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

const sidebarLinks = [
  { href: '/kb', label: 'Knowledge Base', icon: BookOpen },
  { href: '/kb/faqs', label: 'FAQs', icon: HelpCircle },
  { href: '/guides', label: 'Guides', icon: Video },
  { href: '/kb/glossary', label: 'Glossary', icon: BookA },
  { href: '/roadmap', label: 'Roadmap', icon: Lightbulb },
  { href: '/changelog', label: 'Changelog', icon: FileText },
]

export const GuidesPageClient: React.FC<{ guides: Guide[] }> = ({ guides }) => {
  const pathname = usePathname()

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
          {/* Sidebar */}
          <div className="lg:w-56 shrink-0">
            <nav className="flex flex-col gap-0.5">
              {sidebarLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                      isActive
                        ? 'bg-white text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                )
              })}
            </nav>
          </div>

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
                      {/* Audience badge */}
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

                      {/* Thumbnail — clickable, opens Loom in new tab */}
                      <a
                        href={guide.loomUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-video relative bg-muted overflow-hidden"
                      >
                        <Image
                          src={`https://cdn.loom.com/sessions/thumbnails/${guide.loomEmbedId}-with-play.gif`}
                          alt={guide.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </a>

                      {/* Text content */}
                      <div className="p-4">
                        <h3 className="font-medium text-foreground">{guide.title}</h3>
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
