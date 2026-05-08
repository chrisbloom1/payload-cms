import React from 'react'
import { BloomMarkGradient } from '@/components/BloomLogo'

/**
 * Replaces Payload's default icon (small mark in the admin nav and
 * favicon-style spots) with the Bloom orange-to-red flower mark.
 */
const AdminIcon: React.FC = () => {
  return (
    <BloomMarkGradient
      className="graphic-icon"
      style={{ height: '24px', width: 'auto' }}
      aria-label="Bloom"
    />
  )
}

export default AdminIcon
