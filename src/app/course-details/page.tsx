import CourseDetails from "@/components/courses/course-details";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Course Details",
   description: "Course details at Stella College.",
   alternates: {
      canonical: "/course-details",
   },
   robots: {
      index: false,
      follow: true,
   },
};
const page = () => {
   return (
      <Wrapper>
         <CourseDetails />
      </Wrapper>
   )
}

export default page
