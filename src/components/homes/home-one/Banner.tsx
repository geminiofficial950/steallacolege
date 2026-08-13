"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import BtnArrow from "@/svg/BtnArrow";

import banner_shape_3 from "@/assets/img/banner/banner_shape01.svg";
import banner_vr_person from "@/assets/img/banner/banner_vr_person.png";

const AI_LEARNING_IMAGES = [
  {
    src: "/assets/ai/nurse.png",
    alt: "Nurse learning AI-assisted healthcare skills",
  },
  {
    src: "/assets/ai/student.png",
    alt: "Student building practical AI skills",
  },
  {
    src: "/assets/ai/teacher.png",
    alt: "Teacher integrating AI in the classroom",
  },
  {
    src: "/assets/ai/truck%20driver.png",
    alt: "Truck driver using AI technology on the road",
  },
  {
    src: "/assets/ai/trade.png",
    alt: "Trades professional using AI tools",
  },
] as const;

const AI_IMAGE_WIDTH = 1875;
const AI_IMAGE_HEIGHT = 1250;

const AI_PERKS = [
  { label: "Industry-focused training" },
  { label: "Learn by doing real projects" },
  { label: "Stay ahead in your career" },
  { label: "AI skills for the real world" },
] as const;

const AiCenterGallery = () => (
  <div className="ai-center-slide__gallery">
    {AI_LEARNING_IMAGES.map((img, index) => (
      <Image
        key={img.src}
        src={img.src}
        alt={img.alt}
        width={AI_IMAGE_WIDTH}
        height={AI_IMAGE_HEIGHT}
        sizes="(max-width: 767px) 22vw, 200px"
        className="ai-center-slide__image"
        loading={index < 2 ? "eager" : "lazy"}
        priority={index === 0}
      />
    ))}
  </div>
);

const NEW_BANNER_SLIDES = [
  {
    key: "mental-health",
    titleBefore: "Sentio Framework :",
    titleHighlight: "Mental Health",
    text: "Learn how to recognise support and respond with confidence practical mental health training for workplaces communities and care settings.",
    image: "/assets/bannerImages/mental%20health%20without%20text.png",
    imageWidth: 1125,
    imageHeight: 1000,
    alt: "Mental health support and wellbeing training",
    authors: [
      {
        name: "Sofia Reyes",
        image: "/assets/img/others/testi_author02.png",
      },
      {
        name: "Noah Blake",
        image: "/assets/img/courses/course_author08.png",
      },
    ],
  },
  {
    key: "disability",
    titleBefore: "Get Job Ready for a Career That",
    titleHighlight: "Matters",
    text: "Study nationally recognised courses in Aged Care, Disability, Leisure & Health and gain practical skills for rewarding careers in Australia’s growing care and community sectors.",
    image: "/assets/bannerImages/disability%20withut%20text.png",
    imageWidth: 1125,
    imageHeight: 1000,
    alt: "Disability support and inclusive care training",
    authors: [
      {
        name: "Amina Patel",
        image: "/assets/img/others/testi_author01.png",
      },
      {
        name: "David Cole",
        image: "/assets/img/courses/course_author06.png",
      },
    ],
  },
  {
    key: "ai-learning",
    titleBefore: "From tradies to teachers, nurses and small business owners",
    titleHighlight: "Innovate.",
    text: "learn how to use AI in your everyday work and life. Start with practical AI tools and build your skills all the way to advanced automation and AI agents.",
    image: AI_LEARNING_IMAGES[0].src,
    images: AI_LEARNING_IMAGES,
    imageWidth: AI_IMAGE_WIDTH,
    imageHeight: AI_IMAGE_HEIGHT,
    alt: AI_LEARNING_IMAGES[0].alt,
    authors: [
      {
        name: "Priya Sharma",
        image: "/assets/img/courses/course_author03.png",
      },
      {
        name: "James Chen",
        image: "/assets/img/courses/course_author05.png",
      },
    ],
  },
] as const;

const BANNER_REAL_SLIDE_COUNT = 4 + NEW_BANNER_SLIDES.length;

const VIDEO_EMBED_SRC =
  "https://player.cloudinary.com/embed/?cloud_name=xttgh7x6&public_id=WhatsApp_Video_2026-08-03_at_12.39.06_PM_vjqn5r&player[muted]=true&player[autoplay]=true&player[loop]=true&player[controlslist]=nodownload&player[controlsList]=nodownload";

const BOTTOM_VIDEO_EMBED_SRC =
  "https://player.cloudinary.com/embed/?cloud_name=xttgh7x6&public_id=WhatsApp_Video_2026-08-03_at_12.39.06_PM_2_lfo5x8&player[muted]=true&player[autoplay]=true&player[loop]=true&player[controlslist]=nodownload&player[controlsList]=nodownload";

const BANNER_AUTOPLAY_DELAY_MS = 3000;
const BANNER_COUNTDOWN_START = BANNER_AUTOPLAY_DELAY_MS / 1000;
const BANNER_TRANSITION_SPEED_MS = 800;

