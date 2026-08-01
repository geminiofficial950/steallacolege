"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { trackEvent, trackPageView } from "@/lib/gtag";

function getTextLabel(element: HTMLElement) {
  return (
    element.getAttribute("aria-label") ||
    element.getAttribute("title") ||
    element.textContent?.replace(/\s+/g, " ").trim() ||
    element.id ||
    element.className ||
    "unknown"
  ).slice(0, 120);
}

function safeParseParams(value: string | undefined) {
  if (!value) return {};

  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
  const url =
    pathname + (searchParams?.toString() ? `?${searchParams}` : "");

  trackPageView(url);
}, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const trackedElement = target.closest<HTMLElement>(
        "[data-ga-event], a, button",
      );

      if (!trackedElement) return;

      const customEventName = trackedElement.dataset.gaEvent;
      const customParams = safeParseParams(trackedElement.dataset.gaParams);

      if (customEventName) {
        trackEvent(customEventName, {
          element_text: getTextLabel(trackedElement),
          page_path: window.location.pathname,
          ...customParams,
        });
        return;
      }

      if (trackedElement instanceof HTMLAnchorElement) {
        const href = trackedElement.href;
        const isExternal = href && trackedElement.origin !== window.location.origin;

        trackEvent(isExternal ? "outbound_click" : "link_click", {
          link_text: getTextLabel(trackedElement),
          link_url: href || trackedElement.getAttribute("href") || "",
          link_type: isExternal ? "external" : "internal",
          page_path: window.location.pathname,
        });
        return;
      }

      if (trackedElement instanceof HTMLButtonElement) {
        trackEvent("button_click", {
          button_text: getTextLabel(trackedElement),
          button_type: trackedElement.type || "button",
          page_path: window.location.pathname,
        });
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLFormElement)) return;

      trackEvent("form_submit", {
        form_id: target.id || "",
        form_name: target.getAttribute("name") || "",
        form_action: target.getAttribute("action") || window.location.pathname,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, []);

  return null;
}
