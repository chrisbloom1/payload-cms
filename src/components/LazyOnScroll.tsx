"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyOnScrollProps {
  children: ReactNode;
  /** IntersectionObserver root margin; mount when section is within this distance of the viewport. */
  rootMargin?: string;
  className?: string;
  /** Reserve space before mount so swap-in does not cause CLS. */
  minHeight?: number | string;
}

/**
 * Defers mounting of `children` until the wrapper element is near the
 * viewport. Combined with a `next/dynamic` import using `ssr: false`,
 * this also defers downloading the heavy component's JS chunk — so
 * below-the-fold Framer widgets don't add to initial JS or main-thread
 * work on first paint.
 */
export function LazyOnScroll({
  children,
  rootMargin = "400px",
  className,
  minHeight,
}: LazyOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown || !ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, shown]);

  return (
    <div
      ref={ref}
      className={className}
      style={!shown && minHeight !== undefined ? { minHeight } : undefined}
    >
      {shown ? children : null}
    </div>
  );
}
