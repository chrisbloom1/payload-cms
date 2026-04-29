'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'

import { BloomWordmark } from '@/components/BloomLogo'
import { cn } from '@/lib/utils'

type ResourceLink = {
  href: string
  label: string
  description?: string
  external?: boolean
}

type ResourceColumn = {
  heading: string
  links: ResourceLink[]
}

const resourceColumns: ResourceColumn[] = [
  {
    heading: 'Learn',
    links: [
      { href: '/kb', label: 'Knowledge Base', description: 'Articles for brands and providers' },
      { href: '/guides', label: 'Guides', description: 'Step-by-step playbooks' },
      { href: '/kb/faqs', label: 'FAQs', description: 'Quick answers to common questions' },
      { href: '/kb/glossary', label: 'Glossary', description: 'Industry and platform terminology' },
    ],
  },
  {
    heading: 'Updates',
    links: [
      { href: '/changelog', label: 'Changelog', description: "What's new in Bloom" },
      { href: '/roadmap', label: 'Roadmap', description: "What's coming next" },
      { href: '/blog', label: 'Blog', description: 'News and announcements' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { href: '/contact-us', label: 'Contact', description: 'Talk to the Bloom team' },
      { href: '/customer-stories', label: 'Customer Stories', description: 'How brands grow with Bloom' },
    ],
  },
]

const primaryLinks: { href: string; label: string }[] = [
  { href: '/brands', label: 'For Brands' },
  { href: '/providers', label: 'For Providers' },
  { href: '/customer-stories', label: 'Stories' },
]

export const HelpHeader: React.FC = () => {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [resourcesOpen, setResourcesOpen] = React.useState(false)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    setMobileOpen(false)
    setResourcesOpen(false)
  }, [pathname])

  const openResources = React.useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setResourcesOpen(true)
  }, [])

  const scheduleCloseResources = React.useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setResourcesOpen(false), 120)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-bloom-navy/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-[64px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" aria-label="Bloom — home" className="flex items-center">
          <BloomWordmark className="h-[28px] w-auto text-bloom-navy" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={openResources}
            onMouseLeave={scheduleCloseResources}
          >
            <button
              type="button"
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-medium text-bloom-navy transition-colors hover:bg-bloom-mint/60',
                resourcesOpen && 'bg-bloom-mint/60',
              )}
              aria-haspopup="menu"
              aria-expanded={resourcesOpen}
              onClick={() => setResourcesOpen((v) => !v)}
            >
              Resources
              <ChevronDown
                className={cn(
                  'h-3.5 w-3.5 transition-transform',
                  resourcesOpen && 'rotate-180',
                )}
              />
            </button>

            {resourcesOpen && (
              <div
                className="absolute left-1/2 top-[calc(100%+8px)] z-50 w-[640px] -translate-x-1/2 rounded-2xl border border-bloom-navy/10 bg-white p-6 shadow-bloom-card"
                role="menu"
                onMouseEnter={openResources}
                onMouseLeave={scheduleCloseResources}
              >
                <div className="grid grid-cols-3 gap-6">
                  {resourceColumns.map((col) => (
                    <div key={col.heading} className="flex flex-col gap-3">
                      <h6 className="text-[11px] font-bold uppercase tracking-wider text-bloom-muted">
                        {col.heading}
                      </h6>
                      <ul className="flex flex-col gap-1">
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="-mx-2 flex flex-col gap-0.5 rounded-lg px-2 py-2 transition-colors hover:bg-bloom-mint/50"
                              role="menuitem"
                            >
                              <span className="text-[14px] font-semibold text-bloom-navy">
                                {link.label}
                              </span>
                              {link.description && (
                                <span className="text-[12px] leading-snug text-bloom-muted">
                                  {link.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'rounded-full px-4 py-2 text-[14px] font-medium transition-colors hover:bg-bloom-mint/60',
                  isActive ? 'text-bloom-navy' : 'text-bloom-navy/80',
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://app.bloomnetwork.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-bloom-navy px-5 py-2 text-[13px] font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Open App
            <ArrowUpRight className="h-3.5 w-3.5" />
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
            {resourceColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-2">
                <h6 className="text-[11px] font-bold uppercase tracking-wider text-bloom-muted">
                  {col.heading}
                </h6>
                <ul className="flex flex-col">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2 text-[15px] font-medium text-bloom-navy"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-1 border-t border-bloom-navy/10 pt-4">
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

            <a
              href="https://app.bloomnetwork.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-bloom-navy px-5 py-3 text-[14px] font-semibold tracking-wide text-white"
            >
              Open App
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
