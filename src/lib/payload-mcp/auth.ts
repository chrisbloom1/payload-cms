import type { AuthInfo } from '@modelcontextprotocol/sdk/server/auth/types.js'

import { timingSafeEqual } from 'crypto'

const EXPECTED_TOKEN = process.env.PAYLOAD_MCP_TOKEN

function constantTimeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

export const verifyMcpBearer = async (
  _req: Request,
  bearerToken?: string,
): Promise<AuthInfo | undefined> => {
  if (!EXPECTED_TOKEN) {
    console.error('[payload-mcp] PAYLOAD_MCP_TOKEN is not set; rejecting all requests')
    return undefined
  }
  if (!bearerToken) return undefined
  if (!constantTimeEqual(bearerToken, EXPECTED_TOKEN)) return undefined

  return {
    token: bearerToken,
    clientId: 'payload-mcp',
    scopes: ['payload:read', 'payload:write'],
  }
}
