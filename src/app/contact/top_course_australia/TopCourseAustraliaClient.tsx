"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/23.png";
import oldpeople from "@/assets/img/oldpeople1.png";
import careerInsights from "@/assets/img/graph1.png";
import pathway from "@/assets/img/pathway.jpg";
import peopleold from "@/assets/img/peopleold.png";
import {
  UserRound,
  House,
  Accessibility,
  HeartHandshake,
  Home,
  Users,
  IdCard,
  BriefcaseBusiness,
  MessageCircle,
  HeartPulse,
  Wrench,
} from "lucide-react";
export const metadata = {
  title:
    "CHC33021 Certificate III in Individual Support (Ageing & Disability) | Stella College Australia",
  description:
    "Learn essential care skills with the CHC33021 Certificate III in Individual Support (Ageing & Disability) at Stella College Australia. Includes 120+ hours work placement, job-ready training and nationally recognised certification.",
  keywords: [
    "CHC33021",
    "Certificate III in Individual Support",
    "Aged Care Course Australia",
    "Disability Support Course",
    "Stella College",
    "Aged care training",
    "Individual support course",
  ],
  openGraph: {
    title:
      "CHC33021 Certificate III in Individual Support | Stella College Australia",
    description:
      "Start your aged & disability care career with practical training, work placement and nationally recognised certification.",
    url: "https://www.stellacollege.edu.au/contact/top_course_australia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CHC33021 Certificate III in Individual Support – Stella College Australia",
    description:
      "Aged & disability care course with job-ready skills and 120+ hours placement.",
  },
};
const roles = [
  {
    title: "Personal Care Worker",
    icon: <UserRound size={38} />,
  },
  {
    title: "Home Support Worker",
    icon: <House size={38} />,
  },
  {
    title: "Disability Support Worker",
    icon: <Accessibility size={38} />,
  },
  {
    title: "Aged Care Assistant",
    icon: <HeartHandshake size={38} />,
  },
  {
    title: "Residential Care Worker",
    icon: <Home size={38} />,
  },
  {
    title: "Community Care Worker",
    icon: <Users size={38} />,
  },
];
export default function TopCourseAustralia() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    australian: false,
    postcode: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/australia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#130069", zIndex: 2, }}>

        <div style={{ backgroundColor: "#FFFBEA ", borderRadius: "20px 20px 0 0", borderBottomLeftRadius: "250px", borderBottomRightRadius: "250px", }}>
          {/* Header Section */}
          <header className="mt-6 pt-5">

            <div className="container">
              <div
                style={{
                  backgroundColor: "#130069",
                  borderRadius: "48px",
                  padding: "10px",
                }}
                className="d-block"
              >
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <div className="container-fluid">

                    {/* Logo */}
                    <Link href="/">
                      <Image
                        src={logo}
                        width={120}
                        height={50}
                        style={{ height: "auto" }}
                        priority

                        alt="Stella College logo"
                      />
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button
                      className="navbar-toggler border-0"
                      type="button"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      {/* Hamburger icon */}
                      {!menuOpen && (
                        <span className="navbar-toggler-icon"></span>
                      )}

                      {/* Cross icon */}
                      {menuOpen && (
                        <span
                          style={{
                            fontSize: "30px",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          ✕
                        </span>
                      )}
                    </button>

                    {/* Menu Items */}
                    <div
                      className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                      id="navbarNav"
                    >
                      <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item">
                          <Link
                            className="nav-link text-light"
                            href="/"
                            onClick={() => setMenuOpen(false)}
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link text-light"
                            href="/about-us"
                            onClick={() => setMenuOpen(false)}
                          >
                            About
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link text-light"
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>

                  </div>
                </nav>
              </div>
            </div>

          </header>

         <div
  className="position-relative mt-5 container px-3 text-start"
  style={{ opacity: 1 }}
>
  <h2
    className="fw-light fs-3 fs-md-1"
    style={{ color: "#130069" }}
  >
    Transform Lives with
  </h2>

  <h1
    className="fw-bold display-5 display-md-3 mb-4 mb-md-0"
    style={{
      color: "#130069",
      lineHeight: "1.4",
    }}
  >
    CHC33021 Certificate III{" "}
    <span>in Individual Support (Ageing & Disability) (R1)</span>
  </h1>

  <div className="container">
    <div className="row">

      {/* LEFT TEXT */}
      <div className="col-12 col-md-3 d-flex justify-content-start">
        <p
          className="mb-0"
          style={{
            maxWidth: "320px",
            color: "#130069",
            marginTop: "40px",
            fontSize: "20px",
            lineHeight: "2",
          }}
        >
          <style>{`
            @media (max-width: 767px) {
              .hero-desc { margin-top: 0 !important; font-size: 16px !important; }
              .hero-circle { width: 300px !important; height: 300px !important; margin: 0 auto; }
              .hero-title { font-size: 1.6rem !important; line-height: 1.4 !important; letter-spacing: 1px !important; }
              .hero-subtitle { font-size: 1.2rem !important; }
            }
          `}</style>
          <span
            className="hero-desc"
            style={{ marginTop: "120px", fontSize: "20px", lineHeight: "2", display: "block" }}
          >
            Specializing in Ageing and Disability care. Start your rewarding
            career in healthcare and make a real difference in people's lives.
          </span>
        </p>
      </div>

      {/* CIRCLE IMAGE + FORM */}
      <div className="col-12 col-md-6 hero-col-wrapper">

        <style jsx>{`

          /* ── Hero Col Wrapper ── */
          .hero-col-wrapper {
            display: flex;
            justify-content: center;
          }

          /* ── Circle ── */
          .hero-circle {
            width: 554px;
            height: 475px;
            background-color: #E4DEFF;
            border-radius: 50%;
            position: relative;
            flex-shrink: 0;
          }

          /* ── Apply Card — DESKTOP ── */
          .apply-card {
            position: absolute;
            top: 65%;
            left: 90%;
            transform: translate(-50%, -50%);
            background: #fff;
            border-radius: 12px;
            width: 350px;
          }

          /* ── TABLET ── */
          @media (max-width: 768px) {
            .hero-circle {
              width: 280px;
              height: 280px;
              overflow: hidden;
              border-radius: 50%;
              margin: 0 auto;
            }
          }

          @media (max-width: 480px) {
            .hero-circle {
              width: 220px;
              height: 220px;
            }
          }

          /* ── MOBILE: stack form BELOW image ── */
          @media (max-width: 767px) {
            .hero-col-wrapper {
              flex-direction: column !important;
              align-items: center !important;
            }

            /* KEY FIX: override absolute with static via CSS only */
            .apply-card {
              position: static !important;
              transform: none !important;
              width: 100% !important;
              max-width: 360px !important;
              margin-top: 24px !important;
              top: auto !important;
              left: auto !important;
              box-shadow: 0 4px 16px rgba(0,0,0,0.10);
            }
          }

          /* ── Form Styles ── */
          .toggle-wrap {
            display: flex;
            gap: 8px;
            margin-bottom: 14px;
          }
          .toggle-btn {
            flex: 1;
            padding: 9px 0;
            border-radius: 24px;
            border: none;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.15s;
          }
          .toggle-btn.active {
            background: #1a237e;
            color: #fff;
          }
          .toggle-btn.inactive {
            background: #e8e8e8;
            color: #888;
          }
          .enquire-btn {
            width: 100%;
            padding: 14px 0;
            background: #1a237e;
            color: #fff;
            border: none;
            border-radius: 28px;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: background 0.15s;
          }
          .enquire-btn:hover { background: #283593; }
          .enquire-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        `}</style>

        {/* Circle Image */}
        <div className="hero-circle">
          <Image
            alt="Course Image"
            src={oldpeople}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Apply Card — NO inline position styles, all handled by CSS above */}
        <div className="apply-card p-4 shadow">
          <h1 className="text-center mb-4" style={{ fontSize: "1.8rem" }}>
            Apply Now
          </h1>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

            <input
              className="apply-field form-control"
              type="text"
              placeholder="Full Name"
              required
              value={formData.user_name}
              onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
            />

            <input
              className="apply-field form-control"
              type="email"
              placeholder="Email"
              required
              value={formData.user_email}
              onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
            />

            <input
              className="apply-field form-control"
              type="text"
              placeholder="Phone Number"
              required
              value={formData.user_phone}
              onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })}
            />
 <input
              className="apply-field form-control"
              type="text"
              placeholder="PostCode"
              required
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
            />
            <label className="citizen-label mt-2 mb-1 fw-semibold">
             Are you a permanent resident or Australian Citizen?
            </label>

            <div className="toggle-wrap d-flex gap-2">
              <button
                type="button"
                className={`toggle-btn ${formData.australian ? "active" : ""}`}
                onClick={() => setFormData({ ...formData, australian: true })}
              >
                Yes
              </button>
              <button
                type="button"
                className={`toggle-btn ${!formData.australian ? "active" : ""}`}
                onClick={() => setFormData({ ...formData, australian: false })}
              >
                No
              </button>
            </div>

            <p className="citizen-label text-muted mt-2" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              By submitting your enquiry, you agree to our terms in the Privacy Policy
              and grant us permission to contact you.
            </p>

            {error && (
              <p className="text-danger text-center" style={{ fontSize: "13px" }}>{error}</p>
            )}

            {submitted && (
              <p className="text-success text-center" style={{ fontSize: "13px" }}>
                Enquiry sent successfully!
              </p>
            )}

            <button
              type="submit"
              className="enquire-btn btn btn-primary w-100 mt-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Enquire Now"}
            </button>

          </form>
        </div>

      </div>
      {/* end col */}

    </div>
  </div>
