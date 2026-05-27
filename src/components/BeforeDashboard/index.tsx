'use client'

import React from 'react'

/**
 * Lands at the top of /admin. Designed as a "what do I want to edit
 * today?" landing pad rather than the default empty Payload dashboard.
 *
 * Cards link directly to the highest-traffic editing surfaces; the
 * surrounding nav still gives access to everything else.
 *
 * Marked "use client" because the cards use onMouseEnter/onMouseLeave
 * for the hover border highlight — event handlers aren't allowed in
 * React Server Components and that mismatch was causing a runtime
 * crash (ERROR 110... reference) when the admin tried to render.
 */
const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid var(--theme-elevation-100)',
  background: 'var(--theme-elevation-0)',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'border-color 150ms ease',
}

const cardHoverStyle: React.CSSProperties = {
  borderColor: 'var(--theme-elevation-200)',
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--theme-elevation-500)',
  fontWeight: 700,
}

const titleStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 600,
  margin: 0,
  lineHeight: 1.3,
}

const bodyStyle: React.CSSProperties = {
  fontSize: '14px',
  color: 'var(--theme-elevation-600)',
  lineHeight: 1.4,
  margin: 0,
}

interface QuickCardProps {
  label: string
  title: string
  body: string
  href: string
}

function QuickCard({ label, title, body, href }: QuickCardProps) {
  return (
    <a
      href={href}
      style={cardStyle}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, cardHoverStyle)
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = (cardStyle.border as string).split(' ').pop() ?? ''
        e.currentTarget.style.borderColor = 'var(--theme-elevation-100)'
      }}
    >
      <span style={labelStyle}>{label}</span>
      <h3 style={titleStyle}>{title}</h3>
      <p style={bodyStyle}>{body}</p>
    </a>
  )
}

const BeforeDashboard: React.FC = () => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 700 }}>
          Welcome to Bloom
        </h2>
        <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--theme-elevation-600)' }}>
          Edit the public marketing site here. Live Preview is enabled across
          everything below. Open the live page in another tab and your edits
          show up as you type.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        <QuickCard
          label="Marketing"
          title="Home page"
          body="Hero copy, rotating words, logo marquee, section headings, ecosystem stats."
          href="/admin/globals/home-page"
        />
        <QuickCard
          label="Marketing"
          title="For Brands page"
          body="Hero, verticals, framework steps, pricing, BloomPay, CTA, everything on /brands."
          href="/admin/globals/brands-page"
        />
        <QuickCard
          label="Marketing"
          title="For Providers page"
          body="Hero, benefits rows, qualifying criteria, framework, CTA, everything on /providers."
          href="/admin/globals/providers-page"
        />
        <QuickCard
          label="Marketing"
          title="Blog posts"
          body="Articles published at /blog. Drafts autosave; use the Live Preview pane to see edits."
          href="/admin/collections/posts"
        />
        <QuickCard
          label="Marketing"
          title="Customer stories"
          body="Case studies at /customer-stories. Update card themes, hero, logos, and the long-form story."
          href="/admin/collections/customer-stories"
        />
        <QuickCard
          label="Marketing"
          title="Testimonials"
          body="Quotes shown by the carousel on home, brands, and providers. Avatar uploads + sort order."
          href="/admin/collections/testimonials"
        />
        <QuickCard
          label="Marketing"
          title="Marketing FAQs"
          body="FAQ entries on /brands and /providers. Use Surfaces to control where each question shows up."
          href="/admin/collections/marketing-faqs"
        />
        <QuickCard
          label="Marketing"
          title="Company page"
          body="Hero, mission 2-up, ecosystem statement, resource cards, team eyebrow, everything on /company."
          href="/admin/globals/company-page"
        />
        <QuickCard
          label="Marketing"
          title="Team members"
          body="The team grid on /company. Photos, titles, LinkedIn links, and rich-text bios."
          href="/admin/collections/team-members"
        />
        <QuickCard
          label="Marketing"
          title="Contact page"
          body="Hero, the 2-up brand/provider path cards, offices, and LinkedIn link."
          href="/admin/globals/contact-page"
        />
        <QuickCard
          label="Marketing"
          title="Media library"
          body="Upload hero images and logos here so other forms can pick them via the upload field."
          href="/admin/collections/media"
        />
        <QuickCard
          label="Marketing"
          title="Header & footer"
          body="Top and bottom navigation links across the marketing site."
          href="/admin/globals/header"
        />
        <QuickCard
          label="Knowledge Base"
          title="KB articles & guides"
          body="Help-center content at /kb and /guides. Used by support, partners, and SEO."
          href="/admin/collections/articles"
        />
      </div>
    </div>
  )
}

export default BeforeDashboard
