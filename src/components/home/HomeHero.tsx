"use client";

import { useEffect, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const ROTATING_WORDS = [
  "Manufacturing",
  "Warehousing",
  "Assembly",
  "Logistics",
] as const;

const ROTATION_INTERVAL_MS = 2500;

/**
 * Hero section of the Bloom home page.
 *
 * Layout (top → bottom, all centered):
 *   1. h1 "Hardware shouldn't be hard."
 *   2. Rotator row: "We help make [WORD pill] easier."
 *   3. Mint chat-input card with textarea, "Chat now" button (bottom-right),
 *      and a small "Start for free now!" navy pill anchored to the bottom-center.
 *   4. h5 sub-headline mentioning the verticals Bloom serves.
 */
export function HomeHero() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [chatValue, setChatValue] = useState("");

  // Rotate the word every ROTATION_INTERVAL_MS while the component is mounted.
  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, ROTATION_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const canSubmit = chatValue.trim().length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;
    // The real site has no public backend behind this — leave as a no-op
    // hook for now. A future enhancement could redirect to `/contact-us`.
  }

  const activeWord = ROTATING_WORDS[activeWordIndex];

  return (
    <section
      className={cn(
        "relative w-full",
        // Reserve space for the floating top nav (~96px) and add hero breathing room.
        "pt-32 pb-20 sm:pt-36 sm:pb-24",
      )}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-6">
        <h1
          className={cn(
            "text-center text-bloom-navy",
            "text-[36px] leading-[40px] sm:text-[40px] sm:leading-[44px] lg:text-[48px] lg:leading-[48px]",
            "font-extrabold",
          )}
        >
          Hardware shouldn&apos;t be hard.
        </h1>

        {/* Rotator row */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-bloom-navy">
          <p className="text-[20px] leading-[26px] font-normal">We help make</p>

          <span
            className={cn(
              "relative inline-flex items-center justify-center overflow-hidden",
              "min-w-[101px] rounded-[4px] bg-bloom-navy px-[14px]",
              "h-[42px]",
            )}
            aria-live="polite"
          >
            {/* Keyed span re-mounts on every tick, retriggering the slide-in animation. */}
            <span
              key={activeWordIndex}
              className={cn(
                "block text-center text-[20px] leading-[26px] font-normal text-bloom-cream whitespace-nowrap",
                "animate-[bloom-word-in_400ms_cubic-bezier(0.4,0,0.2,1)_both]",
              )}
            >
              {activeWord}
            </span>
          </span>

          <p className="text-[20px] leading-[26px] font-normal">easier.</p>
        </div>

        {/* Chat input card */}
        <form
          onSubmit={handleSubmit}
          className={cn(
            "relative w-full max-w-[600px]",
            "rounded-[12px] bg-bloom-mint",
            "pt-3 pr-3 pb-[60px] pl-3",
            "border border-transparent",
            "focus-within:border-bloom-navy/20",
            "transition-colors",
          )}
        >
          <label htmlFor="hero-chat-input" className="sr-only">
            Describe your product&apos;s supply chain needs
          </label>
          <textarea
            id="hero-chat-input"
            name="hero-chat-input"
            value={chatValue}
            onChange={(event) => setChatValue(event.target.value)}
            placeholder="Describe your product's supply chain needs"
            rows={2}
            className={cn(
              "block h-[48px] w-full resize-none bg-transparent",
              "text-[16px] leading-[22px] text-bloom-navy",
              "placeholder:text-bloom-muted",
              "outline-none",
            )}
          />

          {/* "Start for free now!" pill — deep-navy bg, full pill, lower-edge */}
          <span
            className={cn(
              "pointer-events-none absolute left-1/2 -bottom-[15px] -translate-x-1/2",
              "rounded-full bg-bloom-navy-deep px-4 py-2",
              "text-[12px] leading-[14.4px] font-extrabold text-bloom-cream",
              "whitespace-nowrap",
            )}
          >
            Start for free now!
          </span>

          <button
            type="submit"
            disabled={!canSubmit}
            className={cn(
              "absolute right-3 bottom-3",
              "h-10 rounded-[12px] bg-bloom-orange px-6",
              "text-[14px] font-semibold text-white",
              "transition-opacity duration-200",
              canSubmit
                ? "cursor-pointer opacity-100 hover:bg-bloom-orange-deep"
                : "cursor-default opacity-60",
            )}
          >
            Chat now
          </button>
        </form>

        {/* Sub-headline */}
        <h5
          className={cn(
            "mx-auto max-w-[830px] text-center text-bloom-navy",
            "text-[18px] leading-[22px] sm:text-[22px] sm:leading-[26px] lg:text-[24px] lg:leading-[28.8px]",
            "font-normal",
          )}
        >
          Bloom helps leading{" "}
          <strong className="font-bold">mobility</strong>,{" "}
          <strong className="font-bold">energy</strong>,{" "}
          <strong className="font-bold">robotics</strong> brands scale faster
          through our vetted network
        </h5>
      </div>

      {/* Component-scoped keyframes for the rotating word slide+fade. */}
      <style jsx>{`
        @keyframes bloom-word-in {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
