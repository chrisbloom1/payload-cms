import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Guides, articles, and answers for hardware brands and providers on the Bloom platform.',
  images: [
    {
      url: `${getServerSideURL()}/og`,
      width: 1200,
      height: 630,
      alt: 'Bloom Knowledge Base',
    },
  ],
  siteName: 'Bloom Knowledge Base',
  title: 'Bloom Knowledge Base',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
