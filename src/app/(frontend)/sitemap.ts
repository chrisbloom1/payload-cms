import type { MetadataRoute } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { getServerSideURL } from '@/utilities/getURL'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CUSTOMER_STORIES } from '@/lib/customer-stories'

/**
 * Comprehensive sitemap covering every public route on the site.
 *
 * Three categories:
 *   1. Static marketing pages (home, /brands, /providers, /company,
 *      etc.) — hard-coded.
 *   2. Static-data routes (/blog, /stories, /customer-stories) —
 *      derived from the in-repo data files at build time.
 *   3. CMS-backed dynamic routes (/kb/[slug], /guides/[slug]) —
 *      pulled from Payload at request time, wrapped in try/catch
 *      so a transient DB outage degrades to "static-only" rather
 *      than failing the entire response.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getServerSideURL()
  const now = new Date()

  // 1) Static marketing routes — hand-maintained.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1, lastModified: now },
    { url: `${baseUrl}/brands`, changeFrequency: 'monthly', priority: 0.9, lastModified: now },
    { url: `${baseUrl}/providers`, changeFrequency: 'monthly', priority: 0.9, lastModified: now },
    { url: `${baseUrl}/customer-stories`, changeFrequency: 'weekly', priority: 0.85, lastModified: now },
    { url: `${baseUrl}/company`, changeFrequency: 'monthly', priority: 0.7, lastModified: now },
    { url: `${baseUrl}/contact-us`, changeFrequency: 'yearly', priority: 0.5, lastModified: now },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8, lastModified: now },
    { url: `${baseUrl}/kb`, changeFrequency: 'weekly', priority: 0.85, lastModified: now },
    { url: `${baseUrl}/kb/faqs`, changeFrequency: 'weekly', priority: 0.7, lastModified: now },
    { url: `${baseUrl}/kb/glossary`, changeFrequency: 'monthly', priority: 0.6, lastModified: now },
    { url: `${baseUrl}/guides`, changeFrequency: 'weekly', priority: 0.75, lastModified: now },
    { url: `${baseUrl}/roadmap`, changeFrequency: 'weekly', priority: 0.6, lastModified: now },
    { url: `${baseUrl}/changelog`, changeFrequency: 'weekly', priority: 0.6, lastModified: now },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3, lastModified: now },
  ]

  // 2) Static-data routes — blog posts + customer stories live in
  //    src/lib/*. Iterate them so the sitemap stays in sync with code.
  for (const post of BLOG_POSTS) {
    staticRoutes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: post.date ? new Date(post.date) : now,
    })
  }
  // Customer story slugs: prefer Payload (the new source of truth);
  // fall back to the in-repo CUSTOMER_STORIES list if the DB query
  // fails so we never drop URLs from the sitemap.
  let storySlugs: string[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const stories = await payload.find({
      // See customer-story-resolver.ts re: this cast — types are
      // regenerated post-migration.
      collection: 'customer-stories' as never,
      limit: 500,
      where: { _status: { equals: 'published' } },
    })
    storySlugs = stories.docs
      .map((d) => {
        const slug = (d as unknown as { slug?: unknown }).slug
        return typeof slug === 'string' ? slug : null
      })
      .filter((s): s is string => Boolean(s))
  } catch (err) {
    console.warn('[sitemap] customer-stories query failed:', err)
  }
  if (storySlugs.length === 0) {
    storySlugs = CUSTOMER_STORIES.map((s) => s.slug)
  }
  for (const slug of storySlugs) {
    staticRoutes.push({
      url: `${baseUrl}/customer-stories/${slug}`,
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: now,
    })
    // /stories/[slug] is now a 308 permanent redirect to
    // /customer-stories/[slug] — don't list it as its own URL.
  }

  // 3) CMS-backed routes (Payload). Wrapped so a DB blip doesn't
  //    crater the sitemap response.
  try {
    const payload = await getPayload({ config: configPromise })
    const articles = await payload.find({
      collection: 'articles',
      limit: 500,
      select: { slug: true, updatedAt: true },
      where: { _status: { equals: 'published' } },
    })
    for (const doc of articles.docs) {
      staticRoutes.push({
        url: `${baseUrl}/kb/${doc.slug}`,
        lastModified: doc.updatedAt ? new Date(doc.updatedAt) : now,
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  } catch (err) {
    console.warn('[sitemap] articles query failed:', err)
  }
  try {
    const payload = await getPayload({ config: configPromise })
    const guides = await payload.find({
      collection: 'guides',
      limit: 500,
      select: { slug: true, updatedAt: true },
      where: { _status: { equals: 'published' } },
    })
    for (const doc of guides.docs) {
      staticRoutes.push({
        url: `${baseUrl}/guides/${doc.slug}`,
        lastModified: doc.updatedAt ? new Date(doc.updatedAt) : now,
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }
  } catch (err) {
    console.warn('[sitemap] guides query failed:', err)
  }

  return staticRoutes
}
