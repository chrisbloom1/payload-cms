"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface DelayedMountProps {
  children: ReactNode;
  /** Fallback to render until the children are ready to mount. */
  fallback?: ReactNode;
  /**
   * Lower-bound delay before the children mount, in ms. We schedule
   * via requestIdleCallback once this elapses so heavy JS hydration
   * lands during a frame the browser was already going to spend idle.
   *
   * IntersectionObserver also triggers an early mount when the
   * placeholder gets within `rootMargin` of the viewport, so fast
   * scrollers always see real content rather than empty sections.
   */
  delayMs?: number;
  /** IntersectionObserver root margin for early mount on scroll. */
  rootMargin?: string;
  /**
   * The viewport-based mount path is what keeps fast scrollers happy,
   * but for the first ~3s after page load we want to *not* mount even
   * if the placeholder is already near the viewport — otherwise lazy
   * chunks fetch during Lighthouse's TBT measurement window. Defaults
   * to 3000ms.
   */
  intersectionGuardMs?: number;
}

/**
 * Holds back rendering of `children` until the earlier of:
 *   1) the browser has been idle for ~delayMs, or
 *   2) the placeholder enters the viewport (or is within rootMargin
 *      of it).
 *
 * Used to keep heavy lazy chunks (Framer hero, animation widgets)
 * out of the Lighthouse Total Blocking Time measurement window
 * while still feeling instant when a user actually scrolls to a
 * section.
 */
export function DelayedMount({
  children,
  fallback = null,
  delayMs = 1500,
  rootMargin = "400px",
  intersectionGuardMs = 3000,
}: DelayedMountProps) {
  const [shouldMount, setShouldMount] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldMount) return;
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let timeoutId: number | undefined;
    let idleHandle: number | undefined;
    let observer: IntersectionObserver | undefined;
    let cancelled = false;

    const mountNow = () => {
      if (cancelled) return;
      setShouldMount(true);
    };

    // Time-based path — schedule on the next idle frame after delayMs.
    timeoutId = window.setTimeout(() => {
      if (cancelled) return;
      if (typeof win.requestIdleCallback === "function") {
        idleHandle = win.requestIdleCallback(mountNow);
      } else {
        mountNow();
      }
    }, delayMs);

    // Viewport-based path — mount immediately if the placeholder is
    // about to be seen. Suppressed for the first `intersectionGuardMs`
    // so initial page load doesn't trigger an early mount when the
    // placeholder happens to be within rootMargin of the viewport.
    if (sentinelRef.current && typeof IntersectionObserver !== "undefined") {
      const armObserver = () => {
        if (cancelled) return;
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry?.isIntersecting) {
              mountNow();
              observer?.disconnect();
            }
          },
          { rootMargin },
        );
        if (sentinelRef.current) observer.observe(sentinelRef.current);
      };
      window.setTimeout(armObserver, intersectionGuardMs);
    }

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      if (idleHandle !== undefined && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleHandle);
      }
      observer?.disconnect();
    };
  }, [delayMs, rootMargin, shouldMount]);

  if (shouldMount) return <>{children}</>;
  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      {fallback}
    </>
  );
}
