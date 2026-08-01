"use client";

import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import Link from "next/link";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  contactEmail?: string;
};

const LegalPage = ({
  title,
  intro,
  lastUpdated,
  sections,
  contactEmail = "info@stellacollege.edu.au",
}: LegalPageProps) => {
  return (
    <>
      <BreadcrumbOne title={title} sub_title={title} />

      <section className="courses__area section-py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="courses__details-content">
                <div className="courses__details-meta">
                  <ul className="list-wrap">
                    <li>
                      <span>Last updated:</span> {lastUpdated}
                    </li>
                  </ul>
                </div>

                <div className="blog__details-content">
                  <p>{intro}</p>

                  {sections.map((section) => (
                    <div key={section.title} className="mt-4">
                      <h2>{section.title}</h2>
                      {section.body.map((paragraph) => (
                        <p key={`${section.title}-${paragraph.slice(0, 32)}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}

                  <div className="mt-4">
                    <h2>Contact Us</h2>
                    <p>
                      If you have any questions about this page, please contact{" "}
                      <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
