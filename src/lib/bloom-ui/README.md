# `@bloom/ui` — local vendor copy

This directory is the **temporary in-repo home** for the Bloom design system primitives that will eventually be published by the web app team as a private npm package (`@bloom/ui`). Until that package exists, `bloom-merge` consumes the components from here.

## Why it looks like a package

Code in this directory is written as if it were already extracted:

- All `cn()` usage imports from `./cn` (not `@/utilities/cn`) — self-contained.
- Cross-component references use relative imports (e.g. `pagination.tsx` imports from `./button`) — no `@/` aliases.
- No imports reach back into `src/` outside this directory.

The repo-side `tsconfig.json` declares a path alias so consumers import via the **final package name**, not the vendored path:

```jsonc
"paths": {
  "@bloom/ui/*": ["./src/lib/bloom-ui/*"]
}
```

That means every consumer in this repo writes `import { Button } from '@bloom/ui/button'` exactly as they will after the package ships. The swap is mechanical: remove the path entry, add `"@bloom/ui": "^x"` to `package.json`, run `pnpm install`. Zero consumer-side churn.

## Current re-export pattern

`src/components/ui/*.tsx` exists only as one-line re-exports from `@bloom/ui/*`. Existing imports like `import { Button } from '@/components/ui/button'` keep working unchanged. After the real package lands and bakes in for one release cycle, those shims can be deleted and call sites can be rewritten to import directly from `@bloom/ui/*`.

## Components included

| Component | Variants | Notes |
|---|---|---|
| `button` | `default \| destructive \| ghost \| link \| outline \| secondary` × `default \| sm \| lg \| icon \| clear` | `asChild` via Radix Slot |
| `badge` | `default \| secondary \| destructive \| outline` | The Storybook ships ~24 named variants (Success, Verified, In Progress, Build, category-specific, sizes) — this vendor copy only has the shadcn defaults. **Web team to extend when publishing.** |
| `input` | — | Plain shadcn text input |
| `label` | — | Radix Label |
| `card` | `Card` + `CardHeader/Title/Description/Content/Footer` | |
| `checkbox` | — | Radix Checkbox |
| `textarea` | — | Plain shadcn textarea |
| `select` | `Select*` family | Radix Select |
| `tabs` | `Tabs / TabsList / TabsTrigger` | Uncontrolled trigger via `active` prop — Storybook's version is likely Radix-based |
| `accordion` | `Accordion / Item / Trigger / Content` | Radix Accordion |
| `pagination` | `Pagination*` family | Builds on `./button` `buttonVariants` |
| `scroll-area` | — | Plain overflow wrapper — Storybook's version is likely Radix ScrollArea |

## API contract for the web team

When `@bloom/ui` is published, **at minimum it must export the symbols below** so the in-repo shims continue to resolve. Anything extra (more badge variants, Radix-backed Tabs/ScrollArea, FormField molecules, etc.) is welcome.

```
@bloom/ui/button:        Button, buttonVariants, ButtonProps
@bloom/ui/badge:         Badge, badgeVariants, BadgeProps
@bloom/ui/input:         Input, InputProps
@bloom/ui/label:         Label
@bloom/ui/card:          Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
@bloom/ui/checkbox:      Checkbox
@bloom/ui/textarea:      Textarea, TextareaProps
@bloom/ui/select:        Select, SelectGroup, SelectValue, SelectTrigger,
                         SelectContent, SelectLabel, SelectItem, SelectSeparator,
                         SelectScrollUpButton, SelectScrollDownButton
@bloom/ui/tabs:          Tabs, TabsList, TabsTrigger
@bloom/ui/accordion:     Accordion, AccordionItem, AccordionTrigger, AccordionContent
@bloom/ui/pagination:    Pagination, PaginationContent, PaginationItem, PaginationLink,
                         PaginationPrevious, PaginationNext, PaginationEllipsis
@bloom/ui/scroll-area:   ScrollArea
```

### Peer-dep expectations

The vendored implementations rely on these — the published package should declare them as `peerDependencies`:

```
react ^19
@radix-ui/react-slot
@radix-ui/react-label
@radix-ui/react-checkbox
@radix-ui/react-select
@radix-ui/react-accordion
class-variance-authority
clsx
tailwind-merge
lucide-react
```

### Tailwind expectations

Components use the standard shadcn token names (`bg-primary`, `text-foreground`, `border-border`, `ring-ring`, etc.) plus `radius`, `shadow-xs`, and the standard `data-[state=...]` animations. Consumers must define those CSS variables on `:root` and configure Tailwind to map them (see this repo's `src/app/(frontend)/globals.css` and `tailwind.config.mjs`).

If the published package ships its own CSS file or token bundle, document the import order in its README.

## Migration plan (when the package ships)

1. `pnpm add @bloom/ui@<version>`
2. Remove `"@bloom/ui/*": ["./src/lib/bloom-ui/*"]` from `tsconfig.json`
3. `rm -rf src/lib/bloom-ui/`
4. Run dev + e2e — every consumer was already importing from `@bloom/ui/*`, so nothing else needs to change.
5. After one stable release cycle, optionally delete the `src/components/ui/*.tsx` re-export shims and rewrite the ~30 import sites to use `@bloom/ui/*` directly.
