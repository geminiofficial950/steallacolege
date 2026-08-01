import Contact from "@/components/inner-pages/contact-one";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Stella College",
  description:
    "Get in touch with Stella College for course inquiries, admissions, student support, or general questions. We're here to help you take the next step in your education journey.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Stella College",
    description:
      "Reach out to Stella College for admissions, support, course details, and general inquiries.",
    url: "/contact",
    type: "website",
    siteName: "Stella College",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Stella College",
    description:
      "Have questions? Contact Stella College for course details, admissions, and student support.",
  },
};
const page = () => {
   return (
      <Wrapper>
         <Contact />
      </Wrapper>
   )
}

export default page