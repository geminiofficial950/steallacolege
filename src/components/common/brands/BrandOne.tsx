"use client";

import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useRef, useState } from "react";

import brand_1 from "@/assets/img/brands/1 and all care.png";
// import brand_2 from "@/assets/img/brands/DACNIS.png.webp";
import brand_2 from "@/assets/img/brands/DACNIS.webp";
import brand_3 from "@/assets/img/brands/glutenfree1.png";
import brand_4 from "@/assets/img/brands/logo.png";
import brand_5 from "@/assets/img/brands/Logotipo_da_JBS_(2023).png";
import brand_6 from "@/assets/img/brands/premcar.png";
import brand_7 from "@/assets/img/brands/unnamed-2.png";
import brand_8 from "@/assets/img/brands/googla.png";
import star from "@/assets/img/icons/brand_star.svg";
import brand_9 from "@/assets/img/brands/srs.png";
import brand_10 from "@/assets/img/brands/googla.jpg";
import brand_11 from "@/assets/img/brands/microsoft.webp";

const brand_data: StaticImageData[] = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_7,
  brand_4,
  brand_3,
  brand_5,
  brand_8,
  brand_9,
  brand_10,
  brand_11,
];

interface StyleType {
  style?: boolean;
}

const BrandOne = ({ style }: StyleType) => {
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
        className={`brand-area ${style ? "brand-area-two" : ""}`}
        style={{
          backgroundColor: "#ffffff",
          padding: "14px 0",
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
                  marginRight: "100px", // ⭐ spacing between items
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                }}
              >
                <Image
                  src={item}
                  alt="brand"
                  width={120}
                  height={60}
                  style={{
                    width: "120px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                />
                {/* ⭐ increased size */}

                <Image
                  src={star}
                  alt="star"
                  width={28}
                  height={28}
                  style={{
                    filter:
                      "invert(35%) sepia(100%) saturate(2000%) hue-rotate(190deg)",
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default BrandOne;
