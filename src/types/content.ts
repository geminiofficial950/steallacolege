// Shapes of the blog / course documents stored in MongoDB (collections `blogs` and `courses`).
// Images are stored as { src, width, height } — the same shape as Next's StaticImageData, so they
// can be passed straight to next/image.

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  /** tiny base64 preview shown (blurred) while the full image loads */
  blurDataURL?: string;
}

export type ContentImage = ImageAsset | string;

export interface BlogTab {
  quoto?: string;
  description: string;
  LearningOutcomes?: string[];
  articles?: string[];
}

export interface Blog {
  blogId: string;
  title: string;
  image: ContentImage;
  insideimage?: ContentImage;
  outsideimage: ContentImage;
  author: string;
  date: string;
  category: string;
  categoryId: string;
  allBlogs: string;
  order: number;
  detail: { tabs: BlogTab[] }[];
}

/** Blog without its article body — what lists, cards and the sidebar need */
export type BlogSummary = Omit<Blog, "detail">;

export interface CourseTab {
  title?: string;
  description?: string;
  notes?: string;
  jobs?: string[];
  LearningOutcomes?: string[];
  syllabus?: string[];
  review?: string;
}

export interface CourseReview {
  id: number;
  rating: number;
  width: string;
  review: string;
}

export interface Course {
  courseId: string;
  title: string;
  image: ContentImage;
  courseimage?: ContentImage;
  review?: string;
  category?: string;
  categoryId?: string;
  category_Image?: ContentImage;
  duration?: string;
  modeofdelivery?: string;
  price?: string;
  units?: string;
  intakes?: string;
  session?: string;
  formUrl?: string;
  enrollLabel?: string;
  certification?: string;
  rating?: string;
  workplacement?: string;
  allCourses?: string;
  modules?: string;
  removeprice?: string;
  Topics?: string;
  order: number;
  review_data?: CourseReview[];
  detail: { tabs: CourseTab[] }[];
}

/** Course card used by lists, search and menus (what src/data/home-data/CourseData.ts used to produce) */
export interface CourseCard {
  id: string;
  courseId: string;
  title: string;
  category: string;
  categoryId: string;
  category_Image?: ContentImage;
  courseimage?: ContentImage;
  thumb: ContentImage;
  review: string;
  duration: string;
  author: string;
  price?: string;
  certification?: string;
  units?: string;
  modeofdelivery?: string;
  // legacy template fields some unused home variants still read
  tag?: string;
  lesson?: string;
  minute?: string;
}
