'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import { SidebarNav } from './SidebarNav'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/cn'

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Top header bar — Midnight Violet */}
      <div className="flex items-center h-10 px-4 bg-topbar text-white text-xs font-medium shrink-0 z-40">
        <span>bloomnetwork.ai</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:shrink-0 bg-sidebar border-r border-border z-30">
          <SidebarNav />
        </aside>

        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Mobile sidebar */}
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-border transform transition-transform duration-200 ease-in-out lg:hidden',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <SidebarNav />
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Mobile top bar */}
          <div className="sticky top-0 z-20 flex items-center gap-4 border-b border-border bg-sidebar px-4 py-3 lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <span className="text-xl font-bold tracking-tight">Bloom</span>
          </div>

          <main className="flex-1 overflow-y-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
