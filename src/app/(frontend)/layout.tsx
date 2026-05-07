import type { Metadata } from 'next'

import React from 'react'

import dynamic from 'next/dynamic'

// AdminBar and LivePreviewListener pull in payload-admin-bar and
// @payloadcms/live-preview-react — both heavy and only useful when
// draft mode is on. We skip rendering them entirely (and therefore
// skip downloading their chunks) for the public, non-preview path,
// which is the lighthouse/PSI scoring scenario.
const AdminBar = dynamic(
  () => import('@/components/AdminBar').then((m) => ({ default: m.AdminBar })),
  { ssr: false, loading: () => null },
)
const LivePreviewListener = dynamic(
  () =>
    import('@/components/LivePreviewListener').then((m) => ({
      default: m.LivePreviewListener,
    })),
  { ssr: false, loading: () => null },
)
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import '@proofly-framer/runtime/styles.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/logos/bloom-symbol.svg" rel="icon" type="image/svg+xml" />
        {/* Open the TCP+TLS connection to Framer's CDN before the 20+
            hero image preloads fire so they don't all eat the
            handshake on slow networks. */}
        <link
          rel="preconnect"
          href="https://framerusercontent.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://framerusercontent.com"
        />
        <link
          rel="preload"
          href="/fonts/HafferRegular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HafferBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      {/* Note: per-page LCP image preloads live in the page itself
          (e.g. `(frontend)/page.tsx`) so they only run for the route
          that actually shows that image. */}
      <body>
        <Providers>
          {isEnabled ? (
            <>
              <AdminBar adminBarProps={{ preview: isEnabled }} />
              <LivePreviewListener />
            </>
          ) : null}

          {/* Each section provides its own chrome via its per-section
              layout: marketing pages render `FloatingNav` + `UnifiedFooter`
              inline, help-center sections (kb/guides/changelog/roadmap)
              wrap with `HelpHeader` + `UnifiedFooter`. The root just
              passes children through. */}
          {children}
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Bloom',
    template: '%s | Bloom',
  },
  description:
    'Bloom is an intelligent supply chain and operations platform designed for hardware companies of all sizes to build, deliver and service more efficiently.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
  },
}
