import type { Metadata } from 'next'
import React from 'react'
import { HelpHeader } from '@/components/HelpHeader'

// /ops/* is gated by src/proxy.ts (same Resend OTP session cookie as
// /kb/* and /guides/*). The proxy redirects unauthenticated requests
// to /kb/login, so no auth check is needed in the layout itself.

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function OpsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bloom-cream">
      <HelpHeader />
      <main id="main-content" className="flex-1">{children}</main>
    </div>
  )
}
