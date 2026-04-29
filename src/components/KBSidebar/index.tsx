import React from 'react'

/**
 * Sidebar wrapper for the help-center landing pages. Originally also held
 * a help-center secondary nav (KB / FAQs / Guides / Glossary / Roadmap /
 * Changelog), but those routes are now exposed via the Resources mega-menu
 * in HelpHeader. This is now a thin layout primitive that just provides
 * the fixed-width sidebar column on `/kb`.
 */
export const KBSidebar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <aside className="lg:w-56 shrink-0">{children}</aside>
}
