import type { SVGProps } from "react";

type SVGElProps = SVGProps<SVGSVGElement>;

/**
 * BloomWordmark — the official "Bloom + flower" lockup as it appears in
 * the live site's nav and footer. The flower mark uses an orange→red linear
 * gradient (rgb(255,152,0) → rgb(238,39,55)). The wordmark uses Bloom navy
 * by default, but accepts `wordmarkFill` to override (e.g. for dark sections).
 *
 * viewBox 0 0 126 28 — designed to scale: the text is ~111px wide, the mark
 * is ~17px wide, with ~3px spacing.
 *
 * Usage:
 *   <BloomWordmark className="h-7 w-auto" />
 *   <BloomWordmark wordmarkFill="#FFFFFF" className="h-9 w-auto" />
 */
export function BloomWordmark({
  wordmarkFill = "#221742",
  ...props
}: SVGElProps & { wordmarkFill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 126 28"
      role="img"
      aria-label="Bloom"
      {...props}
    >
      <defs>
        <linearGradient
          id="bloom-mark-gradient"
          x1="0.49661691542288544"
          x2="0.5012935323383085"
          y1="-0.18"
          y2="0.76"
        >
          <stop offset="0" stopColor="rgb(255,152,0)" stopOpacity="1" />
          <stop offset="1" stopColor="rgb(238,39,55)" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* The flower mark on the right of the lockup */}
      <path
        d="M 124.915 2.86 L 119.593 8.19 L 122.473 1.226 L 121.057 0.638 L 118.176 7.602 L 118.176 0.065 L 116.642 0.065 L 116.642 7.602 L 113.762 0.638 L 112.345 1.226 L 115.225 8.19 L 109.903 2.86 L 108.818 3.947 L 117.409 12.55 L 126 3.947 Z"
        fill="url(#bloom-mark-gradient)"
      />
      {/* The "Bloom" wordmark on the left */}
      <path
        d="M 0 0.078 L 11.93 0.078 C 16.758 0.078 20.015 2.868 20.015 7.034 C 20.015 9.51 18.406 11.751 16.286 12.655 C 19.308 13.519 21.545 16.231 21.545 19.375 C 21.545 24.327 17.66 27.589 12.009 27.589 L 0 27.589 Z M 14.049 8.017 C 14.049 6.445 12.754 5.344 10.949 5.344 L 6.24 5.344 L 6.24 10.689 L 10.949 10.689 C 12.754 10.689 14.049 9.628 14.049 8.017 Z M 15.305 18.904 C 15.305 16.939 13.696 15.602 11.381 15.602 L 6.24 15.602 L 6.24 22.323 L 11.381 22.323 C 13.696 22.323 15.305 20.908 15.305 18.903 Z M 24.37 0.078 L 30.178 0.078 L 30.178 27.589 L 24.37 27.589 Z M 33.16 17.646 C 33.16 11.672 37.595 7.467 43.678 7.467 C 49.8 7.467 54.195 11.672 54.195 17.646 C 54.195 23.659 49.761 27.904 43.678 27.904 C 37.555 27.904 33.16 23.62 33.16 17.646 Z M 48.387 17.646 C 48.387 14.502 46.464 12.379 43.678 12.379 C 40.891 12.379 39.007 14.463 39.007 17.646 C 39.007 20.83 40.891 22.991 43.678 22.991 C 46.464 22.991 48.387 20.829 48.387 17.646 Z M 56.236 17.646 C 56.236 11.672 60.67 7.467 66.753 7.467 C 72.875 7.467 77.271 11.672 77.271 17.646 C 77.271 23.659 72.836 27.904 66.753 27.904 C 60.631 27.904 56.236 23.62 56.236 17.646 Z M 71.463 17.646 C 71.463 14.502 69.539 12.379 66.753 12.379 C 63.967 12.379 62.083 14.463 62.083 17.646 C 62.083 20.83 63.967 22.991 66.753 22.991 C 69.54 22.991 71.463 20.829 71.463 17.646 Z M 111.374 14.895 L 111.374 27.589 L 105.605 27.589 L 105.605 16.152 C 105.605 13.873 104.428 12.537 102.544 12.537 C 100.071 12.537 98.737 14.816 98.737 17.725 L 98.737 27.589 L 92.929 27.589 L 92.929 16.152 C 92.929 13.873 91.83 12.537 89.907 12.537 C 87.435 12.537 86.061 14.816 86.061 17.725 L 86.061 27.589 L 80.253 27.589 L 80.253 7.781 L 86.061 7.781 L 86.061 10.179 C 87.199 8.606 89.475 7.467 92.105 7.467 C 94.695 7.467 96.971 8.685 97.717 10.375 C 99.208 8.685 101.72 7.467 104.114 7.467 C 108.352 7.467 111.374 10.257 111.374 14.895 Z"
        fill={wordmarkFill}
      />
    </svg>
  );
}

