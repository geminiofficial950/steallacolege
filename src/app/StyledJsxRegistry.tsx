"use client";

import { useState, type ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";

// Collects every <style jsx> rendered on the server and puts it into the HTML (Next.js App Router
// recipe). Without it those styles only arrive after the JavaScript loads, so sections like the
// gallery showed up unstyled (huge stacked photos) for the first moments of every page load.
export default function StyledJsxRegistry({ children }: { children: ReactNode }) {
  const [registry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = registry.styles();
    registry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={registry}>{children}</StyleRegistry>;
}
