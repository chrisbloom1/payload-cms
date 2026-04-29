"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TermKey = "Net 15" | "Net 30" | "Net 90" | "Net 120";

interface Term {
  key: TermKey;
  delta: string;
  pct: string;
  days: number;
  totalAdjust: number;
}

const TERMS: readonly Term[] = [
  { key: "Net 15", delta: "-150.00", pct: "-1.5%", days: 15, totalAdjust: -150 },
  { key: "Net 30", delta: "+0.00", pct: "0%", days: 30, totalAdjust: 0 },
  { key: "Net 90", delta: "+200.00", pct: "+2.0%", days: 90, totalAdjust: 600 },
  { key: "Net 120", delta: "+800.00", pct: "+8.0%", days: 120, totalAdjust: 800 },
] as const;

const BASE_AMOUNT = 10000;
const CYCLE_MS = 2500;

function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function CheckIndicator({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors",
        active
          ? "border-bloom-navy bg-bloom-navy text-white"
          : "border-bloom-grey bg-white text-transparent",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
      >
        <path d="M5 12l5 5 9-11" />
      </svg>
    </span>
  );
}

interface BloomPayWidgetProps {
  className?: string;
  /** Optional initial active index (defaults to Net 30 = index 1). */
  initialIndex?: number;
}

export function BloomPayWidget({ className, initialIndex = 1 }: BloomPayWidgetProps) {
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    const safe = ((initialIndex % TERMS.length) + TERMS.length) % TERMS.length;
    return safe;
  });
  // Bumping this resets the auto-cycle interval (used after a manual click).
  const [cycleNonce, setCycleNonce] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TERMS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [cycleNonce]);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
    setCycleNonce((n) => n + 1);
  }, []);

  const active = TERMS[activeIndex];
  const total = BASE_AMOUNT + active.totalAdjust;
  const dueCopy = active.days === 0 ? "Due today" : `Due in ${active.days} days`;

  return (
    <div
      className={cn(
        "bloompay-widget w-full max-w-[480px] overflow-hidden rounded-2xl bg-white shadow-bloom-card",
        className,
      )}
    >
      <header className="flex items-center justify-between gap-4 border-b border-bloom-grey px-5 py-4">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-bloom-orange">
            Terms
          </p>
          <p className="mt-0.5 text-[14px] font-medium text-bloom-navy">
            Change net payment terms
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-md bg-bloom-orange px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
        >
          Pay Now
        </button>
      </header>

      <ul
        role="radiogroup"
        aria-label="Net payment terms"
        className="divide-y divide-bloom-grey"
      >
        {TERMS.map((term, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={term.key}>
              <button
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => handleSelect(index)}
                className={cn(
                  "flex w-full items-center gap-4 px-5 py-3 text-left transition-colors",
                  "hover:bg-bloom-mint-soft focus:outline-none focus-visible:bg-bloom-mint-soft",
                )}
              >
                <span className="flex min-w-0 flex-1 items-baseline gap-2">
                  <span className="text-[14px] text-bloom-muted tabular-nums">
                    {term.delta}
                  </span>
                  <span className="text-[12px] text-bloom-muted tabular-nums">
                    ({term.pct})
                  </span>
                </span>
                <span className="text-[14px] font-medium text-bloom-navy">
                  {term.key}
                </span>
                <CheckIndicator active={isActive} />
              </button>
            </li>
          );
        })}
      </ul>

      <footer className="flex items-center justify-between gap-4 bg-bloom-mint-soft px-5 py-4">
        <div className="min-w-0">
          <p className="text-[24px] font-bold leading-tight text-bloom-navy tabular-nums">
            {formatCurrency(total)}
          </p>
          <p className="mt-0.5 text-[12px] text-bloom-muted">{dueCopy}</p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-md border border-bloom-navy px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-bloom-navy transition-colors hover:bg-bloom-navy hover:text-white"
        >
          Set Terms
        </button>
      </footer>
    </div>
  );
}

export default BloomPayWidget;
