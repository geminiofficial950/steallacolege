// import FundingArea from "@/components/inner-pages/fundingArea";
import type { Metadata } from "next";
import Forms from "../../components/inner-pages/forms/index";

export const metadata: Metadata = {
  title: "Student Feedback & Forms | Stella College",
  description:
    "Share student feedback with Stella College and access essential forms, policies, and administrative resources.",
  alternates: {
    canonical: "/feedback",
  },
  openGraph: {
    title: "Student Feedback & Forms | Stella College",
    description:
      "Submit student feedback and access forms and policies for enrolment, support, and administrative processes at Stella College.",
    url: "https://stellacollege.com.au/feedback",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Feedback & Forms | Stella College",
    description:
      "Share your feedback and access essential application, enrolment, and student support forms at Stella College.",
  },
};
const page = () => {
  return <Forms />;
};

export default page;
