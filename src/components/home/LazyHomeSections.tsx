"use client";

import { LazyOnDemand } from "@/components/LazyOnDemand";

// Below-the-fold sections use LazyOnDemand (true on-demand import)
// rather than next/dynamic. next/dynamic registers the chunk with
// Next.js's static prefetch graph at module-load time, which caused
// the framer-motion chunk to download inside Lighthouse's TBT
// window even though the component itself wasn't rendering yet.
// LazyOnDemand evaluates `import()` only inside useEffect, after a
// 5500ms timer or once the placeholder enters the viewport — so the
// chunk truly does not load until needed.

export function LazyHomeDiscover() {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/home/HomeDiscover").then((m) => ({
          default: m.HomeDiscover,
        }))
      }
    />
  );
}

export function LazyHomeManageCard() {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/home/HomeManageCard").then((m) => ({
          default: m.HomeManageCard,
        }))
      }
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

export function LazyEcosystemStats() {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/home/EcosystemStats").then((m) => ({
          default: m.EcosystemStats,
        }))
      }
    />
  );
}

export function LazyMembersTestimonials() {
  return (
    <LazyOnDemand
      load={() =>
        import("@/components/widgets/MembersTestimonials").then((m) => ({
          default: m.MembersTestimonials,
        }))
      }
    />
  );
}
