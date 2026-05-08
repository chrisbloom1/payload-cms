/**
 * Lightweight SSR-only hero fallback.
 *
 * Rendered on the server while the heavy Proofly/Framer hero
 * (SECTIONHERONEW, ~519KB JS chunk) is dynamic-imported. Provides
 * the H1 text as a stable LCP candidate so first paint shows the
 * hero copy immediately, well before the Framer runtime hydrates.
 *
 * The structure mirrors the real Framer hero in broad strokes —
 * heading, rotating-word slot, chat-card stub, subhead — so the
 * swap-in feels like content settling into place rather than the
 * page flashing through two distinct designs. No animations, no
 * Framer-runtime dependencies; just fluid Tailwind / inline styles.
 */
export function HeroFallback() {
  return (
    <div className="relative flex min-h-[480px] w-full flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16 text-center sm:min-h-[600px] sm:pt-32 sm:py-20 lg:min-h-[720px] lg:py-24">
      <div className="flex w-full max-w-[1128px] flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6">
          <h1
            className="text-balance text-[32px] font-bold leading-tight text-bloom-navy sm:text-[40px] lg:text-[48px]"
            style={{
              fontFamily:
                '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
              fontWeight: 700,
            }}
          >
            Hardware shouldn&rsquo;t be hard.
          </h1>
          {/* "We help make __ easier." — keeps the same line shape as the
              live hero so the rotating-word pill drops in without a
              vertical shift. */}
          <p
            className="flex flex-wrap items-baseline justify-center gap-x-2 text-[18px] leading-[1.4] text-bloom-navy sm:text-[20px] lg:text-[22px]"
            style={{
              fontFamily:
                '"Haffer Regular", "Haffer Fallback", sans-serif',
            }}
          >
            <span>We help make</span>
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center rounded-md bg-bloom-navy px-2.5 py-0.5 text-bloom-cream"
              style={{
                fontFamily:
                  '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
                fontWeight: 700,
              }}
            >
              Manufacturing
            </span>
            <span>easier.</span>
          </p>
        </div>

        {/* Chat card stub — same general shape as the live Framer card so
            the swap feels like the card sharpening into focus rather
            than appearing from nowhere. */}
        <div
          className="relative w-full max-w-[600px] rounded-md bg-bloom-mint-soft px-4 py-5 text-left text-bloom-navy/60 ring-1 ring-bloom-navy/10 sm:px-5 sm:py-6"
          style={{
            fontFamily:
              '"Haffer Regular", "Haffer Fallback", sans-serif',
          }}
        >
          <span className="block text-[14px] sm:text-[15px]">
            Describe your product&rsquo;s supply chain needs
          </span>
          <span
            aria-hidden="true"
            className="bg-bloom-cta absolute right-3 bottom-3 inline-flex items-center justify-center rounded-md px-3 py-1.5 text-[13px] font-semibold text-white sm:right-4 sm:bottom-4 sm:text-[14px]"
          >
            Chat now
          </span>
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-full bg-bloom-navy px-3 py-1 text-[11px] font-semibold text-bloom-cream sm:text-[12px]"
            style={{
              fontFamily:
                '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
            }}
          >
            Start for free now!
          </span>
        </div>

        <p
          className="max-w-[830px] text-[16px] leading-[24px] text-bloom-navy/80 sm:text-[18px] sm:leading-[26px] lg:text-[20px]"
          style={{
            fontFamily: '"Haffer Regular", "Haffer Fallback", sans-serif',
          }}
        >
          Bloom helps leading{' '}
          <strong className="font-bold">mobility, energy, robotics</strong>{' '}
          brands scale faster through our vetted network
        </p>
      </div>
    </div>
  );
}
