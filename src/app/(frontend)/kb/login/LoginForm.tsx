'use client'

import { useState } from 'react'

type Stage = 'email' | 'code'

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
    <div style={{
      background: 'white',
      borderRadius: 12,
      padding: '2rem',
      maxWidth: 420,
      width: '100%',
      boxShadow: '0 2px 24px rgba(0,0,0,0.06)',
    }}>
      <h1 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem' }}>Bloom KB sign-in</h1>
      <p style={{ color: '#4a5568', lineHeight: 1.5, marginBottom: '1.5rem' }}>
        {stage === 'email'
          ? 'Enter your Bloom team email to receive a sign-in code.'
          : `We sent a 6-digit code to ${email}. Enter it below.`}
      </p>

      {stage === 'email' ? (
        <form onSubmit={submitEmail}>
          <label
            htmlFor="email"
            style={{ display: 'block', fontSize: '0.85rem', marginBottom: 6, color: '#4a5568' }}
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
            style={inputStyle}
          />
          <button type="submit" disabled={busy} style={buttonStyle(busy)}>
            {busy ? 'Sending…' : 'Send code'}
          </button>
        </form>
      ) : (
        <form onSubmit={submitCode}>
          <label
            htmlFor="code"
            style={{ display: 'block', fontSize: '0.85rem', marginBottom: 6, color: '#4a5568' }}
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
            style={{ ...inputStyle, fontSize: '1.5rem', letterSpacing: '0.5rem', textAlign: 'center' }}
          />
          <button type="submit" disabled={busy || code.length !== 6} style={buttonStyle(busy)}>
            {busy ? 'Verifying…' : 'Verify'}
          </button>
          <button
            type="button"
            onClick={() => {
              setStage('email')
              setCode('')
              setChallenge(null)
              setError(null)
            }}
            style={{
              ...buttonStyle(false),
              background: 'transparent',
              color: '#4a5568',
              marginTop: 8,
            }}
          >
            Use a different email
          </button>
        </form>
      )}

      {error && (
        <div style={{ color: '#c53030', fontSize: '0.9rem', marginTop: '0.75rem' }}>{error}</div>
      )}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #e2e8f0',
  borderRadius: 8,
  fontSize: '1rem',
  boxSizing: 'border-box',
}

const buttonStyle = (busy: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '0.85rem',
  background: '#ff6b35',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  fontSize: '1rem',
  fontWeight: 600,
  cursor: busy ? 'wait' : 'pointer',
  marginTop: '1rem',
  opacity: busy ? 0.7 : 1,
})
