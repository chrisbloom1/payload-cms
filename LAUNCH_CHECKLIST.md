# Launch Checklist

Single source of truth for the items that still need a human before
`bloomnetwork.ai` (or wherever production points) cuts over to this
Next.js codebase. Code-side work is already shipped on `merge/bloom-web`.

Update items here as they get done. Anything marked **🚨 launch
blocker** must be true before DNS cutover or things will be visibly
broken at go-live.

## 1. Environment variables on Vercel

### 🚨 PostHog (analytics — required for continuity)

Add to **Production**, **Preview**, and **Development** scopes:

```
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Where the key comes from: PostHog → **Project Settings → Project API
Key**. Use the same key the legacy site uses so visitor identity
(`$device_id` cookie) carries across cutover with zero data gap. If
your project is on the EU region, use `https://eu.i.posthog.com`
instead.

CLI shortcut (one at a time, interactive):

```bash
vercel env add NEXT_PUBLIC_POSTHOG_KEY production
vercel env add NEXT_PUBLIC_POSTHOG_KEY preview
vercel env add NEXT_PUBLIC_POSTHOG_KEY development
vercel env add NEXT_PUBLIC_POSTHOG_HOST production
vercel env add NEXT_PUBLIC_POSTHOG_HOST preview
vercel env add NEXT_PUBLIC_POSTHOG_HOST development
```

Until these are set, the `PostHogProvider` is a no-op (returns null —
no errors, just no events). That's intentional.

### 🚨 PAYLOAD_SECRET, DATABASE_URI, NEXT_PUBLIC_SERVER_URL on Preview

These exist in **Production** scope but are missing in **Preview**.
Preview builds will fail without them (the build worker errors out
during static generation with "missing secret key"). For each:

- `PAYLOAD_SECRET` — already added to Preview (fresh value, sensitive
  unset). If you'd rather match Production, you'll need to either
  read the Production value from a secure source the CLI can see or
  rotate Production to the same value as Preview.
- `DATABASE_URI` — add a Preview-scoped value pointing at a separate
  preview database, OR copy from Production if you're OK with preview
  builds writing to prod (not recommended).
- `NEXT_PUBLIC_SERVER_URL` — set to `https://your-preview-domain` or
  let the code fall back to `VERCEL_PROJECT_PRODUCTION_URL`.

## 2. PostHog project settings

### 🚨 Authorized URLs

In PostHog → **Project Settings → Authorized URLs**, add the
production domain (e.g. `https://www.bloomnetwork.ai`) and any
preview origins you want analytics from. Without this, the JS SDK
will refuse to send events from that origin.

### Optional

- Set up a "marketing site" insight folder if you want to separate
  marketing-site events from product events.
- Add a funnel: `/` → `/brands` or `/providers` → `/contact-us` to
  track marketing-to-contact conversion at launch.

## 3. Content / legal

### 🚨 Terms of Service copy

`src/app/(frontend)/terms/page.tsx` currently has a placeholder body
("Coming soon"). Replace with the real ToS once legal sign off —
either write directly into that file or load from Payload like the
Privacy page does.

### Privacy Policy "Last updated" date

`src/app/(frontend)/privacy/page.tsx` shows `September 6, 2024`. If
the content is still current, no change needed; if it's been updated
internally, bump the date.

### Footer copyright year

Already dynamic (`© {year} Bloom Inc.`). No action.

## 4. SEO verification

After the next preview deploy, run each through their respective
validator:

- **Google Rich Results Test** — https://search.google.com/test/rich-results
  Paste the deployed URLs of `/`, a blog post, and a customer story.
  Should detect: Organization, WebSite, Article, BreadcrumbList.
- **Twitter Card Validator** — https://cards-dev.twitter.com/validator
  (deprecated but still works for spot-checks)
- **LinkedIn Post Inspector** — https://www.linkedin.com/post-inspector/
- **Facebook Sharing Debugger** — https://developers.facebook.com/tools/debug/
- **Search Console** — submit `/sitemap.xml` once the production
  domain is live.

## 5. Pre-cutover smoke tests

Run these manually against the Vercel **Preview** deploy of
`merge/bloom-web` once env vars are in place:

