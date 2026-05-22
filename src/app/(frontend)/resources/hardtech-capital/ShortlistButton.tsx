"use client";

import { toggleShortlist, useShortlistIds } from "./shortlist";

export function ShortlistButton({
  id,
  variant = "icon",
}: {
  id: string;
  variant?: "icon" | "full";
}) {
  const ids = useShortlistIds();
  const saved = ids.has(id);

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleShortlist(id);
        }}
        aria-pressed={saved}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors ${
          saved
            ? "bg-bloom-orange text-white"
            : "border border-bloom-navy/20 text-bloom-navy hover:border-bloom-navy/40"
        }`}
      >
        {saved ? "✓ Saved" : "+ Save"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleShortlist(id);
      }}
      aria-label={saved ? "Remove from shortlist" : "Add to shortlist"}
      title={saved ? "Saved" : "Save for later"}
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
        saved
          ? "bg-bloom-orange text-white"
          : "border border-bloom-navy/15 text-bloom-navy hover:border-bloom-navy/40"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 17.27 5.82 21l1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73L18.18 21z" />
      </svg>
    </button>
  );
}

export function ShortlistCounter({
  href = "/resources/hardtech-capital/shortlist",
}: {
  href?: string;
}) {
  const ids = useShortlistIds();
  const n = ids.size;
  if (n === 0) return null;
  return (
    <a
      href={href}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-bloom-navy px-5 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-cream uppercase shadow-lg transition-opacity hover:opacity-90"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 17.27 5.82 21l1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73L18.18 21z" />
      </svg>
      <span>
        {n} saved · view list
      </span>
    </a>
  );
}
