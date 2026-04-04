'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FileText } from 'lucide-react'

import { SearchInput } from '@/components/SearchInput'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/utilities/cn'

interface KBCategory {
  id: number
  name: string
  slug: string
  icon?: string | null
}

interface Article {
  id: number
  title: string
  slug: string
  summary?: string | null
  audience: 'brand' | 'provider' | 'both'
  category?: KBCategory | number | null
}

const audienceLabel: Record<string, string> = {
  brand: 'Brand',
  provider: 'Provider',
  both: 'All Users',
}

const audienceColor: Record<string, string> = {
  brand: 'bg-build/15 text-build',
  provider: 'bg-deliver/15 text-deliver',
  both: 'bg-accent/10 text-accent',
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', className)}>
      {children}
    </span>
  )
}

export const KBPageClient: React.FC = () => {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const initialCategory = searchParams.get('category') || 'all'

  const [articles, setArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<KBCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(initialQuery)
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory)

  useEffect(() => {
    async function fetchData() {
      try {
        const [articlesRes, categoriesRes] = await Promise.all([
          fetch('/api/articles?depth=1&limit=100&where[_status][equals]=published'),
          fetch('/api/kb-categories?limit=100&sort=sortOrder'),
        ])

        const articlesData = await articlesRes.json()
        const categoriesData = await categoriesRes.json()

        setArticles(articlesData.docs || [])
        setCategories(categoriesData.docs || [])
      } catch (err) {
        console.error('Failed to fetch KB data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'all' ||
        (typeof article.category === 'object' &&
          article.category?.slug === activeCategory)

      const matchesSearch =
        !search ||
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        (article.summary && article.summary.toLowerCase().includes(search.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [articles, activeCategory, search])

  const activeCategoryName = activeCategory === 'all'
    ? 'All Articles'
    : categories.find((c) => c.slug === activeCategory)?.name || 'Articles'

  return (
    <div className="pt-8 pb-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Knowledge Base</h1>
          <p className="text-sm text-muted-foreground">Articles and guides for Bloom brands and providers.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category sidebar */}
          <div className="lg:w-56 shrink-0">
            <div className="mb-4">
              <SearchInput
                defaultValue={search}
                placeholder="Search articles..."
                onSearch={(q) => setSearch(q)}
                onChange={(q) => setSearch(q)}
              />
            </div>

            <nav className="flex flex-col gap-0.5">
              <button
                onClick={() => setActiveCategory('all')}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-left transition-all',
                  activeCategory === 'all'
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-left transition-all',
                    activeCategory === cat.slug
                      ? 'bg-white text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </nav>

            <div className="mt-4 border-t border-border pt-4 flex flex-col gap-0.5">
              <Link
                href="/kb/faqs"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                FAQs
              </Link>
              <Link
                href="/guides"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Guides
              </Link>
              <Link
                href="/kb/glossary"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Glossary
              </Link>
              <Link
                href="/changelog"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Changelog
              </Link>
            </div>
          </div>

          {/* Article list */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold mb-4">{activeCategoryName}</h2>

            {loading ? (
              <div className="text-muted-foreground py-12 text-center">Loading articles...</div>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
                <FileText className="h-10 w-10 opacity-40" />
                <p>
                  {search || activeCategory !== 'all'
                    ? 'No articles match your filters.'
                    : 'No articles published yet.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map((article) => {
                  const category =
                    typeof article.category === 'object' ? article.category : null

                  return (
                    <Link key={article.id} href={`/kb/${article.slug}`}>
                      <Card className="h-full">
                        <CardHeader className="pb-3">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {category && (
                              <Badge className="bg-teal-light text-teal">
                                {category.name}
                              </Badge>
                            )}
                            <Badge className={audienceColor[article.audience] || ''}>
                              {audienceLabel[article.audience] || article.audience}
                            </Badge>
                          </div>
                          <CardTitle className="text-base font-bold">{article.title}</CardTitle>
                        </CardHeader>
                        {article.summary && (
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              {article.summary.length > 120
                                ? article.summary.slice(0, 120) + '...'
                                : article.summary}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    </Link>
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
