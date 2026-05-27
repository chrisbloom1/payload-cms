import type { AuthInfo } from '@modelcontextprotocol/sdk/server/auth/types.js'

import { timingSafeEqual } from 'crypto'

import { verifyAccessToken } from './oauth'

const EXPECTED_TOKEN = process.env.PAYLOAD_MCP_TOKEN

function constantTimeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

/**
 * Accepts two kinds of bearer tokens:
 *
 * 1. The raw `PAYLOAD_MCP_TOKEN` — used by Claude Code (.mcp.json) and curl
 *    tests. Direct, no OAuth dance.
 *
 * 2. JWTs signed by our OAuth issuer — used by claude.ai, which goes
 *    through the full OAuth flow and ends up with a long-lived access
 *    token JWT.
 */
export const verifyMcpBearer = async (
  _req: Request,
  bearerToken?: string,
): Promise<AuthInfo | undefined> => {
  if (!bearerToken) return undefined

  if (EXPECTED_TOKEN && constantTimeEqual(bearerToken, EXPECTED_TOKEN)) {
    return {
      token: bearerToken,
      clientId: 'payload-mcp-direct',
      scopes: ['payload:read', 'payload:write'],
    }
  }

  const claims = verifyAccessToken(bearerToken)
  if (claims) {
    return {
      token: bearerToken,
      clientId: claims.client_id,
      scopes: claims.scope ? claims.scope.split(' ') : ['payload:read', 'payload:write'],
    }
  }

  return undefined
}
