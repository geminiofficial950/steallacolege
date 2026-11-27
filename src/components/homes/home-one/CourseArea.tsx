"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import ContentImage from "@/components/common/ContentImage";
import Link from "next/link";
import { useCourseCards } from "@/context/ContentContext";
import { FiArrowRight, FiAward, FiClock, FiLayers, FiMonitor } from "react-icons/fi";

// ✅ Define filters
const courseFilters = [
  {
    name: "All Courses",
    courses: [
      "CHC33021 Certificate III in Individual Support (Ageing & Disability)",
      "FBP30121 Certificate III in Food Processing",
      "The SENTIO Framework : Introduction (Part 1 of 5 mental health series)",
      "MSS30322 Certificate III in Competitive Systems & Practices",
      "MSS40322 Certificate IV in Competitive Systems and Practices",
      "HLTAID011 Provide First AID",
      "HLTAID009 Provide Cardiopulmonary Resuscitation",
      "HLTAID012 - Provide First Aid in an education and care setting",
      "CHC43121 Certificate IV in Disability Support",
      "SCAI0625 - AI Fundamentals – Understanding Artificial Intelligence",
      "SCAI0725 - AI For Business Decision Making",
      "SCAI0825 - Advanced AI Applications",
      "SCBU0125 - Business Fundamentals for Emerging Leaders",
      "SCBU0225 - Communication and Negotiation Skills for Professionals",
      "SCBU0325 - Entrepreneurship and Business Growth Strategy",
      "CHC43015 – Certificate IV in Ageing Support",
      "SCCS0425 - Cybersecurity Fundamentals – Protecting Your Digital Assets",
      "SCCS0525 - Cybersecurity Awareness and Best Practices",
      "SCCS0625 - Advanced Cybersecurity",
      "SCDV0825 - Understanding Australian Workplace Culture and Values",
      "SCDV0925 - Australian Values, Rights, and Civic Participation",
      "CHC43015 – Certificate IV in Ageing Support",
    ],
  },
  {
    name: "Popular Courses",
    courses: [
      "CHC33021 Certificate III in Individual Support (Ageing & Disability)",
      "HLTAID012 - Provide First Aid in an education and care setting",
      "SCAI0625 - AI Fundamentals – Understanding Artificial Intelligence",
      "SCBU0125 - Business Fundamentals for Emerging Leaders",
      "SCBU0225 - Communication and Negotiation Skills for Professionals",
      "SCBU0325 - Entrepreneurship and Business Growth Strategy",
      "SCAI0725 - AI For Business Decision Making",
      "SCAI0825 - Advanced AI Applications",
    ],
  },
  {
    name: "Short Courses",
    courses: [
      "HLTAID011 Provide First AID",
      "HLTAID009 Provide Cardiopulmonary Resuscitation",
      "HLTAID012 - Provide First Aid in an education and care setting",
      "SCAI0625 - AI Fundamentals – Understanding Artificial Intelligence",
      "SCAI0725 - AI For Business Decision Making",
      "SCAI0825 - Advanced AI Applications",
      "SCBU0125 - Business Fundamentals for Emerging Leaders",
      "SCBU0225 - Communication and Negotiation Skills for Professionals",
      "SCBU0325 - Entrepreneurship and Business Growth Strategy",
      "SCCS0425 - Cybersecurity Fundamentals – Protecting Your Digital Assets",
      "SCCS0525 - Cybersecurity Awareness and Best Practices",
      "SCCS0625 - Advanced Cybersecurity",
      "SCDV0825 - Understanding Australian Workplace Culture and Values",
      "SCDV0925 - Australian Values, Rights, and Civic Participation",
    ],
  },
  {
    name: "Nationally Recognised Courses",
    courses: [
      "CHC33021 Certificate III in Individual Support (Ageing & Disability)",
      "CHC43121 Certificate IV in Disability Support",
      "CHC43015 – Certificate IV in Ageing Support",
      "CHC43415 Certificate IV in Leisure & Health",
      "FBP30121 Certificate III in Food Processing",
      "MSS30322 Certificate III in Competitive Systems & Practices",
      "MSS40322 Certificate IV in Competitive Systems and Practices",
      "HLTAID011 Provide First AID",
      "HLTAID009 Provide Cardiopulmonary Resuscitation",
      "HLTAID012 - Provide First Aid in an education and care setting",
    ],
  },
];
const upcomingCourseIds = [
  "masterclass-mental-health-sentio-framework-45-mins",
  "chc43415-certificate-iv-in-leisure-and-health-(r4)",
  "the_sentio_framework_introduction_part_1_of_5_mental_health_series",
  "chc43121-certificate-iv-in-disability-support-(r1)",
];
const popularCourseIds = [
  "chc33021-certificate-iii-in-individual-support-ageing-and-disability-(r1)",
  "hltaid012-provide-first-aid-in-an-education-and-care-setting-(r2)",
  "scai0625-ai-fundamentals-understanding-artificial-intelligence",
  "scbu0125-business-fundamentals-for-emerging-leaders",
  "scbu0225-communication-and-negotiation-skills-for-professionals",
  "scbu0325-entrepreneurship-and-business-growth-strategy",
  "scai0725-ai-for-business-decision-making",
  "scai0825-advanced-ai-applications",
];

