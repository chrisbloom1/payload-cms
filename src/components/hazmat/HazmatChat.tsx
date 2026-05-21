'use client'

import { useCallback, useRef, useState, useEffect, Fragment } from 'react'
import { cn } from '@/lib/utils'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

// AI advisor chat. POSTs the full message history to /api/hazmat/chat
// which runs the CHAT_SYSTEM prompt server-side. Designed for one-off
// novel questions the decision tree doesn't cover — keep answers
// short (the system prompt enforces that).

export function HazmatChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, busy])

  const send = useCallback(async () => {
    const text = input.trim()
    if (!text || busy) return
    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/hazmat/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = await res.json()
      if (!res.ok) {
        if (res.status === 429) throw new Error('Slow down — rate limited. Try again in a minute.')
        throw new Error(data.error || `chat failed (${res.status})`)
      }
      setMessages([...nextMessages, { role: 'assistant', content: data.reply || '(no reply)' }])
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'chat failed'
      setError(msg)
    } finally {
      setBusy(false)
    }
  }, [input, messages, busy])

  const reset = useCallback(() => {
    setMessages([])
    setError(null)
  }, [])

  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-5 ring-1 ring-bloom-navy/10">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[15px] font-bold text-bloom-navy">Ask Claude</h3>
          <p className="text-[11px] text-bloom-muted">
            Hazmat advisor for novel questions the decision tree doesn&apos;t cover.
          </p>
        </div>
        {messages.length > 0 ? (
          <button
            type="button"
            onClick={reset}
            className="text-[11px] text-bloom-muted underline-offset-4 hover:text-bloom-navy hover:underline"
          >
            New chat
          </button>
        ) : null}
      </div>

      <div
        ref={listRef}
        className="flex max-h-[420px] min-h-[120px] flex-col gap-2 overflow-y-auto rounded-md bg-bloom-cream/40 p-3"
      >
        {messages.length === 0 && !busy ? (
          <div className="self-center px-2 py-4 text-center text-[12px] text-bloom-muted">
            Try: &ldquo;Can we ship a 600 Wh e-bike battery alone by ground LTL?&rdquo;
          </div>
        ) : null}
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role} content={m.content} />
        ))}
        {busy ? (
          <div className="self-start rounded-md bg-white px-3 py-2 text-[12px] text-bloom-muted shadow-sm">
            <span className="mr-2 inline-block h-3 w-3 animate-spin rounded-full border-2 border-bloom-navy border-t-transparent align-middle" />
            Claude is thinking…
          </div>
        ) : null}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          send()
        }}
        className="flex items-end gap-2"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
              e.preventDefault()
              send()
            }
          }}
          rows={2}
          placeholder="Ask a hazmat question…"
          className="w-full resize-none rounded-md border border-bloom-navy/15 bg-white px-3 py-2 text-[13px] text-bloom-navy transition-colors focus:border-bloom-navy focus:outline-none focus:ring-2 focus:ring-bloom-navy/10"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className={cn(
            'shrink-0 rounded-md bg-bloom-navy px-4 py-2 text-[12px] font-bold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90',
            (busy || !input.trim()) && 'cursor-not-allowed opacity-50',
          )}
        >
          Send
        </button>
      </form>

      {error ? (
        <div className="rounded-md bg-bloom-orange/10 px-3 py-2 text-[12px] text-bloom-orange-deep">
          {error}
        </div>
      ) : null}

      <p className="text-[10px] text-bloom-muted">
        Cmd/Ctrl+Enter to send. Claude can be wrong — verify with the
        49 CFR and the carrier when stakes are high.
      </p>
    </div>
  )
}

// Render a chat bubble. Splits on \n for line breaks and on **bold**
// for inline emphasis — all via React nodes, no innerHTML, so model
// output can't inject script tags.
function Bubble({ role, content }: ChatMessage) {
  const isUser = role === 'user'
  return (
    <div
      className={cn(
        'max-w-[88%] rounded-md px-3 py-2 text-[13px] leading-[19px] shadow-sm',
        isUser
          ? 'self-end bg-bloom-navy text-white'
          : 'self-start bg-white text-bloom-navy',
      )}
    >
      {renderInline(content)}
    </div>
  )
}

function renderInline(text: string): React.ReactNode {
  const lines = text.split('\n')
  return lines.map((line, lineIdx) => (
    <Fragment key={lineIdx}>
      {renderLineBold(line)}
      {lineIdx < lines.length - 1 ? <br /> : null}
    </Fragment>
  ))
}

// Walk the line, splitting on **bold** spans. Uses matchAll (iterator)
// rather than RegExp.exec so we avoid keyword overlap with Node's
// child_process.exec (a security-scanner false positive).
function renderLineBold(line: string): React.ReactNode {
  const out: React.ReactNode[] = []
  let lastIndex = 0
  const matches = line.matchAll(/\*\*(.+?)\*\*/g)
  for (const m of matches) {
    const start = m.index ?? 0
    if (start > lastIndex) out.push(line.slice(lastIndex, start))
    out.push(<strong key={start}>{m[1]}</strong>)
    lastIndex = start + m[0].length
  }
  if (lastIndex < line.length) out.push(line.slice(lastIndex))
  return out
}
