"use client";

import { useEffect, useMemo, useState } from "react";
import {
  deadlineUrgency,
  formatDeadlineShort,
  parseDeadline,
  type ParsedDeadline,
} from "./dateParse";
import { loadResourcesOnce } from "./loadResources";
import { KIND_LABELS, type Resource } from "./types";

type Enriched = Resource & { parsed: ParsedDeadline };

export function ClosingSoon() {
  const [data, setData] = useState<Resource[] | null>(null);
  const now = useMemo(() => new Date(), []);

  useEffect(() => {
    let cancelled = false;
    loadResourcesOnce()
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch(() => {
        /* silently fail; main directory will show its own error */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const items = useMemo<Enriched[]>(() => {
    if (!data) return [];
    return data
      .map((r) => ({ ...r, parsed: parseDeadline(r.deadline, now) }))
      .filter((r) => r.parsed.kind === "date" && (r.parsed.daysFromNow ?? 99) <= 60)
      .sort(
        (a, b) => (a.parsed.daysFromNow ?? 999) - (b.parsed.daysFromNow ?? 999),
      );
  }, [data, now]);

  if (!data) return null;
  if (items.length === 0) return null;

  return (
    <section className="border-y border-bloom-grey bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-10">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
              CLOSING SOON
            </span>
            <h2 className="mt-2 text-[24px] leading-[1.15] font-semibold tracking-tight text-bloom-navy sm:text-[28px]">
              {items.length} {items.length === 1 ? "deadline" : "deadlines"} in the next 60 days
            </h2>
          </div>
          <a
            href="#directory"
            className="font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase underline-offset-4 hover:underline"
          >
            Browse all funders →
          </a>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 snap-x">
          {items.map((r) => (
            <DeadlineCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DeadlineCard({ r }: { r: Enriched }) {
  const urgency = deadlineUrgency(r.parsed);
  const days = r.parsed.daysFromNow ?? 0;
  const accent =
    urgency === "today" || urgency === "this-week"
      ? "bg-bloom-orange text-white"
      : urgency === "this-month"
        ? "bg-bloom-navy text-bloom-cream"
        : "bg-bloom-mint text-bloom-navy";
  const dayLabel =
    days <= 0
      ? "Today"
      : days === 1
        ? "Tomorrow"
        : days <= 7
          ? `${days} days`
          : days <= 30
            ? `${days} days`
            : `${days} days`;
  const href = r.apply_url || r.url;
  const Tag = href ? "a" : "div";
  const tagProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...tagProps}
      className="group flex w-[280px] shrink-0 snap-start flex-col rounded-2xl border border-bloom-grey bg-bloom-cream p-5 transition-colors hover:border-bloom-navy/30"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`rounded-full px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase ${accent}`}
        >
          {dayLabel}
        </span>
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
          {r.parsed.date ? formatDeadlineShort(r.parsed.date) : ""}
        </span>
      </div>
      <h3 className="mt-3 line-clamp-2 text-[15px] leading-[1.3] font-semibold text-bloom-navy">
        {r.name}
      </h3>
      <p className="mt-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
        {KIND_LABELS[r.kind]}
      </p>
      {r.award && (
        <p className="mt-3 text-[12px] leading-[1.5] text-bloom-navy/80">
          {r.award.length > 90 ? r.award.slice(0, 90).trimEnd() + "…" : r.award}
        </p>
      )}
      {href && (
        <span className="mt-auto pt-4 font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-navy uppercase opacity-70 transition-opacity group-hover:opacity-100">
          Apply →
        </span>
      )}
    </Tag>
  );
}
