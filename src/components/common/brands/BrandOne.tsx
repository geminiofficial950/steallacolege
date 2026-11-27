"use client";

import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useRef, useState, type CSSProperties } from "react";

// trimmed copy: the original file has more than half its area as empty margin, so the logo read tiny
import brand_1 from "@/assets/img/brands/1-and-all-care-trimmed.png";
// import brand_2 from "@/assets/img/brands/DACNIS.png.webp";
// import brand_2 from "@/assets/img/brands/DACNIS.webp";
import brand_3 from "@/assets/img/brands/glutenfree1.png";
import brand_4 from "@/assets/img/brands/logo.png";
import brand_5 from "@/assets/img/brands/Logotipo_da_JBS_(2023).png";
import brand_6 from "@/assets/img/brands/premcar.png";
import brand_7 from "@/assets/img/brands/unnamed-2.png";
// "powered by Google" (googla.png) was replaced by ITECA and NotebookLM
import brand_12 from "@/assets/img/brands/iteca-member.png";
import brand_13 from "@/assets/img/brands/notebooklm.png";
import brand_14 from "@/assets/img/brands/unidays.png";
import brand_15 from "@/assets/img/brands/rca-australia.png";
import star from "@/assets/img/icons/brand_star.svg";
// Google Workspace for Education (replaces the plain Google Workspace logo, googla.jpg)
import brand_10 from "@/assets/img/brands/google-workspace-education.png";
import brand_11 from "@/assets/img/brands/microsoft.webp";

// very wide logos read too small in the 120px box, so they get a wider one (same height)
const WIDE_LOGOS = new Set<StaticImageData>([brand_10, brand_13]);

const brand_data: StaticImageData[] = [
  brand_1,
  // brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_7,
  brand_4,
  brand_3,
  brand_5,
  brand_12,
  brand_13,
  brand_14,
  brand_15,
  brand_10,
  brand_11,
];

// Compact strip: the logo boxes from globals.css (.brand-area--compact .brand__logo*), desktop / mobile (<=767px).
// The CSS sizes logos with width/height:auto + max-width/max-height, so the browser only knows a logo's size once
// it has loaded, and react-fast-marquee renders nothing on the server. The strip then grew after load and pushed
// the page down (CLS). We compute the exact same size up front (natural size scaled down to fit the box, never up)
// and hand it to the CSS as custom properties, plus the strip's final height, so nothing moves when logos load.
const COMPACT_BOX = {
  normal: { d: [120, 60], m: [72, 36] },
  wide: { d: [260, 72], m: [128, 40] },
  notebooklm: { d: [232, 64], m: [114, 36] },
} as const;
const COMPACT_DIVIDER_H = { d: 28, m: 18 };

const fitInBox = (item: StaticImageData, [maxW, maxH]: readonly [number, number]) => {
  const scale = Math.min(1, maxW / item.width, maxH / item.height);
  return [item.width * scale, item.height * scale] as const;
};

const compactBox = (item: StaticImageData) =>
  item === brand_13 ? COMPACT_BOX.notebooklm : WIDE_LOGOS.has(item) ? COMPACT_BOX.wide : COMPACT_BOX.normal;

const compactLogoVars = (item: StaticImageData): CSSProperties => {
  const box = compactBox(item);
  const [wD, hD] = fitInBox(item, box.d);
  const [wM, hM] = fitInBox(item, box.m);
  return {
    "--logo-w": `${wD}px`,
    "--logo-h": `${hD}px`,
    "--logo-w-m": `${wM}px`,
    "--logo-h-m": `${hM}px`,
  } as CSSProperties;
};

const compactStripHeight = (bp: "d" | "m") =>
  Math.max(COMPACT_DIVIDER_H[bp], ...brand_data.map((item) => fitInBox(item, compactBox(item)[bp])[1]));

const COMPACT_STRIP_VARS = {
  "--brand-strip-h": `${compactStripHeight("d")}px`,
  "--brand-strip-h-m": `${compactStripHeight("m")}px`,
} as CSSProperties;

interface StyleType {
  style?: boolean;
  /** home page: tight strip — equal spacing around each star and less height (logo size unchanged) */
  compact?: boolean;
}

const BrandOne = ({ style, compact = false }: StyleType) => {
  // same space on both sides of every star; the default keeps the original look on other pages
  const brandRef = useRef<HTMLDivElement | null>(null);
  const [marqueePlaying, setMarqueePlaying] = useState(true);

  useEffect(() => {
    const el = brandRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setMarqueePlaying(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={brandRef}
        className={`brand-area ${style ? "brand-area-two" : ""}${compact ? " brand-area--compact" : ""}`}
        style={{
          backgroundColor: "#ffffff",
          padding: compact ? "4px 0" : "14px 0",
          ...(compact ? COMPACT_STRIP_VARS : null),
        }}
      >
        <div className="container-fluid">
          <Marquee
            className="marquee_mode"
            play={marqueePlaying}
            pauseOnHover={false}
            speed={40} // ⭐ smoother loop speed
            gradient={false} // ⭐ makes it continuous loop with no fade
          >
            {brand_data.map((item, i) => (
              <div
                key={i}
                className="brand__item"
                style={{
                  marginRight: compact ? undefined : "100px",
                  display: "flex",
                  alignItems: "center",
                  gap: compact ? undefined : "50px",
                }}
              >
                <Image
                  src={item}
                  alt="brand"
                  className={`brand__logo${WIDE_LOGOS.has(item) ? " brand__logo--wide" : ""}${compact && item === brand_13 ? " brand__logo--notebooklm" : ""}`}
                  width={compact ? item.width : WIDE_LOGOS.has(item) ? 260 : 120}
                  height={compact ? item.height : WIDE_LOGOS.has(item) ? 72 : 60}
                  style={compact ? compactLogoVars(item) : {
                    width: WIDE_LOGOS.has(item) ? "260px" : "120px",
                    height: WIDE_LOGOS.has(item) ? "72px" : "60px",
                    objectFit: "contain",
                  }}
                />
                {/* ⭐ increased size */}

                {compact ? (
                  // home strip: a quiet hairline between logos instead of the blue star
                  <span
                    className="brand__divider"
                    aria-hidden="true"
                    style={{
                      display: "block",
                      width: "1px",
                      height: "28px",
                      background: "rgba(22, 19, 58, 0.14)",
                      flex: "none",
                    }}
                  />
                ) : (
                  <Image
                    src={star}
                    alt=""
                    className="brand__star"
                    width={28}
                    height={28}
                    style={{
                      filter:
                        "invert(35%) sepia(100%) saturate(2000%) hue-rotate(190deg)",
                    }}
                  />
                )}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default BrandOne;
