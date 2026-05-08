import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { HeroRotatingWord } from "@/components/HeroRotatingWord";
import { HomeAppDemo } from "@/components/home/HomeAppDemo";
// SECTIONHERONEW + everything else is pulled in via next/dynamic with
// ssr:false so the heaviest JS chunks (and the 25+ framer/usercontent
// preloads SECTIONHERONEW emits) don't bloat the initial HTML or block
// hydration. The hero ships with a static <HeroFallback> H1 so first
// paint still has an LCP-eligible candidate; SECTIONHERONEW visually
// replaces the fallback once its chunk lands.
import {
  LazyEcosystemStats,
  LazyHomeDiscover,
  LazyHomeManageCard,
  LazyMembersTestimonials,
  LazyMockupterms,
  LazyRolesSplit,
  LazySectionHero,
} from "@/components/home/LazyHomeSections";

export default function HomePage() {
  return (
    <>
      {/* Per-page LCP preload — fetchpriority=high makes the browser
          start downloading the video poster (the LCP element) at top
          priority, before discovering it through the <video> element. */}
      <link
        rel="preload"
        as="image"
        href="/videos/bloom-app-demo-poster.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <FloatingNav />
      <main className="flex flex-col">
        {/* Hero region. min-height matches the live Framer hero's
            measured per-breakpoint height so the page below doesn't
            shift when SECTIONHERONEW lazy-mounts and replaces the
            HeroFallback. Mobile = 712px (measured), tablet ~628,
            desktop = 720. */}
        <div className="flex min-h-[712px] w-full justify-center overflow-hidden sm:min-h-[640px] lg:min-h-[720px]">
          <LazySectionHero />
        </div>
        {/* Replaces the Framer rotating-word column with a clean React swap
            (mounts client-side via portal into `.framer-175oaup`). */}
        <HeroRotatingWord />

        {/* Bloom platform app demo video, anchored by orange Bloom mark */}
        <HomeAppDemo />

        {/* All sections below the hero+video opt into content-visibility:auto
            so the browser defers their style/layout/paint work until the
            user scrolls them into view. cv-auto-section reserves a 720px
            intrinsic size on each so the page's scroll height stays
            stable. */}

        {/* "Discover and access" — radial diagram of 6 services (Animationtree) */}
        <div className="cv-auto-section cv-h-820">
          <LazyHomeDiscover />
        </div>

        {/* "Easily manage partners" — Bloom platform mockup card */}
        <div className="cv-auto-section cv-h-820">
          <LazyHomeManageCard />
        </div>

        {/* "Simplify and expand payment options" + the cycling Mockupterms widget.
            The static heading + copy SSRs (so the section has content for SEO);
            only the heavy cycling Framer mockup defers via dynamic. */}
        <section className="cv-auto-section cv-h-920 w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
            <div className="overflow-hidden rounded-md bg-gradient-to-br from-white via-white to-bloom-cream p-8 ring-1 ring-bloom-navy/10 sm:p-10 lg:p-16">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="flex flex-col gap-5">
                  <h2 className="max-w-[480px] text-[32px] font-bold leading-[36px] text-bloom-navy sm:text-[36px] sm:leading-[40px]">
                    Simplify and expand payment options
                  </h2>
                  <p className="max-w-[480px] text-[18px] leading-[26px] text-bloom-navy">
                    Leverage BloomPay to pay all your vendors in one place and
                    access extended payment terms up to 120 days.
                  </p>
                </div>
                <div className="flex w-full justify-center lg:justify-end">
                  <LazyMockupterms />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Brands / For Providers small navy pills */}
        <div className="cv-auto-section cv-h-560">
          <LazyRolesSplit />
        </div>

        {/* Cultivating an ecosystem stats */}
        <div className="cv-auto-section">
          <LazyEcosystemStats />
        </div>

        {/* Testimonials — custom widget with active card at 70% width and ~15%
            peeks on each side, matching the live carousel layout. */}
        <div className="cv-auto-section cv-h-820">
          <LazyMembersTestimonials />
        </div>
      </main>
      <UnifiedFooter />
    </>
  );
}
