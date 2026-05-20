'use client'

import posthog from 'posthog-js'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

let initialized = false

function initPostHog() {
  if (initialized || typeof window === 'undefined' || !POSTHOG_KEY) return
  initialized = true
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    capture_pageleave: true,
    person_profiles: 'identified_only',
    loaded: (ph) => {
      if (process.env.NODE_ENV === 'development') ph.debug()
    },
  })
}

function PageviewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!POSTHOG_KEY) return
    initPostHog()
    const qs = searchParams?.toString()
    const url = qs ? `${pathname}?${qs}` : pathname
    posthog.capture('$pageview', { $current_url: window.location.origin + url })
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider() {
  if (!POSTHOG_KEY) return null
  return (
    <Suspense fallback={null}>
      <PageviewTracker />
    </Suspense>
  )
}
