import type { Metadata } from "next";
import Script from "next/script";
import LegalPage from "@/components/inner-pages/legal";
import Wrapper from "@/layouts/Wrapper";
import { absoluteUrl } from "@/lib/seo";

const title = "Privacy Policy";
const description =
  "Read Stella College's Privacy Policy to understand how personal information is collected, used, stored, disclosed, and protected.";
const path = "/privacy-policy";
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
  name: "Privacy Policy",
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
        name: "Privacy Policy",
        item: canonicalUrl,
      },
    ],
  },
};

const sections = [
  {
    title: "What This Policy Covers",
    body: [
      "This Privacy Policy explains how Stella College collects, uses, stores, and protects personal information when you visit our website, submit forms, enquire about courses, enrol in training, or communicate with our team.",
      "We are committed to handling personal information responsibly and in line with applicable privacy obligations.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "We may collect information such as your name, phone number, email address, course interests, enquiry details, submitted documents, and information you provide through contact forms, newsletter subscriptions, bookings, or enrolment processes.",
      "We may also collect limited technical data such as device information, browser type, referral source, and website usage data to improve website performance and user experience.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "Personal information may be used to respond to enquiries, process enrolments, provide student support, deliver training-related communications, improve services, manage compliance obligations, and send relevant updates where permitted.",
      "We only use information for legitimate business, educational, operational, and legal purposes connected with Stella College's services.",
    ],
  },
  {
    title: "Disclosure of Information",
    body: [
      "We may disclose personal information to service providers, trainers, student management systems, technology platforms, professional advisers, regulators, or government bodies where required for service delivery, compliance, or legal obligations.",
      "We do not sell personal information. Any disclosure is limited to what is reasonably necessary for the relevant purpose.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "Our website may use cookies, analytics tools, or similar technologies to understand traffic patterns, improve navigation, and support website functionality. These tools may collect aggregated or pseudonymous usage information.",
      "You can manage cookies through your browser settings, though disabling some cookies may affect site performance.",
    ],
  },
  {
    title: "Data Security and Retention",
    body: [
      "We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. However, no internet transmission or storage system can be guaranteed as completely secure.",
      "We retain information only for as long as needed for educational, operational, legal, and record-keeping purposes.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact Stella College to request access to your personal information, ask for corrections, or raise a privacy concern. We may need to verify your identity before responding to certain requests.",
      "If you no longer wish to receive marketing communications, you can use the unsubscribe option in the message or contact us directly.",
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, systems, legal obligations, or website features. The most current version will always be available on this page.",
    ],
  },
  
];

export default function Page() {
  return (
    <Wrapper>
      <Script
        id="privacy-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LegalPage
        title={title}
        intro="This policy outlines how Stella College handles personal information collected through its website and related services."
        lastUpdated={lastUpdated}
        sections={sections}
      />
    </Wrapper>
  );
}
