import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { HeroRotatingWord } from "@/components/HeroRotatingWord";
// Proofly = direct Framer exports, pixel-perfect
import SECTIONHERONEW from "@/components/proofly/SECTIONHERONEW.jsx";
import Mockupterms from "@/components/proofly/Mockupterms.jsx";
import { MembersTestimonials } from "@/components/widgets/MembersTestimonials";
// Hand-rolled fallbacks for sections without Proofly equivalents
import { HomeAppDemo } from "@/components/home/HomeAppDemo";
import { HomeDiscover } from "@/components/home/HomeDiscover";
import { HomeManageCard } from "@/components/home/HomeManageCard";
import { RolesSplit } from "@/components/home/RolesSplit";
import { EcosystemStats } from "@/components/home/EcosystemStats";

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
        <HomeDiscover />

        {/* "Easily manage partners" — Bloom platform mockup card */}
        <HomeManageCard />

        {/* "Simplify and expand payment options" + the cycling Mockupterms widget */}
        <section className="w-full py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
            <div className="overflow-hidden rounded-md bg-gradient-to-br from-white via-white to-bloom-cream p-8 shadow-bloom-card ring-1 ring-bloom-navy/5 sm:p-10 lg:p-16">
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
                  <Mockupterms />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Brands / For Providers small navy pills */}
        <RolesSplit />

        {/* Cultivating an ecosystem stats */}
        <EcosystemStats />

        {/* Testimonials — custom widget with active card at 70% width and ~15%
            peeks on each side, matching the live carousel layout. */}
        <MembersTestimonials />
      </main>
      <UnifiedFooter />
    </>
  );
}
