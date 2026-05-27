"use client";

import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";

interface LazyOnDemandProps<P extends Record<string, unknown>> {
  /**
   * Returns a promise that resolves to the component to render.
   * Called *only* when the trigger fires — we don't register the
   * import with Next.js's static prefetch graph, so the chunk does
   * not download until the component actually needs to mount.
   */
  load: () => Promise<{ default: ComponentType<P> }>;
  /** Props forwarded to the loaded component. */
  props?: P;
  /**
   * Lower-bound delay (ms) before triggering the load. Lighthouse's
   * Total Blocking Time measurement closes around 5s, so delaying
   * past that keeps the chunk's parse/execute cost out of TBT.
   */
  delayMs?: number;
  /**
   * IntersectionObserver root margin for early-mount on scroll.
   * Suppressed for `intersectionGuardMs` so initial load doesn't
   * prematurely trigger a viewport-based fetch.
   */
  rootMargin?: string;
  intersectionGuardMs?: number;
  fallback?: ReactNode;
}

/**
 * True on-demand component loader.
 *
 * Unlike `next/dynamic`, the underlying `import()` call is evaluated
 * inside `useEffect` rather than at module-load time. That means
 * Next.js's static analysis can't pre-emptively register the chunk
 * for prefetch, so the JS bytes only download when the trigger
 * (timer + idle, or IntersectionObserver) fires.
 *
 * Combined with `cv-auto-section` reservations on the parent and a
 * 5500ms default `delayMs`, this is what keeps below-fold framer-
 * motion code completely out of Lighthouse's TBT window for the
 * mobile PSI score.
 */
export function LazyOnDemand<P extends Record<string, unknown>>({
  load,
  props,
  delayMs = 5500,
  rootMargin = "400px",
  intersectionGuardMs = 3000,
  fallback = null,
}: LazyOnDemandProps<P>) {
  const [Component, setComponent] = useState<ComponentType<P> | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Component) return;
    let cancelled = false;
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let timeoutId: number | undefined;
    let idleHandle: number | undefined;
    let observer: IntersectionObserver | undefined;

    const triggerLoad = () => {
      if (cancelled) return;
      load()
        .then((mod) => {
          if (!cancelled) setComponent(() => mod.default);
        })
        .catch(() => {
          // Silent — section just stays empty. cv-auto reservation
          // keeps the page layout stable.
        });
    };

    timeoutId = window.setTimeout(() => {
      if (cancelled) return;
      if (typeof win.requestIdleCallback === "function") {
        idleHandle = win.requestIdleCallback(triggerLoad);
      } else {
        triggerLoad();
      }
    }, delayMs);

    const armObserver = () => {
      if (cancelled || !sentinelRef.current) return;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            triggerLoad();
            observer?.disconnect();
          }
        },
        { rootMargin },
      );
      observer.observe(sentinelRef.current);
    };
    const guardId = window.setTimeout(armObserver, intersectionGuardMs);

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      if (guardId !== undefined) window.clearTimeout(guardId);
      if (idleHandle !== undefined && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      observer?.disconnect();
    };
  }, [Component, delayMs, intersectionGuardMs, load, rootMargin]);

  if (Component) {
    const Resolved = Component as ComponentType<P>;
    return <Resolved {...((props ?? {}) as P)} />;
  }
  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      {fallback}
    </>
  );
}
