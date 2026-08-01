import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Expression of interest",
    text: "Submit your expression of interest online or by phone. It is free with no obligation to enrol. You then receive the course information and related details along with a call from our team to guide you through.",
  },
  {
    id: 2,
    title: "Evaluation and eligibility",
    text: "Provide the requested documents for evaluation and complete a short language, literacy, numeracy and digital skills (LLND) assessment. We confirm your eligibility for your chosen course.",
  },
  {
    id: 3,
    title: "Pre-training review",
    text: "A check that the course and training are right for you. We identify any extra support you may need and check for credit transfer or recognition of prior learning (RPL) opportunities.",
  },
  {
    id: 4,
    title: "Confirmation of enrolment",
    text: "Welcome to your course. Your enrolment confirmation includes fee payment, access to your training plan and login details for your learning platform.",
  },
];

const ApplicationProcess = () => {
  return (
    <section className="nrt-application-process">
      <div className="container" style={{ maxWidth: "1400px" }}>
        <p className="nrt-application-process__eyebrow">
          Stella College | RTO 41290
        </p>
        <h2 className="nrt-application-process__title">Application process</h2>

        <div className="nrt-application-process__actions">
          <Link
            href="/contact"
            className="nrt-application-process__btn nrt-application-process__btn--primary"
          >
            Apply now
          </Link>
        </div>

        <div className="nrt-application-process__steps">
          {steps.map((step) => (
            <div key={step.id} className="nrt-application-process__step">
              <div className="nrt-application-process__icon" aria-hidden="true">
                {step.id}
              </div>
              <h3 className="nrt-application-process__step-title">
                {step.title}
              </h3>
              <p className="nrt-application-process__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .nrt-application-process {
          padding: 70px 0 90px;
          background: #fff;
        }

        .nrt-application-process__eyebrow {
          margin: 0 0 8px;
          color: #8b8b9e;
          font-size: 14px;
          font-weight: 500;
        }

        .nrt-application-process__title {
          margin: 0 0 28px;
          color: #1c1a4a;
          font-size: 42px;
          line-height: 1.15;
          font-weight: 700;
        }

        .nrt-application-process__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 56px;
        }

        .nrt-application-process__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition:
            background-color 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;
        }

        .nrt-application-process__btn--primary {
          background: #5751e1;
          color: #fff;
          border: 1px solid #5751e1;
        }

        .nrt-application-process__btn--primary:hover {
          background: #433cce;
          border-color: #433cce;
          color: #fff;
        }

        .nrt-application-process__btn--secondary {
          background: #fff;
          color: #1c1a4a;
          border: 1px solid #cfcfe3;
        }

        .nrt-application-process__btn--secondary:hover {
          border-color: #5751e1;
          color: #5751e1;
        }

        .nrt-application-process__steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
          position: relative;
        }

        .nrt-application-process__steps::before {
          content: "";
          position: absolute;
          top: 24px;
          left: calc(12.5% + 12px);
          right: calc(12.5% + 12px);
          height: 2px;
          background: #e4e4ef;
          z-index: 0;
        }

        .nrt-application-process__step {
          position: relative;
          z-index: 1;
          text-align: left;
        }

        .nrt-application-process__icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #5751e1;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
          box-shadow: 0 0 0 8px #fff;
        }

        .nrt-application-process__step-title {
          margin: 0 0 12px;
          color: #1c1a4a;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
        }

        .nrt-application-process__step-text {
          margin: 0;
          color: #5c5a7a;
          font-size: 15px;
          line-height: 1.65;
        }

        @media (max-width: 991.98px) {
          .nrt-application-process {
            padding: 50px 0 60px;
          }

          .nrt-application-process__title {
            font-size: 32px;
          }

          .nrt-application-process__steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 36px 24px;
          }

          .nrt-application-process__steps::before {
            display: none;
          }
        }

        @media (max-width: 575.98px) {
          .nrt-application-process__title {
            font-size: 28px;
          }

          .nrt-application-process__steps {
            grid-template-columns: 1fr;
          }

          .nrt-application-process__actions {
            flex-direction: column;
          }

          .nrt-application-process__btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ApplicationProcess;
