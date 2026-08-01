import type { Metadata } from "next";
import Placement from "./../../components/inner-pages/placement/index";

export const metadata: Metadata = {
  title: "Work Placement Support | Stella College",
  description:
    "Stella College provides full work placement support for students pursuing nationally recognised qualifications across Australia.",
  alternates: {
    canonical: "/placement",
  },
  openGraph: {
    title: "Work Placement Support | Stella College",
    description:
      "Get guaranteed work placement assistance at Stella College. We help students gain industry experience for Certificate and Diploma courses.",
    url: "https://stellacollege.com.au/placement",
    type: "website",
    images: [
      {
        url: "https://stellacollege.com.au/og-placement.jpg",
        alt: "Stella College Work Placement Support"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Placement Support | Stella College",
    description:
      "Get industry-aligned work placement assistance for your qualification at Stella College."
  }
};

const page = () => {
  return <Placement />;
};

export default page;