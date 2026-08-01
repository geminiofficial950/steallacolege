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
  if (uniqueCategories.has(item.categoryId)) {
    uniqueCategories.get(item.categoryId)!.count += 1;
  } else {
    uniqueCategories.set(item.categoryId, {
      categoryName: item.category,
      count: 1,
      categoryId: item.categoryId,
      category_Image: item.category_Image,
    });
  }
});
// console.log(uniqueCategories);

console.log("uniqueCategories", uniqueCategories);
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
