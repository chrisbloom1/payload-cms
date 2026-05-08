"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

// Where the chat card sends users when they submit their prompt.
// Mirrors the original Proofly hero's handleSend behavior — opens
// `?prefill=<encoded>` on the marketplace request flow in a new tab.
// Override at runtime by appending ?vchaturl=<...> to the page URL.
const DEFAULT_CHAT_URL = "https://app.bloomnetwork.ai/marketplace/request/new";

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

// Two rows of brand logos, matching the live bloomnetwork.ai layout
// exactly: row 1 scrolls left, row 2 scrolls right, both at ~20px/s.
// URLs come straight from Framer's CDN (already cached, preconnected
// in the root layout). Marked `loading="lazy"` so React doesn't emit
// a preload <link> for each one.
type Logo = { src: string; alt: string; width: number; height: number };

const LOGOS_ROW_1: ReadonlyArray<Logo> = [
  { src: "https://framerusercontent.com/images/zOU0s3HDH3nSML4Xy125bAqSgY.svg?width=216&height=16", alt: "Boaz Bikes", width: 216, height: 16 },
  { src: "https://framerusercontent.com/images/5zu3Iz824S6q6ht47TTJPbJljZc.svg?width=202&height=64", alt: "DUST", width: 202, height: 64 },
  { src: "https://framerusercontent.com/images/v0EIHszp30eu4nqYKuVlDvy32no.svg?width=136&height=42", alt: "tokyobike", width: 136, height: 42 },
  { src: "https://framerusercontent.com/images/92Gt2GLdGujypVTujIOUe3uSdwY.svg?width=80&height=57", alt: "Civilized Cycles", width: 80, height: 57 },
  { src: "https://framerusercontent.com/images/67rBqwLG8X5Rf2B3EcMbwq8sSzU.svg?width=183&height=36", alt: "Electric Plant Co", width: 183, height: 36 },
  { src: "https://framerusercontent.com/images/nquQYqc6S2OZaM9ZkqAv6YWVWA.svg?width=207&height=55", alt: "Toyota", width: 207, height: 55 },
  { src: "https://framerusercontent.com/images/7rx8tX8GFdgtExQizpPxn8X9vLM.svg?width=127&height=91", alt: "Forecast Sardinia", width: 127, height: 91 },
  { src: "https://framerusercontent.com/images/DgMiPYDc7FGjihJbZGcGw7rKZ0s.svg?width=376&height=91", alt: "cake", width: 376, height: 91 },
  { src: "https://framerusercontent.com/images/gpFud7o1WyPiR2bfQcWgsw4GySU.png?width=200&height=41", alt: "CLIP", width: 200, height: 41 },
];

const LOGOS_ROW_2: ReadonlyArray<Logo> = [
  { src: "https://framerusercontent.com/images/JFCMKhQY1cM88fhddb3nkOKY.svg?width=246&height=41", alt: "Forward X Robotics", width: 246, height: 41 },
  { src: "https://framerusercontent.com/images/lDgBE3TMybzd3s0Fb6Sukn7c4zw.png?width=220&height=81", alt: "TIME", width: 220, height: 81 },
  { src: "https://framerusercontent.com/images/2Qe4cxisK4TvuGAOlzUR9xynuXQ.svg?width=185&height=33", alt: "emoto Supply Co", width: 185, height: 33 },
  { src: "https://framerusercontent.com/images/n696g0ZwfNyZ2Sonp7GZkfeYdg.svg?width=152&height=25", alt: "GROUNDED", width: 152, height: 25 },
  { src: "https://framerusercontent.com/images/4Tn3Wd1Y3B29DLkui0cm775VRIk.svg?width=444&height=501", alt: "Brand", width: 444, height: 501 },
  { src: "https://framerusercontent.com/images/8SVNnZsZJzlex74wHBUCGfl4t6s.png?width=500&height=106", alt: "MOONBIKES", width: 500, height: 106 },
  { src: "https://framerusercontent.com/images/roMWh32P8PO0Laeve9lz5ESnWnc.svg?width=363&height=100", alt: "GLĪD", width: 363, height: 100 },
  { src: "https://framerusercontent.com/images/i1nNnbxIqz7kxapTHKxQckMx5A.svg?width=870&height=600", alt: "Brand", width: 870, height: 600 },
  { src: "https://framerusercontent.com/images/q1E5JJeezbHty7QWcG2KAtq6s.png?width=218&height=41", alt: "LAND", width: 218, height: 41 },
  { src: "https://framerusercontent.com/images/aAfjWgYyKluPFIZWkD5Ze3CGDk.svg?width=117&height=27", alt: "Vela", width: 117, height: 27 },
  { src: "https://framerusercontent.com/images/NQ4fKEZ3mTgsFC4kUoIKAWWkTA.png?width=130&height=46", alt: "It's Electric", width: 130, height: 46 },
  { src: "https://framerusercontent.com/images/msfZWsUknmu6ZDVetqXa6UtkKRw.svg?width=110&height=22", alt: "tubular.network", width: 110, height: 22 },
  { src: "https://framerusercontent.com/images/mFPc2jSqPh5spd5K19UjxTat7vI.png?width=268&height=199", alt: "Brand", width: 268, height: 199 },
  { src: "https://framerusercontent.com/images/1ZJXbZsqCC7R5tIIfzBW0cYYoI.png?width=120&height=17", alt: "ENVO", width: 120, height: 17 },
];

