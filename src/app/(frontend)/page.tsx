import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { HeroRotatingWord } from "@/components/HeroRotatingWord";
// Proofly = direct Framer exports, pixel-perfect. Hero stays eager so the
// LCP elements render server-side without a JS chunk wait.
import SECTIONHERONEW from "@/components/proofly/SECTIONHERONEW.jsx";
import { HomeAppDemo } from "@/components/home/HomeAppDemo";
// Below-the-fold sections mount only when scrolled near. Their JS chunks
// are pulled in lazily, which removes ~Framer-motion + Mockupterms +
// Animation* code from the initial bundle and trims the homepage DOM
// until the user actually reaches each section.
import {
  LazyEcosystemStats,
  LazyHomeDiscover,
  LazyHomeManageCard,
  LazyMembersTestimonials,
  LazyMockuptermsSection,
  LazyRolesSplit,
} from "@/components/home/LazyHomeSections";

export default function HomePage() {
  return (
    <>
      <FloatingNav />
      <main className="flex flex-col">
        {/* Full hero — heading + rotating word + chat + subhead + logo marquee bundled.
            SECTIONHERONEW is a Proofly export with fixed width:1200; flex-centers it in the viewport. */}
        <div className="flex w-full justify-center overflow-hidden">
          <SECTIONHERONEW />
        </div>
        {/* Replaces the Framer rotating-word column with a clean React swap
            (mounts client-side via portal into `.framer-175oaup`). */}
        <HeroRotatingWord />

        {/* Bloom platform app demo video, anchored by orange Bloom mark */}
        <HomeAppDemo />

        {/* "Discover and access" — radial diagram of 6 services (Animationtree) */}
        <LazyHomeDiscover />

        {/* "Easily manage partners" — Bloom platform mockup card */}
        <LazyHomeManageCard />

        {/* "Simplify and expand payment options" + the cycling Mockupterms widget */}
        <LazyMockuptermsSection />

        {/* For Brands / For Providers small navy pills */}
        <LazyRolesSplit />

        {/* Cultivating an ecosystem stats */}
        <LazyEcosystemStats />

        {/* Testimonials — custom widget with active card at 70% width and ~15%
            peeks on each side, matching the live carousel layout. */}
        <LazyMembersTestimonials />
      </main>
      <UnifiedFooter />
    </>
  );
}