const blockVideoActions = (e: React.SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

const BannerVideoFrame: React.FC<{ title: string; src?: string }> = ({
  title,
  src = VIDEO_EMBED_SRC,
}) => {
  const { isActive } = useSwiperSlide();

  return (
    <div
      className="banner-video-card__frame"
      onContextMenu={blockVideoActions}
      onDragStart={blockVideoActions}
    >
      {isActive ? (
        <iframe
          src={src}
          title={title}
          width={640}
          height={360}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          style={{ pointerEvents: "none" }}
          tabIndex={-1}
        />
      ) : null}
      <div
        className="banner-video-card__shield"
        onContextMenu={blockVideoActions}
        onDragStart={blockVideoActions}
        aria-hidden="true"
      />
    </div>
  );
};

type HeroStyleSlideProps = {
  slideKey: string;
  titleBefore: string;
  titleHighlight: string;
  text: string;
  image: string;
  images?: readonly { src: string; alt: string }[];
  imageWidth: number;
  imageHeight: number;
  alt: string;
  authors: readonly { name: string; image: string }[];
  onEnquire: () => void;
};

const HeroStyleSlide: React.FC<HeroStyleSlideProps> = ({
  slideKey,
  titleBefore,
  titleHighlight,
  text,
  image,
  images,
  imageWidth,
  imageHeight,
  alt,
  authors,
  onEnquire,
}) => {
  const categoryHref =
    slideKey === "mental-health"
      ? "/courses?category_id=PSODFCSD"
      : slideKey === "disability"
        ? "/courses?category_id=CSAGEING,CSLEISURE,CSFOOD,CSFIRSTAID"
        : null;

  if (slideKey === "ai-learning") {
    return (
      <div className="banner-slide ai-center-slide">
        <div className="ai-center-slide__copy">
          <span className="ai-center-slide__kicker">
            Artificial Intelligence (AI) for everyone
          </span>
          <h3>
            <span className="ai-center-slide__hook">
              from Tradies to Teachers
            </span>
            <span className="ai-center-slide__subline">
              nurses and small business owners
            </span>
          </h3>
          <p>{text}</p>
          <Link
            href="/courses?category_id=CSTECHNOLOGY"
            className="ai-center-slide__cta"
          >
            Explore AI training <BtnArrow />
          </Link>
        </div>

        <ul className="ai-center-slide__perks">
          {AI_PERKS.map(({ label }) => (
            <li key={label}>
              <span className="ai-center-slide__perk-icon" aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="ai-center-slide__visual">
          <span
            className="ai-center-slide__spark ai-center-slide__spark--one"
            aria-hidden="true"
          />
          <span
            className="ai-center-slide__spark ai-center-slide__spark--two"
            aria-hidden="true"
          />

          <AiCenterGallery />
        </div>
      </div>
    );
  }

  return (
    <div className={`banner-slide creative-slide creative-slide--${slideKey}`}>
      <span className="creative-slide__orb creative-slide__orb--one" />
      <span className="creative-slide__orb creative-slide__orb--two" />
      <span className="creative-slide__grid" aria-hidden="true" />

      <div className="creative-slide__copy">
        <h3 className="creative-slide__title">
          {titleBefore} <span>{titleHighlight}</span>
        </h3>
        <p>{text}</p>
        <div className="creative-slide__actions">
          {categoryHref ? (
            <Link
              href={categoryHref}
              className="creative-slide__cta"
            >
              Explore training <BtnArrow />
            </Link>
          ) : (
            <button
              type="button"
              className="creative-slide__cta"
              onClick={onEnquire}
            >
              Explore training <BtnArrow />
            </button>
          )}
        </div>
      </div>

      <div className="creative-slide__visual">
        <div className="creative-slide__image-card">
          <Image
            src={image}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            sizes="(max-width: 991px) 92vw, 52vw"
            className="creative-slide__image"
            loading="lazy"
          />
        </div>
        {slideKey === "disability" ? (
          <>
            <span className="creative-slide__float-card creative-slide__float-card--top">
              Person-centred
            </span>
            <span className="creative-slide__float-card creative-slide__float-card--mid creative-slide__float-card--main">
              NDIS
            </span>
            <span className="creative-slide__float-card creative-slide__float-card--bottom">
              Aged care
            </span>
            <span className="creative-slide__float-card creative-slide__float-card--leisure">
              Leisure
            </span>
            <span className="creative-slide__float-card creative-slide__float-card--health">
              Health
            </span>
          </>
        ) : (
          <>
            <span className="creative-slide__float-card creative-slide__float-card--top">
              {slideKey === "ai-learning"
                ? "AI + Human insight"
                : "Build confidence"}
            </span>
            <span className="creative-slide__float-card creative-slide__float-card--bottom">
              {slideKey === "ai-learning"
                ? "Live projects"
                : "Practical support"}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

const GOOGLE_WORKSPACE_ICONS = [
  { src: "/assets/google-workspace-icons/sheets.svg", alt: "Google Sheets" },
  { src: "/assets/google-workspace-icons/drive.svg", alt: "Google Drive" },
  { src: "/assets/google-workspace-icons/docs.svg", alt: "Google Docs" },
  {
    src: "/assets/google-workspace-icons/calendar.svg",
    alt: "Google Calendar",
  },
  { src: "/assets/google-workspace-icons/slides.svg", alt: "Google Slides" },
  { src: "/assets/google-workspace-icons/meet.svg", alt: "Google Meet" },
] as const;

const GoogleProgramSlide = () => (
  <div className="banner-slide google-program-slide">
    <div className="google-program-slide__grid">
      <div className="google-program-slide__content">
        <p
          className="google-program-slide__eyebrow"
          aria-label="Google Program"
        >
          <span
            className="google-program-slide__brand-google"
            aria-hidden="true"
          >
            <span>G</span>
            <span>o</span>
            <span>o</span>
            <span>g</span>
            <span>l</span>
            <span>e</span>
          </span>
          <span className="google-program-slide__brand-program">Program</span>
        </p>

        <h3 className="google-program-slide__title">
          A flexible and secure{" "}
          <span className="google-program-slide__highlight">
            foundation for learners
            <span className="google-program-slide__verified" aria-hidden="true">
              ✓
            </span>
          </span>
        </h3>

        <p className="google-program-slide__desc">
          <strong>Starting from 1st September.</strong> A suite of secure and
          easy-to-use tools, with AI-driven features to create more personalized
          and engaging learning experiences provided at no cost.
        </p>

        <div className="google-program-slide__tools">
          <div
            className="google-program-slide__icons"
            aria-label="Google Workspace tools"
          >
            {GOOGLE_WORKSPACE_ICONS.map((icon) => (
              <span key={icon.alt}>
                <Image src={icon.src} alt={icon.alt} width={48} height={48} />
              </span>
            ))}
          </div>
          <p className="google-program-slide__coming-soon">Coming Soon</p>
        </div>
      </div>

      <div className="google-program-slide__visual">
        <div
          className="google-program-slide__arch google-program-slide__arch--shadow"
          aria-hidden="true"
        />
        <div className="google-program-slide__arch google-program-slide__arch--photo">
          <Image
            src="/googleprogram.png"
            alt="Student with learning materials"
            width={1875}
            height={1250}
            sizes="(max-width: 991px) 90vw, 42vw"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
);

const EDUCATE_EXCEL_PEERS = [
  {
    name: "Roberta Fox",
    image: "/assets/img/others/testi_author02.png",
  },
  {
    name: "Michel Jones",
    image: "/assets/img/others/testi_author01.png",
  },
] as const;

const EducateExcelSlide: React.FC<{ onEnquire: () => void }> = ({
  onEnquire,
}) => (
  <div className="banner-slide educate-excel-slide">
    <div className="educate-excel-slide__grid">
      <div className="educate-excel-slide__copy">
        <h3 className="educate-excel-slide__title">
          Educate. Evaluate. Excel.
        </h3>

        <p className="educate-excel-slide__desc">
          Trusted by thousands of individuals and businesses for practical,
          industry relevant learning from micro learning, short online courses
          to nationally recognised programs.
        </p>

        <button
          type="button"
          className="educate-excel-slide__cta"
          onClick={onEnquire}
        >
          Enquire Now <BtnArrow />
        </button>
      </div>

      <div className="educate-excel-slide__visual">
        <span className="educate-excel-slide__x-pattern" aria-hidden="true" />

        <svg
          className="educate-excel-slide__blue-arrow"
          viewBox="0 0 220 260"
          aria-hidden="true"
        >
          <path
            className="educate-excel-slide__blue-arrow-shadow"
            d="M48 238 L168 78 L198 98 L78 258 Z"
          />
          <path
            className="educate-excel-slide__blue-arrow-body"
            d="M28 220 L148 60 L188 88 L68 248 Z"
          />
          <path
            className="educate-excel-slide__blue-arrow-head"
            d="M118 28 L208 78 L168 118 L148 60 Z"
          />
        </svg>

        <svg
          className="educate-excel-slide__yellow-arrow"
          viewBox="0 0 160 90"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 72 C42 58, 58 28, 92 24 C118 21, 132 34, 148 18"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M132 8 L152 16 L138 32"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="educate-excel-slide__peers" aria-label="Learners">
          {EDUCATE_EXCEL_PEERS.map((peer) => (
            <div key={peer.name} className="educate-excel-slide__peer">
              <Image
                src={peer.image}
                alt=""
                width={36}
                height={36}
                className="educate-excel-slide__peer-avatar"
              />
              <span>{peer.name}</span>
            </div>
          ))}
        </div>

        <div className="educate-excel-slide__photo">
          <Image
            src="/banner_img.webp"
            alt="Student learning on a laptop"
            width={419}
            height={460}
            sizes="(max-width: 991px) 78vw, 38vw"
            className="educate-excel-slide__image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
);

const COLLEGE_SORTED_ZONES = [
  {
    key: "left",
    label: "Animate left student",
    x: 0,
    w: 636,
    src: "/assets/bannerImages/college-sorted-v3/zone-left.mp4",
    startAt: 0.28,
  },
  {
    key: "center",
    label: "Animate center student",
    x: 636,
    w: 616,
    src: "/assets/bannerImages/college-sorted-v3/zone-center.mp4",
    startAt: 0.8,
  },
  {
    key: "right",
    label: "Animate right student",
    x: 1252,
    w: 668,
    src: "/assets/bannerImages/college-sorted-v3/zone-right.mp4",
    startAt: 0.28,
  },
] as const;

const STUDENT_BENEFIT_LOGOS = Array.from({ length: 7 }, (_, index) => ({
  src: `/logo${index + 1}.webp`,
  alt: `Student benefit logo ${index + 1}`,
}));

const MOBILE_STUDENT_BENEFIT_LOGOS = [8, 9].map((logoNumber) => ({
  src: `/logo${logoNumber}.webp`,
  alt: `Student benefit logo ${logoNumber}`,
}));

type CollegeSortedZoneKey = (typeof COLLEGE_SORTED_ZONES)[number]["key"];

const COLLEGE_SORTED_ZONE_KEYS = COLLEGE_SORTED_ZONES.map((z) => z.key);
const COLLEGE_SORTED_ZONE_STARTS = COLLEGE_SORTED_ZONES.reduce(
  (starts, zone) => {
    starts[zone.key] = "startAt" in zone ? zone.startAt : 0;
    return starts;
  },
  {} as Record<CollegeSortedZoneKey, number>,
);

/** Start each next character almost immediately so the bucket animation feels direct. */
const COLLEGE_SORTED_STAGGER_MS = 120;
const COLLEGE_SORTED_RESTART_MS = 1200;

type ZonePlayState = "idle" | "playing" | "held";

const CollegeSortedSlide = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const baseImgRef = useRef<HTMLImageElement>(null);
  const videoRefs = useRef<
    Partial<Record<CollegeSortedZoneKey, HTMLVideoElement | null>>
  >({});
  const zoneStateRef = useRef<Record<CollegeSortedZoneKey, ZonePlayState>>({
    left: "idle",
    center: "idle",
    right: "idle",
  });
  const rafRef = useRef<number | null>(null);
  const staggerTimersRef = useRef<number[]>([]);
  const restartTimerRef = useRef<number | null>(null);
  const userControlRef = useRef(false);
  const isActiveRef = useRef(false);
  const [activeZone, setActiveZone] = useState<CollegeSortedZoneKey | null>(
    null,
  );
  const { isActive } = useSwiperSlide();
  const swiper = useSwiper();

  isActiveRef.current = isActive;

  const clearStaggerTimers = useCallback(() => {
    staggerTimersRef.current.forEach((id) => window.clearTimeout(id));
    staggerTimersRef.current = [];
    if (restartTimerRef.current != null) {
      window.clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
    }
  }, []);

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const base = baseImgRef.current;
    if (!canvas || !base || !base.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 1920;
    const H = 1080;
    if (canvas.width !== W) canvas.width = W;
    if (canvas.height !== H) canvas.height = H;

    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(base, 0, 0, W, H);

    for (const zone of COLLEGE_SORTED_ZONES) {
      const state = zoneStateRef.current[zone.key];
      if (state === "idle") continue;
      const video = videoRefs.current[zone.key];
      if (!video || video.readyState < 2) continue;
      ctx.drawImage(video, zone.x, 0, zone.w, H, zone.x, 0, zone.w, H);
    }
  }, []);

  const stopLoop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) return;
    const tick = () => {
      drawFrame();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [drawFrame]);

  const resetAllZones = useCallback(() => {
    for (const key of COLLEGE_SORTED_ZONE_KEYS) {
      zoneStateRef.current[key] = "idle";
      const video = videoRefs.current[key];
      if (!video) continue;
      video.pause();
      video.loop = false;
      try {
        video.currentTime = COLLEGE_SORTED_ZONE_STARTS[key];
      } catch {
        /* ignore */
      }
    }
    setActiveZone(null);
    drawFrame();
  }, [drawFrame]);

  const pauseToBase = useCallback(() => {
    clearStaggerTimers();
    stopLoop();
    resetAllZones();
  }, [clearStaggerTimers, resetAllZones, stopLoop]);

  const playZone = useCallback(
    (zoneKey: CollegeSortedZoneKey, opts?: { loop?: boolean }) => {
      const loop = opts?.loop ?? false;
      const video = videoRefs.current[zoneKey];
      if (!video) return;

      setActiveZone(zoneKey);
      swiper?.autoplay?.stop();
      video.muted = true;
      video.loop = loop;

      const playNow = () => {
        const startAt = COLLEGE_SORTED_ZONE_STARTS[zoneKey];
        const startPlayback = () => {
          zoneStateRef.current[zoneKey] = "playing";
          void video.play().catch(() => undefined);
          startLoop();
        };

        zoneStateRef.current[zoneKey] = "idle";
        drawFrame();

        try {
          if (Math.abs(video.currentTime - startAt) > 0.04) {
            video.addEventListener("seeked", startPlayback, { once: true });
            video.currentTime = startAt;
            return;
          }
        } catch {
          /* ignore */
        }
        startPlayback();
      };

      if (video.readyState >= 2) playNow();
      else {
        video.load();
        video.addEventListener("loadeddata", playNow, { once: true });
      }
    },
    [drawFrame, startLoop, swiper],
  );

  const playZoneRef = useRef(playZone);
  playZoneRef.current = playZone;
  const swiperInstanceRef = useRef(swiper);
  swiperInstanceRef.current = swiper;

  const startAutoCycle = useCallback(() => {
    if (!isActiveRef.current || userControlRef.current) return;
    clearStaggerTimers();
    resetAllZones();
    swiper?.autoplay?.stop();

    const delays: Record<CollegeSortedZoneKey, number> = {
      left: 0,
      center: COLLEGE_SORTED_STAGGER_MS,
      right: COLLEGE_SORTED_STAGGER_MS * 2,
    };

    for (const key of COLLEGE_SORTED_ZONE_KEYS) {
      const id = window.setTimeout(() => {
        if (!isActiveRef.current || userControlRef.current) return;
        playZoneRef.current(key, { loop: false });
      }, delays[key]);
      staggerTimersRef.current.push(id);
    }
  }, [clearStaggerTimers, resetAllZones, swiper]);

  const releaseUserControl = useCallback(() => {
    userControlRef.current = false;
    if (isActiveRef.current) startAutoCycle();
    else {
      pauseToBase();
      swiper?.autoplay?.start();
    }
  }, [pauseToBase, startAutoCycle, swiper]);

  const takeUserControl = useCallback(
    (zoneKey: CollegeSortedZoneKey) => {
      userControlRef.current = true;
      clearStaggerTimers();

      // Hover should only draw the selected character; the other zones stay on
      // the base image so their video backplates do not show.
      for (const key of COLLEGE_SORTED_ZONE_KEYS) {
        if (key === zoneKey) continue;
        const video = videoRefs.current[key];
        if (!video) continue;
        video.pause();
        video.loop = false;
        zoneStateRef.current[key] = "idle";
        try {
          video.currentTime = COLLEGE_SORTED_ZONE_STARTS[key];
        } catch {
          /* ignore */
        }
      }

      drawFrame();
      playZone(zoneKey, { loop: true });
    },
    [clearStaggerTimers, drawFrame, playZone],
  );

  useEffect(() => {
    const base = baseImgRef.current;

    const onBase = () => drawFrame();
    if (base?.complete) onBase();
    else base?.addEventListener("load", onBase, { once: true });

    const onEnded = (zoneKey: CollegeSortedZoneKey) => () => {
      if (userControlRef.current) return;
      if (zoneStateRef.current[zoneKey] !== "playing") return;

      // Keep the filled basket visible while later characters catch up
      zoneStateRef.current[zoneKey] = "held";
      const video = videoRefs.current[zoneKey];
      if (video) {
        try {
          if (video.duration && Number.isFinite(video.duration)) {
            video.currentTime = Math.max(0, video.duration - 0.05);
          }
        } catch {
          /* ignore */
        }
        video.pause();
      }
      drawFrame();

      const allHeld = COLLEGE_SORTED_ZONE_KEYS.every(
        (key) => zoneStateRef.current[key] === "held",
      );

      // All three videos done → advance like other slides' autoplay
      if (isActiveRef.current && !userControlRef.current && allHeld) {
        restartTimerRef.current = window.setTimeout(() => {
          if (!isActiveRef.current || userControlRef.current) return;
          const s = swiperInstanceRef.current;
          s?.slideNext();
          s?.autoplay?.start();
        }, COLLEGE_SORTED_RESTART_MS);
      }
    };

    const endedHandlers = COLLEGE_SORTED_ZONE_KEYS.map((key) => {
      const video = videoRefs.current[key];
      const handler = onEnded(key);
      if (video) {
        video.muted = true;
        video.preload = "auto";
        video.load();
        video.addEventListener("ended", handler);
        // Warm decode so the first stagger is snappy
        const warm = () => {
          const p = video.play();
          if (p) {
            void p
              .then(() => {
                video.pause();
                video.currentTime = COLLEGE_SORTED_ZONE_STARTS[key];
              })
              .catch(() => undefined);
          }
        };
        if (video.readyState >= 2) warm();
        else video.addEventListener("loadeddata", warm, { once: true });
      }
      return { video, handler };
    });

    return () => {
      stopLoop();
      clearStaggerTimers();
      endedHandlers.forEach(({ video, handler }) => {
        video?.removeEventListener("ended", handler);
      });
    };
  }, [clearStaggerTimers, drawFrame, stopLoop]);

  useEffect(() => {
    if (isActive) {
      userControlRef.current = false;
      startAutoCycle();
      return () => {
        pauseToBase();
      };
    }

    userControlRef.current = false;
    pauseToBase();
  }, [isActive, pauseToBase, startAutoCycle]);

  return (
    <div
      className={`banner-slide college-sorted-slide${
        activeZone ? ` is-playing is-${activeZone}` : ""
      }`}
    >
      <div className="college-sorted-slide__copy">
        <h3>Students Benefits</h3>
        <p>
          Stella College is partnered with UNiDAYS to give students discount
          over a range of products
        </p>
        <div className="college-sorted-slide__logos" aria-label="Student benefit partners">
          {STUDENT_BENEFIT_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={96}
              height={42}
              className="college-sorted-slide__logo"
              loading="lazy"
            />
          ))}
          {MOBILE_STUDENT_BENEFIT_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={96}
              height={42}
              className="college-sorted-slide__logo college-sorted-slide__logo--mobile-only"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className="college-sorted-slide__stage">
        <img
          ref={baseImgRef}
          className="college-sorted-slide__asset"
          src="/assets/bannerImages/college-sorted-v3/complete.jpg"
          alt=""
          aria-hidden="true"
          draggable={false}
        />
        {COLLEGE_SORTED_ZONES.map((zone) => (
          <video
            key={zone.key}
            ref={(el) => {
              videoRefs.current[zone.key] = el;
            }}
            className="college-sorted-slide__asset"
            src={zone.src}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        ))}
        <canvas
          ref={canvasRef}
          className="college-sorted-slide__frame college-sorted-slide__frame--canvas"
          width={1920}
          height={1080}
          aria-hidden="true"
        />

        <div
          className="college-sorted-slide__hotspots"
          onMouseLeave={releaseUserControl}
        >
          {COLLEGE_SORTED_ZONES.map((zone) => (
            <button
              key={zone.key}
              type="button"
              className={`college-sorted-slide__hotspot college-sorted-slide__hotspot--${zone.key}${
                activeZone === zone.key ? " is-active" : ""
              }`}
              aria-label={zone.label}
              onMouseEnter={() => takeUserControl(zone.key)}
              onFocus={() => takeUserControl(zone.key)}
              onBlur={releaseUserControl}
              onClick={() =>
                activeZone === zone.key && userControlRef.current
                  ? releaseUserControl()
                  : takeUserControl(zone.key)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Banner: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [bannerOffscreen, setBannerOffscreen] = useState(false);
  const [bannerCountdown, setBannerCountdown] = useState(BANNER_COUNTDOWN_START);
  const [bannerCountdownVersion, setBannerCountdownVersion] = useState(0);
  const bannerRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const resetBannerCountdown = useCallback(() => {
    setBannerCountdown(BANNER_COUNTDOWN_START);
    setBannerCountdownVersion((version) => version + 1);
  }, []);

  const advanceBannerSlide = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;

    const currentIndex = swiper.activeIndex;
    swiper.allowSlideNext = true;
    swiper.update();

    const nextRealIndex = (swiper.realIndex + 1) % BANNER_REAL_SLIDE_COUNT;

    if (swiper.params.loop) {
      swiper.slideToLoop(nextRealIndex, BANNER_TRANSITION_SPEED_MS, true);
    } else {
      swiper.slideNext(BANNER_TRANSITION_SPEED_MS, true);
    }

    window.setTimeout(() => {
      if (!swiper.destroyed && swiper.activeIndex === currentIndex) {
        if (swiper.params.loop) {
          swiper.slideToLoop(nextRealIndex, BANNER_TRANSITION_SPEED_MS, true);
          return;
        }

        const nextIndex = (currentIndex + 1) % swiper.slides.length;
        swiper.slideTo(nextIndex, BANNER_TRANSITION_SPEED_MS, true);
      }
    }, 80);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 991.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const countdownTimer = window.setTimeout(() => {
      if (bannerCountdown <= 1) {
        advanceBannerSlide();
        return;
      }

      setBannerCountdown((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(countdownTimer);
  }, [advanceBannerSlide, bannerCountdown, bannerCountdownVersion]);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const offscreen = !entry.isIntersecting;
        setBannerOffscreen(offscreen);

        const swiper = swiperRef.current;
        if (!swiper?.autoplay) return;

        if (offscreen) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.start();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const syncSlideSize = useCallback((swiper: SwiperType) => {
    if (!swiper?.el || !swiper.wrapperEl) return;

    const mobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 991.98px)").matches;

    if (mobile) {
      swiper.params.autoHeight = true;

      // Measure natural content height of the active slide
      swiper.slides.forEach((slide) => {
        const el = slide as HTMLElement;
        el.style.height = "auto";
        el.style.minHeight = "0";
        el.style.overflow = "";
      });

      const active = swiper.slides[swiper.activeIndex] as
        | HTMLElement
        | undefined;
      if (!active) return;

      const content = active.querySelector(
        ".banner-slide",
      ) as HTMLElement | null;
      const measureEl = content || active;
      measureEl.style.height = "auto";

      const contentHeight = Math.ceil(
        measureEl.getBoundingClientRect().height || measureEl.offsetHeight,
      );
      if (contentHeight <= 0) return;

      // Shrink the track to the active banner only — page below follows
      active.style.height = `${contentHeight}px`;
      swiper.wrapperEl.style.height = `${contentHeight}px`;
      swiper.el.style.height = "";
      swiper.updateAutoHeight?.(0);
      return;
    }

    // Desktop: restore any mobile collapse, then lock all slides to first slide height
    swiper.params.autoHeight = false;
    swiper.el.style.height = "";
    swiper.wrapperEl.style.height = "";
    swiper.slides.forEach((slide) => {
      const el = slide as HTMLElement;
      el.style.height = "";
      el.style.minHeight = "";
      el.style.overflow = "";
    });

    const firstSlide = swiper.slides[0] as HTMLElement | undefined;
    if (!firstSlide) return;
    const firstBanner = firstSlide.querySelector(
      ".banner-slide",
    ) as HTMLElement | null;
    const measureEl = firstBanner || firstSlide;
    const height = Math.ceil(measureEl.getBoundingClientRect().height);
    if (height <= 0) return;

    swiper.el.style.height = `${height}px`;
    swiper.slides.forEach((slide) => {
      (slide as HTMLElement).style.height = `${height}px`;
    });
  }, []);

  useEffect(() => {
    let timer = 0;
    const debouncedResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const swiper = swiperRef.current;
        if (swiper) syncSlideSize(swiper);
      }, 150);
    };

    window.addEventListener("resize", debouncedResize, { passive: true });
    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.clearTimeout(timer);
    };
  }, [syncSlideSize]);

  useEffect(() => {
    if (!isMobile) return;

    const onLoad = () => {
      const swiperEl = document.querySelector(".banner-swiper") as
        | (HTMLElement & { swiper?: SwiperType })
        | null;
      const swiper = swiperEl && "swiper" in swiperEl ? swiperEl.swiper : null;
      if (swiper) syncSlideSize(swiper);
    };

    window.addEventListener("load", onLoad);
    // Images inside slides finishing later
    const imgs = document.querySelectorAll(".banner-swiper img");
    imgs.forEach((img) => {
      if (!(img as HTMLImageElement).complete) {
        img.addEventListener("load", onLoad);
      }
    });

    return () => {
      window.removeEventListener("load", onLoad);
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
    };
  }, [isMobile, syncSlideSize]);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setError(null);
    setFormData({ user_name: "", user_email: "", user_phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unexpected error occurred.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        ref={bannerRef}
        className={`banner-area banner-bg tg-motion-effects position-relative overflow-hidden${
          bannerOffscreen ? " banner-area--offscreen" : ""
        }`}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" />

        <div className="container">
          <Swiper
            modules={[Autoplay, Pagination]}
            className="banner-swiper"
            slidesPerView={1}
            spaceBetween={0}
            loop
            speed={800}
            autoHeight={isMobile}
            watchOverflow
            allowTouchMove
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              resetBannerCountdown();
              requestAnimationFrame(() => syncSlideSize(swiper));
              window.setTimeout(() => syncSlideSize(swiper), 300);
              window.setTimeout(() => syncSlideSize(swiper), 800);
            }}
            onSlideChange={(swiper) => {
              resetBannerCountdown();
              if (!isMobile) return;
              requestAnimationFrame(() => syncSlideSize(swiper));
            }}
            onSlideChangeTransitionEnd={(swiper) => {
              if (isMobile) syncSlideSize(swiper);
            }}
          >
            {/* ── Slide 1: Educate. Evaluate. Excel. ── */}
            <SwiperSlide>
              <EducateExcelSlide onEnquire={handleOpen} />
            </SwiperSlide>

            {/* ── Slide 2: Zigzag videos + Coming Soon ── */}
            <SwiperSlide>
              <div className="banner-slide banner-slide--video">
                <div className="banner-video-zigzag">
                  <div className="banner-video-zigzag__person">
                    <Image
                      src={banner_vr_person}
                      alt="Learner wearing VR headset"
                      width={280}
                      height={280}
                      className="banner-video-zigzag__person-img"
                      loading="lazy"
                    />
                    <span
                      className="banner-video-zigzag__person-ring"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Top: video left | Coming Soon right */}
                  <div className="row g-3 g-lg-4 align-items-start banner-video-zigzag__row">
                    <div className="col-lg-6">
                      <div
                        className="banner-video-card"
                        onContextMenu={blockVideoActions}
                      >
                        <BannerVideoFrame title="Stella College upcoming video one" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner-video-zigzag__copy banner-video-zigzag__copy--end">
                        <span className="banner-video-zigzag__label d-none d-lg-inline-flex">
                          Coming Soon
                        </span>
                        <h3>
                          Immersive learning is <span>almost here</span>
                        </h3>
                        <p>
                          <span className="d-none d-lg-inline">
                            Experience campus-style training in a new
                            interactive format.{" "}
                          </span>
                          Get ready for something powerful from Stella College.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Coming Soon left | video right */}
                  <div className="row g-3 g-lg-4 align-items-center banner-video-zigzag__row">
                    <div className="col-lg-6 order-lg-1 order-2">
                      <div className="banner-video-zigzag__copy banner-video-zigzag__copy--cta">
                        <span className="banner-video-zigzag__label d-none d-lg-inline-flex">
                          Coming Soon
                        </span>
                        <h3>
                          Coming soon to <span>your screen</span>
                        </h3>
                        <p className="banner-video-zigzag__copy-extra d-none d-lg-block">
                          Stay tuned for fresh learning journeys designed to
                          help you upskill faster and go further.
                        </p>
                        <button
                          type="button"
                          className="btn arrow-btn"
                          onClick={handleOpen}
                        >
                          Enquire Now <BtnArrow />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                      <div
                        className="banner-video-card banner-video-card--br"
                        onContextMenu={blockVideoActions}
                      >
                        <BannerVideoFrame
                          title="Stella College upcoming video two"
                          src={BOTTOM_VIDEO_EMBED_SRC}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ── Slide 3: Google Program coming soon ── */}
            <SwiperSlide>
              <GoogleProgramSlide />
            </SwiperSlide>

            {/* ── Slide 4: College Sorted hover characters ── */}
            <SwiperSlide>
              <CollegeSortedSlide />
            </SwiperSlide>

            {/* ── Slides 5–7: New hero-style topic banners ── */}
            {NEW_BANNER_SLIDES.map((slide) => (
              <SwiperSlide key={slide.key}>
                <HeroStyleSlide
                  slideKey={slide.key}
                  titleBefore={slide.titleBefore}
                  titleHighlight={slide.titleHighlight}
                  text={slide.text}
                  image={slide.image}
                  images={"images" in slide ? slide.images : undefined}
                  imageWidth={slide.imageWidth}
                  imageHeight={slide.imageHeight}
                  alt={slide.alt}
                  authors={slide.authors}
                  onEnquire={handleOpen}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="banner-countdown" aria-hidden="true">
          {bannerCountdown}
        </div>

        <Image
          src={banner_shape_3}
          alt="shape"
          className="line-shape"
          loading="lazy"
          fetchPriority="low"
          aria-hidden="true"
        />
      </section>

      {/* ── Enquire Now Modal ── */}
      {showModal && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1040,
            }}
            onClick={handleClose}
          />

          <div
            className="modal fade show d-block"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            style={{
              zIndex: 1050,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            <div
              className="modal-dialog modal-dialog-scrollable mx-auto"
              style={{ maxWidth: "500px", width: "90%", marginTop: "150px" }}
            >
              <div className="modal-content rounded-4 shadow-lg border-0">
                <div className="modal-header border-0 pb-0 pt-4 px-4">
                  <h5 className="modal-title fw-bold fs-4">Enquire Now</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  />
                </div>

                <div className="modal-body px-4 pt-2 pb-4">
                  {submitted ? (
                    <div className="text-center py-4">
                      <div className="mb-3" style={{ fontSize: "3rem" }}>
                        ✅
                      </div>
                      <h6 className="fw-bold fs-5">
                        Thank you for reaching out!
                      </h6>
                      <p className="text-muted mb-4">
                        We have received your enquiry and will get back to you
                        shortly.
                      </p>
                      <button
                        className="btn btn-primary w-100"
                        onClick={handleClose}
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      {error && (
                        <div
                          className="alert alert-danger py-2 mb-3"
                          role="alert"
                        >
                          {error}
                        </div>
                      )}

                      <div className="mb-3">
                        <label
                          htmlFor="enquiry-name"
                          className="form-label fw-semibold"
                        >
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          id="enquiry-name"
                          type="text"
                          name="user_name"
                          className="form-control form-control-lg"
                          placeholder="e.g. John Smith"
                          value={formData.user_name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="enquiry-email"
                          className="form-label fw-semibold"
                        >
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          id="enquiry-email"
                          type="email"
                          name="user_email"
                          className="form-control form-control-lg"
                          placeholder="e.g. john@example.com"
                          value={formData.user_email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="enquiry-phone"
                          className="form-label fw-semibold"
                        >
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          name="user_phone"
                          className="form-control form-control-lg"
                          placeholder="e.g. +61 400 000 000"
                          value={formData.user_phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="enquiry-message"
                          className="form-label fw-semibold"
                        >
                          Message
                        </label>
                        <textarea
                          id="enquiry-message"
                          name="message"
                          className="form-control form-control-lg"
                          placeholder="Tell us what you're interested in..."
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="d-flex flex-column flex-sm-row gap-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg flex-fill"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              />
                              Sending...
                            </>
                          ) : (
                            "Submit Enquiry"
                          )}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg flex-fill"
                          onClick={handleClose}
                          disabled={loading}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Banner;
