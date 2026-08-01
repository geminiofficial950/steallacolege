"use client";
import Image from "next/image";
import Link from "next/link";
import BtnArrow from "@/svg/BtnArrow";

import about_img1 from "@/assets/img/faq_images.png";
import about_img2 from "@/assets/img/others/about_shape.svg";
import about_img3 from "@/assets/img/others/student_grp.png";

const About = () => {
  return (
    <>
      <section className="about-area tg-motion-effects about-area--home">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-9">
              <div className="about__images">
                <Image
                  src={about_img1}
                  alt="img"
                  className="main-img"
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Image
                  src={about_img2}
                  alt=""
                  className="shape alltuchtopdown"
                  aria-hidden="true"
                />
                <div
                  className="about__enrolled"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <p className="title">Student Community</p>
                  <Image src={about_img3} alt="img" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about__content">
                <div className="section__title">
                  <h2 className="title">
                    Industry leading
                    <span className="position-relative title-shape-wrap">
                      <svg
                        x="0px"
                        y="0px"
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
                      Courses
                    </span>
                    Now in One Place
                  </h2>
                </div>
                <p className="desc">
                  At Stella College, we’re dedicated to helping every learner
                  grow no matter their goals or experience
                </p>
                <p className="desc">
                  From short professional development and online upskilling
                  courses to industry-leading, nationally recognised
                  qualifications, we have something for everyone
                </p>
                <p className="desc">
                  Our mission is to deliver real outcomes, shaping confident
                  professionals and celebrate your successful careers
                </p>
                <ul className="about__info-list list-wrap">
                  <li className="about__info-list-item">
                    <i className="flaticon-angle-right"></i>
                    <p className="content">Industry demand skills</p>
                  </li>
                  <li className="about__info-list-item">
                    <i className="flaticon-angle-right"></i>
                    <p className="content">Industry skilled instructors</p>
                  </li>
                  <li className="about__info-list-item">
                    <i className="flaticon-angle-right"></i>
                    <p className="content">Flexible Learning</p>
                  </li>
                </ul>
                <div className="tg-button-wrap">
                  <Link href="/courses" className="btn arrow-btn">
                    Learn More{" "}
                    <span className="visually-hidden"> about all courses</span>{" "}
                    <BtnArrow />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
