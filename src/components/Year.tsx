"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

// Reads the year in the browser only, so the page stays fully static at build time.
export function Year() {
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span>{year}</span>;
}