- [ ] Homepage loads, hero video plays, marquee scrolls
- [ ] `/brands`, `/providers`, `/company`, `/contact-us` all load
- [ ] At least one blog post detail page renders
- [ ] At least one customer story detail page renders
- [ ] `/privacy` renders all 13 sections
- [ ] `/terms` renders placeholder
- [ ] Mobile menu opens/closes on `< lg`
- [ ] Open devtools → Network → confirm a request to
      `us.i.posthog.com/e/` fires on first pageview and on a route
      change (proves PostHog wiring works)
- [ ] `view-source:` on `/` includes a `<script type="application/ld+json">`
      with `@type: "Organization"`
- [ ] `view-source:` on a blog post includes `@type: "Article"`
- [ ] `view-source:` on `/kb`, `/guides`, `/changelog`, `/roadmap`
      includes `<meta name="robots" content="noindex, nofollow">`
- [ ] `/sitemap.xml` returns marketing pages but NOT KB/guides/changelog/roadmap
- [ ] `/robots.txt` disallows `/kb/`, `/guides/`, `/changelog`, `/roadmap`,
      `/admin/`, `/api/`, `/next/`

## 6. DNS / cutover steps (run in this order)

1. Vercel **Preview** deploy on `merge/bloom-web` is green and smoke
   tests above pass.
2. PostHog env vars + Authorized URLs in place (sections 1–2 above).
3. Merge `merge/bloom-web` → `master` (or whatever your prod-tracking
   branch is) — only after smoke tests pass.
4. Promote to Production on Vercel.
5. Switch the public DNS record to point at the Vercel
   project's `bloom-merge` deployment.
6. Verify within 5 minutes: PostHog → Live Events should show
   `$pageview` traffic from the new domain. If it's silent, double-
   check Authorized URLs and the SDK key.
7. Resubmit `/sitemap.xml` in Google Search Console under the
   production domain.

## 7. Lower-priority follow-ups (don't block launch)

- `src/app/(frontend)/help-v2/page.tsx` — experimental v2 of the help
  center; not linked from main nav. Either complete or delete.
- Hero videos (`public/videos/bloom-app-demo.mp4`) are still 3 MB.
  Re-encode to ~1 MB at the same visible quality:
  ```
  ffmpeg -i public/videos/bloom-app-demo.mp4 \
    -vcodec libx264 -crf 28 -preset slower \
    -vf "scale='min(1280,iw)':-2" \
    -an public/videos/bloom-app-demo.optimized.mp4
  ```
  Then swap the reference in `src/components/home/HomeAppDemo.tsx`
  and `HomeAppMockup.tsx`.
- `/og` dynamic image route uses `system-ui` font. To brand it with
  Haffer, host the .woff2 in `public/fonts/` (already done) and
  fetch it inside the `ImageResponse` `fonts` option in
  `(frontend)/og/route.tsx`.
- `posthog-js` is loaded eagerly. After the marketing site stabilizes,
  consider switching to the lazy-loaded `posthog-js/dist/array.no-external`
  variant to save ~30 KB of initial JS.
- Newsletter / hubspot / marketing-automation pixels — not currently
  wired. Add when sales/marketing team decides on a stack.

## 8. Things already done (for the record)

- ✅ `@proofly-framer/ui` vendored — site no longer depends on the
  Proofly account being active.
- ✅ PostHog SDK installed + provider mounted (idle until env vars set).
- ✅ Vercel Analytics + Speed Insights mounted.
- ✅ `/terms` route created (placeholder copy).
- ✅ Branded `error.tsx` + branded `loading.tsx`.
- ✅ JSON-LD: Organization, WebSite, Article (blog + customer stories),
  BreadcrumbList (blog + customer stories detail).
- ✅ `noindex` on dynamic-route not-found stubs (blog, customer-stories,
  kb, guides slug pages).
- ✅ `noindex` on entire KB, guides, changelog, roadmap sections via
  layout metadata (defense in depth over robots.txt).
- ✅ `id="main-content"` skip-link target on every active route.
- ✅ Apple-touch-icon + favicon.png registered in `metadata.icons`.
- ✅ Hero image alt text fixed (blog + customer story pages).
- ✅ Duplicate hero-loop video files removed (3 MB saved).
- ✅ `llms.txt` cleaned: removed pre-launch sections + stale Brooklyn
  ZIP, added `/terms` link.
- ✅ Stale ZIP TODO comment removed from `UnifiedFooter`.
