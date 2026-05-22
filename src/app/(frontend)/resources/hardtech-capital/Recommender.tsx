"use client";

import { useEffect, useMemo, useState } from "react";
import {
  GEOGRAPHY_LABELS,
  KIND_LABELS,
  VERTICAL_LABELS,
  type Resource,
} from "./types";
import { loadResourcesOnce } from "./loadResources";

// =============================================================================
// Quiz config
// =============================================================================

type Answers = {
  focus: string;
  stage: string;
  geography: string;
  dilution: "any" | "non_dilutive_only" | "equity_only";
};

const EMPTY: Answers = {
  focus: "",
  stage: "",
  geography: "",
  dilution: "any",
};

type QuestionConfig = {
  key: keyof Answers;
  question: string;
  options: { value: string; label: string; hint?: string }[];
};

const QUESTIONS: QuestionConfig[] = [
  {
    key: "focus",
    question: "What are you building?",
    options: [
      { value: "mobility", label: "Mobility", hint: "Light EVs, fleets, charging, transit, auto tech" },
      { value: "energy", label: "Energy", hint: "Grid, storage, generation, fusion, climate tech" },
      { value: "robotics", label: "Robotics", hint: "Industrial, warehouse, manipulation, autonomy" },
      { value: "drones", label: "Drones / dual-use", hint: "UAV, UAS, defense, aerospace, national security" },
      { value: "biotech_medtech_materials", label: "Biotech, medtech, or materials" },
      { value: "deeptech_general", label: "Other deep tech" },
    ],
  },
  {
    key: "stage",
    question: "What stage are you at?",
    options: [
      {
        value: "pre_seed",
        label: "Idea or prototype",
        hint: "Pre-seed, working on first build",
      },
      {
        value: "seed_series_a",
        label: "Seed or Series A",
        hint: "Have a prototype, raising for team or pilots",
      },
      {
        value: "series_b_plus",
        label: "Series B+",
        hint: "Product in market, scaling",
      },
      {
        value: "growth",
        label: "Growth or pre-IPO",
        hint: "Building first commercial-scale facility",
      },
    ],
  },
  {
    key: "geography",
    question: "Where are you based?",
    options: [
      { value: "us", label: "United States" },
      { value: "europe", label: "Continental Europe" },
      { value: "uk", label: "United Kingdom" },
      { value: "canada", label: "Canada" },
      { value: "global", label: "Elsewhere (or open to anywhere)" },
    ],
  },
  {
    key: "dilution",
    question: "Equity or non-dilutive?",
    options: [
      { value: "any", label: "Show me both" },
      {
        value: "non_dilutive_only",
        label: "Non-dilutive only",
        hint: "Grants, federal programs, government loans",
      },
      {
        value: "equity_only",
        label: "Equity only",
        hint: "VCs, CVCs, accelerators, family offices",
      },
    ],
  },
];

// =============================================================================
// Scoring
// =============================================================================

const BLOOM_FOCUS_KEYS = new Set(["mobility", "energy", "robotics", "drones"]);

function scoreResource(r: Resource, a: Answers): number {
  let s = 0;
  if (a.focus) {
    if (BLOOM_FOCUS_KEYS.has(a.focus)) {
      // Bloom focus match (strict): exact bloom_focus tag
      if ((r.bloom_focus ?? []).includes(a.focus as "mobility")) s += 12;
      // Drones is dual-use: also match defense_space vertical as a bridge
      if (a.focus === "drones" && (r.verticals ?? []).includes("defense_space")) {
        s += 4;
      }
      // Mobility: bridge to robotics_manufacturing vertical
      if (
        a.focus === "mobility" &&
        (r.verticals ?? []).includes("robotics_manufacturing")
      ) {
        s += 3;
      }
    } else {
      // Legacy vertical match (biotech, deeptech_general)
      if ((r.verticals ?? []).includes(a.focus)) s += 10;
    }
  }
  if (a.stage && (r.stages ?? []).includes(a.stage)) s += 5;
  if (a.geography) {
    if (r.geography === a.geography) s += 4;
    else if (r.geography === "global") s += 2;
  }
  if (r.source === "curated") s += 2;
  if (r.last_verified) s += 1;
  return s;
}

function passesDilutionFilter(r: Resource, dilution: Answers["dilution"]): boolean {
  if (dilution === "any") return true;
  const nonDilutiveKinds = new Set([
    "federal_program",
    "grant",
    "foundation",
    "govt_loan",
  ]);
  const equityKinds = new Set([
    "vc",
    "cvc",
    "angel",
    "family_office",
    "accelerator",
  ]);
  if (dilution === "non_dilutive_only") return nonDilutiveKinds.has(r.kind);
  return equityKinds.has(r.kind);
}

