// Server-side access to blogs and courses stored in MongoDB.
// Results are cached (tags "blogs" / "courses") and refreshed every CONTENT_REVALIDATE_SECONDS,
// so a DB edit shows up on the site within that window without a redeploy.
import { unstable_cache } from "next/cache";
import { getDb } from "@/lib/mongodb";
import type { Blog, BlogSummary, Course, CourseCard } from "@/types/content";

export const CONTENT_REVALIDATE_SECONDS = 300;

// The Sentio masterclass is shown first in every course list (was hard-coded in CourseData.ts)
const LATEST_COURSE_ID = "masterclass-mental-health-sentio-framework-45-mins";

const hiddenFields = { _id: 0, updatedAt: 0 } as const;

export const getBlogs = unstable_cache(
  async (): Promise<Blog[]> => {
    const db = await getDb();
    return db.collection<Blog>("blogs").find({}, { projection: hiddenFields }).sort({ order: 1 }).toArray();
  },
  ["content:blogs"],
  { tags: ["blogs"], revalidate: CONTENT_REVALIDATE_SECONDS },
);

export const getCourses = unstable_cache(
  async (): Promise<Course[]> => {
    const db = await getDb();
    return db.collection<Course>("courses").find({}, { projection: hiddenFields }).sort({ order: 1 }).toArray();
  },
  ["content:courses"],
  { tags: ["courses"], revalidate: CONTENT_REVALIDATE_SECONDS },
);

export async function getBlogById(blogId: string): Promise<Blog | undefined> {
  return (await getBlogs()).find((blog) => blog.blogId === blogId);
}

export async function getCourseById(courseId: string): Promise<Course | undefined> {
  return (await getCourses()).find((course) => course.courseId === courseId);
}

export async function getBlogSummaries(): Promise<BlogSummary[]> {
  return (await getBlogs()).map(({ detail: _detail, ...summary }) => summary);
}

export function toCourseCard(course: Course): CourseCard {
  return {
    id: course.courseId,
    courseId: course.courseId,
    title: course.title,
    category: course.category ?? "",
    categoryId: course.categoryId ?? "",
    category_Image: course.category_Image,
    courseimage: course.courseimage,
    thumb: course.image,
    review: course.review || "4.5 Reviews",
    duration: course.duration ?? "",
    author: "Stella College",
    price: course.price,
    certification: course.certification,
    units: course.units,
    modeofdelivery: course.modeofdelivery,
  };
}

export async function getCourseCards(): Promise<CourseCard[]> {
  const cards = (await getCourses()).map(toCourseCard);
  const latestIndex = cards.findIndex((card) => card.courseId === LATEST_COURSE_ID);
  if (latestIndex > 0) {
    const [latest] = cards.splice(latestIndex, 1);
    cards.unshift(latest);
  }
  return cards;
}
