import type { Payload } from 'payload'

type AuditTool =
  | 'payload_create'
  | 'payload_update'
  | 'payload_delete'
  | 'payload_publish'
  | 'payload_update_global'

type AuditInput = {
  payload: Payload
  tool: AuditTool
  collection?: string
  documentId?: string
  args: unknown
  status: 'success' | 'error'
  result: unknown
}

export async function recordAudit({
  payload,
  tool,
  collection,
  documentId,
  args,
  status,
  result,
}: AuditInput): Promise<void> {
  const summary = [tool, collection, documentId].filter(Boolean).join(' ') || tool
  try {
    await payload.create({
      collection: 'mcp-audit-log',
      data: {
        summary,
        tool,
        collection: collection ?? undefined,
        documentId: documentId ?? undefined,
        status,
        args: (args ?? undefined) as never,
        result: (result ?? undefined) as never,
      },
      overrideAccess: true,
    })
  } catch (err) {
    // Never let audit-log failure mask the underlying tool result.
    console.error('[payload-mcp] failed to write audit log entry', err)
  }
}
