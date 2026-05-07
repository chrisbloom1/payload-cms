"use client";

import dynamic from "next/dynamic";
import { LazyOnScroll } from "@/components/LazyOnScroll";

// Heavy Framer / animation widgets are loaded only when scrolled near the
// viewport. `ssr: false` keeps the JS chunk out of the initial bundle, and
// `LazyOnScroll` reserves space + delays mount to avoid CLS / wasted hydration.

const Mockupterms = dynamic(
  () => import("@/components/proofly/Mockupterms.jsx"),
  { ssr: false, loading: () => null },
);

const HomeDiscover = dynamic(
  () => import("@/components/home/HomeDiscover").then((m) => ({ default: m.HomeDiscover })),
  { ssr: false, loading: () => null },
);

const HomeManageCard = dynamic(
  () => import("@/components/home/HomeManageCard").then((m) => ({ default: m.HomeManageCard })),
  { ssr: false, loading: () => null },
);

const RolesSplit = dynamic(
  () => import("@/components/home/RolesSplit").then((m) => ({ default: m.RolesSplit })),
  { ssr: false, loading: () => null },
);

const EcosystemStats = dynamic(
  () => import("@/components/home/EcosystemStats").then((m) => ({ default: m.EcosystemStats })),
  { ssr: false, loading: () => null },
);

const MembersTestimonials = dynamic(
  () =>
    import("@/components/widgets/MembersTestimonials").then((m) => ({
      default: m.MembersTestimonials,
    })),
  { ssr: false, loading: () => null },
);

export function LazyHomeDiscover() {
  return (
    <LazyOnScroll minHeight={520} rootMargin="600px">
      <HomeDiscover />
    </LazyOnScroll>
  );
}

export function LazyHomeManageCard() {
  return (
    <LazyOnScroll minHeight={520} rootMargin="600px">
      <HomeManageCard />
    </LazyOnScroll>
  );
}

export function LazyMockuptermsSection() {
  return (
    <section className="w-full py-16 md:py-24">
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
              <LazyOnScroll minHeight={400} rootMargin="500px">
                <Mockupterms />
              </LazyOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LazyRolesSplit() {
  return (
    <LazyOnScroll minHeight={240} rootMargin="500px">
      <RolesSplit />
    </LazyOnScroll>
  );
}

export function LazyEcosystemStats() {
  return (
    <LazyOnScroll minHeight={320} rootMargin="500px">
      <EcosystemStats />
    </LazyOnScroll>
  );
}

export function LazyMembersTestimonials() {
  return (
    <LazyOnScroll minHeight={520} rootMargin="500px">
      <MembersTestimonials />
    </LazyOnScroll>
  );
}
