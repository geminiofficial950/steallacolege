'use client';
import { handleContactFormAction } from '@/app/actions/sendContactEmail';
import BtnArrow from '@/svg/BtnArrow';
import React, { useActionState } from 'react';

export default function ContactForm() {
  const [state, formAction] = useActionState(handleContactFormAction, { success: false });

  return (
    <form action={formAction} id="contact-form" className="contact-form">
      {/* Row 1 — Name, Phone, Email */}
      <div className="form-row">
        <div className="form-grp">
          <input name="user_name" type="text" placeholder="Name *" required />
        </div> 
       
        <div className="form-grp">
          <input name="user_phone" type="text" placeholder="Phone number *" required />
        </div>
        <div className="form-grp">
          <input name="user_email" type="email" placeholder="E-mail *" required />
        </div>
      </div>

      {/* Row 2 — Textarea */}
      <div className="form-row">
        <div className="form-grp w-full">
          <textarea
            name="message"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-two arrow-btn">
        Submit Now <BtnArrow />
      </button>

      {/* Response messages */}
      {state.success && <p className="text-success mt-2">✅ Message sent successfully!</p>}
      {state.error && <p className="text-danger mt-2">❌ Error: {state.error}</p>}

      {/* ✅ Responsive CSS */}
      <style jsx>{`
        .contact-form {
          width: 100%;
        }

        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
        }

        .form-grp {
          flex: 1;
          min-width: 250px;
        }

        .form-grp input,
        .form-grp textarea {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
          }

          .form-grp {
            width: 100%;
            min-width: 100%;
          }

          button {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
}
