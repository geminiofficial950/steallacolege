import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const base = absoluteUrl("");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: [
      //   "/admin",
      //   "/api/",
      //   "/instructor-dashboard",
      //   "/student-dashboard",
      // ],
    },
    sitemap: [
      `${base}sitemap.xml`,
      `${base}server-sitemap-index.xml`,
    ],
  };
}