import Image from "next/image"
import Link from "next/link"

import instructor_img from "@/assets/img/courses/course_instructors.png"
import type { Course as CourseDoc } from "@/types/content";

interface Course {
  id: number;
  title: string;
  description?: string;
  lesson?: string;
  minute?: string;
  price: number;
  tag?: string;
  review?: string;
  author?: string;
  entryRequirements?: string;
  duration?: string;
  licensingRequirements?: string;
  courseDesign?: string;
  course_requirement?: string;
}

interface InstructorsProps {
  course?: CourseDoc; // full course document (from MongoDB)
}

const Instructors = ({ course }: InstructorsProps) => {

   // Get entry requirements from the course document
   const getEntryRequirements = () => {
      if (course?.detail?.[0]?.tabs) {
         const entryRequirementTab = course.detail[0].tabs.find(
            (tab: any) => tab.title === "Entry Requirement"
         );
         return entryRequirementTab?.description || "";
      }
      return "";
   };

   const entryRequirements = getEntryRequirements();

   if (!course) {
      return <p>Course data is not available.</p>;
   }
   
   return (
      <div className="courses__instructors-wrap">
         <div className="courses__instructors-content">
            <h2 className="title">Entry Requirements</h2>
            {entryRequirements ? (
               <div 
                  className="entry-requirements-content"
                  dangerouslySetInnerHTML={{ __html: entryRequirements }}
               />
            ) : (
               <p>No formal entry requirements for this course.</p>
            )}
         </div>
      </div>
   )
}

export default Instructors
