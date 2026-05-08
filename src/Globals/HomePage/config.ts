import type { GlobalConfig } from 'payload'
import { revalidateHomePage } from './hooks/revalidateHomePage'

/**
 * Editable content for the marketing home page.
 *
 * Each top-level group corresponds to a section of `(frontend)/page.tsx`:
 *   hero            → HomeHeroNative.tsx (headline, rotating words, chat)
 *   logoMarquee*    → HomeHeroNative.tsx (two scrolling logo rows)
 *   discover        → HomeDiscover.tsx
 *   manage          → HomeManageCard.tsx
 *   pay             → HomePayCard.tsx
 *   ecosystem       → EcosystemStats.tsx (heading + lede + 3 stat cards)
 *
 * The components fall back to their hardcoded defaults if Payload is
 * unreachable, so this never blanks the page.
 */
export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  access: { read: () => true },
  admin: {
    group: 'Marketing',
    description:
      "Editable content for the marketing home page (bloomnetwork.ai/). Live Preview is enabled — open the page in another tab to see changes immediately.",
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          description:
            'The first thing visitors see. Headline, rotating words pill, and the chat card.',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'headline',
                  type: 'text',
                  defaultValue: "Hardware shouldn't be hard.",
                  admin: { description: 'The H1 at the top of the page.' },
                },
                {
                  name: 'subheadingPrefix',
                  type: 'text',
                  defaultValue: 'We help make',
                  admin: {
                    description:
                      'Words shown before the rotating-word pill (e.g. "We help make").',
                  },
                },
                {
                  name: 'rotatingWords',
                  type: 'array',
                  labels: { singular: 'Rotating Word', plural: 'Rotating Words' },
                  minRows: 2,
                  admin: {
                    description:
                      'Words that cycle inside the navy pill, ~1.6s each. The pill always sizes to the longest word.',
                  },
                  fields: [
                    { name: 'word', type: 'text', required: true },
                  ],
                },
                {
                  name: 'subheadingSuffix',
                  type: 'text',
                  defaultValue: 'easier.',
                  admin: {
                    description: 'Word(s) shown after the rotating-word pill.',
                  },
                },
                {
                  name: 'chatPlaceholder',
                  type: 'text',
                  defaultValue: "Describe your product's supply chain needs",
                  admin: {
                    description:
                      'Greyed-out hint text in the chat textarea before the visitor types.',
                  },
                },
                {
                  name: 'chatButtonLabel',
                  type: 'text',
                  defaultValue: 'Chat now',
                  admin: { description: 'CTA label inside the chat box.' },
                },
                {
                  name: 'chatPrefillUrl',
                  type: 'text',
                  defaultValue:
                    'https://app.bloomnetwork.ai/marketplace/request/new',
                  admin: {
                    description:
                      'Where the chat submits to. Visitor input is appended as ?prefill=… so the marketplace flow opens with their prompt pre-filled.',
                  },
                },
                {
                  name: 'badgeText',
                  type: 'text',
                  defaultValue: 'Start for free now!',
                  admin: {
                    description:
                      'The small navy pill that overlaps the bottom of the chat card.',
                  },
                },
                {
                  name: 'tagline',
                  type: 'textarea',
                  defaultValue:
                    'Bloom helps leading mobility, energy, robotics brands scale faster through our vetted network',
                  admin: {
                    description:
                      'Paragraph below the chat card. Plain text; no markdown.',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Logo Marquee',
          description:
            'Two scrolling rows of partner logos under the hero. Row 1 scrolls left; Row 2 scrolls right.',
          fields: [
            {
              name: 'logoMarqueeRow1',
              type: 'array',
              labels: { singular: 'Row 1 Logo', plural: 'Row 1 Logos' },
              admin: {
                description:
                  'Top row, scrolls left. Logos render at 56px tall, 110px max width.',
              },
              fields: [
                {
                  name: 'logoImage',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { description: 'Preferred — upload via Media library.' },
                },
                {
                  name: 'logoUrl',
                  type: 'text',
                  admin: {
                    description: 'Fallback URL (used when no Logo Image is set).',
                  },
                },
                {
                  name: 'alt',
                  type: 'text',
                  required: true,
                  admin: { description: 'Brand name (used for accessibility).' },
                },
                {
                  name: 'width',
                  type: 'number',
                  defaultValue: 200,
                  admin: { description: 'Original asset width in px.' },
                },
                {
                  name: 'height',
                  type: 'number',
                  defaultValue: 60,
                  admin: { description: 'Original asset height in px.' },
                },
              ],
            },
            {
              name: 'logoMarqueeRow2',
              type: 'array',
              labels: { singular: 'Row 2 Logo', plural: 'Row 2 Logos' },
              admin: { description: 'Bottom row, scrolls right.' },
              fields: [
                { name: 'logoImage', type: 'upload', relationTo: 'media' },
                { name: 'logoUrl', type: 'text' },
                { name: 'alt', type: 'text', required: true },
                { name: 'width', type: 'number', defaultValue: 200 },
                { name: 'height', type: 'number', defaultValue: 60 },
              ],
            },
          ],
        },
        {
          label: 'Sections',
          description:
            'Marketing copy for the main below-fold sections (Discover, Manage, Pay).',
          fields: [
            {
              name: 'discover',
              type: 'group',
              label: 'Discover Section',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue:
                    'Discover and access a vetted supply chain network ready to scale',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'Bloom intelligently matches brands with vetted supply chain and operations partners tailored to their products requirements throughout its lifecycle.',
                },
              ],
            },
            {
              name: 'manage',
              type: 'group',
              label: 'Manage Section',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: "Easily manage partners with Bloom's platform.",
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'Discover, bid, book, and pay supply chain and operation partners all on a single platform.',
                },
              ],
            },
            {
              name: 'pay',
              type: 'group',
              label: 'Pay Section',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'Simplify and expand payment options',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'Leverage BloomPay to pay all your vendors in one place and access extended payment terms up to 120 days.',
                },
              ],
            },
          ],
        },
        {
          label: 'Ecosystem Stats',
          description:
            'Stats grid below the sections — heading, lede, and 3+ stat cards.',
          fields: [
            {
              name: 'ecosystem',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'Cultivating an ecosystem',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'With deep roots in the hardware industry, we provide the support and connections you need to flourish, ensuring your business blossoms in an ever-evolving landscape.',
                },
                {
                  name: 'stats',
                  type: 'array',
                  labels: { singular: 'Stat', plural: 'Stats' },
                  minRows: 1,
                  maxRows: 6,
                  admin: {
                    description:
                      'Each card animates from 0 to its target value when it scrolls into view.',
                  },
                  fields: [
                    {
                      name: 'value',
                      type: 'number',
                      required: true,
                      admin: { description: 'Target number to count up to (e.g. 40).' },
                    },
                    {
                      name: 'suffix',
                      type: 'text',
                      defaultValue: '%',
                      admin: { description: 'Trailing symbol (e.g. "%", "x", "+").' },
                    },
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      admin: {
                        description:
                          'Big colored label (e.g. "Reduction", "Lower", "Faster").',
                      },
                    },
                    {
                      name: 'description',
                      type: 'text',
                      required: true,
                      admin: {
                        description:
                          'Small grey caption underneath (e.g. "in lead times").',
                      },
                    },
                    {
                      name: 'labelColor',
                      type: 'select',
                      defaultValue: 'orange',
                      options: [
                        { label: 'Orange', value: 'orange' },
                        { label: 'Coral', value: 'coral' },
                        { label: 'Red', value: 'red' },
                        { label: 'Navy', value: 'navy' },
                      ],
                      admin: {
                        description:
                          'Color theme for the label text. Cycle through orange/coral/red across cards for the live look.',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHomePage],
  },
}
