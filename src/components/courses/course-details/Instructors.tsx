import Image from "next/image"
import Link from "next/link"

import instructor_img from "@/assets/img/courses/course_instructors.png"
import { course_detail_data } from "@/data/home-data/coursedataeditor";

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
  courseId?: number;
}

const Instructors = ({ courseId }: InstructorsProps) => {
   // Get course data by courseId instead of index
   const course = course_detail_data.course_list.find(c => c.courseId === courseId);

   console.log("Instructors component - courseId:", courseId);
   console.log("Instructors component using coursedataeditor course:", course);

   // Get entry requirements from coursedataeditor
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
