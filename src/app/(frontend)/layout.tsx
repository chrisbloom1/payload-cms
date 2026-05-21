import type { Metadata } from 'next'

import React from 'react'

// PreviewModeShell is a "use client" wrapper that dynamic-imports
// AdminBar + LivePreviewListener with ssr:false. Server Components
// can't use `dynamic({ ssr: false })`, so we route through a thin
// client component. When draft mode is off the shell renders null
// and the heavy chunks are never even fetched.
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { PostHogProvider } from '@/components/PostHogProvider'
import { MarketingTrackers } from '@/components/MarketingTrackers'
import { PreviewModeShell } from '@/components/PreviewModeShell'
import { TokenPreviewSwitcher } from '@/components/dev/TokenPreviewSwitcher'
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
        {/* dns-prefetch (no preconnect) for framerusercontent.com:
            the homepage marquee logos are now self-hosted in
            /public/images/marquee-logos/, but the Proofly Framer-
            exported widgets (Brandsintroanimation, Mockupterms, etc.)
            still load some internal assets from Framer's CDN. A DNS
            prefetch is enough — the connection itself isn't on the
            critical render path anymore. */}
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
        {/* Skip-to-content link — visually hidden until focused. Lets
            keyboard users jump past the sticky nav on every page. Pages
            should add id="main-content" to their primary <main>. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-bloom-navy focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Providers>
          <PostHogProvider />
          <Analytics />
          <SpeedInsights />
          {/* GA4 first-party tag. @next/third-parties/google handles
              lazy-loading via next/script under the hood. */}
          <GoogleAnalytics gaId="G-L403T3VDEL" />
          {/* Apollo.io + Instantly visitor tracking — both load with
              `lazyOnload` so they don't compete with hydration. */}
          <MarketingTrackers />
          <PreviewModeShell enabled={isEnabled} />
          <TokenPreviewSwitcher />

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
    default: "Bloom · Hardware shouldn't be hard.",
    template: '%s | Bloom',
  },
  description:
    'Bloom is the supply chain platform for hardware companies. Discover, bid, book, and pay a vetted network of manufacturing, warehousing, assembly, and logistics partners, all in one place.',
  applicationName: 'Bloom',
  authors: [{ name: 'Bloom Inc.', url: 'https://www.bloomnetwork.ai' }],
  generator: 'Next.js',
  keywords: [
    'supply chain platform',
    'hardware manufacturing',
    'logistics network',
    'warehousing',
    'assembly partners',
    'BloomPay',
    'mobility hardware',
    'energy hardware',
    'robotics hardware',
  ],
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    title: "Bloom · Hardware shouldn't be hard.",
    description:
      'The supply chain platform for hardware companies. Discover vetted partners, manage operations, and access flexible payment terms, all in one place.',
    images: [`${getServerSideURL()}/og`],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logos/bloom-symbol.svg', type: 'image/svg+xml' },
      { url: '/seo/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/seo/favicon.png',
    apple: [{ url: '/seo/apple-touch-icon.png', sizes: '180x180' }],
  },
}
