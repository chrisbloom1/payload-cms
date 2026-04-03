import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const ReleaseNotes: CollectionConfig = {
  slug: 'release-notes',
  labels: {
    singular: 'Release Note',
    plural: 'Release Notes',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'version', 'releaseDate', 'breakingChanges'],
    group: 'Knowledge Base',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'version',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Semantic version (e.g. 2.4.0)',
      },
    },
    {
      name: 'releaseDate',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'affectedUserTypes',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Brand', value: 'brand' },
        { label: 'Provider', value: 'provider' },
        { label: 'Admin', value: 'admin' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'breakingChanges',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
