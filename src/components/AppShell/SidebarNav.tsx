'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, FileText } from 'lucide-react'

import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { cn } from '@/utilities/cn'

const navGroups = [
  {
    label: 'Menu',
    items: [
      { href: '/', label: 'Home', icon: Home },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: '/kb', label: 'Knowledge Base', icon: BookOpen },
      { href: '/changelog', label: 'Changelog', icon: FileText },
    ],
  },
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

        <nav className="flex flex-col gap-6 px-3">
          {navGroups.map((group) => (
            <div key={group.label}>
              <span className="px-3 mb-2 block text-xs font-semibold uppercase tracking-wider text-teal">
                {group.label}
              </span>
              <div className="flex flex-col gap-0.5">
                {group.items.map(({ href, label, icon: Icon }) => {
                  const isActive =
                    pathname === href || (href !== '/' && pathname.startsWith(href))

                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                        isActive
                          ? 'bg-card shadow-sm text-foreground'
                          : 'text-muted-foreground hover:bg-card/50 hover:text-foreground',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-border px-4 py-4">
        <ThemeSelector />
      </div>
    </div>
  )
}
