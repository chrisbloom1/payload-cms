"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { BloomMarkGradient } from "@/components/BloomLogo";

/**
 * Bloom platform app demo video, anchored above the Discover section.
 *
 * The video is the page's LCP element, so the poster preloads at high
 * priority. The 2.9MB MP4, however, used to start streaming during page
 * load (autoplay + preload="metadata"), which on slow networks competes
 * with the LCP poster + critical JS chunks for bandwidth and tanks the
 * Lighthouse mobile score. We defer the actual <source> attachment +
 * play() until the browser hits an idle frame after first paint, so
 * the poster shows immediately and the heavy mp4 fetch happens after
 * the LCP/TBT measurement window.
 */
export function HomeAppDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = () => {
      // Attach the source after first paint so the mp4 fetch doesn't
      // run during the LCP window.
      const source = video.querySelector("source[data-src]") as HTMLSourceElement | null;
      if (source && !source.src) {
        source.src = source.dataset.src || "";
        video.load();
        void video.play().catch(() => {
          // Autoplay may be blocked; the poster image already shows.
        });
      }
    };

    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (typeof idle === "function") {
      idle(start);
    } else {
      window.setTimeout(start, 1500);
    }
  }, []);

  return (
    <RevealOnScroll
      as="section"
      className="relative w-full bg-bloom-cream pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-32"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center px-4 sm:px-6">
        <div className="relative flex flex-col items-center">
          {/* Mark + line connector */}
          <div className="relative flex h-[120px] w-12 flex-col items-center">
            <div
              aria-hidden="true"
              className="bg-bloom-cta absolute top-0 flex h-[44px] w-[44px] items-center justify-center rounded-md"
            >
              <BloomMarkGradient
                className="h-6 w-auto"
                preserveAspectRatio="xMidYMid meet"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute top-[44px] h-[76px] w-px bg-bloom-rose/70"
            />
          </div>

          {/* Video / poster */}
          <div
            className="relative w-full overflow-hidden rounded-md ring-1 ring-bloom-navy/10"
            style={{ aspectRatio: "1440 / 992" }}
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              poster="/videos/bloom-app-demo-poster.webp"
              // @ts-expect-error -- fetchPriority is a valid HTML attribute supported by React 19 / Next 16.
              fetchPriority="high"
              className="block h-auto w-full"
            >
              {/* data-src deferred until after first paint via useEffect */}
              <source data-src="/videos/bloom-app-demo.mp4" type="video/mp4" />
              {/* Static fallback if video can't load. No `priority` here —
                  the LCP poster preload lives in (frontend)/page.tsx; we
                  don't want a duplicate Next.js auto-generated preload. */}
              <Image
                src="/videos/bloom-app-demo-poster.webp"
                alt="Bloom platform interface"
                width={1440}
                height={992}
                sizes="(min-width: 960px) 960px, 100vw"
                className="block h-auto w-full"
              />
            </video>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default HomeAppDemo;
