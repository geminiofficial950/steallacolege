import type { Metadata } from "next";
import Partner from "./../../components/inner-pages/partner/index";

export const metadata: Metadata = {
  title: "Partner With Us | Stella College",
  description:
    "Partner with Stella College to collaborate on industry training, workforce development, group training, and educational initiatives.",
  alternates: {
    canonical: "/partner",
  },
  openGraph: {
    title: "Partner With Us | Stella College",
    description:
      "Collaborate with Stella College for workforce development, industry training partnerships, and educational programs.",
    url: "https://stellacollege.com.au/partner",
    type: "website",
    images: [
      {
        url: "https://stellacollege.com.au/og-partner.jpg",
        alt: "Stella College Partnership Program"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With Us | Stella College",
    description:
      "Explore partnership opportunities with Stella College for industry collaboration and workforce training."
  }
};

const page = () => {
  return <Partner />;
};

export default page;