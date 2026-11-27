"use client"
import { useEffect, useRef, useState } from "react";

// Stella College photos from public/galleryImage (file names contain spaces, so encode them).
// Served through Next's image optimiser (768px WebP/AVIF) instead of the raw ~350KB JPEG.
const local = (n?: number) =>
  `/_next/image?url=${encodeURIComponent(
    `/galleryImage/${encodeURIComponent(`WhatsApp Image 2026-11-13 at 3.54.30 PM${n ? ` (${n})` : ""}.jpeg`)}`,
  )}&w=768&q=75`;

// contain: show the whole photo (no crop); the card's leftover space is filled with a blurred copy
type GalleryMedia =
  | { type: "image"; src: string; contain?: boolean; noZoom?: boolean; alt?: string }
  | { type: "video"; src: string; poster: string }
  // one award per card; framed = a certificate hung in a frame, otherwise a trophy on a small shelf
  // the awards shown together without a card: the big one in the centre, smaller ones either side
  | { type: "awardSet"; main: AwardImage; left: AwardImage[]; right: AwardImage[] };

// width/height = the SVG's intrinsic size (reserves the aspect ratio; CSS still sets the rendered size)
type AwardImage = { src: string; alt: string; width: number; height: number };

const photo = (src: string): GalleryMedia => ({ type: "image", src });

// Cloudinary (cloud "com4tunc", folder stella-college/gallery). Delivery is kept light for visitors:
// photos are compressed and capped at 800px; videos are capped at 640px, low quality H.264 (hardware-decoded
// everywhere, so playback stays smooth), no audio,
// and trimmed to 12s (they loop anyway).
const CLD = "https://res.cloudinary.com/com4tunc";
const CLD_DIR = "stella-college/gallery";
// Responsive variants: swap the w_NNN transform (and h_NNN proportionally, for c_pad posters) in a Cloudinary URL.
// Only res.cloudinary.com URLs with a w_ transform are touched; anything else returns undefined (no srcSet).
const cldAt = (url: string, w: number): string | undefined => {
  const m = /([,/])w_(\d+)(,h_(\d+))?/.exec(url);
  if (!url.startsWith("https://res.cloudinary.com/") || !m) return undefined;
  const from = Number(m[2]);
  const h = m[4] ? `,h_${Math.round((Number(m[4]) * w) / from)}` : "";
  return url.replace(m[0], `${m[1]}w_${w}${h}`);
};
const cldSrcSet = (url: string, small: number, large: number): string | undefined => {
  const a = cldAt(url, small);
  const b = cldAt(url, large);
  return a && b ? `${a} ${small}w, ${b} ${large}w` : undefined;
};
// Widest card is 382 design px: on phones --u = 100vw/880 (~43.4vw), on desktop --u <= 1px (382px). Narrow cards
// (180u) use the same value, so they may fetch slightly more than needed but never look blurry.
const GALLERY_SIZES = "(max-width: 767px) 44vw, 382px";

// contain = false only when the photo already has its slot's exact shape (cover then crops nothing)
const cldPhoto = (id: string, contain = true): GalleryMedia => ({
  type: "image",
  src: `${CLD}/image/upload/f_auto,q_auto:eco,c_limit,w_800/${CLD_DIR}/${id}`,
  contain,
});
// pad: for a clip that isn't 16:9 — fit the whole frame into 16:9 with a blurred fill (no crop)
const cldVideo = (id: string, pad = false): GalleryMedia => {
  const fit = pad ? "c_pad,w_640,h_360,b_blurred:400:15" : "c_limit,w_640";
  // blurred padding only works on video output; the still poster pads with the clip's dominant colour
  const posterFit = pad ? "c_pad,w_640,h_360,b_auto" : "c_limit,w_640";
  return {
    type: "video",
    src: `${CLD}/video/upload/ac_none,du_12,q_auto:low,vc_h264:main,${fit}/${CLD_DIR}/${id}.mp4`,
    poster: `${CLD}/video/upload/so_0,f_auto,q_auto:eco,${posterFit}/${CLD_DIR}/${id}.jpg`,
  };
};

