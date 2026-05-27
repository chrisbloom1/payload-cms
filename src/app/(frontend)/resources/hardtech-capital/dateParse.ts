/**
 * Lightweight deadline-string parser.
 *
 * Resource deadlines are free text: "May 29, 2026", "rolling",
 * "November 4, 2026 at 17:00 Brussels", "3 open: ... (May 22, 2026); ... (July 1, 2026)".
 * We extract ALL dates from the string, drop ones in the past, and return
 * the closest upcoming one.
 *
 * Returns null when the deadline is rolling/closed/between-cycles/unparseable.
 * The caller decides what to do with that.
 */

const MONTHS: Record<string, number> = {
  jan: 0, january: 0,
  feb: 1, february: 1,
  mar: 2, march: 2,
  apr: 3, april: 3,
  may: 4,
  jun: 5, june: 5,
  jul: 6, july: 6,
  aug: 7, august: 7,
  sep: 8, sept: 8, september: 8,
  oct: 9, october: 9,
  nov: 10, november: 10,
  dec: 11, december: 11,
};

const NEGATIVE_SIGNALS = [
  "closed",
  "between cycles",
  "manual verification",
  "no open",
  "site timed out",
  "site returned 403",
];

const ROLLING_SIGNALS = ["rolling"];

export type ParsedDeadline = {
  kind: "date" | "rolling" | "none";
  date: Date | null;
  daysFromNow: number | null;
  raw: string;
};

export function parseDeadline(
  text: string | null | undefined,
  now: Date = new Date(),
): ParsedDeadline {
  if (!text) return { kind: "none", date: null, daysFromNow: null, raw: "" };
  const lower = text.toLowerCase();

  if (NEGATIVE_SIGNALS.some((s) => lower.includes(s))) {
    return { kind: "none", date: null, daysFromNow: null, raw: text };
  }

  const dates = extractDates(text);
  const upcoming = dates
    .filter((d) => d.getTime() >= startOfDay(now).getTime())
    .sort((a, b) => a.getTime() - b.getTime());

  if (upcoming.length > 0) {
    const d = upcoming[0];
    return {
      kind: "date",
      date: d,
      daysFromNow: Math.round(
        (startOfDay(d).getTime() - startOfDay(now).getTime()) /
          (24 * 60 * 60 * 1000),
      ),
      raw: text,
    };
  }

  if (ROLLING_SIGNALS.some((s) => lower.includes(s))) {
    return { kind: "rolling", date: null, daysFromNow: null, raw: text };
  }

  return { kind: "none", date: null, daysFromNow: null, raw: text };
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function extractDates(text: string): Date[] {
  const out: Date[] = [];

  // "May 29, 2026" / "Jul 9, 2026" / "September 28, 2028"
  const monthFirst =
    /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.?\s+(\d{1,2}),?\s+(\d{4})\b/gi;
  for (const m of text.matchAll(monthFirst)) {
    const mo = MONTHS[m[1].toLowerCase().replace(".", "")];
    const day = parseInt(m[2], 10);
    const year = parseInt(m[3], 10);
    if (mo !== undefined && day >= 1 && day <= 31 && year >= 2020) {
      out.push(new Date(year, mo, day));
    }
  }

  // "5/29/2026" / "6/16/2026" / "12/4/2026"
  const usSlash = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g;
  for (const m of text.matchAll(usSlash)) {
    const mo = parseInt(m[1], 10) - 1;
    const day = parseInt(m[2], 10);
    const year = parseInt(m[3], 10);
    if (mo >= 0 && mo < 12 && day >= 1 && day <= 31 && year >= 2020) {
      out.push(new Date(year, mo, day));
    }
  }

  // "2026-05-29"
  const iso = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
  for (const m of text.matchAll(iso)) {
    const year = parseInt(m[1], 10);
    const mo = parseInt(m[2], 10) - 1;
    const day = parseInt(m[3], 10);
    if (mo >= 0 && mo < 12 && day >= 1 && day <= 31 && year >= 2020) {
      out.push(new Date(year, mo, day));
    }
  }

  return out;
}

export function deadlineUrgency(
  d: ParsedDeadline,
): "today" | "this-week" | "this-month" | "soon" | "later" | "none" {
  if (d.kind !== "date" || d.daysFromNow === null) return "none";
  if (d.daysFromNow <= 0) return "today";
  if (d.daysFromNow <= 7) return "this-week";
  if (d.daysFromNow <= 30) return "this-month";
  if (d.daysFromNow <= 60) return "soon";
  return "later";
}

export function formatDeadlineShort(d: Date): string {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[d.getMonth()]} ${d.getDate()}`;
}
