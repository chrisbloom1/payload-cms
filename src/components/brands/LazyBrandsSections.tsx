"use client";

import { LazyOnDemand } from "@/components/LazyOnDemand";

// Same on-demand pattern as LazyHomeSections — uses `LazyOnDemand`
// (not next/dynamic) so the chunk doesn't register with Next.js's
// static prefetch graph and the JS only downloads when the timer or
// IntersectionObserver fires.

// Animationmap is ~570KB of Framer-runtime + motion code. The
// `coastToCoast` row that hosts it sits the second screen down on
// /brands, so deferring it keeps that JS completely out of the TBT
// window for the mobile PSI score.
export function LazyAnimationmap() {
  return (
    <LazyOnDemand load={() => import("@/components/proofly/Animationmap.jsx")} />
  );
}
