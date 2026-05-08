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
 * Members of the Bloom team shown on /company.
 * Each row is one teammate with name, title, photo, LinkedIn, and bio.
 */
export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: { singular: 'Team Member', plural: 'Team Members' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    group: 'Marketing',
    description: 'Bloom team members shown on /company.',
    defaultColumns: ['name', 'title', 'sortOrder', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'Role / title (e.g. "CEO & Co-founder").' },
    },
    {
      name: 'linkedin',
      type: 'text',
      admin: { description: 'Full LinkedIn URL.' },
    },
    {
      name: 'photoImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Headshot. Upload here for the best result.' },
    },
    {
      name: 'photoUrl',
      type: 'text',
      admin: {
        description:
          'Fallback URL or path (e.g. /images/team/foo.png). Used when no Photo Image is uploaded.',
      },
    },
    {
      name: 'bio',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      admin: {
        description:
          'Long-form biography. The card-modal on /company renders this as the expanded body.',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
  versions: { drafts: { autosave: { interval: 100 } } },
}
