"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import course_data from "@/data/home-data/CourseData";
import Image, { StaticImageData } from "next/image";
interface CategoryItem {
  categoryId: CategoryId;
  categoryName: string;
  count: number;
}
interface DatatYpe {
  id: number;
  icon: string;
  title: string;
  total: string;
}
[];
// const uniqueCategories: CategoryItem[] = [
//   ...new Map(
//     course_data[0].course_details.map(item => [
//       item.categoryId as CategoryId,
//       { categoryId: item.categoryId as CategoryId, categoryName: item.category, count: 1 }
//     ])
//   ).values()
// ];
// Count unique categories
const uniqueCategories = new Map<
  string,
  {
    categoryName: string;
    categoryId: string;
    count: number;
    category_Image: string | StaticImageData;
  }
>();

course_data[0].course_details.forEach((item) => {
  const categoryKey = item.category.trim();
  if (uniqueCategories.has(categoryKey)) {
    uniqueCategories.get(categoryKey)!.count += 1;
  } else {
    uniqueCategories.set(categoryKey, {
      categoryName: item.category,
      count: 1,
      categoryId: item.categoryId,
      category_Image: item.category_Image,
    });
  }
});
// console.log(uniqueCategories);

// console.log("uniqueCategories", uniqueCategories);
const categoryFlatIcon = {
  CSAGEING: "flaticon-graphic-design",
  CSLEISURE: "flaticon-investment",
  CSFOOD: "flaticon-coding",
  CSFIRSTAID: "flaticon-email",
  CSCOMPETITIVE: "flaticon-web-design",
  // "Artificial Intelligence": "flaticon-fashion",
  // "Marketing": "flaticon-interaction",
} as const;
type CategoryId = keyof typeof categoryFlatIcon;

const TechnologyAiIcon = () => (
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="techAiGradient" x1="18" y1="18" x2="78" y2="78">
        <stop stopColor="#7C3AED" />
        <stop offset="0.5" stopColor="#2563EB" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <rect x="20" y="24" width="56" height="38" rx="10" fill="#EEF2FF" />
    <rect
      x="25"
      y="29"
      width="46"
      height="28"
      rx="7"
      fill="url(#techAiGradient)"
    />
    <path
      d="M38 70H58M48 62V70"
      stroke="#1E1B4B"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="39" cy="43" r="4" fill="white" />
    <circle cx="48" cy="43" r="4" fill="white" />
    <circle cx="57" cy="43" r="4" fill="white" />
    <path
      d="M76 18L79 26L87 29L79 32L76 40L73 32L65 29L73 26L76 18Z"
      fill="#FBBF24"
    />
    <path
      d="M20 14L22 20L28 22L22 24L20 30L18 24L12 22L18 20L20 14Z"
      fill="#A78BFA"
    />
  </svg>
);

// slider setting
const setting = {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".categories-button-next",
    prevEl: ".categories-button-prev",
  },
  breakpoints: {
    "1500": {
      slidesPerView: 6,
    },
    "1200": {
      slidesPerView: 5,
    },
    "992": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    "768": {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};

const Categories = () => {
  return (
    <section className="categories-area section-py-80 categories-area--home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="section__title text-center mb-40">
              {/* <span className="sub-title">Trending Categories</span> */}
              <h2 className="title">Top Category We Have</h2>
              <p className="desc">
                Unlock Your Potential with Our Leading Courses
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="categories__wrap">
              <Swiper
                {...setting}
                modules={[Navigation]}
                className="swiper categories-active"
              >
                {Array.from(uniqueCategories.entries()).map(
                  (
                    [categoryId, { categoryName, count, category_Image }],
                    index,
                  ) => (
                    <SwiperSlide key={categoryId} className="swiper-slide">
                      <div className="categories__item">
                        <Link href={`/courses?category_id=${categoryId}`}>
                          <div className="icon">
                            {categoryName === "Technology and AI" ? (
                              <TechnologyAiIcon />
                            ) : (
                              <Image
                                src={category_Image}
                                alt={categoryName}
                                width={350}
                                height={100}
                                style={{
                                  objectFit: "contain",
                                  borderRadius: "10px",
                                  height: "80px",
                                }}
                              />
                            )}
                          </div>
                          <span className="name">{categoryName}</span>
                          <span className="courses">({count})</span>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>

              <div className="categories__nav">
                <button
                  className="categories-button-prev"
                  aria-label="Previous categories"
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7L1 7M1 7L7 1M1 7L7 13"
                      stroke="#161439"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="categories-button-next"
                  aria-label="Next categories"
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L15 7M15 7L9 1M15 7L9 13"
                      stroke="#161439"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="d-flex d-md-none justify-content-center align-items-center gap-3 mt-3">
                <button
                  className="categories-button-prev"
                  aria-label="Previous categories"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid #e0e0e0",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7L1 7M1 7L7 1M1 7L7 13"
                      stroke="#161439"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  className="categories-button-next"
                  aria-label="Next categories"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid #e0e0e0",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L15 7M15 7L9 1M15 7L9 13"
                      stroke="#161439"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
