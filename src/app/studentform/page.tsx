"use client";

export default function SupportFormPage() {
  return (
    <div className="form-wrapper">
      <h2 className="text-center mb-4">Support Request Form</h2>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeCYq_v25mr9sLUEBb0K2syB1HLLgtyFgLMEAL40OmfttJSTQ/viewform?embedded=true"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      >
        Loading…
      </iframe>

      <style jsx>{`
        .form-wrapper {
          padding: 20px;
          height: 100vh;
          background: #f8f9fa;
        }

        iframe {
          height: 85vh;
          border-radius: 10px;
          background: white;
        }
      `}</style>
    </div>
  );
}
