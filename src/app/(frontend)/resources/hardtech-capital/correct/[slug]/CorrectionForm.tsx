"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { correctFunder } from "../../actions";

const FIELD_OPTIONS = [
  { value: "url", label: "Website URL is wrong / dead" },
  { value: "name", label: "Name has changed (renamed or rebranded)" },
  { value: "thesis", label: "Thesis / focus is wrong" },
  { value: "team", label: "Team listing is wrong or missing" },
  { value: "portfolio", label: "Portfolio is wrong or missing" },
  { value: "deadline", label: "Deadline is wrong or stale" },
  { value: "stage", label: "Stage / check size is wrong" },
  { value: "geo", label: "HQ / geography is wrong" },
  { value: "dormant", label: "Fund is dormant or closed" },
  { value: "other", label: "Something else" },
];

export function CorrectionForm({
  targetSlug,
  targetName,
}: {
  targetSlug: string;
  targetName: string;
}) {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<
    { ok: true } | { ok: false; error: string } | null
  >(null);

  const handle = (formData: FormData) => {
    startTransition(async () => {
      setResult(await correctFunder(formData));
    });
  };

  if (result?.ok) {
    return (
      <div className="mt-12 rounded-3xl border border-bloom-grey bg-white p-10 text-center">
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
          THANK YOU
        </span>
        <h2 className="mt-3 text-[28px] leading-[1.15] font-semibold tracking-tight text-bloom-navy sm:text-[32px]">
          Logged.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.6] text-bloom-muted">
          We’ll review and update the directory. If you’ve given us your
          email, we’ll let you know when the fix ships.
        </p>
        <Link
          href={`/resources/hardtech-capital/${targetSlug}`}
          className="mt-8 inline-block rounded-full bg-bloom-navy px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-opacity hover:opacity-90"
        >
          Back to {targetName}
        </Link>
      </div>
    );
  }

  return (
    <form action={handle} className="mt-10 flex flex-col gap-6">
      {result?.ok === false && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-900">
          {result.error}
        </div>
      )}
      {/* honeypot */}
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        className="absolute -left-[10000px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <input type="hidden" name="targetSlug" value={targetSlug} />
      <input type="hidden" name="targetName" value={targetName} />

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
          What's wrong?
        </span>
        <select
          name="field"
          required
          defaultValue=""
          className="h-12 rounded-lg border border-bloom-grey bg-white px-3 text-[14px] text-bloom-navy focus:border-bloom-navy/40 focus:outline-none"
        >
          <option value="" disabled>
            Pick what needs fixing
          </option>
          {FIELD_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
          The fix *
        </span>
        <textarea
          name="correction"
          required
          rows={5}
          placeholder="The corrected info, or what should be there instead."
          className="rounded-lg border border-bloom-grey bg-white px-4 py-3 text-[14px] leading-[1.55] text-bloom-navy placeholder:text-bloom-muted focus:border-bloom-navy/40 focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
          Source (optional)
        </span>
        <input
          type="text"
          name="source"
          placeholder="A link, news article, or the firm's own announcement"
          className="h-12 rounded-lg border border-bloom-grey bg-white px-4 text-[14px] text-bloom-navy placeholder:text-bloom-muted focus:border-bloom-navy/40 focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
          Your email (optional)
        </span>
        <input
          type="email"
          name="submitterEmail"
          placeholder="So we can let you know when we ship the fix"
          className="h-12 rounded-lg border border-bloom-grey bg-white px-4 text-[14px] text-bloom-navy placeholder:text-bloom-muted focus:border-bloom-navy/40 focus:outline-none"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-block rounded-full bg-bloom-navy px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Sending…" : "Send correction"}
        </button>
        <Link
          href={`/resources/hardtech-capital/${targetSlug}`}
          className="font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-muted uppercase underline-offset-4 hover:underline"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
