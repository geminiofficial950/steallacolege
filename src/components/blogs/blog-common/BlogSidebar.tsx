"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Categories from "./Categories";
import LatestPost from "./LatestPost";
import intlTelInput from "intl-tel-input";
import type { Iti } from "intl-tel-input";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";

interface styleType {
  style_1?: boolean;
}

const BlogSidebar = ({ style_1 }: styleType) => {
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

  const onlyDigits = (value: string) => value.replace(/\D+/g, "");

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
          handlePhoneKeypress
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
        phoneRaw: phoneInputValue,
        country: selectedCountry?.name || "",
        countryCode: selectedCountry?.iso2 || "",
        dialCode: selectedCountry?.dialCode || "",
        captchaToken: captchaToken,
        source: "blog",
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

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
      <div className="col-xl-3 col-lg-4">
        <aside
          className={`blog-sidebar ${style_1 ? "blog-sidebar-two" : ""}`}
        >
          <div className="courses__item-bottom mb-4">
            <button
              onClick={openModalCapture}
              className="btn btn-primary d-flex align-items-center"
              style={{
                width: "100%",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span className="me-2">Enquire Now</span>
              <i className="flaticon-arrow-right"></i>
            </button>
          </div>
          <Categories />
          <LatestPost />
        </aside>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="tg-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contactModalTitle"
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
              maxWidth: 560,
              width: "100%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="row">
              <div className="col-12">
                <div
                  style={{
                    padding: "20px 24px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <h5 id="contactModalTitle" className="mb-0">
                    Request a Callback
                  </h5>
                </div>
              </div>
              <div className="col-12">
                <form onSubmit={handleSubmit} style={{ padding: "20px 24px" }}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        placeholder="John Doe"
                        value={formValues.fullName}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.fullName && (
                        <small className="text-danger">
                          {formErrors.fullName}
                        </small>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="john@example.com"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.email && (
                        <small className="text-danger">
                          {formErrors.email}
                        </small>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Postcode</label>
                      <input
                        type="text"
                        className="form-control"
                        name="postcode"
                        placeholder="123456"
                        value={formValues.postcode}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.postcode && (
                        <small className="text-danger">
                          {formErrors.postcode}
                        </small>
                      )}
                    </div>
                    <div className="col-12">
                      <label className="form-label">Phone number</label>
                      <input
                        ref={phoneInputRef}
                        type="tel"
                        className="form-control"
                        placeholder="Enter phone number"
                        maxLength={10}
                        required
                      />
                      {formErrors.phone && (
                        <small className="text-danger">
                          {formErrors.phone}
                        </small>
                      )}
                      <small className="text-muted d-block mt-1">
                        Maximum 10 digits, numbers only
                      </small>
                    </div>
                    <div className="col-12">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={
                          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
                        }
                        onChange={onCaptchaChange}
                      />
                      {formErrors.captcha && (
                        <small className="text-danger d-block mt-2">
                          {formErrors.captcha}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default BlogSidebar;