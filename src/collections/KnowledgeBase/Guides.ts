import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const Guides: CollectionConfig = {
  slug: 'guides',
  labels: {
    singular: 'Guide',
    plural: 'Guides',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'audience', '_status', 'updatedAt'],
    group: 'Knowledge Base',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'loomUrl',
      type: 'text',
      required: true,
      label: 'Loom Share URL',
      admin: {
        description: 'Full Loom share URL (e.g. https://www.loom.com/share/abc123)',
      },
    },
    {
      name: 'loomEmbedId',
      type: 'text',
      required: true,
      label: 'Loom Embed ID',
      admin: {
        description: 'Just the video ID for embedding (e.g. abc123)',
      },
    },
    {
      name: 'audience',
      type: 'select',
      defaultValue: 'both',
      options: [
        { label: 'Brand', value: 'brand' },
        { label: 'Provider', value: 'provider' },
        { label: 'Ops', value: 'ops' },
        { label: 'Both', value: 'both' },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'kb-categories',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: true,
  },
}
