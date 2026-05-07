"use client";

import dynamic from "next/dynamic";

// AdminBar and LivePreviewListener pull in payload-admin-bar and
// @payloadcms/live-preview-react respectively — both are heavy and
// only useful in draft/preview mode. Gating + dynamic-importing them
// from this client shell keeps both packages out of the public,
// non-preview JS bundle entirely (which is the lighthouse/PSI scoring
// scenario).

const AdminBar = dynamic(
  () => import("@/components/AdminBar").then((m) => ({ default: m.AdminBar })),
  { ssr: false, loading: () => null },
);

const LivePreviewListener = dynamic(
  () =>
    import("@/components/LivePreviewListener").then((m) => ({
      default: m.LivePreviewListener,
    })),
  { ssr: false, loading: () => null },
);

export function PreviewModeShell({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;
  return (
    <>
      <AdminBar adminBarProps={{ preview: enabled }} />
      <LivePreviewListener />
    </>
  );
}
