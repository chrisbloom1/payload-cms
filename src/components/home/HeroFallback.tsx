/**
 * Lightweight SSR-only hero fallback.
 *
 * Rendered on the server while the heavy Proofly/Framer hero
 * (SECTIONHERONEW, ~519KB JS chunk) is dynamic-imported. Provides
 * the H1 text as a stable LCP candidate so first paint shows the
 * hero copy immediately, well before the Framer runtime hydrates.
 *
 * Sized responsively (no fixed width/height) so mobile users see
 * properly wrapped copy — the parent wrapper sets the matching
 * responsive min-height to keep layout stable.
 */
export function HeroFallback() {
  return (
    <div className="relative flex min-h-[480px] w-full flex-col items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[600px] sm:py-20 lg:min-h-[720px]">
      <div className="flex w-full max-w-[1128px] flex-col items-center gap-6">
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
        <p
          className="max-w-[830px] text-[16px] leading-[24px] text-bloom-navy/80 sm:text-[18px] sm:leading-[26px] lg:text-[20px]"
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
