"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { HOME_DEFAULTS, type HomeLogo } from "@/lib/home-page-defaults";

// Where the chat card sends users when they submit their prompt.
// Mirrors the original Proofly hero's handleSend behavior — opens
// `?prefill=<encoded>` on the marketplace request flow in a new tab.
// Override at runtime by appending ?vchaturl=<...> to the page URL.
const DEFAULT_CHAT_URL = HOME_DEFAULTS.hero.chatPrefillUrl;

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

const HOLD_MS = 1600;
const FADE_MS = 140;

// Two rows of brand logos, matching the live bloomnetwork.ai layout
// exactly: row 1 scrolls left, row 2 scrolls right, both at ~20px/s.
// Logos are self-hosted under /public/images/marquee-logos/ so the
// homepage no longer depends on framerusercontent.com — they're
// served from the same Vercel edge as the rest of the site. Marked
// `loading="lazy"` so React doesn't emit a preload <link> for each.
// Defaults below mirror the HomePage global so SSR + admin-empty
// fallback render the same set even before any Payload write.
type Logo = HomeLogo;

const LOGOS_ROW_1: ReadonlyArray<Logo> = [
  { src: "/images/marquee-logos/boaz-bikes.svg", alt: "Boaz Bikes", width: 216, height: 16 },
  { src: "/images/marquee-logos/dust.svg", alt: "DUST", width: 202, height: 64 },
  { src: "/images/marquee-logos/tokyobike.svg", alt: "tokyobike", width: 136, height: 42 },
  { src: "/images/marquee-logos/civilized-cycles.svg", alt: "Civilized Cycles", width: 80, height: 57 },
  { src: "/images/marquee-logos/electric-plant-co.svg", alt: "Electric Plant Co", width: 183, height: 36 },
  { src: "/images/marquee-logos/toyota.svg", alt: "Toyota", width: 207, height: 55 },
  { src: "/images/marquee-logos/forecast-sardinia.svg", alt: "Forecast Sardinia", width: 127, height: 91 },
  { src: "/images/marquee-logos/cake.svg", alt: "cake", width: 376, height: 91 },
  { src: "/images/marquee-logos/clip.png", alt: "CLIP", width: 200, height: 41 },
];

const LOGOS_ROW_2: ReadonlyArray<Logo> = [
  { src: "/images/marquee-logos/forward-x-robotics.svg", alt: "Forward X Robotics", width: 246, height: 41 },
  { src: "/images/marquee-logos/time.png", alt: "TIME", width: 220, height: 81 },
  { src: "/images/marquee-logos/emoto-supply-co.svg", alt: "emoto Supply Co", width: 185, height: 33 },
  { src: "/images/marquee-logos/grounded.svg", alt: "GROUNDED", width: 152, height: 25 },
  { src: "/images/marquee-logos/brand-1.svg", alt: "Brand", width: 444, height: 501 },
  { src: "/images/marquee-logos/moonbikes.png", alt: "MOONBIKES", width: 500, height: 106 },
  { src: "/images/marquee-logos/glid.svg", alt: "GLĪD", width: 363, height: 100 },
  { src: "/images/marquee-logos/brand-2.svg", alt: "Brand", width: 870, height: 600 },
  { src: "/images/marquee-logos/land.png", alt: "LAND", width: 218, height: 41 },
  { src: "/images/marquee-logos/vela.svg", alt: "Vela", width: 117, height: 27 },
  { src: "/images/marquee-logos/its-electric.png", alt: "It's Electric", width: 130, height: 46 },
  { src: "/images/marquee-logos/tubular-network.svg", alt: "tubular.network", width: 110, height: 22 },
  { src: "/images/marquee-logos/brand-3.png", alt: "Brand", width: 268, height: 199 },
  { src: "/images/marquee-logos/envo.png", alt: "ENVO", width: 120, height: 17 },
];

export interface HomeHeroNativeProps {
  headline?: string;
  subheadingPrefix?: string;
  rotatingWords?: readonly string[];
  subheadingSuffix?: string;
  chatPlaceholder?: string;
  chatButtonLabel?: string;
  chatPrefillUrl?: string;
  badgeText?: string;
  tagline?: string;
  logoMarqueeRow1?: readonly Logo[];
  logoMarqueeRow2?: readonly Logo[];
}

