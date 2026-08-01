"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import newsletter_img1 from "@/assets/img/others/newsletter_img.png";
import newsletter_img2 from "@/assets/img/others/newsletter_shape01.png";
import newsletter_img3 from "@/assets/img/others/newsletter_shape02.png";
import newsletter_img4 from "@/assets/img/others/newsletter_shape03.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          data.message ||
            "Thank you for subscribing! Check your email for confirmation.",
          {
            position: "top-center",
            autoClose: 5000,
          },
        );
        setEmail(""); // Clear the input field
      } else {
        toast.error(data.error || "Failed to subscribe. Please try again.", {
          position: "top-center",
          autoClose: 4000,
        });
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
        autoClose: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="newsletter__area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="newsletter__img-wrap">
              <Image src={newsletter_img1} alt="img" />
              <Image
                src={newsletter_img2}
                alt="img"
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <Image
                src={newsletter_img3}
                alt="img"
                className="alltuchtopdown"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="newsletter__content">
              <h2 className="title">
                Want to stay <span>informed</span> about <br /> new{" "}
                <span>courses & study?</span>
              </h2>
              <div className="newsletter__form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Type your e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    required
                  />
                  <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter__shape">
        <Image
          src={newsletter_img4}
          alt="img"
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default Newsletter;
