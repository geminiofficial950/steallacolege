import Image from "next/image";
import event_details_img1 from "@/assets/img/CORPORATE HUB/group tarining staff.png";
import Link from "next/link";
import BtnArrow from "@/svg/BtnArrow";
const Grouptraining = () => {
  return (
    <section className="event__details-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Banner Image */}
            <div className="event__details-thumb mb-4">
              <Image src={event_details_img1} alt="Group Training" />
            </div>

            {/* Content */}
            <div className="event__details-content-wrap">
              <div className="event__details-content">
                <h2 className="title mb-3">Group Training</h2>

                <p>
                  At Stella College, we believe the energy and vision of an organisation are driven by its people. 
                  Unlocking potential demands more than the fundamentals of education — it calls for immersive, collaborative training experiences tailored for your team, your mission, and your goals.
                </p>

                <p>
                  Group training is an opportunity to move beyond basic requirements or compliance. 
                  It is a strategic investment in growth, culture, and progress. 
                  Imagine staff who are motivated not just to meet expectations but to innovate and lead change. 
                  Stella College brings together expertise, creativity, and passion to shape training programs that transform the ordinary into the extraordinary.
                </p>

                <p>
                  We map your current capabilities, examine your unique goals, and scope out the opportunities for improvement.
                </p>

                <h4 className="title-two mt-5 mb-3">Faculty of Industry Experts</h4>
                <p>
                  The Stella College team does not simply teach theory. 
                  Our staff are leading professionals with real workplace experience. 
                  Each session incorporates practical scenarios, case studies, and direct applications relevant to your staff’s day-to-day responsibilities.
                </p>

                <p>
                  Workshops include creative team activities and collaborative problem-solving exercises. 
                  Participants experience simulations and assignments that mirror workplace challenges, ensuring every skill learned can be immediately put into action.
                </p>

                <h4 className="title-two mt-5 mb-3">Building a Culture of Learning</h4>
                <p>
                  Training does not begin and end with compliance. 
                  Stella College aspires to create workplaces where staff are motivated to grow, adapt, and pursue excellence. 
                  Every learning experience is designed to cultivate personal growth and teamwork.
                </p>

                <p>
                  Employees engage in forums, mentoring programs, and peer feedback sessions that keep motivation high long after the initial training period ends. 
                  People gain new confidence, creative problem-solving skills, and the drive to propose fresh ideas in support of their organisation’s mission.
                </p>

                <p>
                  Stella College is ready to support every step of your journey. 
                  Set your learning goals. Trust us with flawless delivery and ongoing coaching. 
                  Graduate with credentials respected in every sector.
                </p>
              </div>
            </div>
          </div>
        </div>
           <div className="tg-button-wrap">
                  <Link href="/contact-one" className="btn arrow-btn">
                    Contact us <BtnArrow />
                  </Link>
                </div>
      </div>
      
    </section>
  );
};

export default Grouptraining;
