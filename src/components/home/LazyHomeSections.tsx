"use client";

import dynamic from "next/dynamic";

// Heavy Framer / animation widgets are loaded only client-side and after
// initial paint. cv-auto-section + contain-intrinsic-size on the parent
// reserves space so the swap-in is CLS-neutral. Pulling these out of the
// initial HTML drops the DOM size, kills 25+ framerusercontent.com image
// preloads from the head, and removes their hydration cost from the
// critical path — the single biggest lever for the Lighthouse mobile
// performance score on this homepage.

const FALLBACK = () => null;

export const LazyMockupterms = dynamic(
  () => import("@/components/proofly/Mockupterms.jsx"),
  { ssr: false, loading: FALLBACK },
);

export const LazyHomeDiscover = dynamic(
  () =>
    import("@/components/home/HomeDiscover").then((m) => ({ default: m.HomeDiscover })),
  { ssr: false, loading: FALLBACK },
);

export const LazyHomeManageCard = dynamic(
  () =>
    import("@/components/home/HomeManageCard").then((m) => ({
      default: m.HomeManageCard,
    })),
  { ssr: false, loading: FALLBACK },
);

export const LazyRolesSplit = dynamic(
  () => import("@/components/home/RolesSplit").then((m) => ({ default: m.RolesSplit })),
  { ssr: false, loading: FALLBACK },
);

export const LazyEcosystemStats = dynamic(
  () =>
    import("@/components/home/EcosystemStats").then((m) => ({
      default: m.EcosystemStats,
    })),
  { ssr: false, loading: FALLBACK },
);

export const LazyMembersTestimonials = dynamic(
  () =>
    import("@/components/widgets/MembersTestimonials").then((m) => ({
      default: m.MembersTestimonials,
    })),
  { ssr: false, loading: FALLBACK },
);
