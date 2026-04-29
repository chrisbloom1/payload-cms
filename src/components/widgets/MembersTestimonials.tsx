"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/components/widgets/TestimonialCarousel";
import type { Testimonial } from "@/types/bloom";

const AUTO_ROTATE_MS = 6000;
/** Active card occupies 70% of viewport — leaves ~15% peek on each side. */
const ACTIVE_PERCENT = 70;
/** Pixel gap between cards. Subtracted from translation math so peeks line up. */
const GAP_PX = 16;

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function Avatar({ src, name }: { src?: string; name: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bloom-mint text-[16px] font-bold text-bloom-navy"
    >
      {getInitials(name)}
    </span>
  );
}

interface MembersTestimonialsProps {
  testimonials?: Testimonial[];
  className?: string;
}

/**
 * Members testimonial carousel modeled after the live site:
 * - active card sits at 70% width, centered
 * - prev/next cards peek in at ~15% on each side, dimmed
 * - auto-rotates every 6s, pauses on hover/focus
 * - left/right arrows + dot pagination
 *
 * Replaces the Proofly Socialproofsection export on home + /brands so the
 * "wider active card, shifted with peek" layout works without overriding
 * the Framer-compiled classnames.
 */
export function MembersTestimonials({
  testimonials = TESTIMONIALS,
  className,
}: MembersTestimonialsProps) {
  const total = testimonials.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const headingId = useId();
  const [cycleNonce, setCycleNonce] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      const wrapped = ((index % total) + total) % total;
      setActive(wrapped);
      setCycleNonce((n) => n + 1);
    },
    [total],
  );

  const next = useCallback(() => goTo(active + 1), [goTo, active]);
  const prev = useCallback(() => goTo(active - 1), [goTo, active]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % total);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, total, cycleNonce]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    },
    [prev, next],
  );

  // Track translation: shift left by (active × card-width-incl-gap), then offset
  // by half the side margin so the active card centers in the viewport.
  // Each card is ACTIVE_PERCENT% wide; remaining 30% splits as peeks.
  const trackStyle = useMemo(() => {
    const sideMargin = (100 - ACTIVE_PERCENT) / 2;
    return {
      transform: `translateX(calc(${sideMargin}% - ${active} * (${ACTIVE_PERCENT}% + ${GAP_PX}px)))`,
    };
  }, [active]);

  if (total === 0) return null;

  return (
    <section
      className={cn("w-full py-16 sm:py-20 lg:py-24", className)}
      aria-labelledby={headingId}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 sm:px-6">
        <h2
          id={headingId}
          className="text-center text-[28px] font-bold leading-tight text-bloom-navy sm:text-[36px] lg:text-[44px]"
        >
          What our members say
        </h2>

        <div
          className="relative w-full focus:outline-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="Member testimonials"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={handleKeyDown}
        >
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <ul
              className="flex transition-transform duration-[500ms] ease-out"
              style={{ ...trackStyle, gap: `${GAP_PX}px` }}
              aria-live="polite"
            >
              {testimonials.map((t, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={`${t.author}-${i}`}
                    className="shrink-0 grow-0"
                    style={{ flexBasis: `${ACTIVE_PERCENT}%` }}
                    aria-hidden={!isActive}
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${total}`}
                  >
                    <article
                      className="flex h-full flex-col gap-6 rounded-3xl bg-white p-7 text-left shadow-bloom-card sm:gap-8 sm:p-10 lg:p-12"
                    >
                      <blockquote className="grow">
                        <p className="text-[18px] leading-[1.4] text-bloom-navy sm:text-[22px] sm:leading-[1.35] lg:text-[26px]">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </blockquote>
                      <footer className="flex items-center gap-4 border-t border-bloom-grey/60 pt-5">
                        <Avatar src={t.avatarSrc} name={t.author} />
                        <div>
                          <p className="text-[15px] font-bold text-bloom-navy sm:text-[16px]">
                            {t.author}
                          </p>
                          <p className="text-[13px] text-bloom-muted sm:text-[14px]">
                            {t.company ? `${t.title}, ${t.company}` : t.title}
                          </p>
                        </div>
                      </footer>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-bloom-grey bg-white text-bloom-navy transition-colors",
              "hover:bg-bloom-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy",
            )}
          >
            <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-bloom-grey bg-white text-bloom-navy transition-colors",
              "hover:bg-bloom-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy",
            )}
          >
            <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MembersTestimonials;
