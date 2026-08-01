// import FundingArea from "@/components/inner-pages/fundingArea";

import Grouptraining from './../../components/inner-pages/grouptraining/index';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Training for Organisations | Stella College",
  description:
    "Upskill your team with customised group training programs in Aged Care, Disability, First Aid, Mental Health, Business and Community Services. Flexible onsite or online delivery.",
  alternates: {
    canonical: "/grouptraining",
  },
  openGraph: {
    title: "Group Training for Organisations | Stella College",
    description:
      "Stella College offers tailored group training solutions for businesses, aged-care providers, NDIS organisations, and community service teams. Flexible onsite or blended learning.",
    url: "https://stellacollege.com.au/grouptraining",
    type: "website",
    images: [
      {
        url: "https://stellacollege.com.au/og-group-training.jpg",
        alt: "Stella College Group Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Training | Stella College",
    description:
      "Custom workplace training solutions for aged care, disability, business, and community services.",
  },
};
const page = () => {
   return (
      
         <Grouptraining />
   )
}

export default page