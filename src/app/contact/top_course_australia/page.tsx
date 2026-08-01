import type { Metadata } from "next";
import TopCourseAustraliaClient from "./TopCourseAustraliaClient";

export const metadata: Metadata = {
  title: "CHC33021 Certificate III in Individual Support  (Ageing & Disability) (R1) | Stella College Australia",
  description:
    "Explore Stella College Australia's CHC33021 Certificate III in Individual Support  (Ageing & Disability) (R1). Gain practical skills, work placement and career opportunities.",
  keywords: [
    "Certificate III Individual Support",
    "CHC33021",
    "Aged Care Course Australia",
    "Disability Support Course",
    "Stella College Australia",
  ],
  openGraph: {
    title: "CHC33021 Certificate III in Individual Support | Stella College Australia",
    description:
      "Start your career in aged and disability care with Stella College Australia.",
    url: "https://www.stellacollege.edu.au/contact/top_course_australia",
  },
};

export default function Page() {
  return <TopCourseAustraliaClient />;
}