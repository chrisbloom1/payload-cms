"use client";

import type { Resource } from "./types";

/**
 * Shared fetcher for the directory dataset. The three client components on
 * the page (closing-soon strip, recommender, directory) all need the same
 * JSON, so we cache a single in-flight promise at module scope. Result: one
 * network request per page load instead of three.
 */

let cached: Promise<Resource[]> | null = null;

export function loadResourcesOnce(): Promise<Resource[]> {
  if (cached) return cached;
  cached = fetch("/data/hardtech-capital.json", {
    cache: "force-cache",
  }).then((r) => {
    if (!r.ok) {
      cached = null; // allow retry on next call
      throw new Error(`HTTP ${r.status}`);
    }
    return r.json() as Promise<Resource[]>;
  });
  return cached;
}
