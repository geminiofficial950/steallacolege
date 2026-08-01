"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const comparisonData = [
  {
    feature: "1-on-1 Tutor Support",
    us: "Yes, Until You Finish",
    other: "Limited or None",
  },
  {
    feature: "After-Hours/Weekend Help",
    us: "Available",
    other: "Office Hours Only",
  },
  {
    feature: "Fast Completion Options",
    us: "Yes",
    other: "Fixed Timelines",
  },
  {
    feature: "Trustpilot Rating",
    us: "⭐ 4.8 (#1 in Australia)",
    other: "Not Ranked or Lower",
  },
  {
    feature: "Designed for Busy Professionals",
    us: "Yes",
    other: "Mostly Full-Time Only",
  },
];
 const jobs = [
    "Care Assistant",
    "Aged Care Worker",
    "Personal Care Worker",
    "Care Manager",
    "Disability Support Worker",
    "Residential Care Officer",
  ];

export default function ComparisonTable() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
            How <span style={{ color: "#3b5998" }}>We</span>{" "}
            <span style={{ color: "#dc3545" }}>Compare</span>
          </h2>
        </div>

        <div className="card shadow-sm mx-auto" style={{ maxWidth: "1200px", borderRadius: "20px", overflow: "hidden" }}>
          <div className="table-responsive">
            <table className="table mb-0">
              <thead style={{ backgroundColor: "blue" }}>
                <tr>
                  <th scope="col" className="text-black fw-bold py-4 ps-4" style={{ fontSize: "1.25rem" }}>
                    Feature
                  </th>
                  <th scope="col" className="text-black fw-bold py-4 text-center" style={{ fontSize: "1.25rem" }}>
                    Us
                  </th>
                  <th scope="col" className="text-black fw-bold py-4 text-center" style={{ fontSize: "1.25rem" }}>
                    Other Providers
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 !== 0 ? "#f0f2f9" : "white",
                    }}
                  >
                    <td className="py-4 ps-4 fw-semibold" style={{ fontSize: "1.1rem" }}>
                      {row.feature}
                    </td>
                    <td className="py-4 text-center">
                      {row.us.includes("⭐") ? (
                        <span style={{ fontSize: "1.05rem" }}>{row.us}</span>
                      ) : (
                        <span className="d-flex align-items-center justify-content-center" style={{ color: "#3b5998" }}>
                          <FaCheckCircle className="me-2" size={20} />
                          <span style={{ fontSize: "1.05rem" }}>{row.us}</span>
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      <span className="d-flex align-items-center justify-content-center" style={{ color: "#dc3545" }}>
                        <FaTimesCircle className="me-2" size={20} />
                        <span style={{ fontSize: "1.05rem" }}>{row.other}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
       <div className="container py-5">
      <h2 className="text-center mb-4">Job Outcomes</h2>
      <div className="row g-3">
        {jobs.map((job, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title m-0 text-center">{job}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}