const shortCourseIds = [
  "masterclass-mental-health-sentio-framework-45-mins",
  "hltaid011-provide-first-aid-(r1)",
  "hltaid009-provide-cardiopulmonary-resuscitation-(r1)",
  "hltaid011-provide-first-aid-(r1)",
  "scai0625-ai-fundamentals-understanding-artificial-intelligence",
  "scai0725-ai-for-business-decision-making",
  "scai0825-advanced-ai-applications",
  "scbu0125-business-fundamentals-for-emerging-leaders",
  "scbu0225-communication-and-negotiation-skills-for-professionals",
  "scbu0325-entrepreneurship-and-business-growth-strategy",
  "sccs0425-cybersecurity-fundamentals-protecting-your-digital-assets",
  "sccs0525-cybersecurity-awareness-and-best-practices",
  "sccs0625-advanced-cybersecurity",
  "scdv0825-understanding-australian-workplace-culture-and-values",
  "scdv0925-australian-values-rights-and-civic-participation",
];

// ✅ Swiper settings
const setting = {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  autoplay: false,
  breakpoints: {
    1500: { slidesPerView: 4 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3, spaceBetween: 24 },
    768: { slidesPerView: 2, spaceBetween: 24 },
    600: { slidesPerView: 2, spaceBetween: 20 }, // iPhone Duo inner display (~626px) fits two cards
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
};

interface StyleType {
  style?: boolean;
}

const CourseArea = ({ style }: StyleType) => {
  // course cards come from MongoDB via ContentProvider (same shape the old static CourseData.ts exported)
  const course_data = [{ id: 1, page: "home_1", course_details: useCourseCards() }];
  const [activeTab, setActiveTab] = useState(0);
  const activeFilter = courseFilters[activeTab];
  const courseMetaMap = new Map(
    course_data[0].course_details.map((course) => [course.courseId, course]),
  );

  const matchesActiveFilter = (courseId: string) => {
    if (activeFilter.name === "All Courses") {
      return true;
    }

    if (activeFilter.name === "Popular Courses") {
      return popularCourseIds.includes(courseId);
    }

    if (activeFilter.name === "Short Courses") {
      return shortCourseIds.includes(courseId);
    }

    if (activeFilter.name === "Nationally Recognised Courses") {
      return (
        courseMetaMap.get(courseId)?.certification ===
        "Nationally Recognised Training"
      );
    }

    return false;
  };
  const SENTIO_TITLE =
    "The SENTIO Framework : Introduction (Part 1 of 5 mental health series)";

  // STEP 1: Get all matching items
  const filteredCourses = course_data
    .filter((items) => items.page === "home_1")
    .flatMap((course_item) =>
      course_item.course_details.filter(
        (item) => item.id && matchesActiveFilter(item.id),
      ),
    );

  // STEP 2: Create new array
  let finalCourses = [...filteredCourses];

  // STEP 3: Only reorder for All Courses
  if (activeFilter.name === "All Courses") {
    const masterclassId = "masterclass-mental-health-sentio-framework-45-mins";
    const masterclassIndex = finalCourses.findIndex(
      (item) => item.id === masterclassId,
    );

    if (masterclassIndex !== -1) {
      const [masterclass] = finalCourses.splice(masterclassIndex, 1);
      finalCourses.unshift(masterclass);
    }

    const sentioIndex = finalCourses.findIndex(
      (item) => item.title === SENTIO_TITLE,
    );

    if (sentioIndex !== -1) {
      const [sentio] = finalCourses.splice(sentioIndex, 1);
      finalCourses.splice(3, 0, sentio); // 3rd position
    }
  }
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null);

  // ✅ Fix navigation buttons after mount
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation !== "boolean"
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [activeTab]);

  return (
    <section
      className={`courses-area ${
        style ? "section-py-120" : "courses-area--home section-pb-90"
      }`}
      style={{ backgroundImage: `url(/assets/img/bg/courses_bg.jpg)` }}
    >
      <div className="container">
        <div className="section__title-wrap" style={{ marginBottom: "16px" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section__title text-center" style={{ marginBottom: "4px" }}>
                {/* <span className="sub-title">Top Class Courses</span> */}
                <h2 className="title">Explore Our Top Courses</h2>
              </div>

              {/* ✅ Course Filter Tabs */}
              <div className="courses__nav">
                <ul
                  className="nav nav-tabs"
                  role="tablist"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "10px",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {courseFilters.map((filter, index) => (
                    <li
                      key={index}
                      className="nav-item"
                      role="presentation"
                      style={{
                        marginTop: "6px",
                        marginBottom: "4px",
                        flexShrink: 0,
                      }}
                    >
                      <button
                        type="button"
                        className={`nav-link ${activeTab === index ? "active" : ""}`}
                        role="tab"
                        id={`tab-${index}`}
                        aria-selected={activeTab === index}
                        aria-controls="course-tabpanel"
                        onClick={() => setActiveTab(index)}
                        style={{
                          transition: "all 0.5s ease",
                          // color: activeTab === index ? "#fff" : "inherit",
                          // backgroundColor: activeTab === index ? "#000" : "transparent",
                          padding: "8px 16px",
                          border: "none",
                          cursor: "pointer",
                          borderRadius: "6px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {filter.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Course Cards */}
        <div className="tab-content" id="courseTabContent">
          <div
            className="tab-pane fade show active"
            id="course-tabpanel"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
          >
            <Swiper
              {...setting}
              modules={[Autoplay, Navigation]}
              className="swiper courses-swiper-active"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper: any) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
            >
                {finalCourses.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="swiper-slide"
                  >
                    <article className="ccard">
                      <Link href={`/course-details/${item.id}`} className="ccard__thumb">
                        <ContentImage
                          src={item.thumb || item.courseimage!}
                          alt={item.title}
                          className={
                            item.id === "masterclass-mental-health-sentio-framework-45-mins"
                              ? "is-contain"
                              : undefined
                          }
                        />
                        {item.id && popularCourseIds.includes(item.id) && (
                          <span className="ccard__badge ccard__badge--top">Top Selling</span>
                        )}
                        {item.id && upcomingCourseIds.includes(item.id) && (
                          <span className="ccard__badge ccard__badge--upcoming">Upcoming</span>
                        )}
                      </Link>

                      <div className="ccard__body">
                        <Link href={`/courses`} className="ccard__category">
                          {item.category}
                        </Link>

                        <h3 className="ccard__title">
                          <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                        </h3>

                        {/* Key facts pulled from the course editor data */}
                        {(() => {
                          const meta = item.id ? courseMetaMap.get(item.id) : undefined;
                          const facts = [
                            meta?.duration && { icon: <FiClock />, label: meta.duration },
                            meta?.units && { icon: <FiLayers />, label: meta.units },
                            meta?.modeofdelivery && {
                              icon: <FiMonitor />,
                              label: meta.modeofdelivery.split(",")[0].trim(),
                            },
                          ].filter(Boolean) as { icon: ReactNode; label: string }[];
                          return (
                            <>
                              {facts.length > 0 && (
                                <ul className="ccard__meta">
                                  {facts.map((fact) => (
                                    <li key={fact.label}>
                                      {fact.icon}
                                      <span>{fact.label}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {meta?.certification === "Nationally Recognised Training" && (
                                <p className="ccard__cert">
                                  <FiAward /> Nationally Recognised
                                </p>
                              )}
                            </>
                          );
                        })()}

                        <div className="ccard__footer">
                          <Link href={`/course-details/${item.id}`} className="ccard__cta">
                            View Course
                            <span className="visually-hidden"> about {item.title}</span>
                            <FiArrowRight />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="courses__nav courses__nav--arrows">
              <div
                ref={prevRef}
                className="courses-button-prev"
                role="button"
                tabIndex={0}
                aria-label="Previous slide"
              >
                <i className="flaticon-arrow-right"></i>
              </div>
              <div
                ref={nextRef}
                className="courses-button-next"
                role="button"
                tabIndex={0}
                aria-label="Next slide"
              >
                <i className="flaticon-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Scrollbar Hidden & Navigation Button Position */}
      <style jsx>{`
        @media (max-width: 768px) {
          .courses__nav ul::-webkit-scrollbar {
            display: none;
            height: 0;
          }
          .courses__nav ul {
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            gap: 8px !important;
            padding: 2px 4px 6px !important;
            -webkit-overflow-scrolling: touch;
          }
          /* Tabs as compact pill chips: the dark pill marks the active tab, so drop the
             theme's underline bar and the long rule below the tabs */
          .courses__nav ul::after,
          .courses__nav .nav-link::after {
            display: none !important;
          }
          .courses__nav .nav-item {
            margin: 0 !important;
          }
          .courses__nav .nav-link {
            padding: 7px 14px !important;
            border-radius: 50px !important;
            font-size: 14px;
            line-height: 1.3;
            background: #f1f0fb !important;
            color: #4a4868 !important;
            border: 1px solid #e3e1f5 !important;
          }
          .courses__nav .nav-link.active {
            border-color: #000 !important; /* bg/colour come from the shared active rule below */
          }
          /* Arrows: small, centred, close under the cards */
          .courses__nav--arrows {
            justify-content: center !important;
            gap: 10px !important;
          }
          .courses__nav--arrows .courses-button-prev,
          .courses__nav--arrows .courses-button-next {
            margin-top: 0 !important;
            width: 38px !important;
            height: 38px !important;
            font-size: 15px !important;
          }
          .courses__nav--arrows .courses-button-prev {
            box-shadow: -2px 1.5px 0px 0px #23232b !important;
          }
          .courses__nav--arrows .courses-button-next {
            box-shadow: 2px 1.5px 0px 0px #23232b !important;
          }
        }
        /* Course card */
        :global(.courses-swiper-active) {
          padding: 8px 4px 14px;
        }
        .ccard {
          display: flex;
          flex-direction: column;
          width: 100%;
          background: #fff;
          border: 1px solid #ebedf2;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(22, 19, 58, 0.05);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .ccard:hover {
          transform: translateY(-6px);
          border-color: transparent;
          box-shadow: 0 18px 40px rgba(22, 19, 58, 0.14);
        }
        .ccard :global(.ccard__thumb) {
          position: relative;
          display: block;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #f4f5f8;
        }
        .ccard :global(.ccard__thumb img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .ccard :global(.ccard__thumb img.is-contain) {
          object-fit: contain;
          background: #fff;
        }
        .ccard:hover :global(.ccard__thumb img) {
          transform: scale(1.06);
        }
        .ccard__badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          color: #fff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
        }
        .ccard__badge--top {
          background: linear-gradient(135deg, #d4af37, #b89528);
        }
        .ccard__badge--upcoming {
          background: linear-gradient(135deg, #2f6fed, #1d4fc4);
        }
        .ccard__body {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 18px 20px 20px;
        }
        .ccard :global(.ccard__category) {
          align-self: flex-start;
          padding: 4px 10px;
          margin-bottom: 12px;
          border-radius: 6px;
          background: #f1f0fb;
          color: #1e1c4a;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
        }
        .ccard__title {
          margin: 0 0 14px;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: calc(1.4em * 3);
        }
        .ccard__title :global(a) {
          color: #16133a;
          transition: color 0.25s ease;
        }
        .ccard__title :global(a:hover) {
          color: #b89528;
        }
        .ccard__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 14px;
          margin: 0 0 10px;
          padding: 0;
          list-style: none;
        }
        .ccard__meta li {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #5f6475;
        }
        .ccard__meta li :global(svg) {
          color: #b89528;
          flex-shrink: 0;
        }
        .ccard__cert {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          color: #1d8a4e;
        }
        .ccard__footer {
          margin-top: auto;
          padding-top: 16px;
        }
        .ccard__footer :global(.ccard__cta) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #ebedf2;
          font-size: 14px;
          font-weight: 600;
          color: #16133a;
        }
        .ccard__footer :global(.ccard__cta svg) {
          width: 34px;
          height: 34px;
          padding: 9px;
          border-radius: 50%;
          background: #16133a;
          color: #fff;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .ccard:hover .ccard__footer :global(.ccard__cta svg) {
          background: #b89528;
          transform: translateX(4px);
        }
        @media (max-width: 575px) {
          .ccard__title {
            font-size: 16px;
          }
        }

        .courses__nav .nav-link {
          background: transparent;
          color: #333;
          transition: all 0.3s ease;
        }

        .courses__nav .nav-link.active {
          background: #000 !important;
          color: #fff !important;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default CourseArea;
