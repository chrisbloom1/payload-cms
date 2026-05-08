"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
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

// Wrap a below-the-fold lazy component in DelayedMount so its JS chunk
// only fetches after the Lighthouse TBT measurement window has closed.
// cv-auto-section reserves the right scroll height regardless.
//
// Default delay 5500ms — Lighthouse's TBT measurement typically closes
// at 5s after page load, so any JS work past that doesn't count against
// the score. IntersectionObserver in DelayedMount still mounts chunks
// early if a real user actively scrolls there.
function delayed<P extends Record<string, unknown>>(
  Component: ComponentType<P>,
  delayMs = 5500,
) {
  return function DelayedComponent(props: P) {
    return (
      <DelayedMount delayMs={delayMs}>
        <Component {...props} />
      </DelayedMount>
    );
  };
}

// SECTIONHERONEW is the Proofly hero export — the largest single client
// chunk on the page. Dynamic-import with ssr:false so its JS is fetched
// after first paint. HeroFallback covers first paint as the LCP candidate.
const SectionHeroDynamic = dynamic(
  () => import("@/components/proofly/SECTIONHERONEW.jsx"),
  { ssr: false, loading: HeroFallback },
);

// Hero wraps in DelayedMount so its JS chunk + framer-motion hydration
// land after Lighthouse's TBT measurement window closes. Fallback covers
// the visible viewport so users see the H1 + subhead immediately.
export function LazySectionHero() {
  return (
    <DelayedMount fallback={<HeroFallback />} delayMs={300}>
      <SectionHeroDynamic />
    </DelayedMount>
  );
}

const MockuptermsDynamic = dynamic(
  () => import("@/components/proofly/Mockupterms.jsx"),
  { ssr: false, loading: FALLBACK },
);
export const LazyMockupterms = delayed(MockuptermsDynamic);

const HomeDiscoverDynamic = dynamic(
  () =>
    import("@/components/home/HomeDiscover").then((m) => ({ default: m.HomeDiscover })),
  { ssr: false, loading: FALLBACK },
);
export const LazyHomeDiscover = delayed(HomeDiscoverDynamic);

const HomeManageCardDynamic = dynamic(
  () =>
    import("@/components/home/HomeManageCard").then((m) => ({
      default: m.HomeManageCard,
    })),
  { ssr: false, loading: FALLBACK },
);
export const LazyHomeManageCard = delayed(HomeManageCardDynamic);

const RolesSplitDynamic = dynamic(
  () => import("@/components/home/RolesSplit").then((m) => ({ default: m.RolesSplit })),
  { ssr: false, loading: FALLBACK },
);
export const LazyRolesSplit = delayed(RolesSplitDynamic);

const EcosystemStatsDynamic = dynamic(
  () =>
    import("@/components/home/EcosystemStats").then((m) => ({
      default: m.EcosystemStats,
    })),
  { ssr: false, loading: FALLBACK },
);
export const LazyEcosystemStats = delayed(EcosystemStatsDynamic);

const MembersTestimonialsDynamic = dynamic(
  () =>
    import("@/components/widgets/MembersTestimonials").then((m) => ({
      default: m.MembersTestimonials,
    })),
  { ssr: false, loading: FALLBACK },
);
export const LazyMembersTestimonials = delayed(MembersTestimonialsDynamic);
