import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { HomeAppDemo } from "@/components/home/HomeAppDemo";
import { HomeHeroNative } from "@/components/home/HomeHeroNative";
// Below-fold sections are lazy + delayed so their JS chunks don't
// bloat the initial HTML or block hydration. cv-auto-section reserves
// the right scroll height so the swap-in is CLS-neutral.
import {
  LazyEcosystemStats,
  LazyHomeDiscover,
  LazyHomeManageCard,
  LazyMembersTestimonials,
  LazyMockupterms,
  LazyRolesSplit,
} from "@/components/home/LazyHomeSections";
import { loadHomePage } from "@/lib/home-page-resolver";
import { loadTestimonials } from "@/lib/marketing-content-resolver";

export default async function HomePage() {
  const [home, testimonials] = await Promise.all([
    loadHomePage(),
    loadTestimonials(),
  ]);

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
        {/* Hero — hand-rolled HTML/CSS replacement for the original
            Proofly/Framer SECTIONHERONEW export. Drops the
            @proofly-framer/runtime + framer-motion dependency
            (~519KB of client JS) plus all the runtime-injected
            framerusercontent.com image preloads. Content is wired to
            the HomePage global so the team can edit copy + logos via
            the Payload admin. */}
        <HomeHeroNative
          headline={home.hero.headline}
          subheadingPrefix={home.hero.subheadingPrefix}
          rotatingWords={home.hero.rotatingWords}
          subheadingSuffix={home.hero.subheadingSuffix}
          chatPlaceholder={home.hero.chatPlaceholder}
          chatButtonLabel={home.hero.chatButtonLabel}
          chatPrefillUrl={home.hero.chatPrefillUrl}
          badgeText={home.hero.badgeText}
          tagline={home.hero.tagline}
          logoMarqueeRow1={home.logoMarqueeRow1}
          logoMarqueeRow2={home.logoMarqueeRow2}
        />

        {/* Bloom platform app demo video, anchored by orange Bloom mark */}
        <HomeAppDemo />

        {/* All sections below the hero+video opt into content-visibility:auto
            so the browser defers their style/layout/paint work until the
            user scrolls them into view. cv-auto-section reserves a 720px
            intrinsic size on each so the page's scroll height stays
            stable. */}

        <div className="cv-auto-section cv-h-820">
          <LazyHomeDiscover heading={home.discover.heading} body={home.discover.body} />
        </div>

        <div className="cv-auto-section cv-h-820">
          <LazyHomeManageCard heading={home.manage.heading} body={home.manage.body} />
        </div>

        {/* Pay section — heading + copy SSR (so SEO sees them);
            only the cycling Mockupterms widget defers via Lazy. */}
        <section className="cv-auto-section cv-h-920 w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
            <div className="overflow-hidden rounded-md bg-gradient-to-br from-white via-white to-bloom-cream p-8 ring-1 ring-bloom-navy/10 sm:p-10 lg:p-16">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="flex flex-col gap-5">
                  <h2 className="max-w-[480px] text-[32px] font-bold leading-[36px] text-bloom-navy sm:text-[36px] sm:leading-[40px]">
                    {home.pay.heading}
                  </h2>
                  <p className="max-w-[480px] text-[18px] leading-[26px] text-bloom-navy">
                    {home.pay.body}
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
          <LazyEcosystemStats
            heading={home.ecosystem.heading}
            body={home.ecosystem.body}
            stats={home.ecosystem.stats}
          />
        </div>

        {/* Testimonials — custom widget with active card at 70% width and ~15%
            peeks on each side, matching the live carousel layout. */}
        <div className="cv-auto-section cv-h-820">
          <LazyMembersTestimonials testimonials={testimonials} />
        </div>
      </main>
      <UnifiedFooter />
    </>
  );
}
