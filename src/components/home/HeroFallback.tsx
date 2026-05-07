/**
 * Lightweight SSR-only hero fallback.
 *
 * Rendered on the server while the heavy Proofly/Framer hero
 * (SECTIONHERONEW, ~519KB JS chunk) is dynamic-imported. Provides
 * the H1 text as a stable LCP candidate so first paint shows the
 * hero copy immediately, well before the Framer runtime hydrates.
 *
 * The wrapper keeps the same min-height as the live hero
 * (configured in (frontend)/page.tsx) so layout doesn't shift when
 * the real hero swaps in.
 */
export function HeroFallback() {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 text-center"
      style={{ minHeight: 720 }}
    >
      <div className="flex w-full max-w-[1128px] flex-col items-center gap-6">
        <h1
          className="text-balance text-[36px] font-bold leading-tight text-bloom-navy sm:text-[40px] lg:text-[48px]"
          style={{
            fontFamily:
              '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
            fontWeight: 700,
          }}
        >
          Hardware shouldn&rsquo;t be hard.
        </h1>
        <p
          className="max-w-[830px] text-[18px] leading-[26px] text-bloom-navy/80 sm:text-[20px]"
          style={{
            fontFamily: '"Haffer Regular", "Haffer Fallback", sans-serif',
          }}
        >
          Bloom helps leading mobility, energy, robotics brands build,
          deliver, and service hardware faster.
        </p>
      </div>
    </div>
  );
}
