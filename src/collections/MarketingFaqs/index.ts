import type { CollectionConfig } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

/**
 * Marketing-page FAQ entries. Distinct from the KB-focused `faqs`
 * collection (which targets the help-center workflow). Each entry can
 * be surfaced on /brands, /providers, or both — controlled by the
 * `surfaces` checkbox so a single FAQ can appear in multiple places
 * without duplication.
 */
export const MarketingFaqs: CollectionConfig = {
  slug: 'marketing-faqs',
  labels: { singular: 'Marketing FAQ', plural: 'Marketing FAQs' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    group: 'Marketing',
    description:
      'FAQ entries shown at the bottom of /brands and /providers. Use the Surfaces field to control which page(s) each FAQ appears on.',
    defaultColumns: ['question', 'surfaces', 'sortOrder', 'updatedAt'],
    useAsTitle: 'question',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'surfaces',
      type: 'select',
      hasMany: true,
      defaultValue: ['brands', 'providers'],
      options: [
        { label: 'For Brands page', value: 'brands' },
        { label: 'For Providers page', value: 'providers' },
      ],
      admin: {
        description:
          'Which marketing page(s) this FAQ appears on. Most entries live on both.',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Order within the FAQ accordion (lower numbers appear first).',
      },
    },
  ],
}
