"use server";

/**
 * Server actions for the Hardtech Capital submission forms.
 *
 * Two flows:
 *   submitFunder: a reader proposes a new funder for the directory.
 *   correctFunder: a reader flags stale/wrong info on an existing entry.
 *
 * Both log structured JSON to the server console (visible in Vercel logs)
 * and POST to HARDTECH_SUBMISSIONS_WEBHOOK if that env var is set, so ops
 * can wire it to Slack / Linear / Discord without code changes.
 *
 * Honeypot field "company" must be empty (humans never fill hidden fields).
 */

type SubmissionResult =
  | { ok: true }
  | { ok: false; error: string };

type SubmissionType = "add" | "correct";

type Payload = {
  type: SubmissionType;
  targetSlug?: string;
  targetName?: string;
  fields: Record<string, string>;
  submittedAt: string;
  userAgent?: string | null;
};

async function send(payload: Payload): Promise<void> {
  // Always log so Vercel deploy logs capture it
  console.log(
    JSON.stringify({ event: "hardtech_capital_submission", ...payload }),
  );
  const webhook = process.env.HARDTECH_SUBMISSIONS_WEBHOOK;
  if (!webhook) return;
  try {
    const text =
      payload.type === "add"
        ? `New funder submitted for Hardtech Capital: *${payload.fields.name}*`
        : `Correction for *${payload.targetName ?? payload.targetSlug}* on Hardtech Capital`;
    await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        text,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                `*${text}*\n` +
                Object.entries(payload.fields)
                  .filter(([, v]) => v && v.length)
                  .map(([k, v]) => `• *${k}*: ${v}`)
                  .join("\n"),
            },
          },
        ],
      }),
    });
  } catch (e) {
    console.error("hardtech_capital_webhook_failed", e);
  }
}

function notEmpty(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function tooLong(s: string, max: number): boolean {
  return s.length > max;
}

export async function submitFunder(formData: FormData): Promise<SubmissionResult> {
  // Honeypot
  if (notEmpty(formData.get("company")).length > 0) {
    return { ok: false, error: "Submission blocked." };
  }
  const name = notEmpty(formData.get("name"));
  const url = notEmpty(formData.get("url"));
  const kind = notEmpty(formData.get("kind"));
  const hq = notEmpty(formData.get("hq"));
  const focus = notEmpty(formData.get("focus"));
  const stage = notEmpty(formData.get("stage"));
  const why = notEmpty(formData.get("why"));
  const submitterEmail = notEmpty(formData.get("submitterEmail"));

  if (!name) return { ok: false, error: "Funder name is required." };
  if (!url) return { ok: false, error: "Website URL is required." };
  if (!why) return { ok: false, error: "Tell us briefly why this funder belongs in the directory." };
  if (tooLong(name, 200) || tooLong(why, 2000) || tooLong(url, 500)) {
    return { ok: false, error: "Submission is too long." };
  }

  await send({
    type: "add",
    fields: { name, url, kind, hq, focus, stage, why, submitterEmail },
    submittedAt: new Date().toISOString(),
    userAgent: null,
  });

  return { ok: true };
}

export async function correctFunder(formData: FormData): Promise<SubmissionResult> {
  if (notEmpty(formData.get("company")).length > 0) {
    return { ok: false, error: "Submission blocked." };
  }
  const targetSlug = notEmpty(formData.get("targetSlug"));
  const targetName = notEmpty(formData.get("targetName"));
  const field = notEmpty(formData.get("field"));
  const correction = notEmpty(formData.get("correction"));
  const source = notEmpty(formData.get("source"));
  const submitterEmail = notEmpty(formData.get("submitterEmail"));

  if (!targetSlug) return { ok: false, error: "Missing target funder." };
  if (!correction) return { ok: false, error: "Tell us what's wrong." };
  if (tooLong(correction, 2000) || tooLong(source, 500)) {
    return { ok: false, error: "Submission is too long." };
  }

  await send({
    type: "correct",
    targetSlug,
    targetName,
    fields: { field, correction, source, submitterEmail },
    submittedAt: new Date().toISOString(),
    userAgent: null,
  });

  return { ok: true };
}
