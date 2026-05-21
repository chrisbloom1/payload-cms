import Anthropic from '@anthropic-ai/sdk'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { SESSION_COOKIE, verifySession } from '@/lib/kb-auth/session'
import { CHAT_SYSTEM } from '@/components/hazmat/knowledge-data'

// POST /api/hazmat/chat
// Body: { messages: [{ role: 'user'|'assistant', content: string }] }
// Server-side Anthropic chat with the CHAT_SYSTEM advisor prompt.
// Returns the assistant reply text.
//
// Rate-limited per session (rough in-memory bucket — fine for an
// internal tool with <20 users; replace with Vercel KV / Upstash if
// usage scales).

export const runtime = 'nodejs'
export const maxDuration = 60

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const MAX_MESSAGES = 30
const MAX_CONTENT_LEN = 4000

// 10 requests per minute per email. Tracks in-process; resets on cold
// boot which is acceptable for the use case.
const RATE_LIMIT = 10
const RATE_WINDOW_MS = 60_000
const rateBuckets = new Map<string, number[]>()

function checkRate(email: string): boolean {
  const now = Date.now()
  const bucket = (rateBuckets.get(email) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (bucket.length >= RATE_LIMIT) {
    rateBuckets.set(email, bucket)
    return false
  }
  bucket.push(now)
  rateBuckets.set(email, bucket)
  return true
}

export async function POST(request: Request): Promise<NextResponse> {
  const sessionCookie = (await cookies()).get(SESSION_COOKIE)?.value
  const session = sessionCookie ? verifySession(sessionCookie) : null
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  if (!checkRate(session.email)) {
    return NextResponse.json(
      { error: 'rate_limited', retryAfterMs: RATE_WINDOW_MS },
      { status: 429 },
    )
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 500 })
  }

  let body: { messages?: ChatMessage[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'expected JSON body' }, { status: 400 })
  }
  const messages = body.messages
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'missing messages array' }, { status: 400 })
  }
  if (messages.length > MAX_MESSAGES) {
    return NextResponse.json({ error: 'too many messages' }, { status: 400 })
  }
  for (const m of messages) {
    if (
      !m ||
      (m.role !== 'user' && m.role !== 'assistant') ||
      typeof m.content !== 'string' ||
      m.content.length > MAX_CONTENT_LEN
    ) {
      return NextResponse.json({ error: 'invalid message shape' }, { status: 400 })
    }
  }

  const client = new Anthropic({ apiKey })
  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      system: CHAT_SYSTEM,
      messages: messages.map((m) => ({
        role: m.role,
        content: [{ type: 'text', text: m.content }],
      })),
    })
    const text = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('\n\n')
    return NextResponse.json({ reply: text, usage: response.usage })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: msg }, { status: 502 })
  }
}
