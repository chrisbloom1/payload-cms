import type { GlobalConfig } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { revalidateBrandsPage } from './hooks/revalidateBrandsPage'

/**
 * Editable content for /brands. Every prose section on the page is a
 * field here, so the team can rewrite copy without a deploy.
 *
 * The route falls back to inline defaults if Payload is unreachable,
 * so the page never blanks during DB outages. The Framer-exported
 * widgets (Brandsintroanimation, Animationmap, Pricingmatrix,
 * Mockupterms) and shared components like MembersTestimonials stay
 * in code — those are part of the design system, not editor content.
 */
export const BrandsPage: GlobalConfig = {
  slug: 'brands-page',
  label: 'Brands Page',
  access: { read: () => true },
  admin: {
    group: 'Marketing',
    description:
      'Editable content for /brands (For Brands marketing page). Live Preview works — open /brands in another tab to see edits live.',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'headline',
                  type: 'text',
                  defaultValue: 'Supply chain complexity is killing your momentum',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    "Hardware innovation should be about breakthroughs, not spreadsheets, shipping labels, and supplier drama. Bloom unblocks your growth by giving you instant, vetted access to the domestic manufacturing, assembly, logistics, and service partners that power today's most ambitious hardware brands.",
                },
              ],
            },
          ],
        },
        {
          label: 'Verticals',
          description:
            'Vertical tag row + 2x2 collage shown next to "Built for the brands building the future".',
          fields: [
            {
              name: 'verticals',
              type: 'array',
              labels: { singular: 'Vertical', plural: 'Verticals' },
              admin: {
                description:
                  'Each vertical becomes a tag in the orange row and a tile in the 2x2 collage.',
              },
              fields: [
                { name: 'label', type: 'text', required: true },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { description: 'Tile background image (square crop).' },
                },
                {
                  name: 'imageUrl',
                  type: 'text',
                  admin: { description: 'Fallback URL when no Media is uploaded.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Sections',
          fields: [
            {
              name: 'builtFor',
              type: 'group',
              label: 'Built For Section',
              fields: [
                { name: 'heading', type: 'text', defaultValue: 'Built for the brands building the future' },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    "Bloom is purpose-built to support the unique operational challenges of today's most advanced hardware categories, where complexity, regulation, and logistics often stall growth.",
                },
              ],
            },
            {
              name: 'coastToCoast',
              type: 'group',
              label: 'Coast to Coast Section',
              fields: [
                { name: 'heading', type: 'text', defaultValue: 'Coast to coast' },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'Our vetted network covers the entire US, linking you to local specialists and Fortune 100 powerhouses alike. Get fast, competitive access to partners ready to build, deliver, and service for you.',
                },
              ],
            },
            {
              name: 'framework',
              type: 'group',
              label: 'Framework Section',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'Proven framework built for scaling hardware brands',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    "Bloom orchestrates the heavy-lift of hardware operations so you can focus on product and customers. Here's exactly what happens after you request access.",
                },
                {
                  name: 'steps',
                  type: 'array',
                  labels: { singular: 'Step', plural: 'Steps' },
                  minRows: 2,
                  maxRows: 8,
                  admin: {
                    description: 'Numbered chevron steps under the framework heading.',
                  },
                  fields: [
                    { name: 'label', type: 'text', required: true, admin: { description: 'Short uppercase label (e.g. "JOIN").' } },
                    { name: 'description', type: 'text', required: true },
                  ],
                },
              ],
            },
            {
              name: 'pricing',
              type: 'group',
              label: 'Pricing Section',
              fields: [
                { name: 'heading', type: 'text', defaultValue: 'Choose your plan' },
                {
                  name: 'body',
                  type: 'richText',
                  editor: lexicalEditor({
                    features: ({ rootFeatures }) => [
                      ...rootFeatures,
                      FixedToolbarFeature(),
                      InlineToolbarFeature(),
                      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3'] }),
                    ],
                  }),
                  admin: {
                    description:
                      'Description above the pricing matrix. Use bold for term emphasis (e.g. "Bloom Preferred Pricing", "BloomPay").',
                  },
                },
              ],
            },
            {
              name: 'bloomPay',
              type: 'group',
              label: 'BloomPay Section',
              fields: [
                { name: 'heading', type: 'text', defaultValue: 'Simplify and expand payment options' },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'Leverage BloomPay to pay all your vendors in one place and access on platform extended payment terms up to 120 days.',
                },
              ],
            },
          ],
        },
        {
          label: 'CTA & FAQ',
          fields: [
            {
              name: 'cta',
              type: 'group',
              label: 'Bottom CTA',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue:
                    'Ready to cut costs, launch faster, and de‑risk your operations?',
                },
                {
                  name: 'buttonLabel',
                  type: 'text',
                  defaultValue: 'UNLOCK YOUR POTENTIAL',
                },
                {
                  name: 'buttonHref',
                  type: 'text',
                  defaultValue: 'https://welcome.bloomnetwork.ai/',
                },
              ],
            },
            {
              name: 'faqHeading',
              type: 'text',
              defaultValue: 'FAQ',
              admin: {
                description: 'Heading for the FAQ accordion at the bottom of the page.',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateBrandsPage],
  },
}
