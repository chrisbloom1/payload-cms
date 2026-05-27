import React from 'react'

/**
 * Replaces Payload's default icon (the small mark in the admin nav
 * at the very top-left). Payload's StepNav home button is 18px
 * square (24px after the CSS override in custom.scss) with
 * overflow:hidden, so the SVG must:
 *
 *  - Fill 100% of its parent (no wrapping container with explicit
 *    dimensions — the parent's bounds win, and a wrapper just
 *    introduces clipping).
 *  - Use a SQUARE viewBox so it doesn't letterbox, with a few units
 *    of padding around the flower path so no petal tip gets clipped
 *    at the cell edge.
 *  - Apply className "graphic-icon" directly on the SVG to match
 *    Payload's default Icon convention.
 *
 * The flower path is the same gradient mark shipped in BloomLogo.tsx;
 * inlined here with a square viewBox so the 1:1 intrinsic ratio
 * matches the parent slot.
 */
const AdminIcon: React.FC = () => {
  return (
    <svg
      className="graphic-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -3 22 18"
      width="100%"
      height="100%"
      role="img"
      aria-label="Bloom"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient
          id="admin-icon-bloom-gradient"
          x1="0.5"
          x2="0.5"
          y1="-0.18"
          y2="0.76"
        >
          <stop offset="0" stopColor="rgb(255,152,0)" />
          <stop offset="1" stopColor="rgb(238,39,55)" />
        </linearGradient>
      </defs>
      <path
        d="M 16.097 2.795 L 10.775 8.125 L 13.655 1.161 L 12.239 0.573 L 9.358 7.537 L 9.358 0 L 7.824 0 L 7.824 7.537 L 4.944 0.573 L 3.527 1.161 L 6.407 8.125 L 1.085 2.795 L 0 3.882 L 8.591 12.485 L 17.182 3.882 Z"
        fill="url(#admin-icon-bloom-gradient)"
      />
    </svg>
  )
}

export default AdminIcon
