import React from 'react'
import { BloomMarkGradient } from '@/components/BloomLogo'

/**
 * Replaces Payload's default icon (small mark used in the admin nav
 * header and as a fallback favicon spot) with the Bloom four-petal
 * flower mark, gradient-rendered. Sized to fit Payload's 28px header
 * slot with a touch of inset so it doesn't crowd the nav title.
 */
const AdminIcon: React.FC = () => {
  return (
    <span
      className="graphic-icon"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '28px',
        width: '28px',
      }}
    >
      <BloomMarkGradient
        style={{ height: '20px', width: 'auto', display: 'block' }}
        aria-label="Bloom"
      />
    </span>
  )
}

export default AdminIcon
