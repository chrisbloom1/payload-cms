import type { Metadata } from 'next/types'
import React, { Suspense } from 'react'

import { KBPageClient } from './page.client'

export default function KBPage() {
  return (
    <Suspense>
      <KBPageClient />
    </Suspense>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Knowledge Base',
    description: 'Browse articles, guides, and documentation for Bloom hardware brands and providers.',
  }
}
