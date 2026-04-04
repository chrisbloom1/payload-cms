import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import RichText from '@/components/RichText'
import { ArticleSidebar } from './ArticleSidebar'
import { Badge } from '@/components/ui/badge'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const articles = await payload.find({
    collection: 'articles',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: { slug: true },
  })

  return articles.docs.map(({ slug }) => ({ slug }))
}

export default async function ArticlePage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const article = await queryArticleBySlug({ slug })

  if (!article) return notFound()

  const category =
    typeof article.category === 'object' && article.category !== null
      ? article.category
      : null

  const categorySlug = category?.slug?.toLowerCase() ?? ''
  const tags = (article.tags || [])
    .map((t: { tag?: string }) => t.tag)
    .filter((tag): tag is string => Boolean(tag))
    .filter((tag) => tag.toLowerCase() !== categorySlug)

  const lastVerified = article.lastVerifiedDate
    ? new Date(article.lastVerifiedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article className="pt-8 pb-24">
      <div className="container">
        <Link
          href="/kb"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Knowledge Base
        </Link>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-3xl">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {category && (
                  <Badge variant="secondary">{category.name}</Badge>
                )}
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>

              <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

              {lastVerified && (
                <p className="text-sm text-muted-foreground">
                  Last verified: {lastVerified}
                </p>
              )}
            </div>

            <RichText
              className="max-w-3xl prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-a:text-primary prose-a:underline"
              content={article.body}
              enableGutter={false}
            />
          </div>

          {/* Table of contents sidebar */}
          <ArticleSidebar body={article.body} />
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const article = await queryArticleBySlug({ slug })

  return {
    title: article?.title || 'Article Not Found',
    description: article?.summary || undefined,
  }
}

const queryArticleBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'articles',
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
