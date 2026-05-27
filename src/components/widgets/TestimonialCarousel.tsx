"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/bloom";

import { TESTIMONIALS } from "@/data/testimonials";
export { TESTIMONIALS };

const AUTO_ROTATE_MS = 6000;

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

interface AvatarProps {
  src?: string;
  name: string;
}

function Avatar({ src, name }: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={60}
        height={60}
        className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-bloom-mint text-[18px] font-bold text-bloom-navy"
    >
      {getInitials(name)}
    </span>
  );
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  className?: string;
}

export function TestimonialCarousel({
  testimonials = TESTIMONIALS,
  className,
}: TestimonialCarouselProps) {
  const total = testimonials.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const headingId = useId();

  // Reset auto-rotate clock when the user interacts manually.
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
      setActive((prevIdx) => (prevIdx + 1) % total);
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

  const trackRef = useRef<HTMLUListElement>(null);

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${active * 100}%)` }),
    [active],
  );

  if (total === 0) return null;

  return (
    <section
      className={cn(
        "testimonials w-full px-4 py-16 sm:py-20",
        className,
      )}
      aria-labelledby={headingId}
    >
      <div className="mx-auto flex max-w-[960px] flex-col items-center gap-8">
        <h2
          id={headingId}
          className="text-center text-[28px] font-bold leading-tight text-bloom-navy sm:text-[36px]"
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
          <div className="overflow-hidden">
            <ul
              ref={trackRef}
              className="flex transition-transform duration-[400ms] ease-out"
              style={trackStyle}
              aria-live="polite"
            >
              {testimonials.map((t, i) => (
                <li
                  key={`${t.author}-${i}`}
                  className="w-full shrink-0 grow-0 basis-full px-2"
                  aria-hidden={i !== active}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                >
                  <article className="quote-card mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
                    <blockquote>
                      <p className="text-[20px] font-normal leading-[1.4] text-bloom-navy sm:text-[24px] sm:leading-[1.2]">
                        {t.quote}
                      </p>
                    </blockquote>
                    <footer className="flex items-center gap-3">
                      <Avatar src={t.avatarSrc} name={t.author} />
                      <div className="text-left">
                        <p className="text-[16px] font-bold text-bloom-navy">
                          {t.author}
                        </p>
                        <p className="text-[14px] text-bloom-muted">
                          {t.company ? `${t.title}, ${t.company}` : t.title}
                        </p>
                      </div>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border border-bloom-grey bg-white text-bloom-navy transition-colors sm:h-10 sm:w-10",
              "hover:bg-bloom-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy",
            )}
          >
            <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <ul className="flex items-center gap-2" role="tablist">
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <li key={`dot-${t.author}-${i}`}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      isActive ? "bg-bloom-navy" : "bg-bloom-navy/30",
                    )}
                  />
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border border-bloom-grey bg-white text-bloom-navy transition-colors sm:h-10 sm:w-10",
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

export default TestimonialCarousel;
