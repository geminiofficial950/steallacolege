"use client";
import Image from "next/image";

export default function CourseCards() {
  const courses = [
    {
      image: "/assets/img/Card Pics/Book a Pre-Training.png",
      title: "Book a Pre-Training",
      link: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ12bVOUXV6_pqtrvah3TwujTfIs-pP4XC3Rn4pckqrX3470NKKx4qh4z2qLQqqvjbEbt-mn4qmP?gv=true",
    },
      {
      image: "/assets/img/Card Pics/Admin Team.png",
      title: "Admin Team",
      link: "https://calendar.google.com/calendar/appointments/AcZssZ2CbFggkupDvNeXadfeydMnxbSfgZC4VUB-BE4=?gv=true",
    },
    {
      image: "/assets/img/Card Pics/Trainer Support.png",
      title: "Trainer Support",
      link: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ36I9TgcmEUAIXUHUe9PdAxIjSB-l5i74Wo3vzj9QSffqtJ5PTUiwbCNhVL1Oj30-0-w8wI5tt6?gv=true",
    },
  
  ];

  return (
    <>
      <section className="section-pt-120 section-pb-90">
        <div className="container">
          <div className="row justify-content-center">
            {courses.map((course, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-12 mb-4">
                <div className="course-card h-100">

                  {/* Image */}
                  <div className="card-image">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={220}
                      className="img-fluid"
                    />
                  </div>

                  {/* Title */}
                  <div className="card-title-area">
                    <h4 className="title">{course.title}</h4>
                  </div>

                  {/* Embedded Calendar */}
                  <div className="calendar-wrapper">
                    <iframe
                      src={course.link}
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                      title={course.title}
                    >
                      Loading…
                    </iframe>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .course-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .card-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .card-title-area {
          padding: 18px 20px 10px;
          border-bottom: 1px solid #f0f0f0;
        }

        .title {
          font-size: 17px;
          font-weight: 700;
          margin: 0;
          color: #1a1a2e;
        }

        .calendar-wrapper {
          flex: 1;
          min-height: 520px;
          padding: 0;
        }

        .calendar-wrapper iframe {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 520px;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .card-image img {
            height: 180px;
          }

          .calendar-wrapper,
          .calendar-wrapper iframe {
            min-height: 480px;
          }
        }

        /* Mobile */
        @media (max-width: 576px) {
          .card-image img {
            height: 160px;
          }

          .title {
            font-size: 15px;
          }

          .calendar-wrapper,
          .calendar-wrapper iframe {
            min-height: 440px;
          }
        }
      `}</style>
    </>
  );
}