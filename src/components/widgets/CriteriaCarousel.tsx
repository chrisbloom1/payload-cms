"use client";

import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface CriterionItem {
  label: string;
  title: string;
  description: string;
}

interface CriteriaCarouselProps {
  items: CriterionItem[];
  className?: string;
  /** Width of each card in px on lg+. Mobile shrinks to ~85vw. */
  cardWidth?: number;
}

/**
 * Horizontal criteria carousel that mirrors the MembersTestimonials look:
 * faded edges via mask gradient, white circular prev/next buttons below,
 * no dot pagination. Replaces the Framer Stepsslider on /providers so the
 * controls match the rest of the site's carousel UX.
 */
export function CriteriaCarousel({
  items,
  className,
  cardWidth = 320,
}: CriteriaCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const headingId = useId();

  const updateBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    updateBounds();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateBounds, { passive: true });
    window.addEventListener("resize", updateBounds);
    return () => {
      el.removeEventListener("scroll", updateBounds);
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * (cardWidth + 16), behavior: "smooth" });
  }, [cardWidth]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollByCard(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollByCard(1);
      }
    },
    [scrollByCard],
  );

  if (items.length === 0) return null;

  return (
    <section
      className={cn("flex w-full flex-col items-center gap-8", className)}
      aria-labelledby={headingId}
    >
      <span id={headingId} className="sr-only">
        Service provider qualifying criteria
      </span>
      <div
        className="relative w-full focus:outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-label="Qualifying criteria"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => (
              <article
                key={`${item.label}-${i}`}
                className="flex shrink-0 snap-start flex-col gap-4 rounded-md border border-bloom-navy/10 bg-white p-7"
                style={{ width: `${cardWidth}px` }}
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-bloom-cta">
                  {item.label}
                </span>
                <h3 className="text-[20px] font-bold leading-[26px] text-bloom-navy">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[22px] text-bloom-navy/80">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous criterion"
          disabled={!canPrev}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border border-bloom-grey bg-white text-bloom-navy transition-colors",
            "hover:bg-bloom-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy",
            "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white",
          )}
        >
          <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next criterion"
          disabled={!canNext}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border border-bloom-grey bg-white text-bloom-navy transition-colors",
            "hover:bg-bloom-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy",
            "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white",
          )}
        >
          <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </section>
  );
}

export default CriteriaCarousel;
