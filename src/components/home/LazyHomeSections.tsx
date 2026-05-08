"use client";

import { LazyOnDemand } from "@/components/LazyOnDemand";
import type { HomeStat } from "@/lib/home-page-defaults";
import type { Testimonial } from "@/types/bloom";

// Below-the-fold sections use LazyOnDemand (true on-demand import)
// rather than next/dynamic. next/dynamic registers the chunk with
// Next.js's static prefetch graph at module-load time, which caused
// the framer-motion chunk to download inside Lighthouse's TBT
// window even though the component itself wasn't rendering yet.
// LazyOnDemand evaluates `import()` only inside useEffect, after a
// 5500ms timer or once the placeholder enters the viewport — so the
// chunk truly does not load until needed.

export function LazyHomeDiscover({
  heading,
  body,
}: { heading?: string; body?: string } = {}) {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/home/HomeDiscover").then((m) => ({
          default: m.HomeDiscover,
        }))
      }
      props={{ heading, body }}
    />
  );
}

export function LazyHomeManageCard({
  heading,
  body,
}: { heading?: string; body?: string } = {}) {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/home/HomeManageCard").then((m) => ({
          default: m.HomeManageCard,
        }))
      }
      props={{ heading, body }}
    />
  );
}

export function LazyMockupterms() {
  return <LazyOnDemand load={() => import("@/components/proofly/Mockupterms.jsx")} />;
}

export function LazyRolesSplit() {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/home/RolesSplit").then((m) => ({
          default: m.RolesSplit,
        }))
      }
    />
  );
}

export function LazyEcosystemStats({
  heading,
  body,
  stats,
}: {
  heading?: string;
  body?: string;
  stats?: readonly HomeStat[];
} = {}) {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/home/EcosystemStats").then((m) => ({
          default: m.EcosystemStats,
        }))
      }
      props={{ heading, body, stats }}
    />
  );
}

export function LazyMembersTestimonials({
  testimonials,
}: { testimonials?: Testimonial[] } = {}) {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/widgets/MembersTestimonials").then((m) => ({
          default: m.MembersTestimonials,
        }))
      }
      props={{ testimonials }}
    />
  );
}