// Stella College awards (SVGs in public/assets/awards): the finalist certificate in the centre, the
// medal and the glass award stacked on the left, the (tallest) golf trophy on the right
const AWARD_DIR = "/assets/awards";
const AWARDS: GalleryMedia = {
  type: "awardSet",
  main: { src: `${AWARD_DIR}/local-business-awards-finalist-certificate-2026.svg`, width: 1600, height: 1132, alt: "Stella College finalist certificate, 2026 Central Melbourne Local Business Awards, Outstanding Professional Services" },
  left: [
    { src: `${AWARD_DIR}/local-business-awards-finalist-2026.svg`, width: 459, height: 657, alt: "Local Business Awards 2026 finalist medal, Central Melbourne" },
    { src: `${AWARD_DIR}/ganpati-festival-recognition-2026.svg`, width: 466, height: 540, alt: "Ganpati Festival Melbourne 2026 recognition, event powered by Stella College" },
  ],
  right: [
    { src: `${AWARD_DIR}/tps-christmas-golf-trophy-2021.svg`, width: 417, height: 582, alt: "Training Practical Solutions Consultancy Christmas Golf Tournament 2021 trophy" },
  ],
};

type GalleryCard = { h: number; media: GalleryMedia };
type GalleryColumn = { offset: number; cards: GalleryCard[] };
// A row is either one wide 16:9 landscape tile across the group, or side-by-side portrait columns
type GalleryRow = { landscape: GalleryMedia; mobileOnly?: boolean } | { columns: GalleryColumn[] };
// spaced: extra side margin, used on the groups next to the center
type GalleryGroup = { offset: number; span: 1 | 2; spaced?: boolean; rows: GalleryRow[] };

// Mix of portrait and 16:9 landscape cards, mirrored left/right.
// Design px: a column is 180 wide; a 2-column group is 382 wide and its landscape card is 16:9 (382 x 215)
const gallery_groups: GalleryGroup[] = [
  {
    offset: 35,
    span: 2,
    rows: [
      { landscape: cldVideo("food-processing") },
      {
        columns: [
          { offset: 0, cards: [{ h: 160, media: photo(local(1)) }] },
          { offset: 0, cards: [{ h: 160, media: { type: "image", src: "https://res.cloudinary.com/com4tunc/image/upload/f_auto,q_auto:eco,c_limit,w_800/v1794820407/stella-college/gallery/ai-fundamentals-card.png", noZoom: true, alt: "Adult learners exploring artificial intelligence together on a laptop" } }] },
        ],
      },
      { landscape: cldVideo("3") },
    ],
  },
  { offset: 70, span: 1, spaced: true, rows: [{ columns: [{ offset: 0, cards: [{ h: 400, media: { type: "image", src: "https://res.cloudinary.com/com4tunc/image/upload/f_auto,q_auto:eco,c_limit,w_800/v1794815946/stella-college/gallery/leisure-health-portrait.png", alt: "Leisure and health activity worker supporting an older woman with watercolor painting" } }] }] }] },
  {
    offset: 0,
    span: 2,
    rows: [
      { landscape: AWARDS },
      { landscape: cldVideo("2") },
      // phones only: older couple (aged care) clip; padded to 16:9 so the whole frame shows
      { landscape: cldVideo("aged-care", true), mobileOnly: true },
    ],
  },
  {
    offset: 70,
    span: 1,
    spaced: true,
    rows: [{ columns: [{ offset: 0, cards: [{ h: 400, media: cldPhoto("aged-care-portrait-v2", false) }] }] }],
  },
  {
    offset: 35,
    span: 2,
    rows: [
      { landscape: cldVideo("cap-video") },
      {
        columns: [
          { offset: 0, cards: [{ h: 160, media: { type: "image", src: "https://res.cloudinary.com/com4tunc/image/upload/f_auto,q_auto:eco,c_limit,w_800/v1794819181/stella-college/gallery/disability-support-card-v3.png", noZoom: true, alt: "Wheelchair user and support worker smiling together in a community garden" } }] },
          { offset: 0, cards: [{ h: 160, media: cldPhoto("first-aid", false) }] },
        ],
      },
      { landscape: cldPhoto("1", false) },
    ],
  },
];

// Distance of each group from the center — used to stagger the reveal outward
const centerDelay = (i: number, count: number) => Math.abs(i - (count - 1) / 2);

const GALLERY_ALT = "Stella College campus life";

// Tagline letters: each one rises out of its line in turn (--i = its place in the whole sequence)
const taglineChars = (word: string, start: number) =>
  word.split("").map((char, i) => (
    <span key={i} className="gallery__char" style={{ "--i": start + i } as React.CSSProperties}>
      {char}
    </span>
  ));

