import type { GlobalConfig } from 'payload'
import { revalidateContactPage } from './hooks/revalidateContactPage'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  access: { read: () => true },
  admin: {
    group: 'Marketing',
    description: 'Editable content for /contact-us. The form itself is built via Payload Forms.',
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
                { name: 'headline', type: 'text', defaultValue: "Let's build hardware, together." },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    "Whether you're a hardware brand, a service provider, or just have a question — drop us a line and the right person at Bloom will get back to you.",
                },
              ],
            },
          ],
        },
        {
          label: 'Paths',
          description: '2-up cards that route visitors to /brands or /providers.',
          fields: [
            {
              name: 'paths',
              type: 'array',
              labels: { singular: 'Path Card', plural: 'Path Cards' },
              minRows: 1,
              maxRows: 4,
              fields: [
                { name: 'eyebrow', type: 'text', required: true },
                { name: 'heading', type: 'text', required: true },
                { name: 'body', type: 'textarea', required: true },
                { name: 'href', type: 'text', required: true },
                {
                  name: 'cta',
                  type: 'text',
                  required: true,
                  admin: { description: 'Link label (e.g. "Explore for brands").' },
                },
              ],
            },
          ],
        },
        {
          label: 'Form Section',
          fields: [
            {
              name: 'formSection',
              type: 'group',
              label: false,
              fields: [
                { name: 'eyebrow', type: 'text', defaultValue: 'Get in touch' },
                { name: 'heading', type: 'text', defaultValue: 'Send us a message' },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    "Fill out the form and we'll route your message to the right team — usually a same-day response on weekdays.",
                },
              ],
            },
            {
              name: 'officesHeading',
              type: 'text',
              defaultValue: 'Offices',
            },
            {
              name: 'offices',
              type: 'array',
              labels: { singular: 'Office', plural: 'Offices' },
              fields: [
                { name: 'city', type: 'text', required: true },
                { name: 'line1', type: 'text', required: true },
                { name: 'line2', type: 'text', required: true },
              ],
            },
            {
              name: 'connectHeading',
              type: 'text',
              defaultValue: 'Connect',
            },
            {
              name: 'linkedinUrl',
              type: 'text',
              defaultValue: 'https://www.linkedin.com/company/bloomus',
            },
          ],
        },
      ],
    },
  ],
  hooks: { afterChange: [revalidateContactPage] },
}