</div>
        </div>


        {/* Counter */}
        <div className="container position-relative " style={{ marginTop: "100px", zIndex: 1 }}>
          {/* Stats Box */}
          <div
            className="d-flex justify-content-between align-items-center flex-wrap text-center mx-auto"
            style={{
              backgroundColor: "#B6B0D0",
              borderRadius: "30px",
              maxWidth: "1350px",
              padding: "30px 20px",
              color: "#fff",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* COLUMN 1 */}
            <div className="col-12 col-md-3 py-3">
              <h3 className="fw-bold m-0 text-light fs-1 fs-md-2">10+</h3>
              <small className="fs-6">Year Experience</small>
            </div>

            {/* COLUMN 2 */}
            <div className="col-12 col-md-3 py-3">
              <h3 className="fw-bold m-0 text-light fs-1 fs-md-2">5★</h3>
              <small className="fs-6">Reviews</small>
            </div>

            {/* COLUMN 3 */}
            <div className="col-12 col-md-3 py-3">
              <h3 className="fw-bold m-0 text-light fs-1 fs-md-2">52</h3>
              <small className="fs-6">Weeks Duration</small>
            </div>

            {/* COLUMN 4 */}
            <div className="col-12 col-md-3 py-3">
              <h3 className="fw-bold m-0 text-light fs-1 fs-md-2">15  </h3>
              <small className="fs-6">Units </small>
              {/* <small className="fs-6">Virtual online or Face to Face (Victoria) study options available</small> */}
            </div>
          </div>
        </div>

        {/* career Opportunities */}
        <div className="container position-relative mt-5">
          <h2
            className="fw-bold text-center m-0"
            style={{
              color: "white",
              fontSize: "clamp(32px,5vw,64px)",
              // marginBottom: "40px",
            }}
          >
            <span>Career Outcomes</span><br />
            <span style={{ marginBottom: "40px", }}>& Industry Insights</span>
          </h2>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <Image
              alt="Career Insights"
              src={careerInsights}
              width={1200}
              height={400}
            />
          </div>
        </div>

        {/* pathway */}
        <section
          className="py-5"
          style={{ backgroundColor: "#16007A", marginTop: "60px", }}
        >
          <div className="container">
            <div className="row align-items-center g-5">

              {/* LEFT SIDE */}
              <div className="col-lg-6">
                <h1
                  className="fw-bold mb-4"
                  style={{
                    color: "#F4C400",
                    // fontSize: "60px",
                    lineHeight: "1.1",
                    marginBottom: "3rem",
                    fontSize: "clamp(32px,5vw,64px)",
                  }}
                >
                  Your Pathway to a
                  <br />
                  Rewarding Career
                </h1>

                {/* IMAGE BOX */}
                <div
                  className="position-relative"
                  style={{
                    backgroundColor: "#8F86C4",
                    borderRadius: "30px",
                    width: "100%",
                    maxWidth: "430px",
                    height: "270px",
                  }}
                >
                  <Image
                    src={pathway}
                    alt="Career"
                    className="img-fluid position-absolute"
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "380px",
                      bottom: "-30px",
                      left: "12px",
                    }}
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-lg-6">

                {/* CARD 1 */}
                <div
                  className="position-relative mb-4"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: "25px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Yellow Side */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-7px",
                      top: 0,
                      width: "20px",
                      height: "100%",
                      backgroundColor: "#B28E00",
                      borderRadius: "20px 0 0 20px",
                    }}
                  ></div>

                  <h3
                    className="text-center fw-semibold m-0"
                    style={{ color: "#16007A" }}
                  >
                    CHC43015 Certificate IV
                    <br />
                    in Ageing Support
                  </h3>
                </div>

                {/* CARD 2 */}
                <div
                  className="position-relative mb-4"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: "25px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-7px",
                      top: 0,
                      width: "20px",
                      height: "100%",
                      backgroundColor: "#B28E00",
                      borderRadius: "20px 0 0 20px",
                    }}
                  ></div>

                  <h3
                    className="text-center fw-semibold m-0"
                    style={{ color: "#16007A" }}
                  >
                    CHC43121 Certificate IV in
                    <br />
                    Disability Support
                  </h3>
                </div>

                {/* CARD 3 */}
                <div
                  className="position-relative"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: "25px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-7px",
                      top: 0,
                      width: "20px",
                      height: "100%",
                      backgroundColor: "#B28E00",
                      borderRadius: "20px 0 0 20px",
                    }}
                  ></div>

                  <h3
                    className="text-center fw-semibold m-0"
                    style={{ color: "#16007A" }}
                  >
                    CHC43415 Certificate IV in
                    <br />
                    Leisure & Health
                  </h3>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* future jobs roles  */}
        <section
          className="py-5"
          style={{
            background: "#17007A",
          }}
        >
          <div className="container">
            <div
              className="p-4 p-lg-5"
              style={{
                background:
                  "linear-gradient(135deg, #7B73B6 0%, #847CC0 50%, #8A7CC0 100%)",
                borderRadius: "30px",
              }}
            >
              {/* HEADING */}
              <div className="d-flex align-items-center justify-content-center mb-5 gap-3">
                <div
                  style={{
                    height: "1px",
                    width: "120px",
                    background: "#D9D9D9",
                  }}
                />

                <h2
                  className="fw-bold text-center m-0"
                  style={{
                    color: "#F4C400",
                    fontSize: "clamp(32px,5vw,64px)",
                  }}
                >
                  Potential future job roles
                </h2>

                <div
                  style={{
                    height: "1px",
                    width: "120px",
                    background: "#D9D9D9",
                  }}
                />
              </div>

              <div className="row align-items-center g-4">
                {/* LEFT SIDE CARDS */}
                <div className="col-lg-6">
                  <div className="row g-4">
                    {roles.map((role, index) => (
                      <div className="col-6" key={index}>
                        <div
                          className="h-100 d-flex flex-column justify-content-center align-items-center text-center"
                          style={{
                            background: "#B7B0D3",
                            borderRadius: "20px",
                            minHeight: "170px",
                            padding: "25px 15px",
                            border: "1px solid rgba(255,255,255,0.2)",
                          }}
                        >
                          {/* ICON */}
                          <div
                            className="d-flex align-items-center justify-content-center mb-3"
                            style={{
                              width: "70px",
                              height: "70px",
                              borderRadius: "50%",
                              background: "#fff",
                              color: "#5A46A8",
                            }}
                          >
                            {role.icon}
                          </div>

                          {/* TEXT */}
                          <h5
                            className="fw-bold mb-0"
                            style={{
                              color: "#fff",
                              lineHeight: "1.3",
                            }}
                          >
                            {role.title}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-12 col-md-6">
                  <div
                    className="position-relative overflow-hidden mx-auto"
                    style={{
                      background: "#1B008A",
                      borderRadius: "40px",
                      maxWidth: "500px",
                      minHeight: "391px",
                    }}
                  >
                    {/* CIRCLE */}
                    <div
                      className="position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: "478px",       // responsive size on mobile
                        maxWidth: "478px",   // limit for large screens
                        height: "487px",
                        maxHeight: "487px",
                        borderRadius: "50%",
                        background: "#6C5DB5",
                      }}
                    />
                    <div
                      className="circle-wrapper position-absolute top-50 start-50 translate-middle"
                    >
                    </div>

                    <Image
                      src={peopleold}
                      alt="Aged Care"
                      width={500}
                      style={{ top: "85px", objectFit: "contain" }}
                      height={500}
                      className="people-img position-relative d-block mx-auto"
                    />

                    <style jsx>{`
  /* DESKTOP */
  .circle-wrapper {
    width: 478px;
    height: 487px;
    background: #6C5DB5;
    border-radius: 50%;
    position: absolute;
  }

  .people-img {
    width: 350px;
    max-width: 82%;
    height: auto;
    margin-top: 40px;
    object-fit: contain;
    z-index: 2;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    .circle-wrapper {
      width: 40vw;    /* reduce for mobile */
      height: 40vw;
      max-width: 260px;
      
      max-height: 260px;
    }

    .people-img {
      width: 65%;
      top:"85px"
      overflow: hidden;
      max-width: 220px;
      margin-top: 20px;
    }
  }

  /* 📱 SMALL PHONES */
  @media (max-width: 480px) {
    .circle-wrapper {
      width: 40vw;
      height: 40vw;
      max-width: 210px;
      max-height: 210px;
    }

    .people-img {
      width: 60%;
        top:"85px"
      max-width: 200px;
      overflow: hidden;
      margin-top: 10px;
    }
  }
`}</style>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* gain from this course */}
        <section className="py-5" style={{ background: "#0a0450" }}>
          <div className="container  text-white">
            {/* <h2 className="fw-bold mb-4" style={{ color: "#ffcc00" }}>
              What You'll Gain From This Course
            </h2> */}
            <h2
              className="fw-bold text-center m-0"
              style={{
                color: "#F4C400",
                fontSize: "clamp(32px,5vw,64px)",
              }}
            >
              What You'll Gain From This Course
            </h2>

            <div className="row g-4 justify-content-center mt-4">

              <div className="col-md-5">
                <div className=" rounded-4 h-100" style={{ background: "#6f6aac", padding: "2.5rem" }}>
                  <Wrench size={48} className="mb-3" />
                  <h4 className="fw-bold text-light">Practical Skills</h4>
                  <p className="text-light">
                    Hands-on training in personal care, medication assistance,
                    mobility support, and daily living activities.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className=" rounded-4 h-100" style={{ background: "#6f6aac", padding: "2.5rem" }}>
                  <HeartPulse size={48} className="mb-3" />
                  <h4 className="fw-bold text-light">Clinical Knowledge</h4>
                  <p className="text-light">
                    Understanding of health conditions, infection control, emergency
                    procedures, and workplace safety.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className=" rounded-4 h-100" style={{ background: "#6f6aac", padding: "2.5rem" }}>
                  <MessageCircle size={48} className="mb-3" />
                  <h4 className="fw-bold text-light">Communication Skills</h4>
                  <p className="text-light">
                    Develop effective communication techniques for working with
                    clients, families, and healthcare teams.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className=" rounded-4 h-100" style={{ background: "#6f6aac", padding: "2.5rem" }}>
                  <BriefcaseBusiness size={48} className="mb-3" />
                  <h4 className="fw-bold text-light">Work Placement</h4>
                  <p className="text-light">
                    120 hours of supervised practical experience in aged care or
                    disability support facilities.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className=" rounded-4 h-100" style={{ background: "#6f6aac", padding: "2.5rem" }}>
                  <IdCard size={48} className="mb-3" />
                  <h4 className="fw-bold text-light">Career Support</h4>
                  <p className="text-light">
                    Resume building, interview preparation, and job placement
                    assistance upon graduation.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className=" rounded-4 h-100" style={{ background: "#6f6aac", padding: "2.5rem" }}>
                  <Users size={48} className="mb-3" />
                  <h4 className="fw-bold text-light">Ongoing Mentorship</h4>
                  <p className="text-light">
                    Access to experienced educators and industry professionals
                    throughout your learning journey.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* footer */}
        <section
          className="text-center text-white py-5"
          style={{
            background: "#0a0450",
            paddingTop: "80px",
          }}
        >
          <div
            className="container pt-5 pb-4"
            style={{
              background: "linear-gradient(180deg, #C59E00 0%, #312700 100%)",
              borderTopLeftRadius: "250px",
              borderTopRightRadius: "250px",
              color: "#000",
            }}
          >
            <h2
              className="fw-bold mb-3 text-light mt-4"
              style={{ fontSize: "clamp(28px, 6vw, 64px)" }}
            >
              Ready to Start Your <br />
              <span style={{ color: "#2d0a89" }}>Healthcare Journey?</span>
            </h2>

            {/* Responsive Paragraph */}
            <p
              className="mb-4 text-light text-center"
              style={{
                fontSize: "clamp(16px, 4vw, 24px)",
                lineHeight: "1.8",
                maxWidth: "90%",      // responsive width
                margin: "0 auto",
              }}
            >
              Join thousands of successful graduates who have transformed their lives
              and the lives of others through Stella College.
            </p>

            <button
              className=" px-5 py-3 fw-bold"
              style={{
                background: "#1e0a8a",
                fontSize: "clamp(25px, 4vw, 35px)",
                borderRadius: "15px",
                color: "white",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              
              >
              Enrol Now
            </button>
             

            {/* Bottom 3 Info Boxes */}
            <div className="row mt-5 justify-content-center g-3">
  <div className="col-md-3 col-10">
                <div
                  className="py-3 px-3 rounded-4 text-light"
                  style={{
                    boxShadow: "-2px 0px 4px 0px #00000040",
                    background: "#FFFFFF52",
                    color: "#000",
                    fontSize: "clamp(14px, 3vw, 20px)",


                  }}
                >
                  Registered Training Organisation
                </div>
              </div>
              <div className="col-md-3 col-10">
                <div
                  className="py-3 px-3 rounded-4 text-light"
                  style={{
                    boxShadow: "-2px 0px 4px 0px #00000040",
                    background: "#FFFFFF52",
                    color: "#000",
                    fontSize: "clamp(14px, 3vw, 20px)",


                  }}
                >
                  Government Approved Training
                </div>
              </div>

              <div className="col-md-3 col-10">
                <div
                  className="py-3 px-3 rounded-4 text-light"
                  style={{
                    boxShadow: "-2px 0px 4px 0px #00000040",
                    background: "#FFFFFF52",
                    color: "#000",
                    fontSize: "clamp(14px, 3vw, 20px)",

                  }}
                >
                  Nationally Recognized Qualification
                </div>
              </div>

              <div className="col-md-3 col-10">
                <div
                  className="py-3 px-3 rounded-4 text-light"
                  style={{
                    boxShadow: "-2px 0px 4px 0px #00000040",
                    background: "#FFFFFF52",
                    color: "#000",
                    fontSize: "clamp(14px, 3vw, 20px)",
                    paddingBottom: "60px",
                  }}
                >
                  Dedicated Career Support   
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}