/**
 * BloomPayLockup — the official "Bloom + PAY" lockup as it appears on
 * the live BloomPay section. Uses a RADIAL gradient on the flower mark
 * (different from the wordmark's linear gradient): red center → orange
 * edges. Wordmark and "PAY" both navy.
 *
 * viewBox 0 0 197.011 30.092 — verbatim from the live SVG symbol.
 */
export function BloomPayLockup({
  wordmarkFill = "#221742",
  ...props
}: SVGElProps & { wordmarkFill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 197.011 30.092"
      role="img"
      aria-label="BloomPay"
      overflow="visible"
      {...props}
    >
      <defs>
        <radialGradient
          id="bloompay-mark-gradient"
          cy="1"
          cx="0"
          r="2"
          gradientTransform="translate(0, 1) scale(1 0.5) translate(-0, -1)"
        >
          <stop offset="0" stopColor="rgb(254,5,62)" stopOpacity="1" />
          <stop offset="1" stopColor="rgb(255,152,0)" stopOpacity="1" />
        </radialGradient>
      </defs>
      {/* Flower mark — sits above the wordmark, between "Bloom" and "PAY" */}
      <path
        d="M 138.108 3.023 L 132.225 8.787 L 135.409 1.256 L 133.842 0.621 L 130.658 8.152 L 130.658 0 L 128.962 0 L 128.962 8.152 L 125.778 0.621 L 124.212 1.256 L 127.396 8.788 L 121.512 3.023 L 120.314 4.198 L 129.81 13.502 L 139.307 4.198 Z"
        fill="url(#bloompay-mark-gradient)"
      />
      {/* "Bloom" + "PAY" wordmarks (single path) */}
      <path
        d="M 0 0.001 L 13.188 0.001 C 18.524 0.001 22.125 3.018 22.125 7.523 C 22.125 10.201 20.345 12.623 18.003 13.601 C 21.344 14.536 23.816 17.468 23.816 20.869 C 23.816 26.224 19.522 29.752 13.275 29.752 L 0 29.752 L 0 0 Z M 15.53 8.586 C 15.53 6.886 14.099 5.696 12.103 5.696 L 6.897 5.696 L 6.897 11.476 L 12.103 11.476 C 14.099 11.476 15.53 10.328 15.53 8.586 Z M 16.919 20.359 C 16.919 18.234 15.14 16.789 12.58 16.789 L 6.897 16.789 L 6.897 24.057 L 12.58 24.057 C 15.14 24.057 16.919 22.527 16.919 20.359 Z M 26.938 0.001 L 33.359 0.001 L 33.359 29.752 L 26.938 29.752 L 26.938 0 Z M 36.656 18.999 C 36.656 12.538 41.558 7.991 48.282 7.991 C 55.049 7.991 59.908 12.538 59.908 18.999 C 59.908 25.502 55.006 30.092 48.282 30.092 C 41.514 30.092 36.656 25.459 36.656 18.999 Z M 53.488 18.999 C 53.488 15.598 51.361 13.304 48.282 13.304 C 45.202 13.304 43.119 15.556 43.119 18.999 C 43.119 22.442 45.202 24.779 48.282 24.779 C 51.361 24.779 53.488 22.442 53.488 18.999 Z M 62.163 18.999 C 62.163 12.538 67.065 7.991 73.79 7.991 C 80.557 7.991 85.416 12.538 85.416 18.999 C 85.416 25.502 80.514 30.092 73.79 30.092 C 67.022 30.092 62.163 25.459 62.163 18.999 Z M 78.995 18.999 C 78.995 15.598 76.87 13.304 73.79 13.304 C 70.71 13.304 68.627 15.556 68.627 18.999 C 68.627 22.442 70.709 24.779 73.79 24.779 C 76.87 24.779 78.995 22.442 78.995 18.999 Z M 123.113 16.024 L 123.113 29.752 L 116.736 29.752 L 116.736 17.384 C 116.736 14.919 115.434 13.473 113.353 13.473 C 110.62 13.473 109.144 15.939 109.144 19.084 L 109.144 29.752 L 102.724 29.752 L 102.724 17.384 C 102.724 14.919 101.509 13.473 99.384 13.473 C 96.651 13.473 95.132 15.939 95.132 19.084 L 95.132 29.752 L 88.712 29.752 L 88.712 8.331 L 95.132 8.331 L 95.132 10.923 C 96.39 9.224 98.906 7.991 101.813 7.991 C 104.676 7.991 107.192 9.308 108.017 11.136 C 109.665 9.308 112.442 7.991 115.088 7.991 C 119.773 7.991 123.113 11.009 123.113 16.024 Z M 146.307 29.998 L 146.307 8.461 L 154.85 8.461 C 159.026 8.461 161.79 10.922 161.79 14.676 C 161.79 18.43 159.026 20.891 154.85 20.891 L 149.165 20.891 L 149.165 29.998 Z M 154.567 18.46 C 157.205 18.46 158.932 16.952 158.932 14.676 C 158.932 12.399 157.205 10.891 154.567 10.891 L 149.165 10.891 L 149.165 18.46 Z M 160.141 29.998 L 168.871 8.461 L 172.2 8.461 L 180.899 29.998 L 177.821 29.998 L 175.623 24.46 L 165.354 24.46 L 163.124 29.998 Z M 166.328 22.03 L 174.681 22.03 L 170.504 11.814 Z M 186.208 29.998 L 186.208 21.076 L 178.263 8.461 L 181.623 8.461 L 187.716 18.215 L 193.808 8.461 L 197.011 8.461 L 189.098 21.014 L 189.098 29.998 Z"
        fill={wordmarkFill}
      />
    </svg>
  );
}

