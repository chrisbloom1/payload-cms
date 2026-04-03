'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/utilities/cn'

interface KBCategory {
  id: number
  name: string
  slug: string
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
  const [articles, setArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<KBCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')

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

  return (
    <div className="pt-12 pb-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Knowledge Base</h1>
          <p className="text-muted-foreground">Browse articles, guides, and documentation.</p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs className="mb-8">
          <TabsList className="flex-wrap h-auto gap-1">
            <TabsTrigger
              active={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            >
              All
            </TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                active={activeCategory === cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {loading ? (
          <div className="text-muted-foreground py-12 text-center">Loading articles...</div>
        ) : filtered.length === 0 ? (
          <div className="text-muted-foreground py-12 text-center">
            {search || activeCategory !== 'all'
              ? 'No articles match your filters.'
              : 'No published articles yet.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((article) => {
              const category =
                typeof article.category === 'object' ? article.category : null

              return (
                <Link key={article.id} href={`/kb/${article.slug}`}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {category && (
                          <Badge className="bg-secondary text-secondary-foreground">
                            {category.name}
                          </Badge>
                        )}
                        <Badge className={audienceColor[article.audience] || ''}>
                          {audienceLabel[article.audience] || article.audience}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    {article.summary && (
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {article.summary.length > 150
                            ? article.summary.slice(0, 150) + '...'
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
  )
}
