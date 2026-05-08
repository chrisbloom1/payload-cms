import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

/**
 * Testimonial quotes shown by MembersTestimonials and TestimonialCarousel.
 * Each row is one testimonial card.
 */
export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: { singular: 'Testimonial', plural: 'Testimonials' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    group: 'Marketing',
    description:
      'Customer pull-quotes shown by the testimonial carousel on the home, brands, and providers pages.',
    defaultColumns: ['author', 'company', 'sortOrder', 'updatedAt'],
    useAsTitle: 'author',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      admin: {
        description: 'The quote itself. Plain text — no quotation marks needed (the carousel adds them).',
      },
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      admin: { description: 'Speaker name (e.g. "Sam Shapiro").' },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'Role / title (e.g. "Co-Founder").' },
    },
    {
      name: 'company',
      type: 'text',
      admin: { description: 'Optional company name (e.g. "Grounded").' },
    },
    {
      name: 'avatarImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Headshot or avatar.' },
    },
    {
      name: 'avatarUrl',
      type: 'text',
      admin: {
        description: 'Fallback avatar URL when no image is uploaded. If both are blank, initials render automatically.',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Carousel order (lower numbers appear first).',
      },
    },
  ],
  versions: { drafts: { autosave: { interval: 100 } } },
}
