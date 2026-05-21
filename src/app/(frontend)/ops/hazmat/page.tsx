import type { Metadata } from 'next'
import { HazmatHub } from '@/components/hazmat/HazmatHub'

export const metadata: Metadata = {
  title: 'Hazmat Hub — Bloom Ops',
  robots: { index: false, follow: false },
}

// Server-rendered shell. The interactive bits (form, upload, preview,
// chat) live in HazmatHub which is a client component.
export default function HazmatPage() {
  return <HazmatHub />
}
