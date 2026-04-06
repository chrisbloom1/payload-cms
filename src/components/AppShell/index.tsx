'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ExternalLink } from 'lucide-react'

import { Logo } from '@/components/Logo/Logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/cn'

const navLinks = [
  { href: '/kb', label: 'Knowledge Base', exact: true },
  { href: '/kb/faqs', label: 'FAQs', exact: true },
  { href: '/guides', label: 'Guides', exact: true },
  { href: '/roadmap', label: 'Roadmap', exact: true },
  { href: '/changelog', label: 'Changelog', exact: true },
]

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-white">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map(({ href, label, exact }) => {
              const isActive = exact ? pathname === href : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-foreground',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {label}
                </Link>
              )
            })}
            <Button asChild variant="outline" size="sm">
              <a href="https://app.bloomnetwork.ai" target="_blank" rel="noopener noreferrer">
                Open App
                <ExternalLink className="ml-1.5 h-3 w-3" />
              </a>
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-border bg-white px-4 pb-4 pt-2 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ href, label, exact }) => {
                const isActive = exact ? pathname === href : pathname.startsWith(href)
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                    )}
                  >
                    {label}
                  </Link>
                )
              })}
              <a
                href="https://app.bloomnetwork.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                Open App
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Logo />
            </div>

            {/* Product */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">Product</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://app.bloomnetwork.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Bloom Platform
                  </a>
                </li>
                <li>
                  <a href="https://www.bloomnetwork.ai/brands" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    For Brands
                  </a>
                </li>
                <li>
                  <a href="https://www.bloomnetwork.ai/providers" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    For Providers
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">Resources</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/kb" className="hover:text-foreground">Knowledge Base</Link>
                </li>
                <li>
                  <Link href="/kb/faqs" className="hover:text-foreground">FAQs</Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-foreground">Guides</Link>
                </li>
                <li>
                  <Link href="/kb/glossary" className="hover:text-foreground">Glossary</Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-foreground">Roadmap</Link>
                </li>
                <li>
                  <Link href="/changelog" className="hover:text-foreground">Changelog</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://www.bloomnetwork.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Website
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="https://www.bloomnetwork.ai/careers" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
            &copy; 2026 Bloom
          </div>
        </div>
      </footer>
    </div>
  )
}
