import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailsArea from "@/components/courses/course-details/CourseDetailsArea";
import { course_detail_data } from "@/data/home-data/coursedataeditor";
import { absoluteUrl, excerpt, getCourseSchema, stripHtml } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    id: string[];
  }>;
};

function getCourseById(courseId: string) {
  return course_detail_data.course_list.find((course) => course.courseId === courseId);
}

function getOverviewDescription(courseId: string) {
  const course = getCourseById(courseId);
  const overview = course?.detail?.[0]?.tabs?.find((tab) => tab.title === "Overview");
  return stripHtml(overview?.description);
}

function getCourseImageSrc(image: unknown) {
  if (!image) {
    return undefined;
  }

  if (typeof image === "string") {
    return image.startsWith("http") ? image : absoluteUrl(image);
  }

  if (typeof image === "object" && image !== null && "src" in image) {
    const src = (image as { src?: string }).src;
    return src ? absoluteUrl(src) : undefined;
  }

  return undefined;
}

export async function generateStaticParams() {
  return course_detail_data.course_list
    .filter((course) => Boolean(course.courseId))
    .map((course) => ({
      id: [course.courseId as string],
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const courseId = id?.[0];
  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course || !courseId) {
    return {
      title: "Course Not Found | Stella College",
      description: "This course is not available or may have been removed.",
      robots: { index: false, follow: false },
      alternates: {
        canonical: `/course-details/${courseId}`,
      },
      openGraph: {
        title: "Course Not Found | Stella College",
        description: "This course is not available or may have been removed.",
        url: absoluteUrl(`/course-details/${courseId}`),
        type: "website",
      },
    };
  }

  const description = excerpt(getOverviewDescription(courseId), 160);
  const image = getCourseImageSrc(course.image);
  const urlPath = `/course-details/${courseId}`;

  return {
    title: `${course.title} | Stella College`,
    description,
    alternates: {
      canonical: urlPath,
    },
    openGraph: {
      title: `${course.title} | Stella College`,
      description,
      url: absoluteUrl(urlPath),
      type: "article",
      ...(image ? { images: [{ url: image, alt: course.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | Stella College`,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const courseId = id?.[0];
  if (!courseId) {
    notFound();
  }

  const course = getCourseById(courseId);
  if (!course) {
    notFound();
  }

  const description = excerpt(getOverviewDescription(courseId), 240);
  const image = getCourseImageSrc(course.image);
  const schema = getCourseSchema({
    title: course.title,
    description,
    urlPath: `/course-details/${courseId}`,
    category: course.category,
    image,
  });

  const courseData = {
    id: course.courseId,
    courseId: course.courseId,
    title: course.title,
    thumb: course.image,
    courseimage: course.courseimage,
    category: course.category,
    rating: course.review || "4.5 Reviews",
    duration: course.duration || "Not specified",
    certification: course.certification,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CourseDetailsArea single_course={courseData} />
    </main>
  );
}
