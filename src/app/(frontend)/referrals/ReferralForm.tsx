"use client";

import { useState, useTransition } from "react";
import { submitReferral } from "./actions";

export function ReferralForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<
    { ok: true } | { ok: false; error: string } | null
  >(null);

  const handle = (formData: FormData) => {
    startTransition(async () => {
      setResult(await submitReferral(formData));
    });
  };

  if (result?.ok) {
    return (
      <div className="mt-12 rounded-3xl bg-bloom-cream p-10 text-center text-bloom-navy">
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
          THANK YOU
        </span>
        <h3 className="mt-3 text-[28px] leading-[1.15] font-semibold tracking-tight sm:text-[32px]">
          We got it.
        </h3>
        <p className="mt-4 text-[15px] leading-[1.6] text-bloom-muted">
          We review every application. Expect to hear back within a week.
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-8 inline-block rounded-full border border-bloom-navy/20 px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-colors hover:border-bloom-navy/40"
        >
          Refer another brand
        </button>
      </div>
    );
  }

  return (
    <form action={handle} className="mt-10 flex flex-col gap-5">
      {result?.ok === false && (
        <div className="rounded-2xl border border-red-300 bg-red-100/10 p-4 text-[14px] text-red-200">
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

      <Row>
        <Field label="Your name" name="name" required placeholder="Jane Doe" />
        <Field
          label="Your email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </Row>
      <Field
        label="Your role / company"
        name="role"
        placeholder="e.g. Partner at Greentown Labs"
      />

      <div className="my-2 border-t border-bloom-cream/15" />

      <Row>
        <Field
          label="Brand you want to refer"
          name="brand"
          required
          placeholder="e.g. Acme Mobility"
        />
        <Field
          label="Their website"
          name="brandUrl"
          type="url"
          placeholder="https://"
        />
      </Row>
      <Textarea
        label="Your relationship to them"
        name="relationship"
        rows={3}
        placeholder="How you know them. The warmer the intro, the faster we can move."
      />
      <Textarea
        label="Why they fit Bloom"
        name="why"
        required
        rows={5}
        placeholder="What they're building, what they need, anything else useful for us to know."
      />

      <div className="flex flex-wrap items-center gap-3 pt-3">
        <button
          type="submit"
          disabled={pending}
          className="inline-block rounded-full bg-bloom-cream px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Submitting…" : "Submit"}
        </button>
        <span className="font-mono text-[11px] tracking-[0.14em] text-bloom-cream/50 uppercase">
          We respond within a week
        </span>
      </div>
    </form>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2">{children}</div>;
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
      <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-cream/70 uppercase">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-lg border border-bloom-cream/15 bg-bloom-cream/5 px-4 text-[14px] text-bloom-cream placeholder:text-bloom-cream/35 focus:border-bloom-cream/40 focus:outline-none"
      />
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
      <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-cream/70 uppercase">
        {label}
        {required && " *"}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="rounded-lg border border-bloom-cream/15 bg-bloom-cream/5 px-4 py-3 text-[14px] leading-[1.55] text-bloom-cream placeholder:text-bloom-cream/35 focus:border-bloom-cream/40 focus:outline-none"
      />
    </label>
  );
}
