import BlogTwo from "@/components/blogs/blog-two";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Stella College Blog – Education, Careers & Training Insights",
  description:
    "Explore expert insights on education, nationally recognised training, aged care, disability support, business courses, student success stories, and career development from Stella College.",

  alternates: {
    canonical: absoluteUrl("/blog"),
  },

  openGraph: {
    title: "Stella College Blog – Education, Careers & Training Insights",
    description:
      "Stay updated with the latest articles on education, accredited training, industry trends, skills development, and career pathways from Stella College.",
    url: absoluteUrl("/blog"),
    type: "website",
    siteName: "Stella College",
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
         width: 1200,
        height: 630,
        alt: "Stella College Blog – Training & Education Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stella College Blog – Education & Career Insights",
    description:
      "Latest articles on accredited training, career pathways, and student success from Stella College.",
    images: [absoluteUrl("/og-image.jpg")],
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

const index = () => {
   return (
      <Wrapper>
         <BlogTwo />
      </Wrapper>
   )
}

export default index