import { z } from 'zod'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { recordAudit } from './audit'
import { deflateRichText, inflateRichText } from './richtext'

const text = (value: unknown) => ({
  content: [
    {
      type: 'text' as const,
      text: typeof value === 'string' ? value : JSON.stringify(value, null, 2),
    },
  ],
})

const errorText = (err: unknown) => ({
  content: [
    {
      type: 'text' as const,
      text: `ERROR: ${err instanceof Error ? err.message : String(err)}`,
    },
  ],
  isError: true,
})

const whereSchema = z
  .record(z.string(), z.any())
  .describe('Payload where clause, e.g. { slug: { equals: "foo" } }')

export function registerPayloadTools(server: McpServer) {
  // -----------------------------------------------------------------------
  // READS
  // -----------------------------------------------------------------------
  server.registerTool(
    'payload_list_collections',
    {
      title: 'List Payload collections and globals',
      description:
        'Return every collection slug and global slug currently configured in Payload. Use this before find/create/update to discover what is editable.',
      inputSchema: {},
    },
    async () => {
      try {
        const payload = await getPayload({ config: configPromise })
        const collections = Object.values(payload.collections).map((c) => ({
          slug: c.config.slug,
          labels: c.config.labels,
          versions: Boolean(c.config.versions),
          drafts: Boolean(
            typeof c.config.versions === 'object' && c.config.versions?.drafts,
          ),
        }))
        const globals = payload.config.globals.map((g) => ({
          slug: g.slug,
          label: g.label,
        }))
        return text({ collections, globals })
      } catch (err) {
        return errorText(err)
      }
    },
  )

  server.registerTool(
    'payload_find',
    {
      title: 'Find documents in a collection',
      description:
        'Query a Payload collection. Supports where filters, pagination, depth, and draft toggle. Returns matching docs with rich text fields converted to markdown.',
      inputSchema: {
        collection: z.string(),
        where: whereSchema.optional(),
        limit: z.number().int().min(1).max(100).default(10),
        page: z.number().int().min(1).default(1),
        sort: z.string().optional(),
        depth: z.number().int().min(0).max(5).default(1),
        draft: z.boolean().default(false),
      },
    },
    async ({ collection, where, limit, page, sort, depth, draft }) => {
      try {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.find({
          collection,
          where,
          limit,
          page,
          sort,
          depth,
          draft,
          overrideAccess: true,
        } as Parameters<typeof payload.find>[0])
        const docs = result.docs.map((doc) =>
          deflateRichText(doc as unknown as Record<string, unknown>),
        )
        return text({ ...result, docs })
      } catch (err) {
        return errorText(err)
      }
    },
  )

  server.registerTool(
    'payload_find_by_id',
    {
      title: 'Find one document by ID',
      description:
        'Fetch a single document by ID. Rich text fields come back as markdown for easy reading; set raw=true for original Lexical JSON.',
      inputSchema: {
        collection: z.string(),
        id: z.string(),
        depth: z.number().int().min(0).max(5).default(1),
        draft: z.boolean().default(false),
        raw: z.boolean().default(false),
      },
    },
    async ({ collection, id, depth, draft, raw }) => {
      try {
        const payload = await getPayload({ config: configPromise })
        const doc = await payload.findByID({
          collection,
          id,
          depth,
          draft,
          overrideAccess: true,
        } as Parameters<typeof payload.findByID>[0])
        return text(raw ? doc : deflateRichText(doc as unknown as Record<string, unknown>))
      } catch (err) {
        return errorText(err)
      }
    },
  )

  server.registerTool(
    'payload_find_global',
    {
      title: 'Find a Payload global',
      description: 'Fetch a single global (home-page, header, footer, etc.) with rich text as markdown.',
      inputSchema: {
        slug: z.string(),
        depth: z.number().int().min(0).max(5).default(1),
        draft: z.boolean().default(false),
        raw: z.boolean().default(false),
      },
    },
    async ({ slug, depth, draft, raw }) => {
      try {
        const payload = await getPayload({ config: configPromise })
        const doc = await payload.findGlobal({
          slug,
          depth,
          draft,
          overrideAccess: true,
        } as Parameters<typeof payload.findGlobal>[0])
        return text(raw ? doc : deflateRichText(doc as unknown as Record<string, unknown>))
      } catch (err) {
        return errorText(err)
      }
    },
  )

  // -----------------------------------------------------------------------
  // WRITES (audit-logged)
  // -----------------------------------------------------------------------
  server.registerTool(
    'payload_create',
    {
      title: 'Create a document',
      description:
        'Create a new document in a collection. For versioned collections this creates a DRAFT by default. Pass draft=false to publish immediately. Rich text fields may be provided as markdown strings.',
      inputSchema: {
        collection: z.string(),
        data: z.record(z.string(), z.any()),
        draft: z.boolean().default(true),
      },
    },
    async ({ collection, data, draft }) => {
      const payload = await getPayload({ config: configPromise })
      try {
        const inflated = inflateRichText(payload, collection, { ...data })
        const doc = await payload.create({
          collection,
          data: inflated,
          draft,
          overrideAccess: true,
        } as Parameters<typeof payload.create>[0])
        const summary = { id: (doc as { id: unknown }).id, collection, draft }
        await recordAudit({
          payload,
          tool: 'payload_create',
          collection,
          documentId: String((doc as { id: unknown }).id),
          args: { collection, draft, dataKeys: Object.keys(data) },
          status: 'success',
          result: summary,
        })
        return text(summary)
      } catch (err) {
        await recordAudit({
          payload,
          tool: 'payload_create',
          collection,
          args: { collection, draft, dataKeys: Object.keys(data ?? {}) },
          status: 'error',
          result: { message: err instanceof Error ? err.message : String(err) },
        })
        return errorText(err)
      }
    },
  )

  server.registerTool(
    'payload_update',
    {
      title: 'Update a document',
      description:
        'Patch fields on an existing document. For versioned collections this updates the DRAFT by default; the published version is left alone until payload_publish is called. Rich text fields may be markdown.',
      inputSchema: {
        collection: z.string(),
        id: z.string(),
        data: z.record(z.string(), z.any()),
        draft: z.boolean().default(true),
      },
    },
    async ({ collection, id, data, draft }) => {
      const payload = await getPayload({ config: configPromise })
      try {
        const inflated = inflateRichText(payload, collection, { ...data })
        const doc = await payload.update({
          collection,
          id,
          data: inflated,
          draft,
          overrideAccess: true,
        } as Parameters<typeof payload.update>[0])
        const summary = { id: (doc as { id: unknown }).id, collection, draft }
        await recordAudit({
          payload,
          tool: 'payload_update',
          collection,
          documentId: id,
          args: { collection, id, draft, dataKeys: Object.keys(data) },
          status: 'success',
          result: summary,
        })
        return text(summary)
      } catch (err) {
        await recordAudit({
          payload,
          tool: 'payload_update',
          collection,
          documentId: id,
          args: { collection, id, draft, dataKeys: Object.keys(data ?? {}) },
          status: 'error',
          result: { message: err instanceof Error ? err.message : String(err) },
        })
        return errorText(err)
      }
    },
  )

  server.registerTool(
    'payload_publish',
    {
      title: 'Publish a draft document',
      description:
        'Promote the current draft of a document to published status. Only works on versioned collections with drafts enabled.',
      inputSchema: {
        collection: z.string(),
        id: z.string(),
      },
    },
    async ({ collection, id }) => {
      const payload = await getPayload({ config: configPromise })
      try {
        const doc = await payload.update({
          collection,
          id,
          data: { _status: 'published' },
          overrideAccess: true,
        } as Parameters<typeof payload.update>[0])
        const summary = { id: (doc as { id: unknown }).id, collection, status: 'published' }
        await recordAudit({
          payload,
          tool: 'payload_publish',
          collection,
          documentId: id,
          args: { collection, id },
          status: 'success',
          result: summary,
        })
        return text(summary)
      } catch (err) {
        await recordAudit({
          payload,
          tool: 'payload_publish',
          collection,
          documentId: id,
          args: { collection, id },
          status: 'error',
          result: { message: err instanceof Error ? err.message : String(err) },
        })
        return errorText(err)
      }
    },
  )

  server.registerTool(
    'payload_delete',
    {
      title: 'Delete a document',
      description: 'Permanently delete a document. There is no undo — prefer drafts/unpublish where possible.',
      inputSchema: {
        collection: z.string(),
        id: z.string(),
      },
    },
    async ({ collection, id }) => {
      const payload = await getPayload({ config: configPromise })
      try {
        const doc = await payload.delete({
          collection,
          id,
          overrideAccess: true,
        } as unknown as Parameters<typeof payload.delete>[0])
        const summary = { id, collection, deleted: true }
        await recordAudit({
          payload,
          tool: 'payload_delete',
          collection,
          documentId: id,
          args: { collection, id },
          status: 'success',
          result: { ...summary, before: doc },
        })
        return text(summary)
      } catch (err) {
        await recordAudit({
          payload,
          tool: 'payload_delete',
          collection,
          documentId: id,
          args: { collection, id },
          status: 'error',
          result: { message: err instanceof Error ? err.message : String(err) },
        })
        return errorText(err)
      }
    },
  )

  server.registerTool(
    'payload_update_global',
    {
      title: 'Update a global',
      description:
        'Patch fields on a Payload global. For versioned globals this updates the draft by default.',
      inputSchema: {
        slug: z.string(),
        data: z.record(z.string(), z.any()),
        draft: z.boolean().default(true),
      },
    },
    async ({ slug, data, draft }) => {
      const payload = await getPayload({ config: configPromise })
      try {
        const inflated = inflateRichText(payload, slug, { ...data }, 'global')
        const doc = await payload.updateGlobal({
          slug,
          data: inflated,
          draft,
          overrideAccess: true,
        } as Parameters<typeof payload.updateGlobal>[0])
        const summary = { slug, draft, updated: true }
        await recordAudit({
          payload,
          tool: 'payload_update_global',
          collection: slug,
          args: { slug, draft, dataKeys: Object.keys(data) },
          status: 'success',
          result: { ...summary, id: (doc as { id?: unknown }).id ?? null },
        })
        return text(summary)
      } catch (err) {
        await recordAudit({
          payload,
          tool: 'payload_update_global',
          collection: slug,
          args: { slug, draft, dataKeys: Object.keys(data ?? {}) },
          status: 'error',
          result: { message: err instanceof Error ? err.message : String(err) },
        })
        return errorText(err)
      }
    },
  )
}
