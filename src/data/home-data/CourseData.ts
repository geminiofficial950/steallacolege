import { StaticImageData } from "next/image";
import course_thumb4 from "@/assets/img/new_course/pics/Disabaility.png";
import course_thumb1 from "@/assets/img/new_course/pics/Disabilty.png";
import course_thumb2 from "@/assets/img/new_course/pics/Individual support.png";
import course_thumb3 from "@/assets/img/new_course/pics/Leisure & HEalth.png";
import course_thumb5 from "@/assets/img/new_course/pics/HLTAID009.png";
import course_thumb6 from "@/assets/img/new_course/pics/HLTAID011.png";
import course_thumb7 from "@/assets/img/new_course/pics/HLTAID012.png";
import course_thumb8 from "@/assets/img/new_course/pics/3.png";
import course_thumb9 from "@/assets/img/new_course/pics/4.png";

import { course_detail_data } from "@/data/home-data/coursedataeditor";

// Image mapping object
const imageMap: { [key: string]: StaticImageData } = {
  course_thumb1,
  course_thumb2,
  course_thumb3,
  course_thumb4,
  course_thumb5,
  course_thumb6,
  course_thumb7,
  course_thumb8,
  course_thumb9,
};

interface TabType {
  title?: string;
  image?: string;
  description?: string;
  jobs?: string[];
  syllabus?: string[];
}

interface DetailType {
  tabs: TabType[];
}

interface CourseDetailType {
  duration: string;
  id?: string;
  courseId: string;
  title: string;
  courseimage?: StaticImageData;
  thumb: StaticImageData;
  review: string;
  category: string;
  categoryId:string;
  category_Image:string | StaticImageData;
  author: string;
  detail: DetailType[];
  price?:number;
  lesson?:string;
  minute?:string;
  tag?:string;
}

interface DataType {
  id: number;
  page: string;
  course_details: CourseDetailType[];
  //category: string[];
}

// Helper function to extract duration from description
const extractDuration = (description: string): string => {
  // Check for hours and minutes format
  const hoursMinutesMatch = description.match(/Duration:<\/strong>&nbsp;(\d+)\s*Hours?\s*(\d+)\s*Minutes?/i);
  if (hoursMinutesMatch) {
    return `${hoursMinutesMatch[1]} Hours ${hoursMinutesMatch[2]} Minutes`;
  }
  
  // Fallback to the original pattern
  const durationMatch = description.match(/Duration:<\/strong>&nbsp;(\d+\s+\w+)/);
  return durationMatch ? durationMatch[1] : "52 weeks";
};

// Process course details to match component expectations
const processedCourseDetails = course_detail_data.course_list.map((course: any) => {
  const overviewTab = course.detail[0]?.tabs?.find((tab: any) => tab.title === "Overview");
  const description = overviewTab?.description || "";
  
  return {
    id: course.courseId,
    courseId: course.courseId,
    title: course.title,
    category:course.category,
    categoryId:course.categoryId,
    category_Image: course.category_Image, 
    courseimage: course.courseimage,
    thumb: course.image,
    review: course.review || "4.5 Reviews",
    duration: course.duration,
    author: course.author || "Stella College",
    detail: course.detail || []
  };
});

const course_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    course_details: processedCourseDetails
  },
];

export default course_data;