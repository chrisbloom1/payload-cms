import type { Metadata } from 'next'

import { LoginForm } from './LoginForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sign in — Bloom KB',
  robots: { index: false, follow: false },
}

type Props = {
  searchParams: Promise<{ return?: string }>
}

export default async function KbLoginPage({ searchParams }: Props) {
  const { return: returnTo } = await searchParams
  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#faf7f2',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      color: '#1a2238',
    }}>
      <LoginForm returnTo={returnTo ?? '/kb'} />
    </div>
  )
}
