import Image from "next/image";
import event_details_img1 from "@/assets/img/student hub/placement information.png";

const Placement = () => {
  return (
    <section className="event__details-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="event__details-thumb mb-4">
              <Image src={event_details_img1} alt="Placement Information" />
            </div>

            <div className="event__details-content-wrap">
              <div className="event__details-content">
                <h2 className="title mb-3">Placement Information</h2>
                <p>
                  Stella College’s industry connections and regular
                  consultations ensure you will be trained the way that
                  employers expect. Most Stella College training courses require
                  a practical placement component – this page includes further
                  information about these requirements.
                </p>

                <h4 className="title-two mt-5 mb-3">
                  Placement hours and their requirements
                </h4>
                <p>
                  The document below provides further information about the
                  minimum required hours for each qualification and their
                  specific requirements for each program:
                </p>

                {/* Placement Table */}
                <div className="table-responsive my-4">
                  <table className="table table-bordered table-striped placement-hours-table">
                    <thead className="table-dark">
                      <tr>
                        <th>Code</th>
                        <th>Course Name</th>
                        <th style={{ whiteSpace: "nowrap", minWidth: "110px" }}>
                          Hours
                        </th>
                        <th>Example of Organisation Type</th>
                        <th>Specific Placement Requirements</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>CHC33021</td>
                        <td>
                          Certificate III in Individual Support (Ageing and
                          Disability)
                        </td>
                        <td style={{ whiteSpace: "nowrap" }}>Minimum 120</td>
                        <td>
                          Residential Aged Care Facility and NDIS disability
                          support service provider
                        </td>
                        <td>
                          Must include experience working with minimum 3
                          residents/clients
                        </td>
                      </tr>
                      <tr>
                        <td>CHC43015</td>
                        <td>Certificate IV in Ageing Support</td>
                        <td style={{ whiteSpace: "nowrap" }}>Minimum 120</td>
                        <td>Residential Aged Care Facility</td>
                        <td>
                          Must include experience working with minimum 3
                          residents/clients
                        </td>
                      </tr>
                      <tr>
                        <td>CHC43121</td>
                        <td>Certificate IV in Disability Support</td>
                        <td style={{ whiteSpace: "nowrap" }}>Minimum 120</td>
                        <td>
                          NDIS disability support service provider, must be
                          approved by trainer
                        </td>
                        <td>
                          Must include experience working with minimum 3 clients
                        </td>
                      </tr>
                      <tr>
                        <td>CHC43415</td>
                        <td>Certificate IV in Leisure & Health</td>
                        <td style={{ whiteSpace: "nowrap" }}>Minimum 120</td>
                        <td>
                          RACF or another organisation with activities/lifestyle
                          program
                        </td>
                        <td>
                          Must include experience working in
                          activities/lifestyle program under qualified staff
                        </td>
                      </tr>
                      <tr>
                        <td>FBP30121</td>
                        <td>Certificate III in Food Processing</td>
                        <td style={{ whiteSpace: "nowrap" }}>Minimum 100</td>
                        <td>Food Processing Industry</td>
                        <td>Food Processing Facility</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="title-two mt-5 mb-3">
                  Who organises your placement?
                </h4>
                <p>
                  If your course requires a practical placement as part of your
                  training, we will assist you to source a suitable placement
                  and, in many cases, we organise it for you. This means it is
                  especially important that you treat this valuable opportunity
                  as a chance to secure future employment or as a good reference
                  for your next job application.
                </p>
                <p>
                  We will source and/or organise one placement opportunity in
                  Victoria for each student enrolled in any of these four
                  courses:
                </p>
                <ul className="list-wrap">
                  <li>Certificate III in Individual Support</li>
                  <li>Certificate IV in Ageing Support</li>
                  <li>Certificate IV in Disability Support</li>
                  <li>Certificate IV in Leisure and Health</li>
                </ul>

                <p>
                  As these placements will be sourced in the Melbourne
                  metropolitan area, rural and interstate students should
                  consider whether they can source a local placement opportunity
                  themselves prior to enrolment. Please discuss this with us
                  before applying, as we may be able to assist with rural and
                  regional areas.
                </p>

                <h4 className="title-two mt-5 mb-3">
                  Placement organisation process
                </h4>
                <p>
                  Your readiness for placement is determined by a qualified
                  trainer. Once you have completed sufficient and relevant
                  training, ask your trainer if you are ready to start a
                  placement. Your trainer will discuss your readiness and advise
                  the next steps.
                </p>

                <h4 className="title-two mt-5 mb-3">
                  What if I organise my own placement?
                </h4>
                <p>
                  If you organise your own placement, there are important
                  processes to be followed and documents that must be completed.
                  This ensures the organisation is suitable, insurance is in
                  place, and your hours can be credited towards your course
                  units.
                </p>

                <h4 className="title-two mt-5 mb-3">
                  Already working in a relevant role?
                </h4>
                <p>
                  Yes, you can complete your placement at your workplace,
                  provided it meets Stella College standards. You must complete
                  all placement tasks and maintain a logbook to verify hours.
                </p>

                <h4 className="title-two mt-5 mb-3">
                  Your personal presentation
                </h4>
                <p>
                  As you will be doing your placement in a health, community
                  services or food industry, you must ensure that your grooming,
                  hygiene and presentation are professional.
                </p>
                <ul className="list-wrap">
                  <li>Appropriate clothing</li>
                  <li>Dark socks and closed-in black rubber-soled footwear</li>
                  <li>Hair longer than your collar must be tied back</li>
                  <li>Daily shower and use of deodorant</li>
                </ul>

                <h4 className="title-two mt-5 mb-3">Police Checks</h4>
                <p>
                  A clear, current national police check is required for
                  placement. Apply for it yourself at least two months prior to
                  your placement to avoid delays.
                </p>

                <h4 className="title-two mt-5 mb-3">
                  Working with Children Check
                </h4>
                <p>
                  Students in Victoria must apply online as a volunteer (no
                  charge). Other states have their own requirements.
                </p>

                <h4 className="title-two mt-5 mb-3">
                  NDIS Worker Screening Check
                </h4>
                <p>
                  Students in aged care, disability or leisure and health
                  courses may require an NDIS Worker Screening Check. Apply
                  early to avoid delays.
                </p>

                <h4 className="title-two mt-5 mb-3">
                  Immunisations and Placements
                </h4>
                <p>
                  Many placement organisations now require proof of
                  immunisation. If you cannot meet vaccination requirements,
                  some placements may be refused. Please discuss with your
                  trainer before enrolment if unsure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
