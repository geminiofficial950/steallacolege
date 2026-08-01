import type { Metadata } from "next";
import CurrentStudent from "@/components/inner-pages/currentstudent";

export const metadata: Metadata = {
  title: "Current Student | Stella College",
  description:
    "Schedule a meeting and access current student support resources at Stella College.",
  alternates: {
    canonical: "/current-student",
  },
  openGraph: {
    title: "Current Student | Stella College",
    description:
      "Book a meeting with Stella College support teams and access help for current students.",
    url: "https://stellacollege.com.au/current-student",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Student | Stella College",
    description:
      "Book a meeting with Stella College support teams and access current student help.",
  },
};

const Page = () => {
  return <CurrentStudent />;
};

export default Page;
