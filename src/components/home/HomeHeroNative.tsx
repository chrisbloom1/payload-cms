"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Hand-rolled hero, replacing the Proofly/Framer SECTIONHERONEW export.
 *
 * Why: SECTIONHERONEW pulled in @proofly-framer/runtime + framer-motion
 * (~519KB chunk + dozens of framerusercontent.com image preloads) which
 * dominated the page's TBT and was the last large lever for the
 * Lighthouse mobile score. This native version renders identical content
 * with plain HTML/CSS — fluid responsive sizing, CSS-only marquee, and
 * a small useEffect for the rotating word.
 *
 * No client-side runtime CSS injection, no per-image preload `<link>`s,
 * no framer-motion. The H1 paints at first paint and stays the LCP
 * element through the full page lifecycle.
 */

const ROTATING_WORDS = [
  "Manufacturing",
  "Warehousing",
  "Assembly",
  "Logistics",
] as const;
const HOLD_MS = 1600;
const FADE_MS = 140;

// Logo URLs are kept on Framer's CDN (already cached + warm via the
// preconnect to framerusercontent.com in the root layout). We just stop
// asking React to preload them — `loading="lazy"` and small priority
// hints make these decorative.
const LOGOS: ReadonlyArray<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = [
  { src: "https://framerusercontent.com/images/zOU0s3HDH3nSML4Xy125bAqSgY.svg?width=216&height=16", alt: "Boaz Bikes", width: 216, height: 16 },
  { src: "https://framerusercontent.com/images/5zu3Iz824S6q6ht47TTJPbJljZc.svg?width=202&height=64", alt: "DUST", width: 202, height: 64 },
  { src: "https://framerusercontent.com/images/v0EIHszp30eu4nqYKuVlDvy32no.svg?width=136&height=42", alt: "tokyobike", width: 136, height: 42 },
  { src: "https://framerusercontent.com/images/92Gt2GLdGujypVTujIOUe3uSdwY.svg?width=80&height=57", alt: "Civilized Cycles", width: 80, height: 57 },
  { src: "https://framerusercontent.com/images/67rBqwLG8X5Rf2B3EcMbwq8sSzU.svg?width=183&height=36", alt: "Electric Plant Co", width: 183, height: 36 },
  { src: "https://framerusercontent.com/images/nquQYqc6S2OZaM9ZkqAv6YWVWA.svg?width=207&height=55", alt: "Toyota", width: 207, height: 55 },
  { src: "https://framerusercontent.com/images/7rx8tX8GFdgtExQizpPxn8X9vLM.svg?width=127&height=91", alt: "Forecast Sardinia", width: 127, height: 91 },
  { src: "https://framerusercontent.com/images/DgMiPYDc7FGjihJbZGcGw7rKZ0s.svg?width=376&height=91", alt: "cake", width: 376, height: 91 },
  { src: "https://framerusercontent.com/images/gpFud7o1WyPiR2bfQcWgsw4GySU.png?width=200&height=41", alt: "CLIP", width: 200, height: 41 },
  { src: "https://framerusercontent.com/images/JFCMKhQY1cM88fhddb3nkOKY.svg?width=246&height=41", alt: "Forward X Robotics", width: 246, height: 41 },
  { src: "https://framerusercontent.com/images/lDgBE3TMybzd3s0Fb6Sukn7c4zw.png?width=220&height=81", alt: "TIME", width: 220, height: 81 },
  { src: "https://framerusercontent.com/images/2Qe4cxisK4TvuGAOlzUR9xynuXQ.svg?width=185&height=33", alt: "emoto Supply Co", width: 185, height: 33 },
  { src: "https://framerusercontent.com/images/n696g0ZwfNyZ2Sonp7GZkfeYdg.svg?width=152&height=25", alt: "GROUNDED", width: 152, height: 25 },
  { src: "https://framerusercontent.com/images/8SVNnZsZJzlex74wHBUCGfl4t6s.png?width=500&height=106", alt: "MOONBIKES", width: 500, height: 106 },
  { src: "https://framerusercontent.com/images/roMWh32P8PO0Laeve9lz5ESnWnc.svg?width=363&height=100", alt: "GLĪD", width: 363, height: 100 },
  { src: "https://framerusercontent.com/images/q1E5JJeezbHty7QWcG2KAtq6s.png?width=218&height=41", alt: "LAND", width: 218, height: 41 },
  { src: "https://framerusercontent.com/images/aAfjWgYyKluPFIZWkD5Ze3CGDk.svg?width=117&height=27", alt: "Vela", width: 117, height: 27 },
  { src: "https://framerusercontent.com/images/NQ4fKEZ3mTgsFC4kUoIKAWWkTA.png?width=130&height=46", alt: "It's Electric", width: 130, height: 46 },
  { src: "https://framerusercontent.com/images/msfZWsUknmu6ZDVetqXa6UtkKRw.svg?width=110&height=22", alt: "tubular.network", width: 110, height: 22 },
  { src: "https://framerusercontent.com/images/1ZJXbZsqCC7R5tIIfzBW0cYYoI.png?width=120&height=17", alt: "ENVO", width: 120, height: 17 },
];

