import Image from "next/image";
import event_details_img1 from "@/assets/img/CORPORATE HUB/apprenticeship traineeship.png";

const Trainee = () => {
  return (
    <section className="event__details-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="event__details-thumb mb-4">
              <Image src={event_details_img1} alt="Apprenticeship & Traineeship" />
            </div>

            <div className="event__details-content-wrap">
              <div className="event__details-content">
                <h2 className="title mb-3">Apprenticeships and Traineeships</h2>

                <h4 className="title-two mt-4 mb-2">
                  What are apprenticeships and traineeships in Victoria?
                </h4>
                <p>
                  Apprenticeships and traineeships in Victoria are structured training pathways that integrate paid employment with formalised education.
                  Participants enter a contractual agreement with an employer and a Registered Training Organisation (RTO),
                  gaining hands-on workplace experience while concurrently completing nationally recognised qualifications.
                </p>

                <h4 className="title-two mt-4 mb-2">Who is eligible to undertake these pathways?</h4>
                <p>
                  These programs are available to a broad demographic, including secondary school students seeking vocational experience, recent school leavers, mature-age adults pursuing career changes, and individuals seeking to upskill.
                  There are no restrictions based on prior academic achievement, ensuring inclusive access to vocational training.
                </p>

                <h4 className="title-two mt-4 mb-2">Why Choose a Traineeship?</h4>
                <p>
                  A traineeship combines paid work with structured training, allowing trainees to:
                </p>
                <ul className="list-wrap">
                  <li>Gain valuable workplace experience</li>
                  <li>Work toward a recognised qualification</li>
                  <li>Earn a wage as they learn</li>
                </ul>

                <h4 className="title-two mt-4 mb-2">Who can become a trainee?</h4>
                <p>
                  Traineeships are not just for younger people. Mature workers are known for their commitment and reliability,
                  and many older workers are now undertaking traineeships to build new skills and career opportunities.
                </p>

                <h4 className="title-two mt-4 mb-2">Employed in the industry, but lacking the right skills?</h4>
                <p>
                  Some employers are willing to train existing employees as trainees if they lack specific skills.
                  Traineeships provide both structured off-the-job and workplace-based training,
                  combining practical experience and skill development — a win-win for both employee and employer.
                </p>

                <h4 className="title-two mt-4 mb-2">Employment as a trainee</h4>
                <p>
                  An employer agrees to employ you for the term of the traineeship and support your training.
                  You agree to follow instructions and attend structured training.
                  If the business is sold, the new employer is not obligated to continue the traineeship.
                  Either you or your employer can cancel the contract by submitting a signed cancellation form or letter stating the date of cancellation.
                </p>

                <h4 className="title-two mt-5 mb-3">Official Victorian Government Links</h4>
                <p>
                  For more information, to find which occupations or courses are available, check support options, research providers,
                  or get personalised advice, visit the official Victorian Government links below:
                </p>

                {/* Table */}
                <div className="table-responsive my-4">
                  <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                      <tr>
                        <th>Topic</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>General Overview</td>
                        <td>
                          <a
                            href="https://www.apprenticeships.vic.gov.au/what-apprenticeship-or-traineeship"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            apprenticeships.vic.gov.au
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Getting Started</td>
                        <td>
                          <a
                            href="https://www.vic.gov.au/do-apprenticeship-or-traineeship"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            vic.gov.au/do-apprenticeship-or-traineeship
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainee;
