import Image from "next/image";

import Link from "next/link"
import event_details_img1 from "@/assets/img/student hub/USI.png";
import event_details_img2 from "@/assets/img/courses/course_author001.png";
import event_details_img3 from "@/assets/img/events/event_details_img02.jpg";

const Usi = () => {
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
                <div className="col-70">
                  <div className="event__details-content">
                   
                    <h2 className="title">Unique Student Identifier (USI)</h2>

                    <div className="event__details-overview">
                      <h4 className="title-two">What is USI</h4>
                      <p>
                        Your Unique Student Identifier (USI) is your personal
                        education number required for all nationally recognised
                        study, including university and vocational education and
                        training (VET). You must have a USI to receive your
                        qualification, and it stays with you for life, making it
                        simple to share your verified records with any training
                        provider.
                      </p>
                    </div>

                    <div className="event__details-inner">
                      <div className="row">
                        <div className="col-39">
                          <Image src={event_details_img3} alt="img" />
                        </div>
                        <div className="col-61">
                          <div className="event__details-inner-content">
                            <h4 className="title">
                             Why you need a USI 
                            </h4>
                            <ul className="about__info-list list-wrap">
                              <li className="about__info-list-item">
                                <i className="flaticon-angle-right"></i>
                                <p className="content">
                                 Cannot get qualification without USI
                                </p>
                              </li>
                              <li className="about__info-list-item">
                                <i className="flaticon-angle-right"></i>
                                <p className="content">
                                 Lifelong access to record
                                </p>
                              </li>
                              <li className="about__info-list-item">
                                <i className="flaticon-angle-right"></i>
                                <p className="content">
                               Essential step for course enrolment
                                </p>
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="title-two">How to create your USI </h4>
                    <p>1.	Go to <Link href="https://www.usi.gov.au/students/create-your-usi"> https://www.usi.gov.au/students/create-your-usi </Link></p>
                   <p>2. Click Create USI and start your application</p>
<p>3. Use your own personal email address</p>
<p>4. Enter your personal details exactly as they appear on your ID</p>
<p>5. Verify your identity by choosing one document and entering its details:</p>
<p>Australian driver’s licence</p>
<p>Medicare card</p>
<p>Australian passport</p>
<p>Birth certificate</p>
<p>Citizenship certificate</p>
<p>ImmiCard</p>
<p>6. Read and agree to the terms and conditions</p>
<p>7. Create a password and choose security questions</p>
<p>8. Submit your application and you will get your USI straight away</p>
<p>9. Write down your USI and give it to your training provider when you enrol</p>
<p>If you need any help, you can view this link</p>
<a href="https://www.usi.gov.au/students/student-portal-help-requests"target="_blank">Student Portal Help and Requests</a>
                    {/* <p>
                      Morem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan.Dorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magn.
                    </p> */}
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

export default Usi;
