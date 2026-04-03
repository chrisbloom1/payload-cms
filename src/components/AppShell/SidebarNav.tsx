'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, FileText } from 'lucide-react'

import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/cn'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/kb', label: 'Knowledge Base', icon: BookOpen },
  { href: '/changelog', label: 'Changelog', icon: FileText },
]

export const SidebarNav: React.FC = () => {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="px-4 py-6">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="flex flex-col gap-1 px-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive =
              pathname === href || (href !== '/' && pathname.startsWith(href))

            return (
              <Button
                key={href}
                variant="ghost"
                asChild
                className={cn(
                  'w-full justify-start gap-3 px-3',
                  isActive && 'bg-card text-accent font-semibold',
                )}
              >
                <Link href={href}>
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              </Button>
            )
          })}
        </nav>
      </div>

      <div className="border-t border-border px-4 py-4">
        <ThemeSelector />
      </div>
    </div>
  )
}
