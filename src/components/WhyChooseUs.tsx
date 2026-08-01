"use client";

import Image from "next/image";
import ComparisonTable from './ComparisonTable';

const features = [
  {
    icon: "/assets/img/new_course/pics/9.svg", // replace with your icon
    title: "1-on-1 Support (Until You FINISH the course)",
  },
  {
    icon: "/assets/img/new_course/pics/10.svg",
    title: "Blended Learning That Fits Around Work",
  },
  {
    icon: "/assets/img/new_course/pics/11.svg",
    title: "After-Hours & Weekend Support",
  },
  {
    icon: "/assets/img/new_course/pics/12.svg",
    title: "Trusted by 3,797+ Aussie Professional",
  },
  {
    icon: "/assets/img/new_course/pics/13.svg",
    title: "4.9 ⭐ Avg. Rating on Trustpilot",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f0f4ff" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-3">
          Why <span className="text-primary">students</span> choose{" "}
          <span className="text-danger">us</span>
        </h2>
        <p className="mb-5">
          Find out if you are eligible to convert your experience into a
          Certificate III in Individual Support – CHC33021 with our blended
          learning model.
        </p>

        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 col-xl-3"
            >
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3 d-flex justify-content-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                  />
                </div>
                <h6 className="fw-bold">{feature.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="container text-center mt-4">
     <Image
       src="/assets/img/new_course/pics/14.svg"
       alt="Image"
       width={1000}      // smaller width
       height={120}     // smaller height
       className=" border rounded"
     />
   </div>
   <ComparisonTable/>
    </section>
  );
}
