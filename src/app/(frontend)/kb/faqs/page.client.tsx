'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, BookOpen, FileText, HelpCircle } from 'lucide-react'

import RichText from '@/components/RichText'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { cn } from '@/utilities/cn'

interface KBCategory {
  id: number
  name: string
  slug: string
}

interface FAQ {
  id: number
  question: string
  answer: any
  category?: KBCategory | number | null
  sortOrder?: number
}

const sidebarLinks = [
  { href: '/kb', label: 'Knowledge Base', icon: BookOpen },
  { href: '/kb/faqs', label: 'FAQs', icon: HelpCircle },
  { href: '/changelog', label: 'Changelog', icon: FileText },
]

export const FAQsPageClient: React.FC<{
  faqs: FAQ[]
  categories: KBCategory[]
}> = ({ faqs, categories }) => {
  const pathname = usePathname()
  const [search, setSearch] = React.useState('')

  // Group FAQs by category
  const grouped = React.useMemo(() => {
    const groups: { category: KBCategory; faqs: FAQ[] }[] = []
    const uncategorized: FAQ[] = []

    const catMap = new Map<number, { category: KBCategory; faqs: FAQ[] }>()
    for (const cat of categories) {
      catMap.set(cat.id, { category: cat, faqs: [] })
    }

    for (const faq of faqs) {
      if (search && !faq.question.toLowerCase().includes(search.toLowerCase())) continue

      const cat = typeof faq.category === 'object' && faq.category ? faq.category : null
      if (cat && catMap.has(cat.id)) {
        catMap.get(cat.id)!.faqs.push(faq)
      } else if (cat) {
        // Category from depth=1 but not in our categories list
        const existing = catMap.get(cat.id)
        if (existing) {
          existing.faqs.push(faq)
        } else {
          catMap.set(cat.id, { category: cat, faqs: [faq] })
        }
      } else {
        uncategorized.push(faq)
      }
    }

    for (const cat of categories) {
      const entry = catMap.get(cat.id)
      if (entry && entry.faqs.length > 0) {
        groups.push(entry)
      }
    }

    // Add any categories not in our main list
    for (const [id, entry] of catMap) {
      if (entry.faqs.length > 0 && !categories.find((c) => c.id === id)) {
        groups.push(entry)
      }
    }

    if (uncategorized.length > 0) {
      groups.push({
        category: { id: 0, name: 'General', slug: 'general' },
        faqs: uncategorized,
      })
    }

    return groups
  }, [faqs, categories, search])

  return (
    <div className="pt-8 pb-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Frequently Asked Questions</h1>
          <p className="text-sm text-muted-foreground">
            Find answers to common questions about Bloom.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-56 shrink-0">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
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

          {/* FAQ content */}
          <div className="flex-1 min-w-0 max-w-3xl">
            {grouped.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
                <HelpCircle className="h-10 w-10 opacity-40" />
                <p>{search ? 'No FAQs match your search.' : 'No FAQs published yet.'}</p>
              </div>
            ) : (
              <div className="space-y-10">
                {grouped.map((group) => (
                  <div key={group.category.id}>
                    <h2 className="text-lg font-semibold text-foreground mb-2">
                      {group.category.name}
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {group.faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={String(faq.id)}>
                          <AccordionTrigger className="font-medium text-foreground">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <RichText
                              content={faq.answer}
                              enableGutter={false}
                              enableProse={true}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
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