export function HomeHeroNative({
  headline = HOME_DEFAULTS.hero.headline,
  subheadingPrefix = HOME_DEFAULTS.hero.subheadingPrefix,
  rotatingWords: rotatingWordsProp,
  subheadingSuffix = HOME_DEFAULTS.hero.subheadingSuffix,
  chatPlaceholder = HOME_DEFAULTS.hero.chatPlaceholder,
  chatButtonLabel = HOME_DEFAULTS.hero.chatButtonLabel,
  chatPrefillUrl = HOME_DEFAULTS.hero.chatPrefillUrl,
  badgeText = HOME_DEFAULTS.hero.badgeText,
  tagline = HOME_DEFAULTS.hero.tagline,
  logoMarqueeRow1: row1Prop,
  logoMarqueeRow2: row2Prop,
}: HomeHeroNativeProps = {}) {
  const rotatingWords =
    rotatingWordsProp && rotatingWordsProp.length > 0
      ? rotatingWordsProp
      : (HOME_DEFAULTS.hero.rotatingWords as readonly string[]);
  const row1 = row1Prop && row1Prop.length > 0 ? row1Prop : LOGOS_ROW_1;
  const row2 = row2Prop && row2Prop.length > 0 ? row2Prop : LOGOS_ROW_2;
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [chatValue, setChatValue] = useState("");

  const handleChatSend = useCallback(() => {
    const value = chatValue.trim();
    if (!value) return;
    let baseUrl = chatPrefillUrl || DEFAULT_CHAT_URL;
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
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS + FADE_MS);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [rotatingWords.length]);

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
            {headline}
          </h1>

          <p
            className="hero-fade-in flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[18px] leading-[1.4] text-bloom-navy sm:text-[22px] lg:text-[24px]"
            style={{
              fontFamily:
                '"Haffer Regular", "Haffer Fallback", sans-serif',
              animationDelay: "60ms",
            }}
          >
            <span>{subheadingPrefix}</span>
            <span
              className="relative inline-grid items-center rounded-md bg-bloom-navy px-2.5 py-0.5 text-bloom-cream"
              style={{
                fontFamily:
                  '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
                fontWeight: 700,
                gridTemplateColumns: "1fr",
              }}
            >
              {/* All words live in the same grid cell so the pill
                  sizes to the widest one and never bounces. */}
              {rotatingWords.map((w, i) => (
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
            <span>{subheadingSuffix}</span>
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
              placeholder={chatPlaceholder}
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
              aria-label={chatButtonLabel}
              className="bg-bloom-cta absolute right-3 bottom-3 inline-flex items-center justify-center rounded-md px-4 py-2 text-[14px] font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:right-4 sm:bottom-4 sm:text-[15px]"
              style={{
                fontFamily:
                  '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
                fontWeight: 700,
              }}
            >
              {chatButtonLabel}
            </button>
          </div>
          {/* Badge is absolute-positioned with z-index above the card so
              it sits *over* the bottom edge instead of being clipped by
              flex layout — matches the live bloomnetwork.ai pattern.
              max-w-[calc(100%-1rem)] + whitespace-nowrap keeps it inside
              the form bounds on narrow viewports. */}
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 inline-flex max-w-[calc(100%-1rem)] items-center justify-center whitespace-nowrap rounded-full bg-bloom-navy px-3.5 py-1 text-[12px] font-semibold text-bloom-cream sm:text-[13px]"
            style={{
              fontFamily:
                '"Haffer Bold", "Haffer Bold Placeholder", "Haffer Fallback", sans-serif',
            }}
          >
            {badgeText}
          </span>
        </form>

        <p
          className="hero-fade-in mt-10 max-w-[920px] text-balance text-[17px] leading-[1.45] text-bloom-navy/85 sm:mt-14 sm:text-[20px] lg:text-[22px]"
          style={{
            fontFamily: '"Haffer Regular", "Haffer Fallback", sans-serif',
            animationDelay: "180ms",
          }}
        >
          {tagline}
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
        {/* Marquee logo eager-loading: the first ~6 logos per row are
            visible at first paint, and Lighthouse identified one of them
            (TIME) as the LCP element. Mark the first 6 of each row eager
            with fetchpriority=high so the browser fetches them on the
            critical path; everything past index 5 stays lazy. */}
        <div className="hero-marquee-left flex w-max items-center gap-12 px-4">
          {[...row1, ...row1].map((logo, idx) => (
            <Image
              key={`r1-${logo.src}-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading={idx < 6 ? "eager" : "lazy"}
              fetchPriority={idx < 6 ? "high" : "auto"}
              decoding="async"
              unoptimized
              className="h-12 max-w-[100px] flex-shrink-0 object-contain opacity-80 sm:h-14 sm:max-w-[110px]"
              draggable={false}
            />
          ))}
        </div>
        <div className="hero-marquee-right flex w-max items-center gap-12 px-4">
          {[...row2, ...row2].map((logo, idx) => (
            <Image
              key={`r2-${logo.src}-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading={idx < 6 ? "eager" : "lazy"}
              fetchPriority={idx < 6 ? "high" : "auto"}
              decoding="async"
              unoptimized
              className="h-12 max-w-[100px] flex-shrink-0 object-contain opacity-80 sm:h-14 sm:max-w-[110px]"
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
