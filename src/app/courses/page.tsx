import Course from "@/components/courses/course";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Courses | Stella College",
  description:
    "Explore nationally recognised and career-focused courses at Stella College across aged care, disability support, business, cybersecurity, hospitality, and more.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Courses | Stella College",
    description:
      "Explore nationally recognised and career-focused courses at Stella College across aged care, disability support, business, cybersecurity, hospitality, and more.",
    url: absoluteUrl("/courses"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses | Stella College",
    description:
      "Explore nationally recognised and career-oriented training programs at Stella College designed to help you build skills for your future career.",
  },
};
const page = () => {
   return (
      <Wrapper>
         <Course />
      </Wrapper>
   )
}

export default page
