'use client'

import React, { useMemo } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/utilities/cn'

interface TocItem {
  id: string
  text: string
  level: number
}

function extractHeadings(body: Record<string, unknown> | null | undefined): TocItem[] {
  if (!body || typeof body !== 'object') return []

  const root = body.root as { children?: Record<string, unknown>[] } | undefined
  if (!root?.children) return []

  const headings: TocItem[] = []

  for (const node of root.children) {
    if (
      node.type === 'heading' &&
      typeof node.tag === 'string' &&
      Array.isArray(node.children)
    ) {
      const level = parseInt(node.tag.replace('h', ''), 10)
      const text = (node.children as { text?: string }[])
        .map((child) => child.text || '')
        .join('')

      if (text) {
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')

        headings.push({ id, text, level })
      }
    }
  }

  return headings
}

export const ArticleSidebar: React.FC<{ body: Record<string, unknown> }> = ({ body }) => {
  const headings = useMemo(() => extractHeadings(body), [body])

  if (headings.length === 0) return null

  return (
    <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="sticky top-8">
        <h4 className="text-sm font-semibold mb-3 text-muted-foreground">On this page</h4>
        <ScrollArea className="max-h-[calc(100vh-8rem)]">
          <nav className="flex flex-col gap-1">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={cn(
                  'text-sm text-muted-foreground hover:text-foreground transition-colors py-1',
                  heading.level === 1 && 'pl-0 font-medium',
                  heading.level === 2 && 'pl-0',
                  heading.level === 3 && 'pl-4',
                  heading.level === 4 && 'pl-8',
                )}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  )
}
