import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog Details – Stella College",
  description: "Preview the Stella College blog article layout and content structure.",

  alternates: {
    canonical: absoluteUrl("/blog-details"),
  },

  robots: {
    index: false,  // <– correct for template page
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },

  openGraph: {
    title: "Blog Details – Stella College",
    description: "View the blog article template for Stella College.",
    url: absoluteUrl("/blog-details"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Stella College Blog Details",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog Details – Stella College",
    description: "Sample blog article page for Stella College.",
    images: [absoluteUrl("/og-image.jpg")],
  },
};

export default function Page() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
}