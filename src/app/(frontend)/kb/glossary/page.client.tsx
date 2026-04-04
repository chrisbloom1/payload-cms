'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, BookOpen, FileText, HelpCircle, BookA, Video } from 'lucide-react'

import RichText from '@/components/RichText'
import { Input } from '@/components/ui/input'
import { cn } from '@/utilities/cn'

interface GlossaryTerm {
  id: number
  term: string
  slug?: string | null
  definition: any
  relatedTerms?: GlossaryTerm[] | number[] | null
}

const sidebarLinks = [
  { href: '/kb', label: 'Knowledge Base', icon: BookOpen },
  { href: '/kb/faqs', label: 'FAQs', icon: HelpCircle },
  { href: '/guides', label: 'Guides', icon: Video },
  { href: '/kb/glossary', label: 'Glossary', icon: BookA },
  { href: '/changelog', label: 'Changelog', icon: FileText },
]

export const GlossaryPageClient: React.FC<{ terms: GlossaryTerm[] }> = ({ terms }) => {
  const pathname = usePathname()
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search) return terms
    const q = search.toLowerCase()
    return terms.filter((t) => t.term.toLowerCase().includes(q))
  }, [terms, search])

  // Group by first letter
  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryTerm[]>()
    for (const term of filtered) {
      const letter = term.term[0]?.toUpperCase() || '#'
      const list = map.get(letter) || []
      list.push(term)
      map.set(letter, list)
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b))
  }, [filtered])

  return (
    <div className="pt-8 pb-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Glossary</h1>
          <p className="text-sm text-muted-foreground">
            Key terms used across the Bloom platform.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-56 shrink-0">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Filter terms..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 text-sm"
              />
            </div>

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

          {/* Terms */}
          <div className="flex-1 min-w-0 max-w-3xl">
            {grouped.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
                <BookA className="h-10 w-10 opacity-40" />
                <p>{search ? 'No terms match your search.' : 'No glossary terms yet.'}</p>
              </div>
            ) : (
              <div className="space-y-10">
                {grouped.map(([letter, letterTerms]) => (
                  <div key={letter}>
                    <h2 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">
                      {letter}
                    </h2>
                    <dl className="space-y-6">
                      {letterTerms.map((term) => {
                        const related =
                          term.relatedTerms?.filter(
                            (r): r is GlossaryTerm => typeof r === 'object' && r !== null,
                          ) || []

                        return (
                          <div key={term.id}>
                            <dt className="font-semibold text-foreground">{term.term}</dt>
                            <dd className="mt-1 text-sm text-muted-foreground">
                              <RichText
                                content={term.definition}
                                enableGutter={false}
                                enableProse={false}
                              />
                              {related.length > 0 && (
                                <p className="mt-2 text-xs">
                                  <span className="text-muted-foreground">See also: </span>
                                  {related.map((r, i) => (
                                    <span key={r.id}>
                                      {i > 0 && ', '}
                                      <span className="text-foreground">{r.term}</span>
                                    </span>
                                  ))}
                                </p>
                              )}
                            </dd>
                          </div>
                        )
                      })}
                    </dl>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
