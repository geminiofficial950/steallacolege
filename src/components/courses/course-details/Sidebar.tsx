"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import InjectableSvg from "@/hooks/InjectableSvg";
import BtnArrow from "@/svg/BtnArrow";
import intlTelInput from "intl-tel-input";
import type { Iti } from "intl-tel-input";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import img_1 from "@/assets/img/header page .png";
import img_2 from "@/assets/img/others/payment.png";
import { course_detail_data } from "@/data/home-data/coursedataeditor";

interface SidebarProps {
  courseId?: string;
}

const Sidebar = ({ courseId }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    postcode: "",
  });
  const [formErrors, setFormErrors] = useState<{ [k: string]: string }>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<Iti | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Get course data based on courseId
  const courseData = course_detail_data.course_list.find(
    (course: any) => course.courseId === courseId,
  );

  // Extract duration and units from the course data
  const overviewTab = courseData?.detail?.[0]?.tabs?.find(
    (tab: any) => tab.title === "Overview",
  );
  const description = overviewTab?.description || "";
  const isSentioCourse = courseData?.title?.toLowerCase().includes("sentio");
  // Debug: log the description to see what we're working with
  useEffect(() => {
    if (description) {
      console.log("Course Description:", description);
      console.log("Duration extracted:", courseData?.duration);
      console.log("Units extracted:", courseData?.units);
    }
  }, [description]);

  const onlyDigits = (value: string) => value.replace(/\D+/g, "");

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const openModalCapture = (e: any) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormValues({
      fullName: "",
      email: "",
      postcode: "",
    });
    setFormErrors({});
    setCaptchaToken(null);
    if (itiRef.current) {
      itiRef.current.setNumber("");
    }
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  // Initialize intl-tel-input when modal opens
  useEffect(() => {
    if (isModalOpen && phoneInputRef.current && !itiRef.current) {
      const options = {
        initialCountry: "au",
        separateDialCode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js",
        autoPlaceholder: "aggressive",
        formatOnDisplay: false,
        nationalMode: false,
        showFlags: true,
        useFullscreenPopup: false,
        strictMode: false,
      };

      itiRef.current = intlTelInput(phoneInputRef.current, options as any);
      phoneInputRef.current.addEventListener("input", handlePhoneInput);
      phoneInputRef.current.addEventListener("keypress", handlePhoneKeypress);
    }

    if (!isModalOpen && itiRef.current) {
      if (phoneInputRef.current) {
        phoneInputRef.current.removeEventListener("input", handlePhoneInput);
        phoneInputRef.current.removeEventListener(
          "keypress",
          handlePhoneKeypress,
        );
      }
      itiRef.current.destroy();
      itiRef.current = null;
    }
  }, [isModalOpen]);

  const handlePhoneInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    input.value = value;
  };

  const handlePhoneKeypress = (e: KeyboardEvent) => {
    const char = String.fromCharCode(e.which || e.keyCode);
    if (!/^\d+$/.test(char)) {
      e.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "postcode") {
      setFormValues((prev) => ({ ...prev, postcode: onlyDigits(value) }));
      return;
    }

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors: { [k: string]: string } = {};

    if (!formValues.fullName || formValues.fullName.trim().length < 3) {
      errors.fullName = "Full name must be at least 3 characters.";
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
    if (!emailOk) {
      errors.email = "Please enter a valid email address.";
    }

    if (itiRef.current && phoneInputRef.current) {
      const phoneValue = phoneInputRef.current.value || "";
      const digitCount = phoneValue.replace(/\D/g, "").length;

      if (digitCount === 0) {
        errors.phone = "Please enter a phone number.";
      } else if (digitCount > 10) {
        errors.phone = "Phone number cannot exceed 10 digits.";
      }
    }

    if (!formValues.postcode || !/^\d+$/.test(formValues.postcode)) {
      errors.postcode = "Postcode must contain digits only.";
    }

    if (!captchaToken) {
      errors.captcha = "Please complete the reCAPTCHA verification.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const phoneInputValue = phoneInputRef.current?.value || "";
      let phoneNumber = "";
      let selectedCountry = null;

      if (itiRef.current) {
        phoneNumber = itiRef.current.getNumber();
        selectedCountry = itiRef.current.getSelectedCountryData();

        if (!phoneNumber && phoneInputValue) {
          const dialCode = selectedCountry?.dialCode || "";
          phoneNumber = `+${dialCode}${phoneInputValue}`;
        }
      }

      const submissionData = {
        fullName: formValues.fullName,
        email: formValues.email,
        postcode: formValues.postcode,
        phone: phoneNumber,
        country: selectedCountry?.name || "",
        countryCode: selectedCountry?.iso2 || "",
        dialCode: selectedCountry?.dialCode || "",
        captchaToken: captchaToken,
      };
      console.log("Submitting form with data:", submissionData);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      console.log("Received response from server:", response);
      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Email sent successfully! We'll get back to you soon.");
        closeModal();
      } else {
        toast.error(data.error || "Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token && formErrors.captcha) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.captcha;
        return newErrors;
      });
    }
  };

  return (
    <>
      <div
        className="col-xl-3 col-lg-3 courses__details-sidebar-col"
        style={{ minWidth: "470px" }}
      >
        <div className="courses__details-sidebar">
          <div className="courses__details-video">
            <Image src={img_1} alt="img" />
          </div>
          <div className="courses__cost-wrap">
            <span>This Course Fee:</span>
            <h2 className="title">
              ${courseData?.price}
              {courseData?.removeprice && (
                <del style={{ marginLeft: "8px" }}>
                  ${courseData.removeprice}
                </del>
              )}
            </h2>
            {courseData?.certification === "Nationally Recognised Training" && (
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "13px",
                  color: "#fff",
                  opacity: 0.9,
                  lineHeight: 1.4,
                }}
              >
                For detailed information, please refer to Fee Schedule
              </p>
            )}
          </div>
          <div className="courses__information-wrap">
            <h3 className="title">Course includes:</h3>
            <ul className="list-wrap">
              {/* Certifications */}
              {courseData?.certification && (
                <li>
                  <InjectableSvg
                    src="/assets/img/icons/course_icon01.svg"
                    alt="img"
                    className="injectable"
                  />
                  Certifications
                  <span
                    style={{
                      marginLeft:
                        courseData?.certification ===
                          "Nationally Recognised Training" ||
                        courseData?.certification ===
                          "Digital Certificate and Badge"
                          ? "4%"
                          : "5%",
                    }}
                  >
                    {courseData?.certification}
                  </span>
                </li>
              )}
              {/* Duration */}
              {courseData?.duration && (
                <li>
                  <InjectableSvg
                    src="/assets/img/icons/course_icon02.svg"
                    alt="img"
                    className="injectable"
                  />
                  Duration
                  <span
                    style={{
                      marginLeft:
                        courseData?.duration === "52 Weeks"
                          ? "14%"
                          : [
                                "34 Weeks",
                                "1 Day",
                                "48 Hours",
                                "2 Weeks",
                                "30 Hours",
                                "20 Hours",
                              ].includes(courseData?.duration)
                            ? "16%"
                            : "14%",
                    }}
                  >
                    {courseData.duration}
                  </span>
                </li>
              )}
              {courseData?.Topics && (
                <li>
                  <InjectableSvg
                    src="/assets/img/icons/course_icon03.svg"
                    alt="img"
                    className="injectable"
                  />
                  Topics
                  <span
                    style={{
                      marginLeft:
                        courseData?.Topics === "6 Topics"
                          ? "20%"
                          : courseData?.Topics === "5 Topics"
                            ? "20%"
                            : "12%",
                    }}
                  >
                    {courseData.Topics}
                  </span>
                </li>
              )}

              {courseData?.modules && (
                <li>
                  <InjectableSvg
                    src="/assets/img/icons/course_icon03.svg"
                    alt="img"
                    className="injectable"
                  />
                  Modules
                  <span
                    style={{
                      marginLeft:
                        courseData?.modules === "5" ||
                        courseData?.modules === "4"
                          ? "14%"
                          : "19%",
                    }}
                  >
                    {courseData.modules}
                  </span>
                </li>
              )}

              {/* Units */}
              {courseData?.units && (
                <li>
                  <InjectableSvg
                    src="/assets/img/icons/course_icon03.svg"
                    alt="img"
                    className="injectable"
                  />
                  Units
                  <span
                    style={{
                      marginLeft:
                        courseData?.units === "15 Units" ||
                        courseData?.units === "18 Units" ||
                        courseData?.units === "17 Units" ||
                        courseData?.units === "10 Units" ||
                        courseData?.units === "12 Units"
                          ? "21%"
                          : "19%",
                    }}
                  >
                    {courseData.units}
                  </span>
                </li>
              )}
              <li style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "22px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <InjectableSvg
                    src="/assets/img/icons/course_icon05.svg"
                    alt="img"
                    className="injectable"
                  />
                </div>
                Delivery Mode
                <span
                  style={{
                    marginLeft:
                      courseData?.modeofdelivery === "Face to Face"
                        ? "2%"
                        : courseData?.modeofdelivery === "Workshop + Online"
                          ? "3%"
                          : courseData?.modeofdelivery === "Online" ||
                              courseData?.modeofdelivery ===
                                "Classroom, Virtual Classroom(Online), Workplace"
                            ? "12%"
                            : "1%",
                  }}
                >
                  {courseData?.modeofdelivery}
                </span>
              </li>
            </ul>
          </div>
          <div className="courses__payment">
            <h3 className="title">Secure Payment:</h3>
            <Image src={img_2} alt="img" />
          </div>
          <div className="courses__details-social">
            <h3 className="title">Share this course:</h3>
            <ul className="list-wrap">
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=61583405805847"
                  target="_blank"
                  aria-label="Visit our Facebook page"
                >
                  <i className="fab fa-facebook-f"></i>
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
              <li>
                <Link
                  href="https://www.instagram.com/stella.college/?igsh=a2lhbjYyNmk2amlo&utm_source=qr#"
                  target="_blank"
                  aria-label="Visit our Instagram page"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="courses__details-enroll">
            <div className="tg-button-wrap">
              <p
                className="btn btn-two arrow-btn"
                onClickCapture={openModalCapture}
              >
                Enquiry Here
                <BtnArrow />
              </p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="tg-modal-overlay"
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
          onClick={closeModal}
        >
          <div
            className="tg-modal-content container"
            style={{
              background: "#fff",
              borderRadius: 8,
              maxWidth: 600,
              width: "100%",
              maxHeight: "77vh",
              overflowY: "auto",
              marginTop: "180px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5 className="mb-0">Request a Callback</h5>

              <button
                onClick={closeModal}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            {/* 🔥 CONDITIONAL RENDER */}
            <div style={{ padding: "20px" }}>
              {isSentioCourse ? (
                // ✅ SENTIO → SHOW EMBED FORM
                <iframe
                  src="https://form.platoforms.com/fr0sh2hkqnr"
                  width="100%"
                  height="600"
                  style={{
                    border: "none",
                    borderRadius: "8px",
                  }}
                  title="Sentio Form"
                />
              ) : (
                // ✅ OTHER COURSES → SHOW OLD FORM
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        value={formValues.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label">Postcode</label>
                      <input
                        type="text"
                        className="form-control"
                        name="postcode"
                        value={formValues.postcode}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Phone</label>
                      <input
                        ref={phoneInputRef}
                        type="tel"
                        className="form-control"
                      />
                    </div>

                    <div className="col-12">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={
                          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
                        }
                        onChange={onCaptchaChange}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end mt-4 gap-2">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      <style>
        {`
      .courses__details-sidebar {
        position: sticky;
        top: 120px;
        z-index: 5;
      }
      @media (max-width: 991.98px) {
        .courses__details-sidebar {
          position: static;
          top: auto;
        }

      }
      @media (max-width: 390px) {
        .col-xl-3.col-lg-3 {
          min-width: 100% !important;
        }
      }
    `}
      </style>
    </>
  );
};

export default Sidebar;
