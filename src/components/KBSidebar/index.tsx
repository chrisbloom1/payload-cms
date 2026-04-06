'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  FileText,
  HelpCircle,
  BookA,
  Video,
  Lightbulb,
} from 'lucide-react'

import { cn } from '@/utilities/cn'

const sidebarLinks = [
  { href: '/kb', label: 'Knowledge Base', icon: BookOpen },
  { href: '/kb/faqs', label: 'FAQs', icon: HelpCircle },
  { href: '/guides', label: 'Guides', icon: Video },
  { href: '/kb/glossary', label: 'Glossary', icon: BookA },
  { href: '/roadmap', label: 'Roadmap', icon: Lightbulb },
  { href: '/changelog', label: 'Changelog', icon: FileText },
]

export const KBSidebar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()

  return (
    <div className="lg:w-56 shrink-0">
      {children}

      <nav className="flex flex-col gap-0.5">
        {sidebarLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                isActive
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
