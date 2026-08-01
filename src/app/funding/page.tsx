// import FundingArea from "@/components/inner-pages/fundingArea";
import type { Metadata } from "next";
import FundingArea from './../../components/inner-pages/funding/index';

export const metadata: Metadata = {
  title: "Funding Options | Stella College",
  description:
    "Learn about government-funded courses, fee support programs, and student financial assistance available at Stella College.",
  alternates: {
    canonical: "/funding",
  },
  openGraph: {
    title: "Funding Options | Stella College",
    description:
      "Discover government funding, course subsidies, and student fee support options available at Stella College.",
    url: "https://stellacollege.com.au/funding",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funding Options | Stella College",
    description:
      "Explore student funding, subsidies, and financial assistance programs available for eligible learners at Stella College.",
  },
};
const page = () => {
   return (
      
         <FundingArea />
   )
}

export default page