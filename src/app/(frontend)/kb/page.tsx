import type { Metadata } from 'next/types'
import React from 'react'

import { KBPageClient } from './page.client'

export default function KBPage() {
  return <KBPageClient />
}

export function generateMetadata(): Metadata {
  return {
    title: 'Knowledge Base',
    description: 'Browse articles, guides, and documentation for Bloom hardware brands and providers.',
  }
}
