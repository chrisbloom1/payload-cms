import React from 'react'
import { BloomWordmark } from '@/components/BloomLogo'

/**
 * Replaces Payload's default "Payload" wordmark on the admin login
 * screen with the Bloom + flower lockup so the auth screen reads as
 * Bloom-branded. Inherits sizing from Payload's `.graphic-logo`
 * container (typically ~30-40px tall).
 */
const AdminLogo: React.FC = () => {
  return (
    <BloomWordmark
      className="graphic-logo"
      style={{ height: '32px', width: 'auto' }}
      aria-label="Bloom"
    />
  )
}

export default AdminLogo
