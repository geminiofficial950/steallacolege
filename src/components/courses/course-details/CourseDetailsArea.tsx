"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import Curriculum from "./Curriculum";
import Instructors from "./Instructors";
import ApplicationProcess from "./ApplicationProcess";

import course_details_img1 from "@/assets/img/courses/courses_details.jpg";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "./../../../layouts/footers/FooterOne";

const defaultTabTitle: string[] = ["Overview", "Units", "Entry Requirement"];
const topicCategories = new Set([
  "Technology and AI",
  "Professional Development",
  "Business",
  "Mental Health",
]);

const CourseDetailsArea = ({ single_course }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const courseId = single_course?.courseId;
  const isNationallyRecognised =
    single_course?.certification === "Nationally Recognised Training";
  const tabTitle = topicCategories.has(single_course?.category)
    ? ["Overview", "Topics", "Entry Requirement"]
    : defaultTabTitle;

  return (
    <>
      <HeaderOne />
      <section className="courses__details-area section-py-120">
        <div
          className="container course-details-container"
          style={{ maxWidth: "1400px", paddingLeft: "0px" }}
        >
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="courses__details-thumb">
                <Image
                  src={
                    single_course?.courseimage ||
                    single_course?.thumb ||
                    course_details_img1
                  }
                  alt={single_course?.title || "Course image"}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  sizes="(max-width: 991px) 100vw, 66vw"
                  priority
                />
              </div>
              <div className="courses__details-content">
                <ul className="courses__item-meta list-wrap">
                  <li className="courses__item-tag">
                    <Link href="/courses">{single_course?.category}</Link>
                  </li>
                </ul>
                <h2 className="title">
                  {single_course?.title
                    ? single_course.title
                    : "Resolving Conflicts Between Designers And Engineers"}
                </h2>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {tabTitle.map((tab, index) => {
                    const isActive = activeTab === index;

                    return (
                      <li key={index} className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${isActive ? "active" : ""}`}
                          onClick={() => handleTabClick(index)}
                          role="tab"
                          aria-selected={isActive}
                          aria-controls={`panel-${index}`}
                          id={`tab-${index}`}
                          tabIndex={isActive ? 0 : -1}
                          type="button"
                        >
                          {tab}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}
                    id="overview-tab-pane"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                  >
                    <Overview courseId={courseId} />
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
                    id="curriculum-tab-pane"
                    role="tabpanel"
                    aria-labelledby="curriculum-tab"
                  >
                    <Curriculum courseId={courseId} />
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}
                    id="Entry Requirement-tab-pane"
                    role="tabpanel"
                    aria-labelledby="Entry Requirement-tab"
                  >
                    <Instructors courseId={courseId} />
                  </div>
                </div>
              </div>
            </div>
            <Sidebar courseId={courseId} />
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .course-details-container {
              padding-left: 0 !important;
              padding-right: 0 !important;
              max-width: 100% !important;
            }

            .courses__details-area .row {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }

            .courses__details-area .col-xl-8,
            .courses__details-area .col-lg-8 {
              padding-left: 15px !important;
              padding-right: 15px !important;
            }
          }
        `}</style>
      </section>
      {isNationallyRecognised && <ApplicationProcess />}
      <FooterOne />
    </>
  );
};

export default CourseDetailsArea;
