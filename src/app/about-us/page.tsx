import AboutUs from "@/components/inner-pages/about-us";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Stella College – Leading Nationally Recognised Training Provider",
  description:
    "Learn about Stella College’s mission, nationally recognised courses, industry partnerships, accredited training pathways, and commitment to student success across Australia.",
  
  alternates: {
    canonical: "https://stellacollege.com.au/about-us",
  },

  openGraph: {
    title: "About Stella College – Leading Nationally Recognised Training Provider",
    description:
      "Discover Stella College’s values, student-first approach, industry partnerships, and accredited education programs designed for real career outcomes.",
    url: "https://stellacollege.com.au/about-us",
    siteName: "Stella College",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://stellacollege.com.au/og-image.jpg", // add your OG image
        width: 1200,
        height: 630,
        alt: "About Stella College",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Stella College – Leading Training Provider",
    description:
      "Explore what makes Stella College a trusted leader in nationally recognised training across Australia.",
    images: ["https://stellacollege.com.au/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Page() {
  return (
    <Wrapper>
      <AboutUs />
    </Wrapper>
  );
}