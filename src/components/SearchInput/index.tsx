'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, ArrowRight } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { cn } from '@/utilities/cn'

interface SearchResult {
  id: number
  title: string
  slug?: string | null
  summary?: string | null
}

interface SearchInputProps {
  defaultValue?: string
  placeholder?: string
  className?: string
  onSearch?: (query: string) => void
  onChange?: (query: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({
  defaultValue = '',
  placeholder = 'Search articles...',
  className,
  onSearch,
  onChange,
}) => {
  const [query, setQuery] = useState(defaultValue)
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<NodeJS.Timeout>(null)
  const router = useRouter()

  const fetchResults = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults([])
      setOpen(false)
      return
    }

    setLoading(true)
    try {
      const params = new URLSearchParams({
        limit: '6',
        depth: '0',
        'where[or][0][title][like]': q,
        'where[or][1][summary][like]': q,
        'where[_status][equals]': 'published',
      })
      const res = await fetch(`/api/articles?${params}`)
      const data = await res.json()
      setResults(data.docs || [])
      setOpen(true)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchResults(query), 250)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query, fetchResults])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOpen(false)
    if (onSearch) {
      onSearch(query)
    } else {
      router.push(`/kb?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              onChange?.(e.target.value)
            }}
            onFocus={() => results.length > 0 && setOpen(true)}
            placeholder={placeholder}
            className="pl-10 pr-4 text-sm"
          />
        </div>
      </form>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-lg border border-border bg-white shadow-lg">
          <ul className="py-1">
            {results.map((result) => (
              <li key={result.id}>
                <Link
                  href={`/kb/${result.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex flex-col gap-0.5 px-4 py-2.5 hover:bg-muted transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{result.title}</span>
                  {result.summary && (
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      {result.summary}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          {query.length >= 2 && (
            <div className="border-t border-border px-4 py-2">
              <Link
                href={`/kb?q=${encodeURIComponent(query)}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                All results for &ldquo;{query}&rdquo;
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          )}
        </div>
      )}

      {open && query.length >= 2 && results.length === 0 && !loading && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-lg border border-border bg-white shadow-lg">
          <p className="px-4 py-3 text-sm text-muted-foreground">No articles found.</p>
        </div>
      )}
    </div>
  )
}
