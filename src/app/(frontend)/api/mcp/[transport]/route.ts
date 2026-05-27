import { createMcpHandler, withMcpAuth } from 'mcp-handler'

import { verifyMcpBearer } from '@/lib/payload-mcp/auth'
import { registerPayloadTools } from '@/lib/payload-mcp/tools'

// Payload needs Node.js runtime (postgres adapter, sharp). MCP is stateful per
// request so we must opt out of caching.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 300

const handler = createMcpHandler(
  (server) => {
    registerPayloadTools(server)
  },
  {},
  {
    basePath: '/api/mcp',
    maxDuration: 300,
    verboseLogs: process.env.NODE_ENV !== 'production',
  },
)

const authHandler = withMcpAuth(handler, verifyMcpBearer, {
  required: true,
  // Tells 401 responses to advertise our OAuth resource metadata so
  // claude.ai discovers the OAuth flow and walks through it.
  resourceMetadataPath: '/.well-known/oauth-protected-resource',
})

export { authHandler as GET, authHandler as POST, authHandler as DELETE }
