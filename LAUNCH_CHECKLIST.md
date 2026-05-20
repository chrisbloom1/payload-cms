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

## 8. Lighthouse audit results (dev mode, 2026-05-20)

Audits were run against the local Next.js dev server. **Performance
scores in dev mode are not representative of production** — dev ships
unminified JS/CSS, no compression, no chunk-splitting, and includes
HMR runtime. Expect significant perf improvements on the prod build.

| Route | Form factor | Perf | A11y | BP | SEO |
|---|---|---|---|---|---|
| `/` | mobile | 66 | **100** | 96 | **100** |
| `/brands` | mobile | 43 | 98 | 96 | **100** |

### Real findings (will persist into prod)

- ✅ **Color-contrast fixed** — the BloomPayWidget previously inherited
  `#fe570b` orange (2.95:1) and `#776f8f` muted text (4.36:1) — both
  failed WCAG AA 4.5:1. Tokens were already updated in
  `globals.css` to `#c93f00` / `#5a5474` pre-launch; this audit just
  confirmed the dev cache was stale.
- ✅ **listitem semantic fixed** — `BloomPayWidget` previously used
  `<ul role="radiogroup">` which orphans `<li>` children. Switched to
  `<div role="radiogroup">` with `role="radio"` children. A11y score
  went 93 → 100 on `/`.
- ⚠️ **`/brands` heading-order: h5 follows h1 without h2/h3/h4.** The
  offending h5 is rendered by a Framer-exported widget
  (`framer-hz7ly5 ...`) — likely `Brandsintroanimation` or similar in
  `src/components/proofly/`. **Fix path:** either tweak the heading
  level in the Framer source and re-export through Proofly (we
  vendored the package so the team can't push from Proofly anymore —
  edit the .jsx directly), or wrap the widget in a section with an
  appropriate h2/h3 above it.
- ⚠️ **`/brands` LCP 12.5s, TBT 1,040ms in dev.** The Framer iframes
  on this page (`Brandsintroanimation`, `Animationmap`,
  `Pricingmatrix`, `Mockupterms`) ship significant JS. In production
  the bundle will be ~70% smaller and CDN-cached. Re-audit the prod
  preview deploy before drawing conclusions about real-world perf.

### Items only flagged because of dev mode (ignore)

These all show as failures in dev but disappear in production:

- `unminified-javascript`, `unminified-css`, `unused-javascript`,
  `valid-source-maps`, `legacy-javascript-insight` — production build
  minifies, tree-shakes, and emits source maps.
- `errors-in-console` — only entries are `WebSocket connection to
  'ws://127.0.0.1:3000/_next/webpack-hmr'` failures. That's the dev
  HMR socket; doesn't exist in prod.
- `render-blocking-insight`, `network-dependency-tree-insight`,
  `document-latency-insight` — dev serves uncompressed; prod gzip /
  brotli closes the gap.

### Recommended pre-launch verification

After the next Vercel **Preview** deploy with PostHog env vars in
place:

```bash
# Run prod-mode audits against the deployed preview URL
npx lighthouse https://<your-preview-url>/ \
  --quiet --chrome-flags="--headless=new" \
  --form-factor=mobile --output=html --output-path=lh-home-prod.html
npx lighthouse https://<your-preview-url>/brands \
  --quiet --chrome-flags="--headless=new" \
  --form-factor=mobile --output=html --output-path=lh-brands-prod.html
```

Production targets to aim for at launch: **Performance ≥ 80, A11y
100, Best Practices ≥ 95, SEO 100.** If `/brands` performance is
still under 70 on the prod build, the Framer widgets are the
remaining lever — consider further deferring/lazy-loading them or
replacing additional ones with hand-rolled HTML/CSS (we already did
this for the home hero).

## 9. Things already done (for the record)

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
- ✅ Lighthouse audit run; `BloomPayWidget` semantic + dev-cache
  contrast issues confirmed clear after fix (a11y 93 → 100 on `/`).
