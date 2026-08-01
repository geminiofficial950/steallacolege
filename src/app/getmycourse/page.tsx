import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import WhyChooseUs from './../../components/WhyChooseUs';
export const metadata: Metadata = {
  title: "Get My Course | Certificate III in Individual Support (CHC33021)",
  description:
    "Start your Certificate III in Individual Support (CHC33021) with full work placement support, flexible study options, and interest-free payment plans. Check eligibility now.",
  alternates: {
    canonical: "/get-my-course",
  },
  openGraph: {
    title: "Get My Course | Certificate III in Individual Support (CHC33021)",
    description:
      "Join a booming care industry. Get certified with full placement support, flexible blended learning, and affordable payment plans. 4.7★ rated training provider.",
    url: "https://stellacollege.com.au/get-my-course",
    type: "website",
    images: [
      {
        url: "https://stellacollege.com.au/og-image.jpg",
        alt: "Certificate III in Individual Support - CHC33021",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get My Course | Certificate III in Individual Support (CHC33021)",
    description:
      "Start your CHC33021 qualification with flexible blended learning and work placement support. Rated 4.7★ by 4417+ students.",
  },
};
const Page = () => {
  return (
    <div style={{ backgroundColor: "#f0f4ff" }}>
      {/* Top Banner */}
      <div
        className="container bg-warning py-3 mt-4 rounded"
        style={{ border: "2px solid black" }}
      >
        <h1 className="text-dark text-center m-0 fs-4 fs-md-3">
          📢 Top Rated Course Provider With 4.7 Star Ratings On Trustpilot 📢
        </h1>
      </div>

      {/* Main Section */}
      <div className="container py-4 py-md-5">
        <div className="row align-items-center g-4">
          {/* Left Text */}
          <div className="col-md-5">
            <h2 className="text-dark fs-3 fw-semibold mb-3">
              Certificate III in Individual Support - CHC33021
            </h2>

            <p className="text-dark fs-5 fw-semibold mb-3">
              Join a Booming Industry and Make a Difference: Get Certified and
              Start Changing Lives Today
            </p>

            <p className="text-dark fs-6 fw-semibold mb-3">
              Your Dedicated Facilitator will guide 1-on-1 every step of the
              way, making the process smooth, flexible, and stress-free.
            </p>

            <p className="text-dark fs-6 fw-semibold mb-4">
              Over 4,417+ graduates have completed at least one course with us!
            </p>

            {/* Feature Boxes */}
            <ul className="list-unstyled">
              <li className="bg-white border border-dark p-3 rounded mb-2 fs-6 fw-medium">
                ✓ Full Work Placement Support
              </li>
              <li className="bg-white border border-dark p-3 rounded mb-2 fs-6 fw-medium">
                ✓ Study at your own pace anywhere
              </li>
              <li className="bg-white border border-dark p-3 rounded mb-2 fs-6 fw-medium">
                ✓ Interest-free payment plans start at $65/week
              </li>
              <li className="bg-white border border-dark p-3 rounded fs-6 fw-medium">
                ✓ Nationally Recognised Qualification
              </li>
            </ul>

            <a href="/" className="btn btn-primary px-4 mt-2 fw-semibold">
              Eligible Now
            </a>
          </div>

          {/* Right Image */}
          <div className="col-md-7 text-center text-md-end">
            <img
              src="/assets/img/new_course/pics/Disabilty.png"
              alt="Certificate III Individual Support"
              className="img-fluid rounded"
              style={{ maxHeight: "600px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* Popular Courses Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">
          Popular Courses with Guaranteed Work Placement Support
        </h2>

        <div className="row g-4 text-center">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-white h-100">
              <Image
                  src="/assets/img/new_course/pics/1.svg"
                width={120}
                height={120}
                alt="Badge"
                className="mb-3"
              />
              <h5 className="fw-bold text-primary">
                Diploma Of Community Service <br /> (CHC52021)
              </h5>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-white h-100">
              <Image
                  src="/assets/img/new_course/pics/1.svg"
                width={120}
                height={120}
                alt="Badge"
                className="mb-3"
              />
              <h5 className="fw-bold text-primary">
                Certificate IV in Disability Support <br /> (CHC43121)
              </h5>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-white h-100">
              <Image
                src="/assets/img/new_course/pics/1.svg"
                width={120}
                height={120}
                alt="Badge"
                className="mb-3"
              />
              <h5 className="fw-bold text-primary">
                Certificate IV in Ageing Support <br /> (CHC43015)
              </h5>
            </div>
          </div>
        </div>
      </div>


<div className="container py-5">
      <div className="row align-items-center g-4">

        {/* LEFT SIDE IMAGE */}
        <div className="col-md-6 text-center">
          <Image
            src="/assets/img/new_course/pics/3.svg"
            alt="Course Image"
            width={500}
            height={500}
            className="img-fluid rounded"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="col-md-6">
          <h2 className="text-dark fw-bold mb-3">
           What’s stopping you from getting the qualification you deserve?
          </h2>

          <p className="text-dark fs-5 fw-semibold mb-3">
          With our blended learning, you can finally gain the freedom, income, and qualification you deserve — all without disrupting your busy life.


          </p>

          <p className="text-dark fs-6 mb-3">
          We’ve helped hundreds of professionals just like you complete their Certificate III in Individual Support - CHC33021, often faster than expected, thanks to our after-hours and weekend support.
          </p>

          <a href="/" className="btn btn-primary px-4 fw-semibold mt-2">
           Book  Eligible Check Now
          </a>
        </div>

      </div>
    </div>

 <div className="container text-center py-5">

      {/* Small Badge */}
      <div className="d-inline-block px-4 py-2 rounded-pill bg-white shadow-sm mb-3 fw-semibold">
        ⚡ Why choose us
      </div>

      {/* Main Heading */}
      <h2 className="fw-bold mb-2">
        Your <span className="text-primary">Next Step</span> : Book a Free{" "}
        <span className="text-danger">Eligibility</span> Check
      </h2>

      <p className="text-dark mb-5">
        Find out if you are eligible to convert your experience into a Certificate III 
        in Individual Support – CHC33021 with our blended learning model.
      </p>

      {/* Feature Cards */}
      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-md-4">
          <div className="bg-white rounded-4 shadow-sm p-4 h-100">
            <Image
               src="/assets/img/new_course/pics/4.svg"  // change icon
              width={70}
              height={70}
              alt="No obligation"
              className="mb-3"
            />
            <h5 className="fw-bold text-primary mb-2">No obligation</h5>
            <p className="mb-0">
              Talk to our team without any pressure to enroll
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="bg-white rounded-4 shadow-sm p-4 h-100">
            <Image
              src="/assets/img/new_course/pics/5.svg" // change icon
              width={70}
              height={70}
              alt="Takes less than 10 minutes"
              className="mb-3"
            />
            <h5 className="fw-bold text-primary mb-2">
              Takes less than 10 minutes
            </h5>
            <p className="mb-0">
              Talk to our team without any pressure to enroll
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="bg-white rounded-4 shadow-sm p-4 h-100">
            <Image
              src="/assets/img/new_course/pics/6.svg" // change icon
              width={70}
              height={70}
              alt="Tailored study plan"
              className="mb-3"
            />
            <h5 className="fw-bold text-primary mb-2">
              Includes a tailored study plan
            </h5>
            <p className="mb-0">
              Talk to our team without any pressure to enroll
            </p>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="mt-5">
        <a
          href="#"
          className="btn px-5 py-3 fw-semibold text-white"
          style={{
            background: "#2835C3",
            borderRadius: "40px",
            fontSize: "18px",
          }}
        >
          Book Eligibility Check Now
        </a>
      </div>
    </div>


  <div className="container text-center">
  <Image
    src="/assets/img/new_course/pics/7.png"
    alt="Image"
    width={1000}      // smaller width
    height={120}     // smaller height
    className=" border rounded"
  />
</div> 
 <div className="container text-center">
  <Image
    src="/assets/img/new_course/pics/8.png"
    alt="Image"
    width={1000}      // smaller width
    height={120}     // smaller height
    className=" border rounded"
  />
</div> 
<h4 className='text-center'>
  🌟 Rated #1 Education Provider in Australia on Trustpilot
  </h4>
<WhyChooseUs/>
         
    </div>

    
  );
};

export default Page;
