import type { Metadata } from "next";
import Script from "next/script";
import LegalPage from "@/components/inner-pages/legal";
import Wrapper from "@/layouts/Wrapper";
import { absoluteUrl } from "@/lib/seo";

const title = "Terms of Use";
const description =
  "Read Stella College's Terms of Use covering website access, enrolment enquiries, content ownership, acceptable use, and liability conditions.";
const path = "/terms-of-use";
const canonicalUrl = absoluteUrl(path);
const lastUpdated = "March 23, 2026";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: `${title} | Stella College`,
    description,
    url: canonicalUrl,
    siteName: "Stella College",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Stella College`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Use",
  description,
  url: canonicalUrl,
  dateModified: "2026-03-23",
  isPartOf: {
    "@type": "WebSite",
    name: "Stella College",
    url: absoluteUrl("/"),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms of Use",
        item: canonicalUrl,
      },
    ],
  },
};

const sections = [
  {
    title: "Website Use",
    body: [
      "These Terms of Use govern access to and use of the Stella College website. By browsing this website, submitting an enquiry, downloading forms, or engaging with our content, you agree to use the site lawfully and in accordance with these terms.",
      "If you do not agree with these terms, you should stop using the website. Additional enrolment, payment, training, or student policies may apply when you purchase a course or become a Stella College student.",
    ],
  },
  {
    title: "Educational Information",
    body: [
      "We aim to keep all course information, fees, schedules, forms, and support resources accurate and current. However, website content is provided for general information only and may be updated, corrected, suspended, or removed without notice.",
      "Publishing information on this site does not guarantee course availability, intake dates, government funding eligibility, assessment outcomes, or employment outcomes unless expressly confirmed by Stella College in writing.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All website content, including text, branding, graphics, downloads, design elements, and original course information, is owned by or licensed to Stella College unless otherwise stated.",
      "You may view, download, and print material for personal, non-commercial use. You must not copy, republish, distribute, modify, frame, or commercially exploit website content without prior written permission.",
    ],
  },
  {
    title: "Acceptable Conduct",
    body: [
      "You agree not to misuse the website, interfere with its performance, attempt unauthorised access, upload malicious code, harvest data, impersonate another person, or use the site in a way that breaches applicable law.",
      "We may restrict or block access where we reasonably believe the website is being used improperly or in a way that risks Stella College, its students, or third parties.",
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      "This website may include links to third-party platforms, student systems, social media services, partner sites, or external resources for convenience. Stella College is not responsible for the content, security, availability, or privacy practices of third-party websites.",
      "You should review the terms and privacy policies of any third-party service before using it.",
    ],
  },
  {
    title: "Liability",
    body: [
      "To the extent permitted by law, Stella College excludes liability for any direct, indirect, incidental, or consequential loss arising from website use, temporary downtime, reliance on website information, or the use of third-party links.",
      "Nothing in these terms excludes rights or remedies that cannot lawfully be excluded under applicable Australian consumer law.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms of Use from time to time to reflect business, legal, regulatory, or website changes. The latest version will always be published on this page with a revised last updated date.",
    ],
  },
];

export default function Page() {
  return (
    <Wrapper>
      <Script
        id="terms-of-use-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LegalPage
        title={title}
        intro="These terms explain how visitors may use the Stella College website and related online resources."
        lastUpdated={lastUpdated}
        sections={sections}
      />
    </Wrapper>
  );
}
