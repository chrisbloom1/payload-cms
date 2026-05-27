"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { submitFunder } from "../actions";

const KIND_OPTIONS = [
  { value: "vc", label: "Venture capital" },
  { value: "cvc", label: "Corporate venture" },
  { value: "accelerator", label: "Accelerator / Lab" },
  { value: "federal_program", label: "Federal program" },
  { value: "foundation", label: "Foundation" },
  { value: "grant", label: "Grant or competition" },
  { value: "angel", label: "Angel network" },
  { value: "family_office", label: "Family office" },
  { value: "govt_loan", label: "Government loan" },
];

const STAGE_OPTIONS = [
  { value: "pre_seed", label: "Pre-seed" },
  { value: "seed_series_a", label: "Seed / Series A" },
  { value: "series_b_plus", label: "Series B+" },
  { value: "growth", label: "Growth" },
  { value: "non_dilutive", label: "Non-dilutive" },
];

const FOCUS_OPTIONS = [
  { value: "mobility", label: "Mobility" },
  { value: "energy", label: "Energy" },
  { value: "robotics", label: "Robotics" },
  { value: "drones", label: "Drones" },
  { value: "biotech", label: "Biotech / medtech" },
  { value: "materials", label: "Materials / semis" },
  { value: "defense", label: "Defense / space" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "other", label: "Other" },
];

export function AddFunderForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<
    | { ok: true }
    | { ok: false; error: string }
    | null
  >(null);

  const handle = (formData: FormData) => {
    startTransition(async () => {
      const r = await submitFunder(formData);
      setResult(r);
      if (r.ok) {
        // form is replaced by success state below
      }
    });
  };

  if (result?.ok) {
    return (
      <div className="mt-12 rounded-3xl border border-bloom-grey bg-white p-10 text-center">
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
          THANK YOU
        </span>
        <h2 className="mt-3 text-[28px] leading-[1.15] font-semibold tracking-tight text-bloom-navy sm:text-[32px]">
          Got it.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.6] text-bloom-muted">
          We review every submission. If it fits, you’ll see it in the next
          update. If we need to clarify anything, we’ll email you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setResult(null)}
            className="inline-block rounded-full border border-bloom-navy/20 px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-colors hover:border-bloom-navy/40"
          >
            Submit another
          </button>
          <Link
            href="/resources/hardtech-capital"
            className="inline-block rounded-full bg-bloom-navy px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-opacity hover:opacity-90"
          >
            Back to directory
          </Link>
        </div>
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

      <Field label="Funder name" name="name" required placeholder="e.g. New Climate Ventures" />
      <Field
        label="Website"
        name="url"
        type="url"
        required
        placeholder="https://example.com"
      />
      <Row>
        <Select label="Type" name="kind" options={KIND_OPTIONS} />
        <Field label="HQ" name="hq" placeholder="City, country" />
      </Row>
      <Row>
        <Select label="Primary focus" name="focus" options={FOCUS_OPTIONS} />
        <Select label="Stage" name="stage" options={STAGE_OPTIONS} />
      </Row>

      <Textarea
        label="Why does this funder belong here?"
        name="why"
        required
        placeholder="A few sentences on their thesis, recent investments, or why hardtech founders should know about them."
        rows={5}
      />

      <Field
        label="Your email (optional)"
        name="submitterEmail"
        type="email"
        placeholder="So we can follow up if needed"
      />

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-block rounded-full bg-bloom-navy px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Submitting…" : "Submit"}
        </button>
        <Link
          href="/resources/hardtech-capital"
          className="font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-muted uppercase underline-offset-4 hover:underline"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-lg border border-bloom-grey bg-white px-4 text-[14px] text-bloom-navy placeholder:text-bloom-muted focus:border-bloom-navy/40 focus:outline-none"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
        {label}
      </span>
      <select
        name={name}
        className="h-12 rounded-lg border border-bloom-grey bg-white px-3 text-[14px] text-bloom-navy focus:border-bloom-navy/40 focus:outline-none"
      >
        <option value="">Pick one</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  required,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
        {label}
        {required && " *"}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="rounded-lg border border-bloom-grey bg-white px-4 py-3 text-[14px] leading-[1.55] text-bloom-navy placeholder:text-bloom-muted focus:border-bloom-navy/40 focus:outline-none"
      />
    </label>
  );
}
