"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  GEOGRAPHY_LABELS,
  KIND_LABELS,
  VERTICAL_LABELS,
  type Resource,
} from "../types";
import {
  clearShortlist,
  toggleShortlist,
  useShortlistIds,
} from "../shortlist";
import { loadResourcesOnce } from "../loadResources";

export function ShortlistViewer() {
  const ids = useShortlistIds();
  const [data, setData] = useState<Resource[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadResourcesOnce()
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch((e) => {
        if (!cancelled) setError(String(e));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const saved = useMemo<Resource[]>(() => {
    if (!data) return [];
    const set = ids;
    return data.filter((r) => set.has(r.id));
  }, [data, ids]);

  const groupedByKind = useMemo(() => {
    const groups: Record<string, Resource[]> = {};
    for (const r of saved) {
      const k = r.kind;
      (groups[k] ??= []).push(r);
    }
    return groups;
  }, [saved]);

  const handleEmail = () => {
    const body = saved
      .map((r) => {
        const url =
          r.source === "curated"
            ? `${window.location.origin}/resources/hardtech-capital/${r.id.replace(/^curated-/, "")}`
            : r.apply_url ?? r.url ?? "";
        const award = r.award ? ` (${r.award})` : "";
        return `- ${r.name}${award}\n  ${KIND_LABELS[r.kind]} · ${url}`;
      })
      .join("\n\n");
    const subject = `My hardtech funder shortlist (${saved.length})`;
    const full = `My shortlist from Bloom Hardtech Capital, ${new Date().toLocaleDateString()}:\n\n${body}\n\n— Generated from ${window.location.origin}/resources/hardtech-capital`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(full)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    if (confirm("Clear all saved funders? This can't be undone.")) {
      clearShortlist();
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1100px] px-6 pt-20 pb-24 sm:pt-24">
      <Link
        href="/resources/hardtech-capital"
        className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase underline-offset-4 hover:underline"
      >
        ← Hardtech Capital
      </Link>
      <header className="mt-6 border-b border-bloom-grey pb-8">
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
          YOUR SHORTLIST
        </span>
        <h1 className="mt-3 text-[36px] leading-[1.05] font-semibold tracking-tight text-bloom-navy sm:text-[48px]">
          {saved.length === 0
            ? "Nothing saved yet."
            : saved.length === 1
              ? "1 funder saved."
              : `${saved.length} funders saved.`}
        </h1>
        {saved.length > 0 && (
          <p className="mt-4 max-w-[680px] text-[16px] leading-[1.55] text-bloom-muted">
            Stored locally in your browser. Email the list to yourself, print
            it, or jump to a deep dive on each funder.
          </p>
        )}
      </header>

      {error && (
        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-[14px] text-red-900">
          Couldn’t load directory data: {error}
        </div>
      )}

      {saved.length === 0 && data && (
        <div className="mt-12 rounded-3xl border border-bloom-grey bg-white p-10 text-center">
          <p className="text-[16px] text-bloom-navy">
            Click the star on any funder in the directory to add it here.
          </p>
          <Link
            href="/resources/hardtech-capital#directory"
            className="mt-6 inline-block rounded-full bg-bloom-navy px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-opacity hover:opacity-90"
          >
            Browse the directory
          </Link>
        </div>
      )}

      {saved.length > 0 && (
        <>
          <div className="my-8 flex flex-wrap gap-3 print:hidden">
            <button
              type="button"
              onClick={handleEmail}
              className="inline-block rounded-full bg-bloom-navy px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-opacity hover:opacity-90"
            >
              Email it to me
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-block rounded-full border border-bloom-navy/20 px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-colors hover:border-bloom-navy/40"
            >
              Print / save PDF
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="ml-auto inline-block font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-orange uppercase underline-offset-4 hover:underline"
            >
              Clear all
            </button>
          </div>

          <div className="flex flex-col gap-10">
            {Object.entries(groupedByKind).map(([kind, list]) => (
              <section key={kind}>
                <h2 className="mb-4 font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                  {KIND_LABELS[kind as keyof typeof KIND_LABELS]} ·{" "}
                  {list.length}
                </h2>
                <ul className="flex flex-col gap-3">
                  {list.map((r) => (
                    <SavedRow key={r.id} r={r} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function SavedRow({ r }: { r: Resource }) {
  const internal =
    r.source === "curated"
      ? `/resources/hardtech-capital/${r.id.replace(/^curated-/, "")}`
      : null;
  const href = internal ?? r.apply_url ?? r.url;
  return (
    <li className="rounded-2xl border border-bloom-grey bg-white p-5">
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {href ? (
              internal ? (
                <a
                  href={href}
                  className="text-[16px] font-semibold text-bloom-navy underline-offset-2 hover:underline"
                >
                  {r.name}
                </a>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] font-semibold text-bloom-navy underline-offset-2 hover:underline"
                >
                  {r.name}
                </a>
              )
            ) : (
              <span className="text-[16px] font-semibold text-bloom-navy">
                {r.name}
              </span>
            )}
            {r.deadline && (
              <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-orange uppercase">
                ⏱ {r.deadline.length > 50 ? r.deadline.slice(0, 50) + "…" : r.deadline}
              </span>
            )}
          </div>
          {r.notes && (
            <p className="mt-2 line-clamp-2 text-[13px] leading-[1.55] text-bloom-muted">
              {r.notes}
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
            {r.geography && (
              <span>{GEOGRAPHY_LABELS[r.geography] ?? r.geography}</span>
            )}
            {(r.verticals ?? []).slice(0, 2).map((v) => (
              <span key={v}>{VERTICAL_LABELS[v] ?? v}</span>
            ))}
            {r.award && (
              <span className="text-bloom-navy">{r.award.length > 50 ? r.award.slice(0, 50) + "…" : r.award}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => toggleShortlist(r.id)}
          aria-label="Remove from shortlist"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bloom-orange text-white transition-opacity hover:opacity-80 print:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 17.27 5.82 21l1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73L18.18 21z" />
          </svg>
        </button>
      </div>
    </li>
  );
}
