import Image from "next/image";
import StudentFeedback from "./StudentFeedback";

const pdfs = [
  {
    title: "Complaint Application Form",
    src: "/assets/pdf/newpdf/Complaint Application Form_V2.0_2026.pdf",
  },
  {
    title: "Credit Transfer Application Form",
    src: "/assets/pdf/newpdf/Credit Transfer Application Form_V1.2_2026.pdf",
  },
  {
    title: "Enrolment Form",
    src: "/assets/pdf/newpdf/Enrolment Form_V2.1_2026.pdf",
  },
  {
    title: "Appeal Record Form",
    src: "/assets/pdf/newpdf/Appeal Record Form_V1.2_2026.pdf",
  },
];

const policy_pdfs = [
  {
    title: "Complaint Policy and Procedure",
    src: "/assets/pdf/newpdf/Complaint Policy and Procedure_V2.0_2026.pdf",
  },
  {
    title: "Credit Transfer and RPL Policy and Procedure",
    src: "/assets/pdf/newpdf/Credit Transfer and RPL Policy and Procedure.pdf",
  },
  {
    title: "Fee and Refund Policy and Procedure",
    src: "/assets/pdf/newpdf/Fee and Refund Policy and Procedure_V2.0.pdf",
  },
  {
    title: "PTR and LLND Policy and Procedure",
    src: "/assets/pdf/newpdf/PTR and LLND Policy and Procedure_V2.pdf",
  },
  {
    title: "Appeals Policy and Procedure",
    src: "/assets/pdf/newpdf/Appeals Policy and Procedure_V2.0_2026.pdf",
  },
  {
    title: "Enrolment Policy and Procedure",
    src: "/assets/pdf/newpdf/Enrolment Policy and Procedure_V2.0_2026.pdf",
  },
  {
    title: "AQF Qualification Issuance Policy",
    src: "/assets/pdf/newpdf/AQF Qualification Issuance Policy.pdf",
  },
  {
    title: "Access, Equity, Welfare, Wellbeing and Student Support",
    src: "/assets/pdf/newpdf/Access Equity Welfare Wellbeing and Student Support.pdf",
  },
  {
    title: "Code of Conduct",
    src: "/assets/pdf/newpdf/Code of Conduct_V2.0_2026.pdf",
  },
  {
    title: "Student Handbook",
    src: "/assets/pdf/newpdf/Student Handbook_V2.0_2026.pdf",
  },
];

import event_details_img1 from "@/assets/img/student hub/policy forms.png";

const Forms = () => {
  return (
    <section className="event__details-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            <div className="event__details-thumb">
              <Image src={event_details_img1} alt="img" />
            </div>

            <div className="event__details-content-wrap">
              <div className="row">
                <div className="col-12">

                  <div className="event__details-content">
                    <StudentFeedback />

                    <h2 className="title">Forms and Policies</h2>

                    <p>
                      Access all essential forms and policies for seamless engagement with Stella College.
                    </p>

                    <h2 className="mt-4">Forms</h2>

                    {/* -------- GRID START -------- */}
                    <div className="row mt-4">

                      {pdfs.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                          <div className="p-3" style={{ border: "1px solid #ddd", borderRadius: "8px", height: "100%" }}>
                            <iframe
                              src={`${item.src}#toolbar=0&navpanes=0&scrollbar=0`}
                              className="w-100"
                              style={{ height: "350px", border: "1px solid #ddd", borderRadius: "8px" }}
                            ></iframe>
                            <h4 className="text-center mt-3 mb-3">{item.title}</h4>
                            {/* Mobile-only download button */}
                            <div className="d-block d-md-none mt-3 text-center">
                              <a href={item.src} download className="btn btn-primary">
                                Download PDF
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                    {/* -------- GRID END -------- */}

                  </div> <div className="event__details-content">

                    <h2 className="mt-4">Policy</h2>

                    {/* -------- GRID START -------- */}
                    <div className="row mt-4">

                      {policy_pdfs.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                          <div className="p-3" style={{ border: "1px solid #ddd", borderRadius: "8px", height: "100%" }}>
                            <iframe
                              src={`${item.src}#toolbar=0&navpanes=0&scrollbar=0`}
                              className="w-100"
                              style={{ height: "350px", border: "1px solid #ddd", borderRadius: "8px" }}
                            ></iframe>
                            <h4 className="text-center mt-3 mb-3">{item.title}</h4>
                            {/* Mobile-only download button */}
                            <div className="d-block d-md-none mt-3 text-center">
                              <a href={item.src} download className="btn btn-primary">
                                Download PDF
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                    {/* -------- GRID END -------- */}

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;