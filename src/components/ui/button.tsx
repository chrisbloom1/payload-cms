/*
  Re-export shim. The implementation lives in `src/lib/bloom-ui/`,
  imported via the `@bloom/ui/*` path alias (tsconfig.json). When the
  web team publishes a real `@bloom/ui` npm package, drop the path
  alias and install the dep — these shims keep all existing
  `@/components/ui/*` import sites working unchanged.
*/
export * from '@bloom/ui/button'
