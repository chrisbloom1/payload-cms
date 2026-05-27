# Payload MCP

A Model Context Protocol (MCP) endpoint that lets Claude (Claude Code, claude.ai, any MCP client) read and edit content in this Payload instance.

It runs as a Next.js Route Handler at `/api/mcp/[transport]`, talks to Payload's Local API in-process (same Node process as the site), and is deployed wherever the site is deployed. No separate service, no extra infrastructure.

## What it can do

| Tool | Purpose |
|---|---|
| `payload_list_collections` | Discover what collections + globals exist |
| `payload_find` | Query a collection with where/limit/sort/depth/draft |
| `payload_find_by_id` | Fetch one document by ID |
| `payload_find_global` | Fetch a global (home page, header, etc.) |
| `payload_create` | Create a document (defaults to **draft**) |
| `payload_update` | Patch a document (defaults to **draft**) |
| `payload_publish` | Promote a draft to published |
| `payload_delete` | Delete a document permanently |
| `payload_update_global` | Patch a global (defaults to **draft** on versioned globals) |

Rich-text fields are converted **markdown ↔ Lexical** automatically so you can write `## Heading` instead of constructing Lexical JSON.

**Markdown coverage:** headings, paragraphs, bold/italic, inline code, ordered/unordered lists, and blockquotes round-trip cleanly. Inline links currently pass through as raw `[text](url)` strings rather than tokenized link nodes — readable but not clickable until edited in admin. For sophisticated content (custom blocks, embedded media, banner blocks), pass raw Lexical JSON directly in the field instead of markdown.

Every mutation is appended to the `MCPAuditLog` collection (visible in admin under **System → MCP Audit Log**) — tool, args, collection, doc ID, status, timestamp.

## Setup

### 1. Generate a bearer token

```sh
openssl rand -hex 32
```

Save the output — you'll paste it into Vercel and into your MCP clients.

### 2. Configure environment variables

Add `PAYLOAD_MCP_TOKEN` on Vercel for **Production**, **Preview**, and **Development**:

```sh
vercel env add PAYLOAD_MCP_TOKEN production
vercel env add PAYLOAD_MCP_TOKEN preview
vercel env add PAYLOAD_MCP_TOKEN development
```

For local dev, also put it in `.env.local`:

```
PAYLOAD_MCP_TOKEN=<your-hex-token>
```

### 3. Deploy

```sh
vercel --prod
```

Once deployed, the endpoint is at `https://<your-domain>/api/mcp/mcp` (streamable HTTP) and `https://<your-domain>/api/mcp/sse` (SSE fallback).

### 4. Connect Claude Code (this project)

`.mcp.json` is already committed at the repo root. It reads `PAYLOAD_MCP_URL` and `PAYLOAD_MCP_TOKEN` from your shell environment. To use it, export them in your shell or add them to your Claude Code project env:

```sh
export PAYLOAD_MCP_URL=https://<your-domain>/api/mcp/mcp
export PAYLOAD_MCP_TOKEN=<your-hex-token>
```

Then run `claude` from this directory — the `payload` MCP server will appear in the connected list.

### 5. Connect claude.ai

In the claude.ai UI, **Settings → Connectors → Add custom connector**:

- **Name**: Payload
- **URL**: `https://<your-domain>/api/mcp/mcp`
- **Auth**: Bearer token → paste `PAYLOAD_MCP_TOKEN`

Once it shows as connected, you can ask Claude things like "show me draft articles" or "create a draft help article from this Slack thread" from your phone or any browser.

## Safety model

- **Drafts by default** on every create/update for versioned collections. Publishing requires an explicit `payload_publish` call. You can override with `draft: false` in the same call if you really want to publish immediately.
- **Audit log** records every mutation. Read-only in admin — Claude itself can't tamper with it (the access control disallows update; the route uses `overrideAccess: true` only to write new entries).
- **Bearer token** is a single shared secret. If it leaks, rotate it: `vercel env rm PAYLOAD_MCP_TOKEN production && vercel env add PAYLOAD_MCP_TOKEN production` then redeploy.
- **No OAuth** — for a single-user setup this is intentional. If you ever share access, swap to OAuth or per-client tokens.

## How it works under the hood

```
Claude  ──HTTPS──▶  /api/mcp/[transport]/route.ts
                        │
                        │  withMcpAuth (bearer-token check)
                        ▼
                    createMcpHandler (mcp-handler)
                        │
                        │  tool dispatch
                        ▼
                    src/lib/payload-mcp/tools.ts
                        │
                        ├─▶  getPayload({ config }) ──▶  Local API
                        │                                 │
                        │                                 ▼
                        │                            Postgres
                        │
                        └─▶  recordAudit() ───▶  mcp-audit-log collection
```

The MCP handler uses Vercel's `mcp-handler` package, which wraps the `@modelcontextprotocol/sdk` Streamable HTTP transport for Next.js App Router. Markdown ↔ Lexical conversion uses Payload's re-exported Lexical packages at `@payloadcms/richtext-lexical/lexical/*` so we don't need direct `@lexical/*` dependencies.

## Files

| Path | What it does |
|---|---|
| `src/app/(frontend)/api/mcp/[transport]/route.ts` | Next.js route handler |
| `src/lib/payload-mcp/auth.ts` | Bearer token verification |
| `src/lib/payload-mcp/audit.ts` | Audit-log writer |
| `src/lib/payload-mcp/lexical.ts` | Markdown ↔ Lexical primitives |
| `src/lib/payload-mcp/richtext.ts` | Schema walker that finds rich-text fields |
| `src/lib/payload-mcp/tools.ts` | All MCP tool implementations |
| `src/collections/MCPAuditLog.ts` | Append-only audit log collection |
| `.mcp.json` | Claude Code project-scoped connection config |
