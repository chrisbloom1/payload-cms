import Link from "next/link";
import { LinkedInIcon } from "@/components/icons";
import { BloomWordmark } from "@/components/BloomLogo";
import { cn } from "@/lib/utils";

const BRAND_LINKS = [
  { href: "/company", label: "Company" },
  { href: "/brands", label: "For Brands" },
  { href: "/providers", label: "For Providers" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

const UPDATE_LINKS = [
  { href: "/blog", label: "News" },
  { href: "/customer-stories", label: "Customer Stories" },
] as const;

const ADDRESSES = [
  { line1: "2050 15th St", line2: "Detroit, MI 48216" },
  { line1: "19 Morris Ave", line2: "Brooklyn, NY 10019" },
] as const;

interface FooterLinkGroupProps {
  heading: string;
  links: readonly { href: string; label: string }[];
}

function FooterLinkGroup({ heading, links }: FooterLinkGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="text-[14px] font-bold uppercase tracking-wider text-bloom-navy">
        {heading}
      </h5>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[14px] text-bloom-navy transition-opacity hover:underline hover:underline-offset-4 hover:opacity-90"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer
      className={cn(
        "w-full bg-bloom-mint text-bloom-navy",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 py-10 sm:px-6 md:py-12">
        {/* Top row mirrors live: small left-aligned wordmark above addresses
            and LinkedIn, with the two link columns pushed to the right. */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* Left column: wordmark + addresses + LinkedIn (stacked) */}
          <div className="flex flex-col items-start gap-5 md:w-[280px]">
            <BloomWordmark className="h-[40px] w-auto" />
            <div className="flex flex-col gap-3">
              {ADDRESSES.map((addr) => (
                <address
                  key={addr.line1}
                  className="not-italic text-[13px] leading-[1.4] text-bloom-navy"
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
              className="mt-1 inline-flex h-7 w-7 items-center justify-center text-bloom-navy transition-opacity hover:opacity-70"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Right column: link groups */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:flex-none md:gap-x-20">
            <FooterLinkGroup heading="BLOOM" links={BRAND_LINKS} />
            <FooterLinkGroup heading="UPDATES" links={UPDATE_LINKS} />
          </div>
        </div>

        {/* Bottom row: copyright + Privacy + Terms */}
        <div className="flex flex-col items-start gap-3 border-t border-bloom-navy/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-bloom-navy">
            Bloom{" "}
            <a
              href="https://babarogic.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              © 2025
            </a>
          </p>
          <div className="flex items-center gap-9">
            <Link
              href="/privacy"
              className="text-[12px] text-bloom-navy hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <span className="text-[12px] text-bloom-navy">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
