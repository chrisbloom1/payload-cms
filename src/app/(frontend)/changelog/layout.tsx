import type { Metadata } from 'next'
import React from 'react'
import { HelpHeader } from '@/components/HelpHeader'
import { UnifiedFooter } from '@/components/UnifiedFooter'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ChangelogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bloom-cream">
      <HelpHeader />
      <main id="main-content" className="flex-1">{children}</main>
      <UnifiedFooter />
    </div>
  )
}