export function HomeHeroNative() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [chatValue, setChatValue] = useState("");

  const handleChatSend = useCallback(() => {
    const value = chatValue.trim();
    if (!value) return;
    let baseUrl = DEFAULT_CHAT_URL;
    try {
      if (typeof window !== "undefined" && typeof URLSearchParams !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const override = urlParams.get("vchaturl");
        if (override) baseUrl = override;
      }
    } catch {
      // Fallback to default base URL if URL param parsing fails.
    }
    const sep = baseUrl.includes("?") ? "&" : "?";
    const finalUrl = `${baseUrl}${sep}prefill=${encodeURIComponent(value)}`;
    if (typeof window !== "undefined") window.open(finalUrl, "_blank");
  }, [chatValue]);

  const handleChatKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChatSend();
      }
    },
    [handleChatSend],
  );

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

        {/* Chat card — interactive textarea + Chat now CTA. Submit
            (button click or Enter without Shift) opens the marketplace
            request flow with the prompt prefilled, in a new tab. */}
        <form
          className="hero-fade-in relative mt-10 w-full max-w-[600px] sm:mt-12 lg:mt-14"
          style={{ animationDelay: "120ms" }}
          onSubmit={(e) => {
            e.preventDefault();
            handleChatSend();
          }}
        >
          <div className="relative rounded-md bg-bloom-mint-soft ring-1 ring-bloom-navy/10 transition-shadow focus-within:ring-bloom-navy/30">
            <label htmlFor="hero-chat" className="sr-only">
              Describe your product&rsquo;s supply chain needs
            </label>
            <textarea
              id="hero-chat"
              value={chatValue}
              onChange={(e) => setChatValue(e.target.value)}
              onKeyDown={handleChatKeyDown}
              placeholder="Describe your product's supply chain needs"
              rows={3}
              className="block w-full resize-none rounded-md bg-transparent px-4 pt-4 pb-14 text-left text-[15px] leading-[1.45] text-bloom-navy outline-none placeholder:text-bloom-navy/55 sm:px-5 sm:pt-5 sm:pb-16 sm:text-[16px]"
              style={{
                fontFamily:
                  '"Haffer Regular", "Haffer Fallback", sans-serif',
              }}
            />
            <button
              type="submit"
              disabled={!chatValue.trim()}
              aria-label="Send chat prompt"
              className="bg-bloom-cta absolute right-3 bottom-3 inline-flex items-center justify-center rounded-md px-4 py-2 text-[14px] font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:right-4 sm:bottom-4 sm:text-[15px]"
              style={{
                fontFamily:
                  '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
                fontWeight: 700,
              }}
            >
              Chat now
            </button>
          </div>
          {/* Badge is absolute-positioned with z-index above the card so
              it sits *over* the bottom edge instead of being clipped by
              flex layout — matches the live bloomnetwork.ai pattern. */}
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 inline-flex items-center justify-center rounded-full bg-bloom-navy px-3.5 py-1 text-[12px] font-semibold text-bloom-cream sm:text-[13px]"
            style={{
              fontFamily:
                '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
            }}
          >
            Start for free now!
          </span>
        </form>

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

      {/* Logo marquee — two rows scrolling in opposite directions to
          match the live bloomnetwork.ai layout. Each row's track holds
          two copies of its logo list end-to-end so animating
          translateX 0 → -50% (or vice versa) produces a seamless loop.
          Speed (~20px/s) tuned to the live site by measuring img
          displacement over time. */}
      <div
        className="relative mb-6 flex w-full flex-col gap-6 overflow-hidden"
        aria-label="Bloom partner brands"
      >
        <div className="hero-marquee-left flex w-max items-center gap-12 px-4">
          {[...LOGOS_ROW_1, ...LOGOS_ROW_1].map((logo, idx) => (
            <Image
              key={`r1-${logo.src}-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              decoding="async"
              unoptimized
              className="h-9 w-auto opacity-80 sm:h-10 lg:h-11"
              draggable={false}
            />
          ))}
        </div>
        <div className="hero-marquee-right flex w-max items-center gap-12 px-4">
          {[...LOGOS_ROW_2, ...LOGOS_ROW_2].map((logo, idx) => (
            <Image
              key={`r2-${logo.src}-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              decoding="async"
              unoptimized
              className="h-9 w-auto opacity-80 sm:h-10 lg:h-11"
              draggable={false}
            />
          ))}
        </div>
        {/* Edge fades so the marquees melt into the page background. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bloom-cream to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bloom-cream to-transparent sm:w-24" />
      </div>
    </section>
  );
}
