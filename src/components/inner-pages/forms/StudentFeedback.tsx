"use client";

import { useState } from "react";

const FORM_URL = "https://form.platoforms.com/form/fr4sdh1oj0c";

const StudentFeedback = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="student-feedback mb-5 pb-4">
      <h2 className="title">Student Feedback</h2>
      <h3 className="student-feedback__subtitle">Your Voice Matters</h3>

      <p>
        At Stella College, we value your feedback and welcome it at any time during
        your course. We don&apos;t ask you to wait until your course finishes. Your
        responses help us monitor and continuously improve our training, assessment
        and support services in line with the Standards for RTOs 2025.
      </p>

      <h3 className="mt-4">How to Provide Feedback</h3>
      <p>You can submit feedback in several ways:</p>

      <ol className="student-feedback__list">
        <li>
          <strong>Online Feedback Form</strong> (by clicking the button below):
          Complete our Student Feedback Form at any stage of your course
        </li>
        <li>
          <strong>In Person:</strong> Speak with your trainer, assessor
        </li>
        <li>
          <strong>Student Services team or meeting:</strong> you can schedule one
          from the website (under{" "}
          <a href="/current-student">Student Hub – Schedule a meeting</a>)
        </li>
        <li>
          <strong>By Email:</strong> Send your feedback directly to Student Services
          at{" "}
          <a href="mailto:info@stellacollege.edu.au">info@stellacollege.edu.au</a>
        </li>
      </ol>

      <p>Feedback can be submitted anonymously if you prefer.</p>

      <div className="mt-4 mb-3">
        {!showForm ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            Feedback Form
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowForm(false)}
          >
            Close Form
          </button>
        )}
      </div>

      {showForm && (
        <div id="student-feedback-form" className="student-feedback__form mt-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className="mb-0" style={{ fontSize: "18px" }}>
              Student Feedback Form
            </h4>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setShowForm(false)}
              aria-label="Close feedback form"
            >
              ✕ Close
            </button>
          </div>
          <iframe
            src={FORM_URL}
            title="Student Feedback Form"
            className="w-100"
            style={{
              minHeight: "720px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default StudentFeedback;
