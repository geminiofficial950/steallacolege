"use client";

import feature_data from "@/data/home-data/FeatureData";
import Image from "next/image";

const FeaturesTwo = () => {
   const data = feature_data.filter((item) => item.page === "another");

   return (
      <section className="features__area" style={{ padding: "50px 0 70px" }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6" style={{ width: "58%" }}>
                  <div className="section__title white-title text-center">
                     <span className="sub-title" style={{ fontSize: "26px", fontWeight: "600" }}>
                        For Businesses
                     </span>
                     <h2 className="title">Start your journey, unlock potential</h2>
                     <p>
                        Empower your workforce with nationally recognised training tailored to your organisation.
                        Stella College helps teams upskill, stay compliant, and grow capabilities through flexible,
                        outcomes-focused learning solutions.
                     </p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                     <div className="features__item">
                        <div className="features__icon" style={{marginBottom:'0px'}}>
                           <Image
                              src={item.icon ? item.icon : ""}
                              className="injectable"
                              alt={item.title}
                              width={160}
                              height={120}
                           />
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

         {/* ✅ Mobile Responsive Styles */}
         <style jsx>{`
            /* Desktop "For Businesses" font size */
            @media (min-width: 1200px) {
               .section__title .sub-title {
                  font-size: 32px;
                  font-weight: 700;
               }
            }

            /* Mobile full width and enough height */
            @media (max-width: 768px) {
               section.features__area {
                  width: 100vw !important;
                  padding: 40px 15px 80px 15px !important;
                  margin-left: 0 !important;
                  overflow: visible !important;
               }
               .container {
                  width: 100% !important;
                  max-width: 100% !important;
                  padding: 0 !important;
               }
               .col-xl-6 {
                  width: 100% !important;
               }
               .section__title h2 {
                  font-size: 22px !important;
                  line-height: 1.4 !important;
               }
               .section__title p {
                  font-size: 14px !important;
               }
               .features__item {
                  margin-bottom: 40px !important; /* space between cards */
                  text-align: center;
               }
               .features__icon img {
                  max-width: 60px;
                  height: auto;
               }
            }

            /* Extra small mobile */
            @media (max-width: 480px) {
               section.features__area {
                  padding: 35px 10px 70px 10px !important;
               }
               .section__title h2 {
                  font-size: 20px !important;
               }
               .section__title p {
                  font-size: 13px !important;
               }
               .features__item {
                  margin-bottom: 35px !important;
               }
            }
         `}</style>
      </section>
   );
};

export default FeaturesTwo;
