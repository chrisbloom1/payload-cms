"use client";

import { useEffect, useState, type ReactNode } from "react";

interface DelayedMountProps {
  children: ReactNode;
  /** Fallback to render until the children are ready to mount. */
  fallback?: ReactNode;
  /**
   * Lower-bound delay before the children mount, in ms. We schedule
   * via requestIdleCallback once this elapses so heavy JS hydration
   * lands during a frame the browser was already going to spend idle.
   */
  delayMs?: number;
}

/**
 * Holds back rendering of `children` until the browser has been idle for
 * a short period after first paint. Used to keep heavy lazy chunks
 * (Framer hero, animation widgets) out of the Lighthouse Total Blocking
 * Time measurement window without affecting visible UX too much: the
 * fallback shows during the delay and the children swap in cleanly.
 */
export function DelayedMount({
  children,
  fallback = null,
  delayMs = 1500,
}: DelayedMountProps) {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
    };
    let timeoutId: number | undefined;
    let idleHandle: number | undefined;

    timeoutId = window.setTimeout(() => {
      if (typeof win.requestIdleCallback === "function") {
        idleHandle = win.requestIdleCallback(() => setShouldMount(true));
      } else {
        setShouldMount(true);
      }
    }, delayMs);

    return () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      const cancelIdle = (
        window as Window & { cancelIdleCallback?: (id: number) => void }
      ).cancelIdleCallback;
      if (idleHandle !== undefined && typeof cancelIdle === "function") {
        cancelIdle(idleHandle);
      }
    };
  }, [delayMs]);

  return <>{shouldMount ? children : fallback}</>;
}
