import type { MetadataRoute } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { getServerSideURL } from '@/utilities/getURL'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getServerSideURL()
  const payload = await getPayload({ config: configPromise })

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/kb`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/kb/faqs`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/kb/glossary`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/guides`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/roadmap`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/changelog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 },
  ]

  // KB articles
  try {
    const articles = await payload.find({
      collection: 'articles',
      limit: 500,
      select: { slug: true, updatedAt: true },
      where: { _status: { equals: 'published' } },
    })

    for (const doc of articles.docs) {
      staticRoutes.push({
        url: `${baseUrl}/kb/${doc.slug}`,
        lastModified: doc.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  } catch {
    // Collection may not exist yet
  }

  return staticRoutes
}