/**
 * BloomMarkGradient — just the four-petal flower mark with the official
 * orange→red gradient, isolated from the wordmark for use as a standalone
 * brand symbol (favicons, decorative spots, BloomPay lockup, etc.).
 */
export function BloomMarkGradient(props: SVGElProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 14"
      role="img"
      aria-label="Bloom mark"
      {...props}
    >
      <defs>
        <linearGradient
          id="bloom-mark-gradient-solo"
          x1="0.49661691542288544"
          x2="0.5012935323383085"
          y1="-0.18"
          y2="0.76"
        >
          <stop offset="0" stopColor="rgb(255,152,0)" stopOpacity="1" />
          <stop offset="1" stopColor="rgb(238,39,55)" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Translated to viewBox origin: original path used 108.818..126 / 0..12.55 */}
      <path
        d="M 16.097 2.795 L 10.775 8.125 L 13.655 1.161 L 12.239 0.573 L 9.358 7.537 L 9.358 0 L 7.824 0 L 7.824 7.537 L 4.944 0.573 L 3.527 1.161 L 6.407 8.125 L 1.085 2.795 L 0 3.882 L 8.591 12.485 L 17.182 3.882 Z"
        fill="url(#bloom-mark-gradient-solo)"
      />
    </svg>
  );
}
