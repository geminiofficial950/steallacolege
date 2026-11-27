"use client";

import Image, { type ImageLoaderProps, type ImageProps } from "next/image";

// next/image for blog/course images stored in MongoDB.
//  - Cloudinary images are served straight from Cloudinary's CDN, resized to the width the browser
//    needs, in the best format it supports (f_auto = AVIF/WebP) and auto quality (q_auto)
//  - a tiny blurred preview (blurDataURL saved with the image) shows while the real image loads
//  - anything else falls back to the normal Next.js image optimiser

const CLOUDINARY_UPLOAD = /^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.+)$/;

const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const [, base, rest] = src.match(CLOUDINARY_UPLOAD)!;
  return `${base}f_auto,${quality ? `q_${quality}` : "q_auto"},c_limit,w_${width}/${rest}`;
};

const getSrc = (src: ImageProps["src"]) =>
  typeof src === "string" ? src : "src" in src ? src.src : src.default.src;

// Most content images are cards (≈360px wide on desktop, full width on phones). Without `sizes` the
// browser would download the image at its full original width, so default to card sizes.
const CARD_SIZES = "(max-width: 767px) 92vw, (max-width: 1199px) 45vw, 380px";

export default function ContentImage({ src, placeholder, sizes, ...props }: ImageProps) {
  const isCloudinary = CLOUDINARY_UPLOAD.test(getSrc(src));
  const hasBlur = typeof src === "object" && "blurDataURL" in src && Boolean(src.blurDataURL);

  return (
    <Image
      {...props}
      src={src}
      sizes={sizes ?? (props.fill || props.width ? sizes : CARD_SIZES)}
      loader={isCloudinary ? cloudinaryLoader : props.loader}
      placeholder={placeholder ?? (hasBlur ? "blur" : "empty")}
    />
  );
}
