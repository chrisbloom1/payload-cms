"use client";

import { parseDeadline } from "./dateParse";

/**
 * Generates a single-event .ics file client-side for a funder's deadline.
 * If the deadline string has multiple dates (e.g. "May 22 and July 1"), uses
 * the soonest upcoming one.
 */
export function CalendarButton({
  name,
  deadline,
  url,
}: {
  name: string;
  deadline: string;
  url?: string;
}) {
  const parsed = parseDeadline(deadline);
  if (parsed.kind !== "date" || !parsed.date) return null;

  const handleDownload = () => {
    const dt = parsed.date!;
    const dateStr = formatICSDate(dt);
    const reminderDt = new Date(dt);
    reminderDt.setDate(reminderDt.getDate() - 7);
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Bloom//Hardtech Capital//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${slugify(name)}-${dateStr}@bloomnetwork.ai`,
      `DTSTAMP:${formatICSDateTime(new Date())}`,
      `DTSTART;VALUE=DATE:${dateStr}`,
      `DTEND;VALUE=DATE:${dateStr}`,
      `SUMMARY:${escapeICS(`${name} deadline`)}`,
      `DESCRIPTION:${escapeICS(
        `Application deadline for ${name}.\\n\\n${deadline}${url ? `\\n\\nApply: ${url}` : ""}\\n\\nFrom Bloom Hardtech Capital.`,
      )}`,
      url ? `URL:${url}` : "",
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeICS(`${name} deadline in 7 days`)}`,
      "TRIGGER:-P7D",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ]
      .filter(Boolean)
      .join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = `${slugify(name)}-deadline.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-full border border-bloom-navy/20 px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-colors hover:border-bloom-navy/40"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
      Add to calendar
    </button>
  );
}

function formatICSDate(d: Date): string {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}${mm}${dd}`;
}

function formatICSDateTime(d: Date): string {
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mi = String(d.getUTCMinutes()).padStart(2, "0");
  const ss = String(d.getUTCSeconds()).padStart(2, "0");
  return `${yyyy}${mm}${dd}T${hh}${mi}${ss}Z`;
}

function escapeICS(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);
}
