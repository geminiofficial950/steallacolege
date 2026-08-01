import React from 'react';
import { GraduationCap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import event_details_img1 from "@/assets/img/student hub/funding.png";
export default function Funding() {
  const pdfSrc = "/assets/pdf/Eligibility.pdf";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8" style={{marginTop:"10%", marginLeft:"5%"}}>
      <div className="max-w-5xl mx-auto"> {/* widened container */}
        <div className="event__details-thumb flex justify-center items-center h-full">
  <Image src={event_details_img1} alt="img" />
</div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex mb-4">
            {/* <GraduationCap className="w-16 h-16 text-indigo-600" /> */}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Victoria Government Funding
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          {/* What is Skills First */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              {/* <CheckCircle className="w-6 h-6 mr-2 text-green-500" /> */}
              What is The Skills First Program?
            </h2>
           {/* 🌐 Desktop view (70% width) */}
<p
  className="event__details-overview"
>
  The Skills First program funds training providers to deliver subsidised courses and skill sets. 
  So eligible students will pay less for their training. Training is subsidised where there is a 
  demand for jobs in related industries. It makes it easier for Victorians to access training when 
  they are new to study or need to retrain to get a job.
</p>

          </div>

          {/* Eligibility Section */}
          <div className="bg-indigo-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Student Eligibility for Skills First
            </h2>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4 " style={{marginLeft:"33%"}}>
                Eligibility PDF
              </h3>

              {/* ✅ Full-width PDF iframe with toolbar & responsive height */}
              <iframe
                src={`${pdfSrc}#toolbar=1`}
                title="Eligibility PDF"
                className="w-full h-[120vh] border-none rounded-lg"
                style={{
                  display: 'block',
                  width: '80%',
                  height: '60vh',
                }}
              ></iframe>
              
  {/* 📱 Show download button only on mobile */}
  <div className="d-block d-md-none mt-4" style={{ marginBottom: "15px" }}>
    <p className="text-muted mb-3">
      On mobile devices, tap below to download the eligibility PDF:
    </p>
    <a
      href={pdfSrc}
      download
      className="btn btn-primary px-4 py-2"
    >
      📄 Download Eligibility PDF
    </a>
  </div>
            </div>
          </div>

          {/* Are You Eligible */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Are you Eligible?
            </h2>
            <p className="text-dark mb-6 fw-bold">
              Kindly call Stella College on{" "}
              <span className="font-semibold text-indigo-600">
                <a href="tel:1800069877">1800 069 877</a>
              </span>{" "}
              to get your eligibility checked today.
            </p>
          </div>

          {/* More Information */}
          <div className="bg-gray-50 rounded-xl p-6">
       <h3 className="text-dark mb-6 " style={{ fontSize: "16px" }}>
  For more information regarding the Skills First Program
</h3>

            <div className="courses__item-bottom">
              <div className="button" style={{ marginBottom: "10px" }}>
                <a href="https://www.vic.gov.au/skills-first" target="_blank" rel="noreferrer">
                  <span className="text">Skill First | vic.gov.au</span>
                  <i className="flaticon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
