import type { Metadata } from "next";
import Membership from "./../../components/inner-pages/membership/index";

export const metadata: Metadata = {
  title: "Membership | Stella College",
  description:
    "Join the Stella College Membership program for exclusive training benefits, discounted courses, priority support, and industry-aligned learning resources.",
  alternates: {
    canonical: "/membership",
  },
  openGraph: {
    title: "Membership | Stella College",
    description:
      "Become a Stella College member and get access to premium learning resources, discounted courses, and exclusive benefits.",
    url: "https://stellacollege.com.au/membership",
    type: "website",
    images: [
      {
        url: "https://stellacollege.com.au/og-membership.jpg",
        alt: "Stella College Membership",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership | Stella College",
    description:
      "Exclusive benefits, course discounts, and member-only training resources at Stella College."
  }
};

const page = () => {
  return (
    <Membership />
  );
};

export default page;