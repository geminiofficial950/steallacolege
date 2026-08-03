"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import SvgAnimation from "@/hooks/SvgAnimation";
import BtnArrow from "@/svg/BtnArrow";

import banner_img_1 from "@/assets/img/banner/banner_img.png";
import banner_shape_1 from "@/assets/img/banner/banner_shape01.png";
import banner_shape_2 from "@/assets/img/banner/banner_shape02.png";
import banner_shape_3 from "@/assets/img/banner/banner_shape01.svg";
import banner_shape_4 from "@/assets/img/banner/banner_shape02.svg";
import banner_icon_1 from "@/assets/img/banner/bg_dots.svg";
import banner_author_1 from "@/assets/img/banner/banner_author01.png";
import banner_author_2 from "@/assets/img/banner/banner_author02.png";
import banner_vr_person from "@/assets/img/banner/banner_vr_person.png";

const VIDEO_EMBED_SRC =
  "https://player.cloudinary.com/embed/?cloud_name=xttgh7x6&public_id=WhatsApp_Video_2026-08-03_at_12.39.06_PM_vjqn5r&player[muted]=true&player[autoplay]=true&player[loop]=true";

const Banner: React.FC = () => {
  const svgIconRef = SvgAnimation("/assets/img/objects/title_shape.svg");

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

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 991.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const syncSlideSize = useCallback((swiper: SwiperType) => {
    const mobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 991.98px)").matches;

    if (mobile) {
      swiper.params.autoHeight = true;
      swiper.el.style.height = "";
      swiper.slides.forEach((slide) => {
        (slide as HTMLElement).style.height = "";
      });
      swiper.updateAutoHeight?.(0);
      swiper.update();
      return;
    }

    swiper.params.autoHeight = false;
    swiper.el.style.height = "";
    swiper.slides.forEach((slide) => {
      (slide as HTMLElement).style.height = "";
    });

    const hero = swiper.el.querySelector(
      ".banner-slide--hero",
    ) as HTMLElement | null;
    if (!hero) return;

    const height = Math.ceil(hero.getBoundingClientRect().height);
    if (height <= 0) return;

    swiper.el.style.height = `${height}px`;
    swiper.slides.forEach((slide) => {
      (slide as HTMLElement).style.height = `${height}px`;
    });
  }, []);

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
      <section className="banner-area banner-bg tg-motion-effects position-relative overflow-hidden">
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
            observer
            observeParents
            allowTouchMove
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              requestAnimationFrame(() => syncSlideSize(swiper));
              window.setTimeout(() => syncSlideSize(swiper), 300);
              window.setTimeout(() => syncSlideSize(swiper), 800);
            }}
            onSlideChange={(swiper) => {
              if (
                typeof window !== "undefined" &&
                window.matchMedia("(max-width: 991.98px)").matches
              ) {
                swiper.updateAutoHeight(0);
              }
            }}
            onResize={syncSlideSize}
          >
            {/* ── Slide 1: Existing hero (unchanged) ── */}
            <SwiperSlide>
              <div className="row justify-content-between align-items-center banner-slide banner-slide--hero">
                <div className="col-xl-6 col-lg-6">
                  <div className="banner__content">
                    <h3 className="title tg-svg" ref={svgIconRef}>
                      Educate. Evaluate.
                      <span className="position-relative">
                        <span className="svg-icon"></span>
                        <svg
                          x="0px"
                          y="0px"
                          width="100%"
                          height="auto"
                          aria-hidden="true"
                          preserveAspectRatio="none"
                          viewBox="0 0 209 59"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                            fill="currentcolor"
                          />
                        </svg>
                        <span>Excel.</span>
                      </span>
                    </h3>
                    <p>
                      Trusted by thousands of individuals and businesses for
                      practical, industry relevant learning from micro learning,
                      short online courses to nationally recognised programs.
                    </p>
                    <div className="banner__btn-wrap">
                      <button
                        type="button"
                        className="btn arrow-btn"
                        onClick={handleOpen}
                      >
                        Enquire Now <BtnArrow />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner__images">
                    <div className="relative w-full">
                      <Image
                        src={banner_img_1}
                        alt="Hero image"
                        priority
                        fetchPriority="high"
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="main-img"
                      />
                    </div>
                    <div className="hidden md:block shape big-shape">
                      <Image
                        src={banner_shape_1}
                        alt="shape"
                        className="tg-motion-effects1"
                        loading="lazy"
                        fetchPriority="low"
                        aria-hidden="true"
                      />
                    </div>
                    <Image
                      src={banner_icon_1}
                      alt="shape"
                      className="shape bg-dots rotateme"
                      fetchPriority="high"
                      priority={true}
                      style={{ contentVisibility: "auto" }}
                    />
                    <Image
                      src={banner_shape_2}
                      alt="shape"
                      className="shape small-shape tg-motion-effects3"
                      loading="lazy"
                      fetchPriority="low"
                      aria-hidden="true"
                    />
                    <div className="banner__author">
                      <div className="banner__author-item">
                        <div className="image">
                          <Image
                            src={banner_author_1}
                            loading="lazy"
                            alt="img"
                            fetchPriority="low"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="name">Roberta Fox</h3>
                      </div>
                      <div className="banner__author-item">
                        <div className="image">
                          <Image
                            src={banner_author_2}
                            loading="lazy"
                            alt="img"
                            fetchPriority="low"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="name">Michel Jones</h3>
                      </div>
                      <Image
                        src={banner_shape_4}
                        alt="shape"
                        className="arrow-shape tg-motion-effects3"
                        loading="lazy"
                        fetchPriority="low"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="row g-3 g-lg-4 align-items-center banner-video-zigzag__row">
                    <div className="col-lg-6">
                      <div className="banner-video-card">
                        <div className="banner-video-card__frame">
                          <iframe
                            src={VIDEO_EMBED_SRC}
                            title="Stella College upcoming video one"
                            width={640}
                            height={360}
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                          />
                        </div>
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
                            Experience campus-style training in a new interactive
                            format.{" "}
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
                      <div className="banner-video-card banner-video-card--br">
                        <div className="banner-video-card__frame">
                          <iframe
                            src={VIDEO_EMBED_SRC}
                            title="Stella College upcoming video two"
                            width={640}
                            height={360}
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
