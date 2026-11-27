import type { MetadataRoute } from "next";
import { getBlogs, getCourses } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

// Re-generated with the content cache so new blogs/courses in MongoDB get listed
export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [courses, blogs] = await Promise.all([getCourses(), getBlogs()]);
  const now = new Date().toISOString();
  const fallbackBase = process.env.NEXT_PUBLIC_SITE_URL || "https://www.stellacollege.edu.au";

  // Safe URL builder
  const safeAbsoluteUrl = (path: string) => {
    try {
      return absoluteUrl(path);
    } catch {
      return `${fallbackBase}${path}`;
    }
  };

  // Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    "/", 
    "/courses",
    "/blog",
    "/about-us",
    "/contact",
    "/funding",
    "/forms",
    "/grouptraining",
    "/membership",
    "/partner",
    "/placement",
    "/terms-of-use",
    "/privacy-policy",
  ].map((path) => ({
    url: safeAbsoluteUrl(path.endsWith("/") ? path : `${path}/`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));

  // Dynamic Course Pages
  const coursePages: MetadataRoute.Sitemap = courses
    .filter((c) => Boolean(c.courseId))
    .map((course) => {
      const id = encodeURIComponent(String(course.courseId).trim());
      return {
        url: safeAbsoluteUrl(`/course-details/${id}/`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.9,
      };
    });

  // Dynamic Blog Pages
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => {
    const blogId = encodeURIComponent(String(blog.blogId).trim());

    const validDate =
      blog.date && !isNaN(new Date(blog.date).getTime())
        ? new Date(blog.date).toISOString()
        : now;

    return {
      url: safeAbsoluteUrl(`/blog-details/${blogId}/`),
      lastModified: validDate,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [
    ...staticPages,
    ...coursePages,
    ...blogPages
  ];
}
