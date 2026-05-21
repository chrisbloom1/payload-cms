import type { Metadata } from 'next'

import { LoginForm } from './LoginForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sign in — Bloom',
  robots: { index: false, follow: false },
}

type Props = {
  searchParams: Promise<{ return?: string }>
}

// Universal sign-in page for /kb, /guides, /ops and any future gated
// surface. Lives at /kb/login for historical reasons (it was the first
// gated section); the URL is referenced from src/proxy.ts.
export default async function KbLoginPage({ searchParams }: Props) {
  const { return: returnTo } = await searchParams
  return (
    <div className="grid min-h-screen place-items-center bg-bloom-cream px-6 py-12">
      <LoginForm returnTo={returnTo ?? '/kb'} />
    </div>
  )
}
