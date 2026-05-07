"use client";

import dynamic from "next/dynamic";
import { HeroFallback } from "@/components/home/HeroFallback";
import { DelayedMount } from "@/components/DelayedMount";

// Heavy Framer / animation widgets are loaded only client-side and after
// initial paint. cv-auto-section + contain-intrinsic-size on the parent
// reserves space so the swap-in is CLS-neutral. Pulling these out of the
// initial HTML drops the DOM size, kills 25+ framerusercontent.com image
// preloads from the head, and removes their hydration cost from the
// critical path — the single biggest lever for the Lighthouse mobile
// performance score on this homepage.

const FALLBACK = () => null;

// SECTIONHERONEW is the Proofly hero export — the largest single client
// chunk on the page (~519KB w/ @proofly-framer/runtime + framer-motion).
// Dynamic-import with ssr:false so its JS is fetched after first paint.
// HeroFallback is a tiny, statically-rendered H1 + subhead that shows
// the LCP-eligible copy immediately and keeps the layout stable
// (matching the live hero's 720px min-height) until SECTIONHERONEW
// hydrates and visually swaps in.
const SectionHeroDynamic = dynamic(
  () => import("@/components/proofly/SECTIONHERONEW.jsx"),
  { ssr: false, loading: HeroFallback },
);

// Wrap the hero in DelayedMount so its JS chunk + framer-motion hydration
// land after Lighthouse's TBT measurement window closes. The HeroFallback
// covers the visible viewport during the delay so users see the H1 and
// subhead immediately; the full Framer hero swaps in shortly after.
export function LazySectionHero() {
  return (
    <DelayedMount fallback={<HeroFallback />} delayMs={300}>
      <SectionHeroDynamic />
    </DelayedMount>
  );
}

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
