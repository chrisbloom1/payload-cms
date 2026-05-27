import type { GlobalConfig } from 'payload'
import { revalidateCompanyPage } from './hooks/revalidateCompanyPage'

export const CompanyPage: GlobalConfig = {
  slug: 'company-page',
  label: 'Company Page',
  access: { read: () => true },
  admin: {
    group: 'Marketing',
    description: 'Editable content for /company. Team members live in their own collection.',
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
                { name: 'headline', type: 'text', defaultValue: "Hi. We're Bloom." },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    "Bloom brings hard tech brands into an operations ecosystem that nurtures every stage of their product's growth.",
                },
              ],
            },
          ],
        },
        {
          label: 'Mission',
          description: 'Two-column "What We Do" / "Who We Are" section under the hero.',
          fields: [
            {
              name: 'whatWeDo',
              type: 'group',
              label: 'What We Do',
              fields: [
                { name: 'eyebrow', type: 'text', defaultValue: 'What We Do' },
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'We provide the support and connections you need to flourish.',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    "Just as a thriving natural ecosystem relies on interconnected relationships and balanced processes to flourish, Bloom's operations ecosystem is built on a foundation of collaboration and resilience. By nurturing a network that thrives on the diverse capabilities of our partners, we ensure that the hard tech industry can thrive, adapt, and grow.",
                },
              ],
            },
            {
              name: 'whoWeAre',
              type: 'group',
              label: 'Who We Are',
              fields: [
                { name: 'eyebrow', type: 'text', defaultValue: 'Who We Are' },
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'We are committed to exploring the full potential of hardware.',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'We are a global team of builders and connectors with deep roots in the hardware industry. Together, we are exploring the full potential of hard tech products, optimizing their places within our daily lives.',
                },
              ],
            },
          ],
        },
        {
          label: 'Ecosystem & Resources',
          fields: [
            {
              name: 'ecosystem',
              type: 'group',
              label: 'Ecosystem Statement',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'Bloom is an ecosystem of operations services',
                },
                {
                  name: 'paragraphs',
                  type: 'array',
                  labels: { singular: 'Paragraph', plural: 'Paragraphs' },
                  minRows: 1,
                  fields: [
                    { name: 'text', type: 'textarea', required: true },
                  ],
                },
              ],
            },
            {
              name: 'resources',
              type: 'array',
              labels: { singular: 'Resource Card', plural: 'Resource Cards' },
              admin: {
                description:
                  'The 4-up grid of resource tiles. If `comingSoon` is checked, the card is shown without a link.',
              },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'body', type: 'textarea', required: true },
                {
                  name: 'href',
                  type: 'text',
                  admin: {
                    description: 'Link target (e.g. /newsroom). Leave blank to mark "Coming Soon".',
                  },
                },
                {
                  name: 'comingSoon',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    description:
                      'When checked, the card renders as static (no link) with a "Coming Soon" badge.',
                  },
                },
              ],
            },
            {
              name: 'teamEyebrow',
              type: 'text',
              defaultValue: 'Meet the Bloom Team',
              admin: { description: 'Small uppercase label above the team grid.' },
            },
          ],
        },
      ],
    },
  ],
  hooks: { afterChange: [revalidateCompanyPage] },
}
