import { AppShell } from '@/components/AppShell'
import React from 'react'

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>
}
