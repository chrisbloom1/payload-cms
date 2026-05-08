// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Comments } from './collections/Comments'
import { CustomerStories } from './collections/CustomerStories'
import { MarketingFaqs } from './collections/MarketingFaqs'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { TeamMembers } from './collections/TeamMembers'
import { Testimonials } from './collections/Testimonials'
import { Users } from './collections/Users'
import { KBCategories } from './collections/KnowledgeBase/KBCategories'
import { Articles } from './collections/KnowledgeBase/Articles'
import { FAQs } from './collections/KnowledgeBase/FAQs'
import { Glossary } from './collections/KnowledgeBase/Glossary'
import { Guides } from './collections/KnowledgeBase/Guides'
import { ReleaseNotes } from './collections/KnowledgeBase/ReleaseNotes'
// import { FeatureRequests } from './collections/KnowledgeBase/FeatureRequests' // disabled in bloom-merge — see config.collections comment
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { HomePage } from './Globals/HomePage/config'
import { BrandsPage } from './Globals/BrandsPage/config'
import { ProvidersPage } from './Globals/ProvidersPage/config'
import { CompanyPage } from './Globals/CompanyPage/config'
import { ContactPage } from './Globals/ContactPage/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: ' | Bloom',
    },
    // Force light theme — the Bloom brand is built around the cream
    // surface, navy text, orange accent palette, which is light-only.
    // Locking the theme also prevents Payload's auto-detection from
    // flipping mid-session if the OS toggles dark mode.
    theme: 'light',
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
      graphics: {
        Logo: '@/components/admin/AdminLogo',
        Icon: '@/components/admin/AdminIcon',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [
    // === Marketing (the team's primary editing surface) ===
    Posts, // /blog and /blog/[slug]
    CustomerStories, // /customer-stories and /customer-stories/[slug]
    Testimonials, // carousel on home / brands / providers
    MarketingFaqs, // FAQ accordion on /brands and /providers
    TeamMembers, // grid on /company
    Media, // shared upload library used by everything above

    // === Knowledge Base (help-center workflow) ===
    Articles,
    FAQs,
    Glossary,
    Guides,
    ReleaseNotes,
    // FeatureRequests is disabled in the bloom-merge branch — the in-flight
    // migration `20260404_014640_feature_requests.ts` has an enum collision
    // (user-defined `status` and Payload's `_status` share the same enum
    // type, which breaks on a fresh DB). Re-enable once the WIP migration
    // is regenerated with separate enum names.
    // FeatureRequests,
    KBCategories,

    // === System (rare admin tasks) ===
    Pages, // generic block-based one-off pages
    Users,

    // === Hidden / legacy (kept for FK integrity) ===
    Categories, // hidden — replaced by displayCategory string field
    Comments, // hidden — not exposed publicly
  ],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [
    HomePage, // /            — hero, marquee, sections, stats
    BrandsPage, // /brands    — for-brands marketing copy + framework + pricing
    ProvidersPage, // /providers — for-providers marketing copy + criteria
    CompanyPage, // /company  — hero, mission 2-up, ecosystem, resources, team eyebrow
    ContactPage, // /contact-us — hero, path cards, offices, LinkedIn
    Header, // top-nav links across the marketing site
    Footer, // bottom-nav links across the marketing site
  ],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  endpoints: [
    {
      path: '/health',
      method: 'get',
      handler: async (req) => {
        return new Response('OK', { status: 200 });
      }
    }
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
