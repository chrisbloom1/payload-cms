import type { Metadata } from 'next'

import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { LivePreviewListener } from '@/components/LivePreviewListener'
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
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LivePreviewListener />

          {/* AppShell (help-center nav) is no longer applied at the root —
              it now wraps only the help-center route sections via their
              per-section layouts (`kb/layout.tsx`, `guides/layout.tsx`,
              etc.). Marketing pages get a passthrough so they can render
              their own FloatingNav + SiteFooter. */}
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
