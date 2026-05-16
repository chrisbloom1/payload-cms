'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import { BloomWordmark } from '@/components/BloomLogo'
import { cn } from '@/lib/utils'

/**
 * Pre-launch nav. KB/guides/changelog/roadmap are hidden from public
 * navigation — team accesses them directly at bloomnetwork.ai/kb via
 * the gated sign-in. Restore a Resources dropdown from git history
 * when those sections go public.
 */
const primaryLinks: { href: string; label: string }[] = [
  { href: '/brands', label: 'For Brands' },
  { href: '/providers', label: 'For Providers' },
  { href: '/customer-stories', label: 'Stories' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact' },
]

const CTA_PRIMARY_HREF = 'https://welcome.bloomnetwork.ai/'
const CTA_GHOST_HREF = 'https://app.bloomnetwork.ai/sign-in'

export const HelpHeader: React.FC = () => {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-bloom-navy/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-[64px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" aria-label="Bloom — home" className="flex items-center">
          <BloomWordmark className="h-[28px] w-auto text-bloom-navy" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {primaryLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'rounded-md px-4 py-2 text-[14px] font-medium transition-colors hover:bg-bloom-mint/60',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy focus-visible:ring-offset-2',
                  isActive ? 'text-bloom-navy' : 'text-bloom-navy/80',
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right CTAs — Get Started + Log In */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={CTA_PRIMARY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-bloom-cta px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy focus-visible:ring-offset-2"
          >
            Get Started
          </a>
          <a
            href={CTA_GHOST_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md p-3 text-[12px] font-extrabold uppercase tracking-[0.05em] text-bloom-navy transition-colors hover:bg-bloom-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy focus-visible:ring-offset-2"
          >
            Log In
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-bloom-navy hover:bg-bloom-mint/60 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-bloom-navy/10 bg-white px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              {primaryLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block py-2 text-[15px] font-medium text-bloom-navy"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2 border-t border-bloom-navy/10 pt-4">
              <a
                href={CTA_PRIMARY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-bloom-cta px-5 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white"
              >
                Get Started
              </a>
              <a
                href={CTA_GHOST_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-bloom-navy px-5 py-3 text-[13px] font-extrabold uppercase tracking-[0.05em] text-bloom-navy"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