function matchReason(r: Resource, a: Answers): string {
  const bits: string[] = [];
  if (a.focus) {
    if (BLOOM_FOCUS_KEYS.has(a.focus)) {
      if ((r.bloom_focus ?? []).includes(a.focus as "mobility")) {
        bits.push(`Active in ${a.focus}`);
      } else if (
        a.focus === "drones" &&
        (r.verticals ?? []).includes("defense_space")
      ) {
        bits.push("Backs defense / dual-use");
      } else if (
        a.focus === "mobility" &&
        (r.verticals ?? []).includes("robotics_manufacturing")
      ) {
        bits.push("Backs robotics & manufacturing (adjacent)");
      }
    } else if ((r.verticals ?? []).includes(a.focus)) {
      bits.push(`Backs ${VERTICAL_LABELS[a.focus]?.toLowerCase() ?? a.focus}`);
    }
  }
  if (a.stage && (r.stages ?? []).includes(a.stage)) {
    bits.push("Active at your stage");
  }
  if (a.geography && r.geography === a.geography) {
    bits.push(`Based in ${GEOGRAPHY_LABELS[a.geography] ?? a.geography}`);
  } else if (r.geography === "global") {
    bits.push("Invests globally");
  }
  return bits.join(" · ");
}

// =============================================================================
// Component
// =============================================================================

export function Recommender() {
  const [data, setData] = useState<Resource[] | null>(null);
  const [step, setStep] = useState(0); // 0..3 questions, 4 = results
  const [answers, setAnswersState] = useState<Answers>(EMPTY);

  useEffect(() => {
    let cancelled = false;
    loadResourcesOnce()
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const setAnswer = (key: keyof Answers, value: string) => {
    setAnswersState((prev) => ({ ...prev, [key]: value as Answers[typeof key] }));
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setStep(QUESTIONS.length); // jump to results
  };

  const results = useMemo<{ r: Resource; score: number; reason: string }[]>(() => {
    if (!data) return [];
    return data
      .filter((r) => passesDilutionFilter(r, answers.dilution))
      .map((r) => ({
        r,
        score: scoreResource(r, answers),
        reason: matchReason(r, answers),
      }))
      .filter((x) => x.score >= 8)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }, [data, answers]);

  const reset = () => {
    setAnswersState(EMPTY);
    setStep(0);
  };

  const onResults = step >= QUESTIONS.length;

  return (
    <section
      id="recommender"
      className="w-full bg-bloom-navy py-16 text-bloom-cream sm:py-20"
    >
      <div className="mx-auto w-full max-w-[860px] px-6">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
            FIND YOUR MATCH
          </span>
          <h2 className="mt-3 text-[28px] leading-[1.15] font-semibold tracking-tight sm:text-[36px]">
            {onResults
              ? "Here’s where to look first."
              : "Four questions. Ten funders."}
          </h2>
          {!onResults && (
            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.6] text-bloom-cream/70">
              Skip the 1,702-row directory. Tell us what you’re building and
              we’ll point you at the ten funders most likely to fit.
            </p>
          )}
        </div>

        <div className="mt-10">
          {!onResults ? (
            <QuestionCard
              q={QUESTIONS[step]}
              answers={answers}
              setAnswer={setAnswer}
              step={step}
              total={QUESTIONS.length}
              onBack={step > 0 ? () => setStep(step - 1) : undefined}
            />
          ) : (
            <Results
              results={results}
              answers={answers}
              onReset={reset}
              dataReady={Boolean(data)}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function QuestionCard({
  q,
  answers,
  setAnswer,
  step,
  total,
  onBack,
}: {
  q: QuestionConfig;
  answers: Answers;
  setAnswer: (key: keyof Answers, value: string) => void;
  step: number;
  total: number;
  onBack?: () => void;
}) {
  const currentValue = answers[q.key] as string;
  return (
    <div className="rounded-3xl bg-bloom-cream p-6 text-bloom-navy sm:p-10">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
          Question {step + 1} of {total}
        </span>
        <div className="flex gap-1.5">
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              className={`h-1 w-6 rounded-full ${
                i <= step ? "bg-bloom-navy" : "bg-bloom-grey"
              }`}
            />
          ))}
        </div>
      </div>
      <h3 className="mt-6 text-[22px] leading-[1.2] font-semibold tracking-tight sm:text-[26px]">
        {q.question}
      </h3>
      <div className="mt-6 grid gap-2">
        {q.options.map((o) => {
          const selected = currentValue === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => setAnswer(q.key, o.value)}
              className={`flex w-full items-start justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-colors ${
                selected
                  ? "border-bloom-navy bg-bloom-navy text-bloom-cream"
                  : "border-bloom-grey bg-white hover:border-bloom-navy/40"
              }`}
            >
              <span>
                <span className="block text-[15px] font-semibold">
                  {o.label}
                </span>
                {o.hint && (
                  <span
                    className={`mt-1 block text-[12px] ${selected ? "text-bloom-cream/70" : "text-bloom-muted"}`}
                  >
                    {o.hint}
                  </span>
                )}
              </span>
              <span
                className={`mt-0.5 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase ${selected ? "text-bloom-cream/70" : "text-bloom-muted"}`}
              >
                {selected ? "Selected" : "Pick"}
              </span>
            </button>
          );
        })}
      </div>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mt-6 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-muted uppercase underline-offset-4 hover:underline"
        >
          ← Back
        </button>
      )}
    </div>
  );
}

