"use client";

import { Popover } from "@base-ui/react/popover";
import { Checkbox } from "@base-ui/react/checkbox";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import {
  BLOOM_FOCUS_LABELS,
  GEOGRAPHY_LABELS,
  KIND_LABELS,
  STAGE_LABELS,
  VERTICAL_LABELS,
  type Resource,
} from "./types";
import { ShortlistButton } from "./ShortlistButton";
import { loadResourcesOnce } from "./loadResources";

// =============================================================================
// Filter state
// =============================================================================

type MultiKey = "bloomFocus" | "vertical" | "kind" | "stage" | "geography";
const MULTI_KEYS: MultiKey[] = [
  "bloomFocus",
  "vertical",
  "kind",
  "stage",
  "geography",
];

type Filters = {
  q: string;
  bloomFocus: Set<string>;
  vertical: Set<string>;
  kind: Set<string>;
  stage: Set<string>;
  geography: Set<string>;
  verifiedOnly: boolean;
  nonDilutiveOnly: boolean;
  openOnly: boolean; // only show entries with an active deadline / rolling / open
};

const emptyFilters = (): Filters => ({
  q: "",
  bloomFocus: new Set(),
  vertical: new Set(),
  kind: new Set(),
  stage: new Set(),
  geography: new Set(),
  verifiedOnly: false,
  nonDilutiveOnly: false,
  openOnly: false,
});

const FACET_MAP: Record<MultiKey, Record<string, string>> = {
  bloomFocus: BLOOM_FOCUS_LABELS,
  vertical: VERTICAL_LABELS,
  kind: KIND_LABELS as Record<string, string>,
  stage: STAGE_LABELS,
  geography: GEOGRAPHY_LABELS,
};

const FACET_LABELS: Record<MultiKey, string> = {
  bloomFocus: "Bloom focus",
  vertical: "Vertical",
  kind: "Type",
  stage: "Stage",
  geography: "Geography",
};

// =============================================================================
// URL sync
// =============================================================================

function readFromUrl(): Filters {
  if (typeof window === "undefined") return emptyFilters();
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const f = emptyFilters();
  f.q = params.get("q") ?? "";
  for (const k of MULTI_KEYS) {
    const v = params.get(k);
    if (v) f[k] = new Set(v.split(",").filter(Boolean));
  }
  f.verifiedOnly = params.get("verified") === "1";
  f.nonDilutiveOnly = params.get("nondil") === "1";
  f.openOnly = params.get("open") === "1";
  return f;
}

function writeToUrl(f: Filters) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams();
  if (f.q) params.set("q", f.q);
  for (const k of MULTI_KEYS) {
    if (f[k].size) params.set(k, [...f[k]].join(","));
  }
  if (f.verifiedOnly) params.set("verified", "1");
  if (f.nonDilutiveOnly) params.set("nondil", "1");
  if (f.openOnly) params.set("open", "1");
  const search = params.toString();
  const next = `${window.location.pathname}${window.location.search}${search ? `#${search}` : ""}`;
  window.history.replaceState(null, "", next);
}

// =============================================================================
// Matchers
// =============================================================================

function matchesNonMulti(r: Resource, f: Filters): boolean {
  if (f.q) {
    const q = f.q.toLowerCase();
    const blob = `${r.name} ${r.hq ?? ""} ${r.notes ?? ""}`.toLowerCase();
    if (!blob.includes(q)) return false;
  }
  if (f.verifiedOnly && !r.last_verified) return false;
  if (f.nonDilutiveOnly && !(r.stages ?? []).includes("non_dilutive")) {
    return false;
  }
  if (f.openOnly) {
    const d = (r.deadline ?? "").toLowerCase();
    const opensignal =
      d.includes("rolling") ||
      d.includes("open") ||
      d.includes("2026") ||
      d.includes("2027") ||
      d.includes("2028");
    const closedsignal =
      d.includes("closed") ||
      d.includes("between cycles") ||
      d.includes("manual verification");
    if (!d || closedsignal || !opensignal) return false;
  }
  return true;
}

function matchesFacet(r: Resource, key: MultiKey, f: Filters): boolean {
  const sel = f[key];
  if (!sel.size) return true;
  if (key === "kind") return sel.has(r.kind);
  if (key === "geography") return sel.has(r.geography ?? "");
  if (key === "vertical")
    return (r.verticals ?? []).some((v) => sel.has(v));
  if (key === "bloomFocus")
    return (r.bloom_focus ?? []).some((v) => sel.has(v));
  // stage
  return (r.stages ?? []).some((v) => sel.has(v));
}

