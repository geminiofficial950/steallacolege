"use client";

import Image from "next/image";
import img_1 from "@/assets/img/courses/review-author.png";
import { course_detail_data } from "@/data/home-data/coursedataeditor";

interface ReviewsProps {
  courseId?: string; // use string type since your courseId is a string
}

const Reviews = ({ courseId }: ReviewsProps) => {
  // Find the specific course by its string courseId
  const course = course_detail_data.course_list.find(c => c.courseId === courseId);


  if (!course) {
    return <div>No course found for this ID.</div>;
  }

  // Find the Reviews tab
  const reviewTab = course.detail[0].tabs.find(
    (tab) => tab.title === "Reviews"
  );

  const ratingValue = parseFloat(course.rating || "0");

  // Fetch review_data from course data, with fallback to default values
  const review_data = course.review_data || [
    { id: 1, rating: 5, width: "80", review: "1" },
    { id: 2, rating: 4, width: "50", review: "1" },
    { id: 3, rating: 3, width: "0", review: "0" },
    { id: 4, rating: 2, width: "0", review: "0" },
    { id: 5, rating: 1, width: "0", review: "0" },
  ];

  return (
    <div className="courses__rating-wrap">
      <h2 className="title">Reviews</h2>
      <div className="course-rate">
        <div className="course-rate__summary">
          <div className="course-rate__summary-value">{course.review}</div>
          <div className="course-rate__summary-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`fas fa-star ${
                  i < Math.round(ratingValue)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              ></i>
            ))}
          </div>
        </div>

        <div className="course-rate__details">
          {review_data.map((item) => (
            <div key={item.id} className="course-rate__details-row">
              <div className="course-rate__details-row-star">
                {item.rating}
                <i className="fas fa-star"></i>
              </div>
              <div className="course-rate__details-row-value">
                <div className="rating-gray"></div>
                <div
                  className="rating"
                  style={{ width: `${item.width}%` }}
                  title={`${item.width}%`}
                ></div>
                <span className="rating-count">{item.review}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="course-review-head">
        {/* <div className="review-author-thumb">
          <Image src={img_1} alt="img" />
        </div> */}
        <div className="review-author-content">
          <div className="author-name">
            {/* <div className="author-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star ${
                    i < Math.round(ratingValue)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                ></i>
              ))}
            </div> */}
          </div>

          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{
              __html:
                reviewTab?.description ||
                "<p>No review available for this course.</p>",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