export function HomeHeroNative() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const interval = window.setInterval(() => {
      if (cancelled) return;
      setVisible(false);
      window.setTimeout(() => {
        if (cancelled) return;
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS + FADE_MS);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
      aria-label="Bloom"
      className="relative w-full overflow-hidden bg-bloom-cream"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 pt-32 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
        <div className="flex w-full max-w-[1080px] flex-col items-center gap-6 text-center sm:gap-8">
          <h1
            className="hero-fade-in text-balance text-[36px] font-extrabold leading-[1.05] tracking-tight text-bloom-navy sm:text-[44px] lg:text-[60px]"
            style={{
              fontFamily:
                '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
              fontWeight: 800,
            }}
          >
            Hardware shouldn&rsquo;t be hard.
          </h1>

          <p
            className="hero-fade-in flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[18px] leading-[1.4] text-bloom-navy sm:text-[22px] lg:text-[24px]"
            style={{
              fontFamily:
                '"Haffer Regular", "Haffer Fallback", sans-serif',
              animationDelay: "60ms",
            }}
          >
            <span>We help make</span>
            <span
              className="relative inline-grid items-center rounded-md bg-bloom-navy px-2.5 py-0.5 text-bloom-cream"
              style={{
                fontFamily:
                  '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
                fontWeight: 700,
                gridTemplateColumns: "1fr",
              }}
            >
              {/* All four words live in the same grid cell so the pill
                  sizes to the widest ("Manufacturing") and never bounces. */}
              {ROTATING_WORDS.map((w, i) => (
                <span
                  key={w}
                  aria-hidden={i !== wordIndex}
                  className="col-start-1 row-start-1 transition-opacity"
                  style={{
                    opacity: i === wordIndex && visible ? 1 : 0,
                    transitionDuration: `${FADE_MS}ms`,
                    transitionTimingFunction: "ease-out",
                    whiteSpace: "nowrap",
                  }}
                >
                  {w}
                </span>
              ))}
            </span>
            <span>easier.</span>
          </p>
        </div>

        {/* Chat card mockup */}
        <div className="hero-fade-in mt-10 w-full max-w-[600px] sm:mt-12 lg:mt-14" style={{ animationDelay: "120ms" }}>
          <div
            className="relative rounded-md bg-bloom-mint-soft px-4 pt-4 pb-14 text-left text-bloom-navy/60 ring-1 ring-bloom-navy/10 sm:px-5 sm:pt-5 sm:pb-16"
            style={{
              fontFamily:
                '"Haffer Regular", "Haffer Fallback", sans-serif',
            }}
          >
            <span className="block text-[15px] sm:text-[16px]">
              Describe your product&rsquo;s supply chain needs
            </span>
            <button
              type="button"
              disabled
              aria-label="Chat now (preview)"
              className="bg-bloom-cta absolute right-3 bottom-3 inline-flex items-center justify-center rounded-md px-4 py-2 text-[14px] font-semibold text-white sm:right-4 sm:bottom-4 sm:text-[15px]"
              style={{
                fontFamily:
                  '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
                fontWeight: 700,
              }}
            >
              Chat now
            </button>
          </div>
          <div className="-mt-3 flex justify-center">
            <span
              className="inline-flex items-center justify-center rounded-full bg-bloom-navy px-3.5 py-1 text-[12px] font-semibold text-bloom-cream sm:text-[13px]"
              style={{
                fontFamily:
                  '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
              }}
            >
              Start for free now!
            </span>
          </div>
        </div>

        <p
          className="hero-fade-in mt-10 max-w-[920px] text-balance text-[17px] leading-[1.45] text-bloom-navy/85 sm:mt-14 sm:text-[20px] lg:text-[22px]"
          style={{
            fontFamily: '"Haffer Regular", "Haffer Fallback", sans-serif',
            animationDelay: "180ms",
          }}
        >
          Bloom helps leading{" "}
          <strong className="font-bold">mobility, energy, robotics</strong>{" "}
          brands scale faster through our vetted network
        </p>
      </div>

      {/* Logo marquee — pure CSS infinite scroll. We render the list
          twice end-to-end and animate translateX from 0 to -50% so the
          loop seam is invisible. */}
      <div
        className="relative mb-6 w-full overflow-hidden"
        aria-label="Bloom partner brands"
      >
        <div className="hero-marquee flex w-max items-center gap-12 px-4 py-2">
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <Image
              key={`${logo.src}-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              decoding="async"
              unoptimized
              className="h-12 w-auto opacity-80 sm:h-14"
              draggable={false}
            />
          ))}
        </div>
        {/* Edge fades so the marquee melts into the page background. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bloom-cream to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bloom-cream to-transparent sm:w-24" />
      </div>
    </section>
  );
}
