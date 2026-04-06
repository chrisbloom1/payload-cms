import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'

export const FeatureRequests: CollectionConfig = {
  slug: 'feature-requests',
  labels: {
    singular: 'Feature Request',
    plural: 'Feature Requests',
  },
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'votes', 'audience', '_status', 'updatedAt'],
    group: 'Knowledge Base',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Under Review', value: 'under-review' },
        { label: 'Planned', value: 'planned' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Shipped', value: 'shipped' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'votes',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'submitterName',
      type: 'text',
    },
    {
      name: 'submitterEmail',
      type: 'text',
      access: {
        read: () => false,
      },
    },
    {
      name: 'audience',
      type: 'select',
      defaultValue: 'both',
      options: [
        { label: 'Brand', value: 'brand' },
        { label: 'Provider', value: 'provider' },
        { label: 'Both', value: 'both' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'kb-categories',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: true,
  },
}
