"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { BloomWordmark } from "@/components/BloomLogo";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { href: "/brands", label: "Brands" },
  { href: "/providers", label: "Providers" },
  { href: "/customer-stories", label: "Stories" },
];

const CTA_PRIMARY_HREF = "https://welcome.bloomnetwork.ai/";
const CTA_GHOST_HREF = "https://app.bloomnetwork.ai/sign-in";

/**
 * FloatingNav — top-of-page fixed pill navigation matching the Bloom site.
 *
 * - Outer wrapper: position fixed, full-width, 96px tall, centers the inner pill.
 * - Inner pill: 1280px max-width, 72px tall, translucent grey with backdrop blur.
 * - Mobile (≤723.98px): collapses to a hamburger button that opens a fullscreen
 *   overlay with the same links + CTAs stacked.
 */
export function FloatingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll while the mobile overlay is open and close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-10 flex h-24 items-center justify-center px-3",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "flex h-[72px] w-full items-center justify-between rounded-md",
          "bg-[rgba(235,235,240,0.65)] backdrop-blur-[10px]",
          "py-3 pr-3 pl-6",
          "max-w-[1280px]",
        )}
      >
        {/* Logo — actual SVG wordmark extracted from the live site */}
        <Link
          href="/"
          aria-label="Bloom — home"
          className="flex items-center"
        >
          <BloomWordmark className="h-7 w-auto" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-4 min-[724px]:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block px-2 py-1 text-[18px] font-extrabold leading-[1.2]",
                  "tracking-[0.01em] text-bloom-navy whitespace-pre",
                  "transition-opacity duration-150 hover:opacity-70",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 min-[724px]:flex">
          <a
            href={CTA_PRIMARY_HREF}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex items-center justify-center rounded-md px-5 py-2.5",
              "bg-bloom-cta text-white hover:opacity-90",
              "text-[12px] font-bold uppercase tracking-[0.08em]",
              "transition-opacity duration-150",
            )}
          >
            GET STARTED
          </a>
          <a
            href={CTA_GHOST_HREF}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex items-center justify-center rounded-[4px] p-3",
              "bg-transparent text-bloom-navy",
              "text-[12px] font-extrabold uppercase tracking-[0.05em]",
              "transition-colors duration-150 hover:bg-bloom-mint",
            )}
          >
            LOG IN
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="floating-nav-mobile-panel"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md text-bloom-navy",
            "transition-colors duration-150 hover:bg-bloom-mint",
            "min-[724px]:hidden",
          )}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      {mobileOpen && (
        <div
          id="floating-nav-mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "fixed inset-0 z-20 flex flex-col bg-bloom-cream",
            "min-[724px]:hidden",
          )}
        >
          {/* Mobile panel header (logo + close) */}
          <div className="flex h-24 items-center justify-between px-6">
            <Link
              href="/"
              aria-label="Bloom — home"
              className="flex items-center"
              onClick={closeMobile}
            >
              <BloomWordmark className="h-7 w-auto" />
            </Link>
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close navigation menu"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md text-bloom-navy",
                "transition-colors duration-150 hover:bg-bloom-mint",
              )}
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Stacked links + CTAs */}
          <div className="flex flex-1 flex-col gap-8 px-6 pt-8 pb-12">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={cn(
                      "block text-[24px] font-extrabold leading-[1.2]",
                      "tracking-[0.01em] text-bloom-navy",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3">
              <a
                href={CTA_PRIMARY_HREF}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobile}
                className={cn(
                  "inline-flex items-center justify-center rounded-[4px] p-4",
                  "bg-bloom-navy text-bloom-cream",
                  "text-[14px] font-extrabold uppercase tracking-[0.05em]",
                  "transition-colors duration-150 hover:bg-bloom-navy-deep",
                )}
              >
                GET STARTED
              </a>
              <a
                href={CTA_GHOST_HREF}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobile}
                className={cn(
                  "inline-flex items-center justify-center rounded-[4px] p-4",
                  "border border-bloom-navy bg-transparent text-bloom-navy",
                  "text-[14px] font-extrabold uppercase tracking-[0.05em]",
                  "transition-colors duration-150 hover:bg-bloom-mint",
                )}
              >
                LOG IN
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
