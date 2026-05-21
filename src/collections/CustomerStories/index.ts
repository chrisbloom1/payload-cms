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
import { Banner } from '../../blocks/Banner/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { getServerSideURL } from '@/utilities/getURL'

// CollectionConfig is unparameterized here because 'customer-stories'
// isn't in payload-types.ts until `payload generate:types` runs against
// the migrated DB. Once that ships, we can switch to
// CollectionConfig<'customer-stories'> for typed defaultPopulate etc.
export const CustomerStories: CollectionConfig = {
  slug: 'customer-stories',
  labels: {
    singular: 'Customer Story',
    plural: 'Customer Stories',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    cardTheme: true,
    cardAlign: true,
    sortOrder: true,
    heroImage: true,
    heroUrl: true,
    logoImage: true,
    logoUrl: true,
    logoDarkImage: true,
    logoDarkUrl: true,
    logoAlt: true,
    logoType: true,
    logoMonoColor: true,
  },
  admin: {
    group: 'Marketing',
    description:
      'Case studies shown at /customer-stories and /customer-stories/[slug]. The Card tab controls the index-page presentation (theme, alignment, ordering); Branding sets the hero/logo assets; Article holds the long-form story.',
    defaultColumns: ['title', 'slug', 'sortOrder', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const slug = typeof data?.slug === 'string' ? data.slug : ''
        return `${getServerSideURL()}/customer-stories/${slug}`
      },
    },
    preview: (data) => {
      const slug = typeof data?.slug === 'string' ? data.slug : ''
      return `${getServerSideURL()}/customer-stories/${slug}`
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Headline shown on both the index card and the article hero.',
      },
    },
    ...slugField(),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Card',
          description:
            'How this story appears on the /customer-stories index page.',
          fields: [
            {
              name: 'cardTheme',
              type: 'select',
              defaultValue: 'cream',
              options: [
                { label: 'Navy', value: 'navy' },
                { label: 'Navy Deep', value: 'navyDeep' },
                { label: 'Teal', value: 'teal' },
                { label: 'Mint', value: 'mint' },
                { label: 'Cream', value: 'cream' },
                { label: 'Lavender', value: 'lavender' },
                { label: 'Amber', value: 'amber' },
              ],
              admin: {
                description:
                  'Background color of the overlapping info card on the index page. Pick something that contrasts with the hero image.',
              },
            },
            {
              name: 'cardAlign',
              type: 'select',
              defaultValue: 'left',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ],
              admin: {
                description: 'Which side the card overlaps the hero image.',
              },
            },
            {
              name: 'sortOrder',
              type: 'number',
              defaultValue: 0,
              admin: {
                description:
                  'Order on the /customer-stories index page (lower numbers appear first).',
              },
            },
          ],
        },
        {
          label: 'Branding',
          description:
            'Hero image and logo assets. Upload via the Media library; URLs are a legacy fallback for migrated stories.',
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Hero image at the top of the article and card.',
              },
            },
            {
              name: 'heroUrl',
              type: 'text',
              admin: {
                description:
                  'Fallback hero URL or path. Used only when no Hero Image is uploaded.',
              },
            },
            {
              name: 'logoImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description:
                  'Customer logo. Used on both the card and the article header.',
              },
            },
            {
              name: 'logoUrl',
              type: 'text',
              admin: {
                description: 'Fallback logo URL or path.',
              },
            },
            {
              name: 'logoDarkImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description:
                  'Optional alternate logo for dark-themed cards (white version, used when card theme is navy/navyDeep/teal).',
              },
            },
            {
              name: 'logoDarkUrl',
              type: 'text',
              admin: {
                description: 'Fallback dark-card logo URL or path.',
              },
            },
            {
              name: 'logoAlt',
              type: 'text',
              required: true,
              admin: {
                description: 'Accessible name for the logo (e.g. customer name).',
              },
            },
            {
              name: 'logoType',
              type: 'select',
              defaultValue: 'monochrome',
              options: [
                { label: 'Monochrome', value: 'monochrome' },
                { label: 'Color', value: 'color' },
              ],
              admin: {
                description:
                  'Whether the logo is a flat single-color silhouette or a full-color mark.',
              },
            },
            {
              name: 'logoMonoColor',
              type: 'select',
              defaultValue: 'black',
              options: [
                { label: 'White', value: 'white' },
                { label: 'Black', value: 'black' },
              ],
              admin: {
                description:
                  'Source color of the monochrome logo. White-source logos need brightness(0) on light cards to remain visible.',
                condition: (data) => data?.logoType === 'monochrome',
              },
            },
          ],
        },
        {
          label: 'Article',
          description: 'Long-form story content shown on the detail page.',
          fields: [
            {
              name: 'topBenefits',
              type: 'array',
              labels: {
                singular: 'Top Benefit',
                plural: 'Top Benefits',
              },
              admin: {
                description:
                  '3 short, ALL-CAPS-styled benefit lines that appear in the dark navy band beneath the hero. Aim for 1–2 sentences each.',
              },
              fields: [
                {
                  name: 'benefit',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'nodes',
              type: 'array',
              labels: {
                singular: 'Node',
                plural: 'Nodes',
              },
              admin: {
                description:
                  'Bloom service nodes used (Build, Deliver, Service). Shown as pills next to the top benefits.',
              },
              fields: [
                {
                  name: 'value',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Build', value: 'Build' },
                    { label: 'Deliver', value: 'Deliver' },
                    { label: 'Service', value: 'Service' },
                  ],
                },
              ],
            },
            {
              name: 'intro',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                  BlocksFeature({ blocks: [Banner, MediaBlock] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
              admin: {
                description:
                  'Opening paragraph(s) introducing the customer and the challenge.',
              },
            },
            {
              name: 'body',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                  BlocksFeature({ blocks: [Banner, MediaBlock] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
              admin: {
                description:
                  'Main narrative body: what Bloom did and how it played out.',
              },
            },
            {
              name: 'quote',
              type: 'group',
              admin: {
                description: 'Customer pull-quote shown after the body.',
              },
              fields: [
                {
                  name: 'text',
                  type: 'textarea',
                  required: false,
                },
                {
                  name: 'author',
                  type: 'text',
                  required: false,
                },
                {
                  name: 'role',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'e.g. "Co-Founder, Grounded".',
                  },
                },
              ],
            },
            {
              name: 'outro',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                ],
              }),
              admin: {
                description: 'Optional closing paragraph after the quote.',
              },
            },
            {
              name: 'benefits',
              type: 'array',
              labels: {
                singular: 'Detail Benefit',
                plural: 'Detail Benefits',
              },
              admin: {
                description:
                  'Numbered/bulleted detail benefits at the bottom (typically 3, max 6).',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'closing',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                ],
              }),
              admin: {
                description: 'Optional final closing line.',
              },
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: 'media' }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
  versions: {
    drafts: {
      autosave: { interval: 100 },
    },
    maxPerDoc: 50,
  },
}
