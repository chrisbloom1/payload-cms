import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'

export const MCPAuditLog: CollectionConfig = {
  slug: 'mcp-audit-log',
  labels: {
    singular: 'MCP Audit Entry',
    plural: 'MCP Audit Log',
  },
  access: {
    read: authenticated,
    create: () => true,
    update: () => false,
    delete: authenticated,
  },
  admin: {
    group: 'System',
    useAsTitle: 'summary',
    defaultColumns: ['summary', 'tool', 'status', 'createdAt'],
    description: 'Every mutation made through the Payload MCP endpoint. Read-only.',
  },
  fields: [
    {
      name: 'summary',
      type: 'text',
      required: true,
      admin: {
        description: 'Human-readable one-liner like "update articles/abc123"',
      },
    },
    {
      name: 'tool',
      type: 'select',
      required: true,
      options: [
        { label: 'payload_create', value: 'payload_create' },
        { label: 'payload_update', value: 'payload_update' },
        { label: 'payload_delete', value: 'payload_delete' },
        { label: 'payload_publish', value: 'payload_publish' },
        { label: 'payload_update_global', value: 'payload_update_global' },
      ],
    },
    {
      name: 'collection',
      type: 'text',
      admin: {
        description: 'Collection or global slug the mutation targeted',
      },
    },
    {
      name: 'documentId',
      type: 'text',
      admin: {
        description: 'Document ID (for update/delete/publish), empty for create',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'success',
      options: [
        { label: 'Success', value: 'success' },
        { label: 'Error', value: 'error' },
      ],
    },
    {
      name: 'args',
      type: 'json',
      admin: {
        description: 'Tool arguments as provided by the MCP client',
      },
    },
    {
      name: 'result',
      type: 'json',
      admin: {
        description: 'On success: result summary. On error: error message + stack.',
      },
    },
  ],
  timestamps: true,
}
