"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import logo from "@/assets/img/logo/23.png";
import InjectableSvg from "@/hooks/InjectableSvg";
import course_data from "@/data/home-data/CourseData";
import { FaXTwitter } from "react-icons/fa6";

interface MobileMenuProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const MobileSidebar = ({ isActive, setIsActive }: MobileMenuProps) => {
  const router = useRouter();
  const allCourses = course_data[0]?.course_details || [];

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // ── Contact Modal State ──
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setFormError(null);
    setFormData({ user_name: "", user_email: "", user_phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);

    try {
      const res = await fetch("/api/contact", {
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
      setFormError(
        err instanceof Error ? err.message : "Unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  // ── Search Logic ──
  const courseSearchResults = useMemo(() => {
    if (!searchKeyword.trim()) return [];
    return allCourses.filter((course: any) =>
      course.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [searchKeyword]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    setShowSuggestions(keyword.trim().length > 0);
    setFilteredCourses(courseSearchResults);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchKeyword)}`);
      setShowSuggestions(false);
      setSearchKeyword("");
      setIsActive(false);
    } else {
      router.push("/courses");
      setIsActive(false);
    }
  };

  const handleSuggestionClick = (course: any) => {
    router.push(`/courses?category_id=${course.categoryId}`);
    setShowSuggestions(false);
    setSearchKeyword("");
    setIsActive(false);
  };

  return (
    <>
      <div className={isActive ? "mobile-menu-visible" : ""}>
        <div className="tgmobile__menu">
          <nav className="tgmobile__menu-box">
            <div onClick={() => setIsActive(false)} className="close-btn">
              <i className="tg-flaticon-close-1"></i>
            </div>

            {/* Logo */}
            <div className="nav-logo">
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>
            </div>

            {/* Search */}
            <div className="tgmobile__search" style={{ position: "relative" }}>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search For Course..."
                  value={searchKeyword}
                  onChange={handleSearchChange}
                  style={{
                    color: "#1a1a2e",
                    backgroundColor: "#fff",
                    border: "1px solid #444",
                    borderRadius: "4px",
                    padding: "10px 14px",
                    fontSize: "14px",
                    width: "100%",
                    outline: "none",
                  }}
                />
                <button type="submit" aria-label="Search" style={{ display: "none" }}>
                  <i className="fas fa-search"></i>
                </button>
              </form>

              {/* Suggestions dropdown */}
              {showSuggestions && courseSearchResults.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    backgroundColor: "#1a1a2e",
                    border: "1px solid #444",
                    maxHeight: "250px",
                    overflowY: "auto",
                    zIndex: 10,
                  }}
                >
                  {courseSearchResults.map((course: any, index: number) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(course)}
                      style={{
                        padding: "10px 14px",
                        borderBottom: "1px solid #333",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        ((
                          e.currentTarget as HTMLElement
                        ).style.backgroundColor = "#2d2d4a")
                      }
                      onMouseLeave={(e) =>
                        ((
                          e.currentTarget as HTMLElement
                        ).style.backgroundColor = "transparent")
                      }
                    >
                      {course.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Menu Items */}
            <div className="tgmobile__menu-outer">
              <MobileMenu />
            </div>

            {/* ── Contact Us Button ── */}
            <div style={{ padding: "12px 20px" }}>
              <button
                type="button"
                onClick={handleModalOpen}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#EA580C",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.3px",
                }}
              >
                📩 Contact Us
              </button>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <ul className="list-wrap">
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61583405805847" target="_blank" aria-label="Visit our Facebook page">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/stella.college/?igsh=a2lhbjYyNmk2amlo&utm_source=qr#" target="_blank" aria-label="Visit our Instagram page">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/training-practical-solutions-consultancy/"
                    target="_blank"
                    aria-label="Visit our LinkedIn page"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Overlay close area */}
        <div
          className="tgmobile__menu-backdrop "
          onClick={() => setIsActive(false)}
        ></div>
      </div>

      {/* ── Contact Us Modal ── */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            onClick={handleModalClose}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.55)",
              zIndex: 2000,
            }}
          />

          {/* Modal */}
          <div
            role="dialog"
            aria-modal="true"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2001,
              overflowY: "auto",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "80px 16px 40px",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                width: "100%",
                maxWidth: "480px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
            >
              {/* Header */}
              <div
              className='mt-4'
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 24px 8px",
                }}
              >
                <h5 style={{ margin: 0, fontWeight: 700, fontSize: "1.25rem", color: "#1a1a2e" }}>
                  Contact Us
                </h5>
                <button
                  onClick={handleModalClose}
                  aria-label="Close"
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "1.4rem",
                    cursor: "pointer",
                    color: "#666",
                    lineHeight: 1,
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Body */}
              <div style={{ padding: "8px 24px 24px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <div style={{ fontSize: "3rem", marginBottom: "12px" }}>✅</div>
                    <h6 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>
                      Thank you for reaching out!
                    </h6>
                    <p style={{ color: "#666", marginBottom: "20px" }}>
                      We have received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={handleModalClose}
                      className="btn btn-primary w-100"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>

                    {/* Error */}
                    {formError && (
                      <div className="alert alert-danger py-2 mb-3" role="alert">
                        {formError}
                      </div>
                    )}

                    {/* Full Name */}
                    <div className="mb-3">
                      <label htmlFor="mob-name" className="form-label fw-semibold">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="mob-name"
                        type="text"
                        name="user_name"
                        className="form-control form-control-lg"
                        placeholder="e.g. John Smith"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="mob-email" className="form-label fw-semibold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        id="mob-email"
                        type="email"
                        name="user_email"
                        className="form-control form-control-lg"
                        placeholder="e.g. john@example.com"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="mb-3">
                      <label htmlFor="mob-phone" className="form-label fw-semibold">
                        Phone Number{" "}
                       <span className="text-danger">*</span>
                      </label>
                      <input
                        id="mob-phone"
                        type="tel"
                        name="user_phone"
                        className="form-control form-control-lg"
                        placeholder="e.g. +61 400 000 000"
                        value={formData.user_phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <label htmlFor="mob-message" className="form-label fw-semibold">
                        Message 
                      </label>
                      <textarea
                        id="mob-message"
                        name="message"
                        className="form-control form-control-lg"
                        placeholder="Tell us what you're interested in..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Actions */}
                    <div className="d-flex flex-column gap-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
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
                          "Submit"
                        )}
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg"
                        onClick={handleModalClose}
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
        </>
      )}
    </>
  );
};

export default MobileSidebar;