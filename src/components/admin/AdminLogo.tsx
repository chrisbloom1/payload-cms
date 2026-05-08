import React from 'react'
import { BloomWordmark } from '@/components/BloomLogo'

/**
 * Replaces Payload's default wordmark on the admin auth screen with
 * the official Bloom + flower lockup so the auth screen reads as
 * Bloom-branded. We render at a larger explicit height (44px) than
 * Payload's default (~32px) so the small flower mark in the top-right
 * of the lockup has visual weight, and wrap in a centering container
 * so it sits cleanly above the form regardless of Payload's default
 * `.graphic-logo` styling.
 */
const AdminLogo: React.FC = () => {
  return (
    <span
      className="graphic-logo"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BloomWordmark
        style={{ height: '44px', width: 'auto', display: 'block' }}
        aria-label="Bloom"
      />
    </span>
  )
}

export default AdminLogo