// =============================================================================
// Main component
// =============================================================================

export function Directory() {
  const [data, setData] = useState<Resource[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFiltersState] = useState<Filters>(emptyFilters);
  const [, startTransition] = useTransition();
  const [visible, setVisible] = useState(50);

  // Hydrate filters from URL hash on mount
  useEffect(() => {
    setFiltersState(readFromUrl());
  }, []);

  // Load JSON (shared cache across components)
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

  const setFilters = useCallback(
    (next: Filters | ((prev: Filters) => Filters)) => {
      setFiltersState((prev) => {
        const value = typeof next === "function" ? next(prev) : next;
        writeToUrl(value);
        return value;
      });
    },
    [],
  );

  // Compute filtered data + per-facet counts
  const { filtered, facetCounts, totalActive } = useMemo(() => {
    const emptyCounts: FacetCounts = {
      bloomFocus: {},
      vertical: {},
      kind: {},
      stage: {},
      geography: {},
    };
    if (!data) {
      return { filtered: [], facetCounts: emptyCounts, totalActive: 0 };
    }

    // For each multi-facet, count what the result *would* be if we ignored
    // that facet alone. This gives Airbnb-style live counts that don't zero
    // out when you make a selection within the same facet.
    const facetCounts: FacetCounts = emptyCounts;

    const filtered: Resource[] = [];
    for (const r of data) {
      if (!matchesNonMulti(r, filters)) continue;
      const facetMatches: Record<MultiKey, boolean> = {
        bloomFocus: matchesFacet(r, "bloomFocus", filters),
        vertical: matchesFacet(r, "vertical", filters),
        kind: matchesFacet(r, "kind", filters),
        stage: matchesFacet(r, "stage", filters),
        geography: matchesFacet(r, "geography", filters),
      };
      const allMatch = MULTI_KEYS.every((k) => facetMatches[k]);
      if (allMatch) filtered.push(r);

      // For each facet, if all OTHER facets pass, count this row against each
      // value in this facet.
      for (const facet of MULTI_KEYS) {
        const otherPass = MULTI_KEYS.every(
          (k) => k === facet || facetMatches[k],
        );
        if (!otherPass) continue;
        const values =
          facet === "kind"
            ? [r.kind]
            : facet === "geography"
              ? [r.geography ?? ""]
              : facet === "vertical"
                ? r.verticals ?? []
                : facet === "bloomFocus"
                  ? r.bloom_focus ?? []
                  : r.stages ?? [];
        for (const v of values) {
          if (!v) continue;
          facetCounts[facet][v] = (facetCounts[facet][v] ?? 0) + 1;
        }
      }
    }

    let totalActive = (filters.q ? 1 : 0) + (filters.verifiedOnly ? 1 : 0)
      + (filters.nonDilutiveOnly ? 1 : 0) + (filters.openOnly ? 1 : 0);
    for (const k of MULTI_KEYS) totalActive += filters[k].size;

    return { filtered, facetCounts, totalActive };
  }, [data, filters]);

  useEffect(() => {
    setVisible(50);
  }, [filters]);

  return (
    <section
      id="directory"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="mb-8 flex flex-col gap-4">
          <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
            FULL DIRECTORY
          </span>
          <h2 className="text-[32px] leading-[1.1] font-semibold tracking-tight text-bloom-navy sm:text-[40px]">
            {data ? (
              <>
                <span>{filtered.length.toLocaleString()}</span>
                <span className="text-bloom-muted">
                  {" "}
                  / {data.length.toLocaleString()} funders
                </span>
              </>
            ) : (
              <span className="text-bloom-muted">1,702 funders</span>
            )}
          </h2>
        </div>

        <div className="sticky top-0 z-30 -mx-6 mb-6 border-b border-bloom-grey bg-bloom-cream/95 px-6 py-4 backdrop-blur-md">
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            facetCounts={facetCounts}
            disabled={!data}
            startTransition={startTransition}
          />
          {totalActive > 0 && (
            <ActiveChips filters={filters} setFilters={setFilters} />
          )}
        </div>

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-[14px] text-red-900">
            Couldn’t load directory data: {error}
          </div>
        )}

        {!data && !error && (
          <div className="overflow-hidden rounded-2xl border border-bloom-grey bg-white">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-2 border-b border-bloom-grey px-6 py-5 last:border-b-0 md:grid-cols-[2.5fr_1.2fr_1.2fr_1.5fr_1.1fr] md:items-center md:gap-4"
              >
                <div className="space-y-2">
                  <div className="h-4 w-2/3 animate-pulse rounded bg-bloom-grey/60" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-bloom-grey/40" />
                </div>
                <div className="h-3 w-1/2 animate-pulse rounded bg-bloom-grey/40" />
                <div className="h-3 w-2/3 animate-pulse rounded bg-bloom-grey/40" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-bloom-grey/40" />
                <div className="h-3 w-1/3 animate-pulse rounded bg-bloom-grey/40" />
              </div>
            ))}
          </div>
        )}

        {data && (
          <>
            <div className="overflow-hidden rounded-2xl border border-bloom-grey bg-white">
              <div className="hidden grid-cols-[2.5fr_1.2fr_1.2fr_1.5fr_1.1fr] gap-4 border-b border-bloom-grey bg-bloom-mint-soft px-6 py-4 font-mono text-[11px] font-semibold tracking-[0.12em] text-bloom-navy uppercase md:grid">
                <div>Name</div>
                <div>Type</div>
                <div>Vertical</div>
                <div>Check / Award</div>
                <div>Geo</div>
              </div>
              {filtered.slice(0, visible).map((r) => (
                <Row key={r.id} r={r} />
              ))}
              {filtered.length === 0 && (
                <div className="px-6 py-16 text-center">
                  <p className="text-[16px] text-bloom-navy">
                    No funders match these filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFilters(emptyFilters())}
                    className="mt-4 font-mono text-[12px] font-semibold tracking-[0.12em] text-bloom-orange uppercase underline-offset-2 hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {filtered.length > visible && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + 50)}
                  className="rounded-full border border-bloom-navy/15 px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.12em] text-bloom-navy uppercase transition-colors hover:border-bloom-navy/40"
                >
                  Show {Math.min(50, filtered.length - visible)} more ·{" "}
                  {(filtered.length - visible).toLocaleString()} remaining
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

// =============================================================================
// FilterBar: Airbnb-style pills
// =============================================================================

type FacetCounts = Record<MultiKey, Record<string, number>>;

function FilterBar({
  filters,
  setFilters,
  facetCounts,
  disabled,
  startTransition,
}: {
  filters: Filters;
  setFilters: (next: Filters | ((p: Filters) => Filters)) => void;
  facetCounts: FacetCounts;
  disabled: boolean;
  startTransition: (cb: () => void) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <SearchInput
        value={filters.q}
        onChange={(q) => startTransition(() => setFilters((p) => ({ ...p, q })))}
        disabled={disabled}
      />
      {MULTI_KEYS.map((k) => (
        <FacetPill
          key={k}
          label={FACET_LABELS[k]}
          options={FACET_MAP[k]}
          selected={filters[k]}
          counts={facetCounts[k]}
          onToggle={(value) =>
            setFilters((p) => {
              const next = new Set(p[k]);
              if (next.has(value)) next.delete(value);
              else next.add(value);
              return { ...p, [k]: next };
            })
          }
          onClear={() => setFilters((p) => ({ ...p, [k]: new Set() }))}
          disabled={disabled}
        />
      ))}
      <Toggle
        label="Verified"
        active={filters.verifiedOnly}
        onClick={() =>
          setFilters((p) => ({ ...p, verifiedOnly: !p.verifiedOnly }))
        }
        disabled={disabled}
      />
      <Toggle
        label="Non-dilutive"
        active={filters.nonDilutiveOnly}
        onClick={() =>
          setFilters((p) => ({ ...p, nonDilutiveOnly: !p.nonDilutiveOnly }))
        }
        disabled={disabled}
      />
      <Toggle
        label="Open now"
        active={filters.openOnly}
        onClick={() => setFilters((p) => ({ ...p, openOnly: !p.openOnly }))}
        disabled={disabled}
      />
    </div>
  );
}

function SearchInput({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  return (
    <div className="relative min-w-[240px] flex-1 sm:flex-initial">
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-bloom-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3-3" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        placeholder="Search name, HQ, thesis…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="h-10 w-full rounded-full border border-bloom-grey bg-white pr-3 pl-9 text-[13px] text-bloom-navy placeholder:text-bloom-muted focus:border-bloom-navy/40 focus:outline-none disabled:opacity-50"
      />
    </div>
  );
}

function FacetPill({
  label,
  options,
  selected,
  counts,
  onToggle,
  onClear,
  disabled,
}: {
  label: string;
  options: Record<string, string>;
  selected: Set<string>;
  counts: Record<string, number>;
  onToggle: (v: string) => void;
  onClear: () => void;
  disabled: boolean;
}) {
  const n = selected.size;
  const sortedOptions = useMemo(() => {
    return Object.entries(options).sort((a, b) => {
      const ca = counts[a[0]] ?? 0;
      const cb = counts[b[0]] ?? 0;
      return cb - ca;
    });
  }, [options, counts]);

  return (
    <Popover.Root>
      <Popover.Trigger
        disabled={disabled}
        className={`h-10 rounded-full border px-4 font-mono text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors disabled:opacity-50 ${
          n > 0
            ? "border-bloom-navy bg-bloom-navy text-bloom-cream"
            : "border-bloom-grey bg-white text-bloom-navy hover:border-bloom-navy/40"
        }`}
      >
        {label}
        {n > 0 && (
          <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-bloom-cream/20 px-1.5 text-[11px]">
            {n}
          </span>
        )}
        <span className="ml-2 inline-block">▾</span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side="bottom" align="start" sideOffset={6}>
          <Popover.Popup className="z-50 w-[280px] rounded-2xl border border-bloom-grey bg-white p-2 shadow-lg outline-none">
            <div className="flex items-center justify-between border-b border-bloom-grey px-3 py-2">
              <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-bloom-muted uppercase">
                {label}
              </span>
              {n > 0 && (
                <button
                  type="button"
                  onClick={onClear}
                  className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-orange uppercase underline-offset-2 hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="max-h-[320px] overflow-y-auto py-1">
              {sortedOptions.map(([key, optLabel]) => {
                const count = counts[key] ?? 0;
                const isSel = selected.has(key);
                if (count === 0 && !isSel) return null;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => onToggle(key)}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-bloom-mint-soft"
                  >
                    <span className="flex items-center gap-3">
                      <CheckboxBox checked={isSel} />
                      <span
                        className={`text-[13px] ${isSel ? "font-semibold text-bloom-navy" : "text-bloom-navy/80"}`}
                      >
                        {optLabel}
                      </span>
                    </span>
                    <span className="font-mono text-[11px] text-bloom-muted">
                      {count.toLocaleString()}
                    </span>
                  </button>
                );
              })}
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

function CheckboxBox({ checked }: { checked: boolean }) {
  return (
    <Checkbox.Root
      checked={checked}
      className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
        checked
          ? "border-bloom-navy bg-bloom-navy"
          : "border-bloom-grey bg-white"
      }`}
    >
      <Checkbox.Indicator className="text-bloom-cream">
        <svg
          viewBox="0 0 12 12"
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2 6 3 3 5-6" />
        </svg>
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

function Toggle({
  label,
  active,
  onClick,
  disabled,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`h-10 rounded-full border px-4 font-mono text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors disabled:opacity-50 ${
        active
          ? "border-bloom-navy bg-bloom-navy text-bloom-cream"
          : "border-bloom-grey bg-white text-bloom-navy hover:border-bloom-navy/40"
      }`}
    >
      {active && "✓ "}
      {label}
    </button>
  );
}

// =============================================================================
// Active chips strip
// =============================================================================

function ActiveChips({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (next: Filters | ((p: Filters) => Filters)) => void;
}) {
  const chips: { key: string; label: string; remove: () => void }[] = [];
  for (const k of MULTI_KEYS) {
    for (const v of filters[k]) {
      chips.push({
        key: `${k}-${v}`,
        label: `${FACET_LABELS[k]}: ${FACET_MAP[k][v] ?? v}`,
        remove: () =>
          setFilters((p) => {
            const next = new Set(p[k]);
            next.delete(v);
            return { ...p, [k]: next };
          }),
      });
    }
  }
  if (filters.verifiedOnly) {
    chips.push({
      key: "verified",
      label: "Verified",
      remove: () => setFilters((p) => ({ ...p, verifiedOnly: false })),
    });
  }
  if (filters.nonDilutiveOnly) {
    chips.push({
      key: "nondil",
      label: "Non-dilutive",
      remove: () => setFilters((p) => ({ ...p, nonDilutiveOnly: false })),
    });
  }
  if (filters.openOnly) {
    chips.push({
      key: "open",
      label: "Open now",
      remove: () => setFilters((p) => ({ ...p, openOnly: false })),
    });
  }

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      {chips.map((c) => (
        <span
          key={c.key}
          className="inline-flex items-center gap-1.5 rounded-full bg-bloom-mint px-3 py-1 text-[12px] text-bloom-navy"
        >
          {c.label}
          <button
            type="button"
            onClick={c.remove}
            aria-label={`Remove ${c.label}`}
            className="rounded-full text-bloom-navy/60 hover:text-bloom-navy"
          >
            ×
          </button>
        </span>
      ))}
      <button
        type="button"
        onClick={() => setFilters(emptyFilters())}
        className="font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-orange uppercase underline-offset-2 hover:underline"
      >
        Clear all
      </button>
    </div>
  );
}

// =============================================================================
// Row
// =============================================================================

function Row({ r }: { r: Resource }) {
  // Curated entries link to internal deep page; non-curated link out.
  const internal =
    r.source === "curated"
      ? `/resources/hardtech-capital/${r.id.replace(/^curated-/, "")}`
      : null;
  const href = internal ?? r.apply_url ?? r.url;
  const vertical =
    (r.verticals ?? []).map((v) => VERTICAL_LABELS[v] ?? v).join(" · ") || "n/a";
  const check =
    r.award ||
    (r.check_min && r.check_max
      ? `$${humanK(r.check_min)} – $${humanK(r.check_max)}`
      : r.check_max
        ? `up to $${humanK(r.check_max)}`
        : "n/a");

  return (
    <div className="grid grid-cols-1 gap-2 border-b border-bloom-grey px-6 py-5 last:border-b-0 md:grid-cols-[2.5fr_1.2fr_1.2fr_1.5fr_1.1fr] md:items-center md:gap-4">
      <div>
        <div className="flex items-center gap-2">
          <ShortlistButton id={r.id} />
          {href ? (
            internal ? (
              <a
                href={href}
                className="text-[15px] font-semibold text-bloom-navy underline-offset-2 hover:underline"
              >
                {r.name}
              </a>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-semibold text-bloom-navy underline-offset-2 hover:underline"
              >
                {r.name}
              </a>
            )
          ) : (
            <span className="text-[15px] font-semibold text-bloom-navy">
              {r.name}
            </span>
          )}
          {r.last_verified && (
            <span
              title={`Verified ${r.last_verified}`}
              className="font-mono text-[10px] font-semibold tracking-wider text-bloom-orange uppercase"
            >
              VERIFIED
            </span>
          )}
        </div>
        {r.notes && (
          <p className="mt-1 line-clamp-2 text-[13px] leading-[1.55] text-bloom-muted">
            {r.notes}
          </p>
        )}
        {r.deadline && (
          <p className="mt-1 text-[12px] text-bloom-orange">⏱ {r.deadline}</p>
        )}
      </div>
      <div className="text-[13px] text-bloom-navy">
        <span className="font-mono text-[10px] tracking-wider text-bloom-muted uppercase md:hidden">
          Type:{" "}
        </span>
        {KIND_LABELS[r.kind]}
      </div>
      <div className="text-[13px] text-bloom-navy">
        <span className="font-mono text-[10px] tracking-wider text-bloom-muted uppercase md:hidden">
          Vertical:{" "}
        </span>
        {vertical}
      </div>
      <div className="text-[13px] text-bloom-navy">
        <span className="font-mono text-[10px] tracking-wider text-bloom-muted uppercase md:hidden">
          Check / Award:{" "}
        </span>
        {check}
      </div>
      <div className="text-[13px] text-bloom-navy">
        <span className="font-mono text-[10px] tracking-wider text-bloom-muted uppercase md:hidden">
          Geo:{" "}
        </span>
        {GEOGRAPHY_LABELS[r.geography ?? ""] ?? r.geography ?? "n/a"}
      </div>
    </div>
  );
}

function humanK(n: number): string {
  if (n >= 1_000_000)
    return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}
