import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generateSummary } from './hooks/generateSummary'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'audience', '_status', 'updatedAt'],
    group: 'Knowledge Base',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'body',
              type: 'richText',
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
            },
          ],
        },
        {
          label: 'Metadata',
          fields: [
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'kb-categories',
              required: true,
            },
            {
              name: 'tags',
              type: 'array',
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'audience',
              type: 'select',
              required: true,
              defaultValue: 'both',
              options: [
                { label: 'Brand', value: 'brand' },
                { label: 'Provider', value: 'provider' },
                { label: 'Both', value: 'both' },
              ],
            },
            {
              name: 'summary',
              type: 'textarea',
              admin: {
                description: 'Auto-generated plain text summary for LLM context (max 500 chars). Overwritten on save.',
                readOnly: true,
              },
            },
            {
              name: 'lastVerifiedDate',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayOnly',
                },
              },
            },
          ],
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [
      (args) => {
        if (args.context?.skipSummaryGeneration) return args.doc
        return generateSummary(args)
      },
    ],
  },
  versions: {
    drafts: true,
  },
}
