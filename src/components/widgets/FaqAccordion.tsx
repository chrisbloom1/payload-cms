"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

/**
 * Replaces the Framer-exported Faqbrands/Faqproviders widgets, which were
 * hard-coded to 1000px wide and got clipped on the right inside the
 * 2/3-column FAQ layout. This native accordion fills its container, wraps
 * long text, and uses the same mint pill aesthetic as the live design.
 */
export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <li
            key={item.question}
            className="overflow-hidden rounded-md bg-bloom-mint/40"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className={cn(
                "flex w-full items-start justify-between gap-4 px-6 py-5 text-left",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-bloom-navy",
              )}
            >
              <h3 className="text-[18px] font-bold leading-[1.3] text-bloom-navy sm:text-[20px]">
                {item.question}
              </h3>
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center text-[22px] font-light text-bloom-navy transition-transform duration-200",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-[24px] text-bloom-navy/85 sm:text-[16px] sm:leading-[26px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FaqAccordion;
