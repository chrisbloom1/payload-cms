import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

/**
 * Marketing-grade defaults for OG / social previews. Per-page metadata
 * (blog posts, KB articles, customer stories) overrides these via
 * `mergeOpenGraph(...)` with their own title / description / image.
 */
const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  locale: 'en_US',
  siteName: 'Bloom',
  title: "Bloom — Hardware shouldn't be hard.",
  description:
    'Bloom connects hardware brands with a vetted network of manufacturing, warehousing, assembly, and logistics partners. Discover, bid, book, and pay supply chain operations from one platform.',
  images: [
    {
      url: `${getServerSideURL()}/og`,
      width: 1200,
      height: 630,
      alt: 'Bloom — Hardware shouldn’t be hard.',
      type: 'image/png',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
