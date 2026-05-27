import type { GlobalConfig } from 'payload'
import { revalidateProvidersPage } from './hooks/revalidateProvidersPage'

/**
 * Editable content for /providers (For Providers marketing page).
 *
 * Schema mirrors BrandsPage's structure where the pages share a section
 * (hero, framework, CTA, FAQ heading) and adds Providers-specific
 * sections: Hero icon tiles, Benefits rows (3), Qualifying Criteria.
 */
export const ProvidersPage: GlobalConfig = {
  slug: 'providers-page',
  label: 'Providers Page',
  access: { read: () => true },
  admin: {
    group: 'Marketing',
    description:
      'Editable content for /providers. Live Preview works, open /providers in another tab to see edits live.',
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
                  defaultValue:
                    'Work with the most promising hardware brands, vetted by Bloom.',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    "Unlock a pipeline of qualified projects from fast-growing hard-tech companies, backed by Bloom's rigorous screening and centralized payments.",
                },
                {
                  name: 'iconTiles',
                  type: 'array',
                  labels: { singular: 'Icon Tile', plural: 'Icon Tiles' },
                  admin: {
                    description:
                      'Mint-tinted square tiles next to the hero (line-art delivery icons). Render with currentColor; supply SVG paths or upload images.',
                  },
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                    {
                      name: 'imageUrl',
                      type: 'text',
                      admin: { description: 'Fallback URL when no Media is uploaded.' },
                    },
                    {
                      name: 'alt',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Benefits',
          description: 'Three two-column benefit rows under the hero.',
          fields: [
            {
              name: 'benefits',
              type: 'array',
              labels: { singular: 'Benefit Row', plural: 'Benefit Rows' },
              minRows: 1,
              maxRows: 6,
              admin: {
                description:
                  'Each row alternates left/right (auto). Eyebrow is the small uppercase tag above the heading.',
              },
              fields: [
                { name: 'eyebrow', type: 'text', admin: { description: 'Short uppercase tag (e.g. "QUALIFIED LEADS").' } },
                { name: 'heading', type: 'text', required: true },
                { name: 'body', type: 'textarea', required: true },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  admin: { description: 'Visual shown next to the text (platform screenshot, illustration, etc).' },
                },
                { name: 'imageUrl', type: 'text', admin: { description: 'Fallback URL.' } },
                { name: 'imageAlt', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Sections',
          fields: [
            {
              name: 'criteria',
              type: 'group',
              label: 'Qualifying Criteria',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'Bloom Service Provider Qualifying Criteria',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'Each partner is evaluated across 8 core criteria before joining the Bloom network.',
                },
                {
                  name: 'items',
                  type: 'array',
                  labels: { singular: 'Criterion', plural: 'Criteria' },
                  minRows: 1,
                  fields: [
                    { name: 'label', type: 'text', required: true, admin: { description: 'Short label (e.g. "Service 01").' } },
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea', required: true },
                  ],
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
                  defaultValue: 'Win better jobs. Get paid faster.',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'Bloom matches proven providers with vetted hardware brands and handles the back-office (RFQs, milestones, and payments) so you can focus on execution.',
                },
                {
                  name: 'steps',
                  type: 'array',
                  labels: { singular: 'Step', plural: 'Steps' },
                  minRows: 2,
                  maxRows: 8,
                  fields: [
                    { name: 'label', type: 'text', required: true, admin: { description: 'Short uppercase label.' } },
                    { name: 'description', type: 'text', required: true },
                  ],
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
                  defaultValue: "Apply to join the elite providers on Bloom's Network",
                },
                {
                  name: 'buttonLabel',
                  type: 'text',
                  defaultValue: 'APPLY NOW',
                },
                {
                  name: 'buttonHref',
                  type: 'text',
                  defaultValue: '/contact-us',
                },
              ],
            },
            {
              name: 'faqHeading',
              type: 'text',
              defaultValue: 'FAQ',
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateProvidersPage],
  },
}