// One tile's photo/video plus a shimmer skeleton that stays until the media has loaded,
// then fades out while the media fades in (styles: .gallery__skeleton / .gallery__fade)
const GalleryMediaView = ({ media, visible }: { media: GalleryMedia; visible: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  const mainRef = useRef<HTMLImageElement>(null);
  const markLoaded = () => setLoaded(true);

  // images that finished loading before React hydrated never fire onLoad, so check once on mount
  useEffect(() => {
    const img = mainRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  const fade = loaded ? " gallery__fade is-loaded" : " gallery__fade";
  let content: React.ReactNode;
  if (media.type === "awardSet") {
    const side = (items: AwardImage[], key: string) => (
      <div className={`gallery__awardset-side gallery__awardset-side--${key}`}>
        {items.map((award) => (
          <img key={award.src} src={award.src} alt={award.alt} width={award.width} height={award.height} loading="lazy" />
        ))}
      </div>
    );
    content = (
      <div className={`gallery__awardset${fade}`}>
        {side(media.left, "left")}
        <img
          ref={mainRef}
          className="gallery__awardset-main"
          src={media.main.src}
          alt={media.main.alt}
          width={media.main.width}
          height={media.main.height}
          loading="lazy"
          onLoad={markLoaded}
        />
        {side(media.right, "right")}
      </div>
    );
  } else if (media.type === "video") {
    // Videos only load once the gallery is on screen; until then the light poster frame shows
    content = visible ? (
      <video className={fade} src={media.src} poster={media.poster} autoPlay muted loop playsInline preload="none" aria-label={GALLERY_ALT} onLoadedData={markLoaded} />
    ) : (
      <img ref={mainRef} className={fade} src={media.poster} srcSet={cldSrcSet(media.poster, 360, 640)} sizes={GALLERY_SIZES} alt={GALLERY_ALT} loading="lazy" onLoad={markLoaded} />
    );
  } else if (media.contain) {
    content = (
      <>
        <img className={`gallery__media-blur${fade}`} src={media.src} srcSet={cldSrcSet(media.src, 400, 800)} sizes={GALLERY_SIZES} alt="" aria-hidden="true" loading="lazy" />
        <img ref={mainRef} className={`gallery__media-contain${fade}`} src={media.src} srcSet={cldSrcSet(media.src, 400, 800)} sizes={GALLERY_SIZES} alt={media.alt || GALLERY_ALT} loading="lazy" onLoad={markLoaded} />
      </>
    );
  } else {
    content = (
      <img ref={mainRef} className={`${media.noZoom ? "gallery__media-no-zoom" : ""}${fade}`} src={media.src} srcSet={cldSrcSet(media.src, 400, 800)} sizes={GALLERY_SIZES} alt={media.alt || GALLERY_ALT} loading="lazy" onLoad={markLoaded} />
    );
  }

  return (
    <>
      {content}
      {media.type !== "awardSet" && (
        <span className={`gallery__skeleton${loaded ? " is-hidden" : ""}`} aria-hidden="true" />
      )}
    </>
  );
};

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  // false until the first visibility check after hydration: before that the tiles stay shown as
  // loading skeletons instead of being hidden for the entrance animation (which needs JS)
  const [ready, setReady] = useState(false);
  // The loop clone is always rendered (hidden by CSS on desktop); only video mounting is gated on phones,
  // so desktop never decodes a second set of videos
  const [isMobile, setIsMobile] = useState(false);
  // phones: the drifting strip pauses while a finger is on it, and carries on when it lifts
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Play the entrance animation once the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // set together with `visible` so on-screen tiles never flash hidden between the two
        setReady(true);
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(isMobile ? el.querySelector(".gallery__wrap") ?? el : el);
    return () => observer.disconnect();
  }, [isMobile]);

  // Mobile-only markup (the loop clone, the phone-only tile) is always in the server HTML and hidden with CSS
  // on desktop, so nothing is inserted after hydration. `isMobile` only gates autoplaying video there:
  // a display:none <video> with autoplay would still load, whereas lazy posters in display:none are not fetched.
  const renderGroups = (groups: GalleryGroup[], clone = false) =>
    groups.map((group, i) => {
      let cardIndex = 0;
      // Per-tile motion: staggered reveal + an individual wiggle (own speed and phase per tile)
      const tileMotion = () => ({
        transitionDelay: `${centerDelay(i, groups.length) * 0.12 + cardIndex++ * 0.1}s`,
      });
      return (
        <div
          key={i}
          className={`gallery__group gallery__group--span${group.span}${group.spaced ? " gallery__group--spaced" : ""}`}
          style={
            {
              marginTop: `calc(${group.offset} * var(--u))`,
              // each wiggling section (left / centre / right) gets its own speed and phase
              "--wiggle-duration": `${3.6 + (i % 3) * 0.6}s`,
              "--wiggle-delay": `${-i * 1.1}s`,
            } as React.CSSProperties
          }
        >
          <div
            className={`gallery__float${group.span === 2 ? (i % 2 ? " gallery__float--down" : " gallery__float--up") : ""}`}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {group.rows.map((row, r) =>
              "landscape" in row ? (
                <div
                  key={r}
                  className={`gallery__card gallery__card--landscape${row.landscape.type === "awardSet" ? " gallery__card--bare" : ""}${row.mobileOnly ? " gallery__card--mobile-only" : ""}`}
                  style={tileMotion()}
                >
                  <GalleryMediaView media={row.landscape} visible={visible && (isMobile || !(clone || row.mobileOnly))} />
                </div>
              ) : (
                <div key={r} className="gallery__row">
                  {row.columns.map((col, c) => (
                    <div
                      key={c}
                      className="gallery__col"
                      style={{ marginTop: `calc(${col.offset} * var(--u))` }}
                    >
                      {col.cards.map((card, j) => (
                        <div
                          key={j}
                          className="gallery__card"
                          style={{ height: `calc(${card.h} * var(--u))`, ...tileMotion() }}
                        >
                          <GalleryMediaView media={card.media} visible={visible && (isMobile || !clone)} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      );
    });

  return (
    <section
      ref={sectionRef}
      className={`gallery__area${visible ? " is-visible" : ""}${ready ? "" : " is-pending"}`}
    >
      <section className="gallery__achievements" aria-labelledby="gallery-achievements-title">
        <h2 id="gallery-achievements-title">Our Achievements</h2>
        <ul>
          {[AWARDS.main, ...AWARDS.right, AWARDS.left[1], AWARDS.left[0]].map((award) => (
            <li key={award.src}>
              <img src={award.src} alt={award.alt} width={award.width} height={award.height} loading="lazy" />
            </li>
          ))}
        </ul>
      </section>

      <div className="container-fluid">
        <div
          className={`gallery__wrap${held ? " is-held" : ""}`}
          onTouchStart={() => setHeld(true)}
          onTouchEnd={() => setHeld(false)}
          onTouchCancel={() => setHeld(false)}
        >
          <div className="gallery__track">
            <div className="gallery__set">{renderGroups(gallery_groups)}</div>
            {/* Clone of the set — always rendered (no layout shift), shown by CSS on mobile only, where the track scrolls in a seamless loop */}
            <div className="gallery__set gallery__set--clone" aria-hidden="true">
              {renderGroups(gallery_groups, true)}
            </div>
          </div>

          <div className="gallery__content">
            {/* Tagline in the empty space under the centre cards; pieces rise in one after another */}
            {/* "Learn" is a pencil outline; a hand-drawn loop carries the eye across; "Create" fills with
                ink as a highlighter swipes under it. Learning is the sketch, creating is the finished work.
                Plays once when the gallery appears; hovering fills "Learn" with ink too */}
            <p className="gallery__tagline">
              <span className="visually-hidden">Learn, then create</span>
              <span className="gallery__word gallery__word--learn" aria-hidden="true">
                <span className="gallery__ink gallery__ink--outline">{taglineChars("Learn", 0)}</span>
                <span className="gallery__ink gallery__ink--solid">Learn</span>
              </span>
              <span className="gallery__link" aria-hidden="true">
                <svg viewBox="0 0 120 40" fill="none">
                  <path
                    className="gallery__link-line"
                    pathLength={1}
                    d="M4 28 C 18 28, 28 12, 42 14 C 56 16, 52 34, 40 30 C 30 27, 46 10, 70 18 C 86 23, 98 22, 110 20"
                  />
                  <path className="gallery__link-head" pathLength={1} d="M99 11 L111 20 L100 29" />
                </svg>
              </span>
              <span className="gallery__word gallery__word--create" aria-hidden="true">
                <span className="gallery__marker" />
                <span className="gallery__ink gallery__ink--outline">{taglineChars("Create", 6)}</span>
                <span className="gallery__ink gallery__ink--solid">Create</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* global: card markup is rendered from renderGroups(), which styled-jsx scoping does not reach;
          every selector is gallery__-prefixed so nothing leaks */}
      <style jsx global>{`
        .gallery__area {
          /* sits close under the banner */
          padding: 20px 0 8px;
          overflow: hidden;
        }
        /* --u = one design px; the whole collage (1634px wide) scales down to fit the screen */
        .gallery__wrap {
          --u: min(1px, calc((100vw - 24px) / 1634));
          position: relative;
          display: flex;
          justify-content: center;
          gap: calc(22 * var(--u));
          margin: 0 auto;
          padding-bottom: 0; /* no heading below the cards any more */
        }
        /* Desktop: track/set wrappers are layout-transparent, so groups sit directly in .gallery__wrap */
        .gallery__track,
        .gallery__set {
          display: contents;
        }
        .gallery__set--clone,
        .gallery__card--mobile-only {
          display: none;
        }
        @keyframes galleryMarquee {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .gallery__group {
          flex: 0 0 auto;
        }
        .gallery__group--span1 {
          width: calc(180 * var(--u));
        }
        .gallery__group--span2 {
          width: calc(382 * var(--u));
        }
        .gallery__float,
        .gallery__col {
          display: flex;
          flex-direction: column;
          gap: calc(22 * var(--u));
        }
        .gallery__row {
          display: flex;
          align-items: flex-start;
          gap: calc(22 * var(--u));
        }
        .gallery__col {
          flex: 0 0 auto;
          width: calc(180 * var(--u));
        }
        .gallery__card--landscape {
          aspect-ratio: 16 / 9;
        }
        .gallery__area.is-visible .gallery__float--up {
          animation: galleryFloatUp 6s ease-in-out 1.4s infinite;
        }
        .gallery__area.is-visible .gallery__float--down {
          animation: galleryFloatDown 6s ease-in-out 1.4s infinite;
        }
        @keyframes galleryFloatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(calc(-12 * var(--u))); }
        }
        @keyframes galleryFloatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(calc(12 * var(--u))); }
        }
        .gallery__group--spaced {
          margin-right: calc(10 * var(--u));
          margin-left: calc(10 * var(--u));
        }
        .gallery__card {
          position: relative;
          width: 100%;
          border-radius: max(8px, calc(22 * var(--u)));
          overflow: hidden;
          flex-shrink: 0;
          background: #eef0f4;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
          opacity: 0;
          transform: translateY(60px) scale(0.92);
          transition: opacity 0.8s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease;
        }
        /* before hydration: show the tiles (with their loading skeleton) instead of hiding them */
        .gallery__area.is-pending .gallery__card {
          opacity: 1;
          transform: none;
          transition: none;
        }
        .gallery__area.is-visible .gallery__card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        /* Wiggle whole sections (left / centre / right 2-column groups), not individual cards.
           Uses the standalone rotate property so it never fights the float/reveal transforms */
        .gallery__area.is-visible .gallery__group--span2 {
          animation: galleryWiggle var(--wiggle-duration, 4s) ease-in-out var(--wiggle-delay, 0s) infinite;
        }
        /* animated sections live on their own compositor layer: rotating/floating them then doesn't
           force the videos and blurred photos inside to be repainted every frame (smooth playback) */
        .gallery__group--span2,
        .gallery__float--up,
        .gallery__float--down,
        .gallery__track {
          will-change: transform;
          backface-visibility: hidden;
        }
        @keyframes galleryWiggle {
          0%, 100% { rotate: 0deg; }
          25% { rotate: -0.8deg; }
          75% { rotate: 0.8deg; }
        }
        .gallery__card:hover {
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }
        /* Loading skeleton: shimmer over the tile until its photo/video has loaded */
        .gallery__skeleton {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(100deg, #e9ebf1 20%, #f6f7fa 40%, #e9ebf1 60%);
          background-size: 300% 100%;
          animation: galleryShimmer 1.4s ease-in-out infinite;
          transition: opacity 0.5s ease;
        }
        .gallery__skeleton.is-hidden {
          opacity: 0;
          animation: none;
        }
        @keyframes galleryShimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
        /* Awards: no card behind them. The certificate sits in the centre, the smaller awards either side */
        .gallery__card.gallery__card--bare,
        .gallery__card.gallery__card--bare:hover {
          background: transparent;
          box-shadow: none;
          overflow: visible;
        }
        .gallery__card .gallery__awardset {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 1fr calc(200 * var(--u)) 1fr;
          align-items: center;
          gap: calc(10 * var(--u));
        }
        .gallery__awardset-side {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: calc(10 * var(--u));
          min-width: 0;
        }
        .gallery__card .gallery__awardset img {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          transform: none;
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.4s ease,
            opacity 0.4s ease;
          filter: drop-shadow(0 calc(3 * var(--u)) calc(5 * var(--u)) rgba(22, 19, 58, 0.14));
        }
        /* two awards stacked on the left share its height; the single one on the right may use all of it */
        .gallery__card .gallery__awardset-side--left img {
          max-height: calc(50% - 5 * var(--u));
        }
        .gallery__card .gallery__awardset-side--right img {
          max-height: 100%;
        }
        .gallery__card .gallery__awardset img.gallery__awardset-main {
          width: 100%;
          max-height: 100%;
          border-radius: max(2px, calc(2 * var(--u)));
          filter: drop-shadow(0 calc(4 * var(--u)) calc(10 * var(--u)) rgba(22, 19, 58, 0.16));
        }
        /* hover is per award: hovering the group does nothing, the award under the pointer grows a little */
        .gallery__card:hover .gallery__awardset img {
          transform: none;
          filter: drop-shadow(0 calc(3 * var(--u)) calc(5 * var(--u)) rgba(22, 19, 58, 0.14));
        }
        .gallery__card:hover .gallery__awardset img.gallery__awardset-main {
          filter: drop-shadow(0 calc(4 * var(--u)) calc(10 * var(--u)) rgba(22, 19, 58, 0.16));
        }
        /* while one award is hovered, the others soften so the eye goes to the zoomed one */
        .gallery__card .gallery__awardset:has(img:hover) img:not(:hover) {
          filter: blur(calc(2.5 * var(--u))) drop-shadow(0 calc(3 * var(--u)) calc(5 * var(--u)) rgba(22, 19, 58, 0.1));
          opacity: 0.55;
        }
        .gallery__card .gallery__awardset img:hover {
          position: relative;
          z-index: 2;
          transform: scale(1.18);
        }
        .gallery__card .gallery__fade {
          opacity: 0;
        }
        .gallery__card .gallery__fade.is-loaded {
          opacity: 1;
        }
        .gallery__card img,
        .gallery__card video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease, filter 0.6s ease, opacity 0.5s ease;
        }
        .gallery__card:hover img,
        .gallery__card:hover video {
          transform: scale(1.08);
          filter: brightness(1.05);
        }
        .gallery__card:hover img.gallery__media-no-zoom {
          transform: none;
        }
        /* Uncropped photos: whole image on top, blurred copy fills the rest of the card */
        .gallery__card .gallery__media-blur {
          position: absolute;
          inset: 0;
          transform: scale(1.35);
          filter: blur(28px) saturate(1.15) brightness(1.04);
        }
        /* the whole photo, with its edges feathered so it melts into the blurred fill
           (no hard line between photo and fill, nothing cropped) */
        .gallery__card .gallery__media-contain {
          /* box = the photo's own shape (centred), so the feathered mask lands on the photo's edges */
          position: absolute;
          inset: 0;
          margin: auto;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 8%, #000 92%, transparent 100%),
            linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image: linear-gradient(to bottom, transparent 0, #000 8%, #000 92%, transparent 100%),
            linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);
          mask-composite: intersect;
        }
        .gallery__card:hover .gallery__media-blur {
          transform: scale(1.4);
          filter: blur(28px) saturate(1.15) brightness(1.04);
        }
        .gallery__card:hover .gallery__media-contain {
          transform: scale(1.03);
        }
        .gallery__content {
          position: absolute;
          left: 50%;
          /* raised so the heading sits just under the centre cards */
          bottom: max(24px, calc(56 * var(--u)));
          transform: translateX(-50%);
          width: calc(760 * var(--u));
          text-align: center;
        }
        /* Tagline sequence (seconds after the gallery becomes visible):
           0.30 Learn outline letters rise, 0.85 loop draws, 1.02 Create outline rises,
           1.55 highlighter swipes, 1.75 ink fills Create, about 2.4 done. One curve throughout */
        .gallery__tagline {
          --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
          --ink: var(--tg-heading-color, #161439);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: max(8px, calc(16 * var(--u)));
          margin: 0;
          font-family: var(--tg-heading-font-family);
          font-size: max(30px, calc(76 * var(--u)));
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.025em;
          color: var(--ink);
          white-space: nowrap;
          cursor: default;
        }
        /* both ink layers share one grid cell, so the solid copy sits exactly on the outline */
        .gallery__word {
          position: relative;
          display: inline-grid;
          isolation: isolate;
          padding: 0.08em 0.06em 0.12em;
        }
        .gallery__ink {
          grid-area: 1 / 1;
          display: inline-flex;
        }
        .gallery__ink--outline {
          color: transparent;
          -webkit-text-stroke: max(1px, calc(1.8 * var(--u))) var(--ink);
        }
        .gallery__ink--solid {
          color: var(--ink);
          /* revealed by a left-to-right wipe */
          clip-path: inset(-20% 100% -20% 0);
          transition: clip-path 0.65s var(--ease-out);
        }
        .gallery__word--create .gallery__ink--solid {
          transition-delay: 1.75s;
        }
        .gallery__char {
          display: inline-block;
          opacity: 0;
          transform: translateY(0.45em) rotate(4deg);
          transition: transform 0.7s var(--ease-out), opacity 0.45s ease;
          transition-delay: calc(0.3s + var(--i) * 0.055s);
        }
        .gallery__word--create .gallery__char {
          transition-delay: calc(0.69s + var(--i) * 0.055s);
        }
        /* highlighter stroke: a slightly tilted, uneven band under the lower half of the word */
        .gallery__marker {
          position: absolute;
          z-index: -1;
          left: -0.12em;
          right: -0.12em;
          bottom: 0.1em;
          height: 0.46em;
          border-radius: 0.06em 0.22em 0.1em 0.26em;
          background: var(--tg-common-color-yellow, #f8bc24);
          transform: rotate(-2.5deg) scaleX(0);
          transform-origin: left center;
          transition: transform 0.55s var(--ease-out) 1.55s;
        }
        .gallery__link {
          display: inline-flex;
          width: max(56px, calc(132 * var(--u)));
          color: var(--tg-theme-primary, #5751e1);
          transition: transform 0.35s var(--ease-out);
        }
        .gallery__link svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }
        .gallery__link-line,
        .gallery__link-head {
          stroke: currentColor;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 0.7s cubic-bezier(0.65, 0, 0.35, 1) 0.85s;
        }
        .gallery__link-head {
          transition-duration: 0.25s;
          transition-delay: 1.5s;
        }
        .gallery__area.is-visible .gallery__char {
          opacity: 1;
          transform: none;
        }
        .gallery__area.is-visible .gallery__word--create .gallery__ink--solid {
          clip-path: inset(-20% -10% -20% -10%);
        }
        .gallery__area.is-visible .gallery__marker {
          transform: rotate(-2.5deg) scaleX(1);
        }
        .gallery__area.is-visible .gallery__link-line,
        .gallery__area.is-visible .gallery__link-head {
          stroke-dashoffset: 0;
        }
        /* hover: "Learn" fills with ink too, and the loop leans toward "Create" */
        .gallery__area.is-visible .gallery__tagline:hover .gallery__word--learn .gallery__ink--solid {
          clip-path: inset(-20% -10% -20% -10%);
          transition-delay: 0s;
        }
        .gallery__tagline:hover .gallery__link {
          transform: translateX(max(3px, calc(6 * var(--u))));
        }
        .gallery__badge,
        .gallery__title {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .gallery__area.is-visible .gallery__badge {
          opacity: 1;
          transform: none;
          transition-delay: 0.5s;
        }
        .gallery__area.is-visible .gallery__title {
          opacity: 1;
          transform: none;
          transition-delay: 0.7s;
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery__skeleton {
            animation: none !important;
          }
          .gallery__card,
          .gallery__char,
          .gallery__link-line,
          .gallery__link-head,
          .gallery__badge,
          .gallery__title {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .gallery__link-line,
          .gallery__link-head {
            stroke-dashoffset: 0 !important;
          }
          .gallery__marker {
            transform: rotate(-2.5deg) !important;
            transition: none !important;
          }
          .gallery__word--create .gallery__ink--solid {
            clip-path: none !important;
            transition: none !important;
          }
          .gallery__float--up,
          .gallery__float--down,
          .gallery__track,
          .gallery__group {
            animation: none !important;
          }
        }
        .gallery__badge {
          display: inline-block;
          padding: max(4px, calc(10 * var(--u))) max(12px, calc(32 * var(--u)));
          border: 1px solid #c9ccd4;
          border-radius: 50px;
          font-size: max(10px, calc(17 * var(--u)));
          color: #1c1a4a;
          background: #fff;
          margin-bottom: max(8px, calc(16 * var(--u)));
        }
        .gallery__title {
          font-size: max(13px, calc(44 * var(--u)));
          font-weight: 700;
          line-height: 1.25;
          margin: 0;
          color: #111;
        }
        .gallery__title span {
          display: block;
          color: #9aa1ad;
        }

        /* Mobile: same collage, scaled down — extra bottom room so the heading clears the center cards */
        .gallery__achievements {
          display: none;
        }

        @media (max-width: 767px) {
          .gallery__card--mobile-only {
            display: block;
          }
          .gallery__set .gallery__card--bare {
            display: none;
          }
          .gallery__achievements {
            display: block;
            padding: 12px 16px 20px;
            text-align: center;
          }
          .gallery__achievements h2 {
            margin: 0 0 16px;
            font-size: 28px;
          }
          /* Layout from the sketch: certificate big at top left with the glass award under it (nudged
             right); on the right the small golf trophy sits on top of the tall medal, which runs down
             past the certificate. li order: certificate, golf, glass, medal */
          .gallery__achievements ul {
            display: grid;
            grid-template-columns: minmax(0, 58fr) minmax(0, 42fr);
            grid-template-areas:
              "cert golf"
              "cert medal"
              "glass medal";
            grid-template-rows: auto 1fr auto;
            align-items: start;
            gap: 8px 12px;
            max-width: 360px;
            margin: 0 auto;
            padding: 0;
            list-style: none;
          }
          .gallery__achievements img {
            display: block;
            height: auto;
            margin: 0 auto;
          }
          .gallery__achievements li:nth-child(1) {
            grid-area: cert;
          }
          .gallery__achievements li:nth-child(1) img {
            width: 100%;
          }
          .gallery__achievements li:nth-child(2) {
            grid-area: golf;
            align-self: end;
          }
          .gallery__achievements li:nth-child(2) img {
            width: 44%;
          }
          .gallery__achievements li:nth-child(3) {
            grid-area: glass;
          }
          .gallery__achievements li:nth-child(3) img {
            width: 50%;
            transform: translateX(14%);
          }
          .gallery__achievements li:nth-child(4) {
            grid-area: medal;
          }
          .gallery__achievements li:nth-child(4) img {
            width: 92%;
          }
          .gallery__area {
            padding: 12px 0 8px;
          }
          /* slightly bigger photos on phones than a plain fit-to-width */
          .gallery__wrap {
            --u: calc(100vw / 880);
            display: block;
            padding-bottom: 0;
          }
          /* Images drift continuously from left to right; the clone set makes the loop seamless
             (each set carries a trailing gap so -50% lands exactly on the clone's start) */
          .gallery__track {
            display: flex;
            width: max-content;
            animation: galleryMarquee 45s linear infinite;
          }
          /* finger down on the gallery: stop where it is; lifting the finger resumes from the same spot */
          .gallery__wrap.is-held .gallery__track {
            animation-play-state: paused;
          }
          .gallery__set {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            gap: calc(12 * var(--u));
            padding-right: calc(12 * var(--u));
          }
          /* phones: no staggered offsets, side margins or floating, and tighter gaps, so the collage
             reads as one dense strip without empty pockets (offsets are inline, hence !important) */
          .gallery__group {
            margin-top: 0 !important;
          }
          .gallery__group--spaced {
            margin-left: 0;
            margin-right: 0;
          }
          .gallery__float {
            gap: calc(44 * var(--u));
          }
          /* centre group (3rd in the set): its two videos spread apart, one high and one low,
             so the middle of the strip stands taller than the cards around it */
          .gallery__set > .gallery__group:nth-child(3) .gallery__float {
            gap: calc(220 * var(--u));
          }
          .gallery__col {
            margin-top: 0 !important;
            gap: calc(12 * var(--u));
          }
          .gallery__row {
            gap: calc(12 * var(--u));
          }
          .gallery__float--up,
          .gallery__float--down,
          .gallery__area.is-visible .gallery__float--up,
          .gallery__area.is-visible .gallery__float--down {
            animation: none;
          }
          /* phones: the collage scrolls sideways, so the tagline sits under it instead of over it */
          .gallery__content {
            position: static;
            transform: none;
            width: auto;
            margin-top: 14px;
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
