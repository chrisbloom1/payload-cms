import type { MetadataRoute } from 'next'
import { getServerSideURL } from '@/utilities/getURL'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getServerSideURL()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Hidden pre-launch sections. Team accesses /kb directly via the
      // gated sign-in flow; nothing under these paths should be crawled
      // until they're ready for public discovery.
      disallow: ['/admin/', '/api/', '/next/', '/kb/', '/guides/', '/changelog', '/roadmap'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
