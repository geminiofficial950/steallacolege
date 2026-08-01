"use client"
import feature_data from "@/data/home-data/FeatureData";
import Image from "next/image";

const Features = () => {
  return (
    <section className="features__area mt-5" style={{padding:"55px 0 3px"}}>
      <div className="container">
        <div className="row justify-content-center">
          {/* add the `fullwidth-mobile` class */}
          <div className="col-xl-6 fullwidth-mobile" style={{ width: "53%", maxWidth: "100%" }}>
            <div className="section__title white-title text-center mb-50">
              <span
                className="sub-title"
                style={{ height: "30%", fontSize: "28px", fontWeight: 600 }}
              >
                For Individuals
              </span>
              <h2 className="title">Start your Journey, Unlock Potential</h2>
              <p>
                Whether you’re starting out, upskilling, or joining our team Stella College is
                where your ambition connects with opportunity. Discover your pathway, unlock new
                skills, and become part of an inspiring community.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {feature_data
            .filter((items) => items.page === "home_1")
            .map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="features__item">
                  <div className="features__icon">
                    <Image src={item.icon ? item.icon : ""} className="injectable" alt="img" />
                  </div>
                  <div className="features__content">
                    <h3 className="title">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* IMPORTANT: use !important inside CSS (inline styles can't use it) */}
      <style jsx>{`
        /* ensure default remains 53% on large screens (kept via inline style),
           but force 100% on small screens with !important */
        @media (max-width: 768px) {
          .fullwidth-mobile {
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          /* also make the title wrapper full width just in case */
          .section__title {
            width: 100% !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
            box-sizing: border-box;
          }

          /* optional smaller typography for mobile */
          .section__title .sub-title {
            font-size: 22px !important;
          }

          .section__title .title {
            font-size: 20px !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
