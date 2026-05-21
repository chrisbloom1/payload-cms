import Link from 'next/link'
import { LinkedInIcon } from '@/components/icons'
import { BloomWordmark } from '@/components/BloomLogo'
import { cn } from '@/lib/utils'

const PRODUCT_LINKS = [
  { href: '/brands', label: 'For Brands' },
  { href: '/providers', label: 'For Providers' },
  { href: 'https://app.bloomnetwork.ai', label: 'Open App', external: true },
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
] as const

const BLOOM_DESCRIPTION =
  "Bloom is the network for hardware brands and the manufacturing partners that bring them to life — connecting the right teams to build, source, and scale physical products."

type LinkItem = { href: string; label: string; external?: boolean }

function FooterLinkGroup({ heading, links }: { heading: string; links: readonly LinkItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-bloom-navy">
        {heading}
      </h3>
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
                prefetch={false}
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
        {/* Top: brand block + 3 link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-10">
          {/* Brand block — wider so the description has room to breathe */}
          <div className="col-span-2 flex flex-col items-start gap-5 md:col-span-1">
            <BloomWordmark className="h-[36px] w-auto" />
            <p className="text-[14px] leading-[1.55] text-bloom-navy/80 max-w-[320px]">
              {BLOOM_DESCRIPTION}
            </p>
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
              href="https://www.linkedin.com/company/bloomnetworkai"
              target="_blank"
              rel="noreferrer"
              aria-label="Bloom on LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-bloom-navy transition-opacity hover:opacity-70"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>

          <FooterLinkGroup heading="Product" links={PRODUCT_LINKS} />
          <FooterLinkGroup heading="Stories" links={STORIES_LINKS} />
          <FooterLinkGroup heading="Company" links={COMPANY_LINKS} />
        </div>

        {/* Bottom: copyright + legal links */}
        <div className="flex flex-col items-start gap-3 border-t border-bloom-navy/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-bloom-navy/70">© {year} Bloom Inc.</p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              prefetch={false}
              className="text-[12px] text-bloom-navy/70 transition-colors hover:text-bloom-navy"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