function Results({
  results,
  answers,
  onReset,
  dataReady,
}: {
  results: { r: Resource; score: number; reason: string }[];
  answers: Answers;
  onReset: () => void;
  dataReady: boolean;
}) {
  if (!dataReady) {
    return (
      <div className="rounded-3xl bg-bloom-cream p-10 text-center text-bloom-navy">
        Loading directory…
      </div>
    );
  }
  return (
    <div className="rounded-3xl bg-bloom-cream p-6 text-bloom-navy sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[14px] text-bloom-muted">
          Based on{" "}
          <strong className="text-bloom-navy">
            {answers.focus ? capitalize(answers.focus) : "your focus"}
          </strong>
          ,{" "}
          <strong className="text-bloom-navy">
            {answers.stage ? answers.stage.replace(/_/g, " ") : "any stage"}
          </strong>
          ,{" "}
          <strong className="text-bloom-navy">
            {GEOGRAPHY_LABELS[answers.geography] ?? "any geo"}
          </strong>
          ,{" "}
          <strong className="text-bloom-navy">
            {answers.dilution === "any"
              ? "any capital type"
              : answers.dilution === "non_dilutive_only"
                ? "non-dilutive only"
                : "equity only"}
          </strong>
          .
        </p>
        <button
          type="button"
          onClick={onReset}
          className="font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-orange uppercase underline-offset-4 hover:underline"
        >
          Start over
        </button>
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-bloom-grey bg-white p-8 text-center">
          <p className="text-[15px]">
            No strong matches with those filters. Try widening one of your
            answers, or browse the full directory below.
          </p>
        </div>
      ) : (
        <ol className="flex flex-col gap-3">
          {results.map(({ r, reason }, i) => (
            <ResultRow key={r.id} r={r} reason={reason} rank={i + 1} />
          ))}
        </ol>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-bloom-grey pt-6">
        <p className="text-[13px] text-bloom-muted">
          Want more? Browse all 1,702 in the full directory below.
        </p>
        <a
          href="#directory"
          className="font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase underline-offset-4 hover:underline"
        >
          Open full directory →
        </a>
      </div>
    </div>
  );
}

function capitalize(s: string): string {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/_/g, " ");
}

function ResultRow({
  r,
  reason,
  rank,
}: {
  r: Resource;
  reason: string;
  rank: number;
}) {
  const href = r.apply_url || r.url;
  const Tag = href ? "a" : "div";
  const tagProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <li>
      <Tag
        {...tagProps}
        className="group flex items-start gap-4 rounded-2xl border border-bloom-grey bg-white p-4 transition-colors hover:border-bloom-navy/40 sm:p-5"
      >
        <span className="mt-0.5 font-mono text-[13px] font-semibold tabular-nums text-bloom-orange">
          {String(rank).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-[15px] font-semibold text-bloom-navy">
              {r.name}
            </span>
            <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
              {KIND_LABELS[r.kind]}
            </span>
            {r.last_verified && (
              <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-orange uppercase">
                ✓ Verified
              </span>
            )}
          </div>
          {reason && (
            <p className="mt-1 text-[12px] text-bloom-muted">{reason}</p>
          )}
          {r.notes && (
            <p className="mt-2 line-clamp-2 text-[13px] leading-[1.55] text-bloom-navy/80">
              {r.notes}
            </p>
          )}
          {r.award && (
            <p className="mt-2 font-mono text-[11px] font-semibold tracking-[0.06em] text-bloom-navy uppercase">
              {r.award.length > 80
                ? r.award.slice(0, 80).trimEnd() + "…"
                : r.award}
            </p>
          )}
        </div>
        {href && (
          <span className="self-start font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-navy uppercase opacity-70 transition-opacity group-hover:opacity-100">
            Visit →
          </span>
        )}
      </Tag>
    </li>
  );
}
