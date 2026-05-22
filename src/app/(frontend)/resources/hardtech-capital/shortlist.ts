"use client";

/**
 * Shortlist state. Stored in localStorage so it survives reloads but stays
 * private to the browser. No server sync. Founders can add entries, view
 * them on /resources/hardtech-capital/shortlist, and export.
 */

import { useEffect, useState, useSyncExternalStore } from "react";

const KEY = "bloom-hardtech-shortlist-v1";

type Listener = () => void;
const listeners = new Set<Listener>();

function read(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function write(ids: Set<string>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify([...ids]));
  } catch {
    /* quota or disabled storage; non-fatal */
  }
  listeners.forEach((l) => l());
}

function subscribe(l: Listener): () => void {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function getSnapshot(): string {
  // Sync external store needs a primitive snapshot. Serialize the set into
  // a sorted string; useShortlist re-reads on change anyway.
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(KEY) ?? "";
}

const getServerSnapshot = () => "";

export function useShortlistIds(): Set<string> {
  // Re-render whenever localStorage changes.
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // Also listen for cross-tab updates.
  const [, force] = useState(0);
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === KEY) force((x) => x + 1);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);
  return read();
}

export function toggleShortlist(id: string): void {
  const s = read();
  if (s.has(id)) s.delete(id);
  else s.add(id);
  write(s);
}

export function isInShortlist(id: string): boolean {
  return read().has(id);
}

export function clearShortlist(): void {
  write(new Set());
}

export function getShortlist(): string[] {
  return [...read()];
}
