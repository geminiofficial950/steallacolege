// gtag.ts

"use client";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ||
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  "";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: any[]) => void;
  }
}

// NEW: wait until gtag is ready
function onGtagReady(callback: () => void) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    callback();
  } else {
    const interval = setInterval(() => {
      if (window.gtag) {
        clearInterval(interval);
        callback();
      }
    }, 50);
  }
}

export function trackPageView(url: string, title?: string) {
  onGtagReady(() => {
    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  });
}
function canTrack() {
  return (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    !!GA_MEASUREMENT_ID
  );
}

// ✅ EVENT TRACKING (OK)
export function trackEvent(
  eventName: string,
  params: GtagParams = {}
) {
  if (!canTrack()) return;

  window.gtag?.("event", eventName, params);
}