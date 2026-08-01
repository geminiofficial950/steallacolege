"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import course_data from "@/data/home-data/CourseData";
import { course_detail_data } from "@/data/home-data/coursedataeditor";

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
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
};

interface StyleType {
  style?: boolean;
}

const CourseArea = ({ style }: StyleType) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeFilter = courseFilters[activeTab];
  const courseMetaMap = new Map(
    course_detail_data.course_list.map((course) => [course.courseId, course]),
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
        <div className="section__title-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section__title text-center mb-30">
                {/* <span className="sub-title">Top Class Courses</span> */}
                <h2 className="title">Explore Our World&apos;s Best Courses</h2>
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
                        marginTop: "20px",
                        marginBottom: "10px",
                        flexShrink: 0,
                      }}
                    >
                      <button
                        type="button"
                        className={`nav-link ${activeTab === index ? "active" : ""}`}
                        role="tab"
                        id={`tab-${index}`}
                        aria-selected={activeTab === index}
                        aria-controls={`tabpanel-${index}`}
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
            id="all-tab-pane"
            role="tabpanel"
            aria-labelledby="all-tab"
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
                    <div className="courses__item shine__animate-item courses__item--equal">
                      {item.id && popularCourseIds.includes(item.id) && (
                        <div className="top-selling-ribbon">Top Selling</div>
                      )}

                      {item.id && upcomingCourseIds.includes(item.id) && (
                        <div className="upcoming-ribbon">Upcoming</div>
                      )}

                      <div className="courses__item-thumb">
                        <Link
                          href={`/course-details/${item.id}`}
                          className="shine__animate-link"
                        >
                          <Image
                            src={item.thumb || item.courseimage!}
                            alt="img"
                          />
                        </Link>
                      </div>

                      <div className="courses__item-content">
                        <ul className="courses__item-meta list-wrap">
                          <li className="courses__item-tag">
                            <Link href={`/courses`}>{item.category}</Link>
                          </li>
                        </ul>

                        <h3 className="title">
                          <Link href={`/course-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>

                        <div className="courses__item-bottom">
                          <div className="button">
                            <Link href={`/course-details/${item.id}`}>
                              <span className="text">
                                Learn More{" "}
                                <span className="visually-hidden">
                                  {" "}
                                  about {item.id}
                                </span>
                              </span>
                              <i className="flaticon-arrow-right"></i>
                            </Link>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="courses__nav">
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
          }
          /* Add margin-top to navigation buttons on mobile */
          .courses__nav .courses-button-prev,
          .courses__nav .courses-button-next {
            margin-top: 10px !important;
          }
        }
        .top-selling-ribbon {
          position: absolute;
          top: 17px;
          right: -14px;
          background: linear-gradient(45deg, #d4af37, #b89528);
          color: white;
          padding: 5px 40px;
          font-size: 11px;
          font-weight: 700;
          transform: rotate(45deg);
          z-index: 9999;
          text-transform: uppercase;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
        }
        .upcoming-ribbon {
          position: absolute;
          top: 17px;
          right: -14px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          color: white;
          padding: 5px 40px;
          font-size: 11px;
          font-weight: 700;
          transform: rotate(45deg);
          z-index: 9999;
          text-transform: uppercase;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
        }
        .high-demand-ribbon {
          position: absolute;
          top: 17px;
          right: -14px;
          background: linear-gradient(45deg, #dc3545, #c82333);
          color: white;
          padding: 5px 40px;
          font-size: 11px;
          font-weight: 700;
          transform: rotate(45deg);
          z-index: 9999;
          text-transform: uppercase;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
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
