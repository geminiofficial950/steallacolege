import type { Metadata } from "next";
import Career from "@/components/inner-pages/career";

export const metadata: Metadata = {
  title: "Careers | Stella College",
  description:
    "Explore exciting career opportunities at Stella College. Join our team dedicated to providing high-quality education, training, and student support services.",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers | Stella College",
    description:
      "Explore exciting career opportunities at Stella College. Join our team dedicated to providing high-quality education, training, and student support services.",
    url: "/career",
    type: "website",
    siteName: "Stella College",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Stella College",
    description:
      "Discover open positions and career opportunities at Stella College.",
  },
};

const page = () => {
  return <Career />;
};

export default page;