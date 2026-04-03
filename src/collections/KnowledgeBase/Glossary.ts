import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { slugField } from '@/fields/slug'

export const Glossary: CollectionConfig = {
  slug: 'glossary',
  labels: {
    singular: 'Glossary Term',
    plural: 'Glossary',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'term',
    defaultColumns: ['term', 'updatedAt'],
    group: 'Knowledge Base',
  },
  fields: [
    {
      name: 'term',
      type: 'text',
      required: true,
    },
    {
      name: 'definition',
      type: 'richText',
      required: true,
    },
    {
      name: 'relatedTerms',
      type: 'relationship',
      relationTo: 'glossary',
      hasMany: true,
      filterOptions: ({ id }) => ({
        id: { not_in: [id] },
      }),
    },
    ...slugField('term'),
  ],
}
