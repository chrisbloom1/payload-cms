import React from 'react'
import { HelpHeader } from '@/components/HelpHeader'
import { UnifiedFooter } from '@/components/UnifiedFooter'

export default function KbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bloom-cream">
      <HelpHeader />
      <main className="flex-1">{children}</main>
      <UnifiedFooter />
    </div>
  )
}
