import Link from 'next/link'
import { LinkedInIcon } from '@/components/icons'
import { BloomWordmark } from '@/components/BloomLogo'
import { cn } from '@/lib/utils'

const PRODUCT_LINKS = [
  { href: '/brands', label: 'For Brands' },
  { href: '/providers', label: 'For Providers' },
  { href: 'https://app.bloomnetwork.ai', label: 'Open App', external: true },
] as const

const RESOURCE_LINKS = [
  { href: '/kb', label: 'Knowledge Base' },
  { href: '/guides', label: 'Guides' },
  { href: '/kb/faqs', label: 'FAQs' },
  { href: '/kb/glossary', label: 'Glossary' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/roadmap', label: 'Roadmap' },
] as const

const STORIES_LINKS = [
  { href: '/customer-stories', label: 'Customer Stories' },
  { href: '/blog', label: 'Blog' },
] as const

const COMPANY_LINKS = [
  { href: '/company', label: 'Company' },
  { href: '/contact-us', label: 'Contact' },
] as const

const ADDRESSES = [
  { line1: '2050 15th St', line2: 'Detroit, MI 48216' },
  { line1: '19 Morris Ave', line2: 'Brooklyn, NY 10019' },
] as const

type LinkItem = { href: string; label: string; external?: boolean }

function FooterLinkGroup({ heading, links }: { heading: string; links: readonly LinkItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="text-[12px] font-bold uppercase tracking-[0.08em] text-bloom-navy">
        {heading}
      </h5>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-bloom-navy/80 transition-colors hover:text-bloom-navy"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-[14px] text-bloom-navy/80 transition-colors hover:text-bloom-navy"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function UnifiedFooter({ className }: { className?: string }) {
  const year = new Date().getFullYear()

  return (
    <footer className={cn('w-full bg-bloom-mint text-bloom-navy', className)}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 py-14 sm:px-6 md:py-16">
        {/* Top: brand block + 4 link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-6 md:gap-x-12">
          {/* Brand block */}
          <div className="col-span-2 flex flex-col gap-5">
            <BloomWordmark className="h-[36px] w-auto" />
            <div className="flex flex-col gap-3">
              {ADDRESSES.map((addr) => (
                <address
                  key={addr.line1}
                  className="not-italic text-[13px] leading-[1.45] text-bloom-navy/80"
                >
                  {addr.line1}
                  <br />
                  {addr.line2}
                </address>
              ))}
            </div>
            <a
              href="https://www.linkedin.com/company/bloomus"
              target="_blank"
              rel="noreferrer"
              aria-label="Bloom on LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-bloom-navy transition-opacity hover:opacity-70"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>

          <FooterLinkGroup heading="Product" links={PRODUCT_LINKS} />
          <FooterLinkGroup heading="Resources" links={RESOURCE_LINKS} />
          <FooterLinkGroup heading="Stories" links={STORIES_LINKS} />
          <FooterLinkGroup heading="Company" links={COMPANY_LINKS} />
        </div>

        {/* Bottom: copyright + legal */}
        <div className="flex flex-col items-start gap-3 border-t border-bloom-navy/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-bloom-navy/70">© {year} Bloom Inc.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[12px] text-bloom-navy/70 transition-colors hover:text-bloom-navy"
            >
              Privacy
            </Link>
            <span className="text-[12px] text-bloom-navy/70">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
