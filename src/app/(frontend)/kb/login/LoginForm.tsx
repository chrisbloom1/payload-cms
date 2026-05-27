'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Stage = 'email' | 'code'

// Universal Bloom sign-in form — used by /kb, /guides, /ops gates.
// Styling matches the marketing/admin design system (Bloom tokens via
// Tailwind utility classes) so it doesn't look orphaned from the rest
// of the app.

export function LoginForm({ returnTo }: { returnTo: string }) {
  const [stage, setStage] = useState<Stage>('email')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [challenge, setChallenge] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    try {
      const res = await fetch('/api/kb/login/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json()) as { challenge?: string; error?: string }
      if (!res.ok) {
        setError(data.error === 'send_failed' ? 'Failed to send email.' : 'Invalid email.')
        return
      }
      setChallenge(data.challenge ?? null)
      setStage('code')
    } catch {
      setError('Network error.')
    } finally {
      setBusy(false)
    }
  }

  async function submitCode(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    try {
      const res = await fetch('/api/kb/login/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ challenge, code }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) {
        setError(
          data.error === 'expired_or_invalid'
            ? 'Code expired. Request a new one.'
            : 'Incorrect code.',
        )
        return
      }
      // Hard navigate so the cookie attaches to the next request.
      window.location.href = returnTo
    } catch {
      setError('Network error.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="w-full max-w-[420px] rounded-md bg-white p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)] ring-1 ring-bloom-navy/10">
      <div className="mb-6 flex flex-col gap-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-bloom-orange">
          Bloom
        </p>
        <h1 className="text-[22px] font-bold leading-tight text-bloom-navy">
          Sign in
        </h1>
        <p className="mt-2 text-[14px] leading-[20px] text-bloom-muted">
          {stage === 'email'
            ? 'Enter your Bloom team email to receive a sign-in code.'
            : `We sent a 6-digit code to ${email}. Enter it below.`}
        </p>
      </div>

      {stage === 'email' ? (
        <form onSubmit={submitEmail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[11px] font-bold uppercase tracking-[0.05em] text-bloom-muted"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@bloomnetwork.ai"
              className="w-full rounded-md border border-bloom-navy/15 bg-white px-3 py-2.5 text-[14px] text-bloom-navy transition-colors focus:border-bloom-navy focus:outline-none focus:ring-2 focus:ring-bloom-navy/10"
            />
          </div>
          <button
            type="submit"
            disabled={busy}
            className={cn(
              'inline-flex w-full items-center justify-center gap-2 rounded-md bg-bloom-navy px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90',
              busy && 'cursor-wait opacity-60',
            )}
          >
            {busy ? (
              <>
                <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending…
              </>
            ) : (
              'Send code'
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={submitCode} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="code"
              className="text-[11px] font-bold uppercase tracking-[0.05em] text-bloom-muted"
            >
              6-digit code
            </label>
            <input
              id="code"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              autoFocus
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              className="w-full rounded-md border border-bloom-navy/15 bg-white px-3 py-3 text-center text-[20px] font-bold tracking-[0.4em] tabular-nums text-bloom-navy transition-colors focus:border-bloom-navy focus:outline-none focus:ring-2 focus:ring-bloom-navy/10"
            />
          </div>
          <button
            type="submit"
            disabled={busy || code.length !== 6}
            className={cn(
              'inline-flex w-full items-center justify-center gap-2 rounded-md bg-bloom-navy px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90',
              (busy || code.length !== 6) && 'cursor-not-allowed opacity-60',
            )}
          >
            {busy ? (
              <>
                <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Verifying…
              </>
            ) : (
              'Verify'
            )}
          </button>
          <button
            type="button"
            onClick={() => {
              setStage('email')
              setCode('')
              setChallenge(null)
              setError(null)
            }}
            className="text-[13px] text-bloom-muted underline-offset-4 transition-colors hover:text-bloom-navy hover:underline"
          >
            Use a different email
          </button>
        </form>
      )}

      {error && (
        <div className="mt-4 rounded-md bg-bloom-orange/10 px-3 py-2 text-[13px] text-bloom-orange-deep">
          {error}
        </div>
      )}
    </div>
  )
}
