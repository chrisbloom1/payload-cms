'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  FileText,
  HelpCircle,
  BookA,
  Video,
  Lightbulb,
  ChevronUp,
  Check,
} from 'lucide-react'

import { cn } from '@/utilities/cn'

interface FeatureRequest {
  id: number | string
  title: string
  slug?: string | null
  description?: string | null
  status?: 'new' | 'under-review' | 'planned' | 'in-progress' | 'shipped' | null
  votes?: number | null
  audience?: 'brand' | 'provider' | 'both' | null
  submitterName?: string | null
}

const sidebarLinks = [
  { href: '/kb', label: 'Knowledge Base', icon: BookOpen },
  { href: '/kb/faqs', label: 'FAQs', icon: HelpCircle },
  { href: '/guides', label: 'Guides', icon: Video },
  { href: '/kb/glossary', label: 'Glossary', icon: BookA },
  { href: '/roadmap', label: 'Roadmap', icon: Lightbulb },
  { href: '/changelog', label: 'Changelog', icon: FileText },
]

const statusFilters = [
  { label: 'All', value: 'all' },
  { label: 'New', value: 'new' },
  { label: 'Planned', value: 'planned' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Shipped', value: 'shipped' },
]

const statusBadge: Record<string, { label: string; className: string }> = {
  new: { label: 'New', className: 'bg-gray-100 text-gray-600' },
  'under-review': { label: 'Under Review', className: 'bg-blue-50 text-blue-600' },
  planned: { label: 'Planned', className: 'bg-orange-50 text-orange-600' },
  'in-progress': { label: 'In Progress', className: 'bg-violet-50 text-violet-600' },
  shipped: { label: 'Shipped', className: 'bg-green-50 text-green-700' },
}

const audienceLabel: Record<string, string> = {
  brand: 'Brand',
  provider: 'Provider',
  both: 'All Users',
}

function getVotedSet(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem('bloom-voted-requests')
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function saveVotedSet(set: Set<string>) {
  localStorage.setItem('bloom-voted-requests', JSON.stringify([...set]))
}

export const RoadmapPageClient: React.FC<{ requests: FeatureRequest[] }> = ({
  requests: initialRequests,
}) => {
  const pathname = usePathname()
  const [requests, setRequests] = useState(initialRequests)
  const [activeFilter, setActiveFilter] = useState('all')
  const [votedIds, setVotedIds] = useState<Set<string>>(() => getVotedSet())

  // Form state
  const [formTitle, setFormTitle] = useState('')
  const [formDescription, setFormDescription] = useState('')
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return requests
    return requests.filter((r) => r.status === activeFilter)
  }, [requests, activeFilter])

  async function handleVote(id: number | string) {
    const idStr = String(id)
    if (votedIds.has(idStr)) return

    // Optimistic update
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, votes: (r.votes || 0) + 1 } : r)),
    )
    const newVoted = new Set(votedIds)
    newVoted.add(idStr)
    setVotedIds(newVoted)
    saveVotedSet(newVoted)

    try {
      await fetch(`/api/feature-requests/${id}/vote`, { method: 'POST' })
    } catch {
      // Revert on failure
      setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, votes: (r.votes || 0) - 1 } : r)),
      )
      newVoted.delete(idStr)
      setVotedIds(newVoted)
      saveVotedSet(newVoted)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError('')
    setSubmitSuccess(false)
    setSubmitting(true)

    try {
      const res = await fetch('/api/feature-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formTitle,
          description: formDescription,
          submitterName: formName,
          submitterEmail: formEmail,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        if (data.errors) {
          setSubmitError(Object.values(data.errors).join('. '))
        } else {
          setSubmitError('Failed to submit. Please try again.')
        }
        return
      }

      setSubmitSuccess(true)
      setFormTitle('')
      setFormDescription('')
      setFormName('')
      setFormEmail('')
    } catch {
      setSubmitError('Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="pt-8 pb-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Roadmap</h1>
          <p className="text-sm text-muted-foreground">
            Submit feature ideas and vote on what gets built next.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-56 shrink-0">
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

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Status filter pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {statusFilters.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActiveFilter(value)}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 text-sm font-medium transition-all',
                    activeFilter === value
                      ? 'bg-foreground text-background shadow-sm'
                      : 'bg-muted text-muted-foreground hover:text-foreground',
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Request cards */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
                <Lightbulb className="h-10 w-10 opacity-40" />
                <p>No feature requests yet. Be the first to submit one!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((req) => {
                  const badge = statusBadge[req.status || 'new']
                  const hasVoted = votedIds.has(String(req.id))
                  const isShipped = req.status === 'shipped'

                  return (
                    <div
                      key={req.id}
                      className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"
                    >
                      {/* Vote column */}
                      <div className="flex flex-col items-center shrink-0">
                        <button
                          onClick={() => handleVote(req.id)}
                          disabled={hasVoted}
                          className={cn(
                            'flex h-9 w-9 items-center justify-center rounded-lg transition-all',
                            hasVoted
                              ? 'bg-foreground/5 text-foreground cursor-default'
                              : 'bg-muted text-muted-foreground hover:bg-foreground/10 hover:text-foreground',
                          )}
                          title={hasVoted ? 'Already voted' : 'Upvote'}
                        >
                          {isShipped ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <ChevronUp className="h-4 w-4" />
                          )}
                        </button>
                        <span className="text-xs font-semibold mt-0.5">{req.votes || 0}</span>
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-semibold text-foreground">{req.title}</h3>
                          {badge && (
                            <span
                              className={cn(
                                'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium',
                                badge.className,
                              )}
                            >
                              {badge.label}
                            </span>
                          )}
                        </div>
                        {req.description && (
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {req.description}
                          </p>
                        )}
                        {req.audience && req.audience !== 'both' && (
                          <span className="mt-2 inline-block text-[11px] text-muted-foreground">
                            {audienceLabel[req.audience]}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Submit form */}
            <div className="mt-12 rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-1">Submit a Feature Request</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Got an idea? Let us know what you&apos;d like to see built.
              </p>

              {submitSuccess && (
                <div className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                  Thanks! Your request has been submitted for review.
                </div>
              )}

              {submitError && (
                <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fr-title" className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    id="fr-title"
                    type="text"
                    required
                    minLength={5}
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="Short, descriptive title"
                  />
                </div>

                <div>
                  <label htmlFor="fr-description" className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    id="fr-description"
                    required
                    minLength={10}
                    rows={3}
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                    placeholder="Describe the feature and why it would be useful"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fr-name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      id="fr-name"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label htmlFor="fr-email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      id="fr-email"
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
