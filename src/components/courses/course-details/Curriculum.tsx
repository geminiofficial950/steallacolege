import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { course_detail_data } from "@/data/home-data/coursedataeditor";

import icon_1 from "@/assets/img/icons/lock.svg"

interface CurriculumProps {
  courseId?: number;
}

interface DataType {
   id: number;
   title: string;
   show?: string;
   collapsed?: string;
   faq_details: {
      class_name?: string;
      lock: boolean;
      title: string;
      duration: string;
   }[]
}[]

const Curriculum = ({ courseId }: CurriculumProps) => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   // Get course data by courseId instead of index
   const course = course_detail_data.course_list.find(c => c.courseId === courseId);

   console.log("Curriculum component - courseId:", courseId);
   console.log("Curriculum component using coursedataeditor course:", course);

   // Get curriculum description from coursedataeditor
   const getCurriculumDescription = () => {
      if (course?.detail?.[0]?.tabs) {
         const curriculumTab = course.detail[0].tabs.find(
            (tab: any) => tab.title === "Curriculum"
         );
         return curriculumTab?.description || "";
      }
      return "";
   };

   // Get syllabus data from coursedataeditor
   const getSyllabusData = () => {
      if (course?.detail?.[0]?.tabs) {
         const curriculumTab = course.detail[0].tabs.find(
            (tab: any) => tab.title === "Curriculum"
         );
         return curriculumTab?.syllabus || [];
      }
      return [];
   };

   const curriculumDescription = getCurriculumDescription();
   const syllabusData = getSyllabusData();

   // Create curriculum data from syllabus
   const createCurriculumData = () => {
      if (!syllabusData || syllabusData.length === 0) {
         return [];
      }

      const sectionTitle = course?.units
         ? "Course Units"
         : course?.modules
            ? "Modules"
            : course?.Topics
               ? "Topics"
               : "Course Outline";

      return [
         {
            id: 1,
            title: sectionTitle,
            show: "show",
            faq_details: syllabusData.map((item: string, index: number) => ({
               class_name: index === 0 ? "open-item" : "",
               lock: false,
               title: item,
               duration: "",
            })),
         },
      ];
   };


   const curriculumData = createCurriculumData();
   
   if (!course) {
      return <p>Course data is not available.</p>;
   }
    
   return (
      <>
         <div className="courses__curriculum-wrap">
            {curriculumDescription && (
               <div className="curriculum-description mb-4">
                  <div
                     className="curriculum-description-content"
                     dangerouslySetInnerHTML={{ __html: curriculumDescription }}
                  />
               </div>
            )}
            
            {curriculumData.length > 0 && (
               <div className="accordion" id="accordionExample">
                  {curriculumData.map((item: any) => (
                     <div key={item.id} className="accordion-item">
                        <h2 className="accordion-header" id={`headingOne${item.id}`}>
                           <button className={`accordion-button ${item.collapsed || ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${item.id}`} aria-expanded="true" aria-controls={`collapseOne${item.id}`}>
                              {item.title}
                           </button>
                        </h2>
                        <div
                           id={`collapseOne${item.id}`}
                           className={`accordion-collapse collapse ${item.show || ""}`}
                           aria-labelledby={`headingOne${item.id}`}
                           data-bs-parent="#accordionExample"
                        >
                           <div className="accordion-body">
                              <ul className="list-wrap">
                                 {item.faq_details.map((list: any, i: number) => (
                                    <li className="course-item" key={i}>
                                       <Link href="#" className="course-item-link">
                                          <span className="item-name">{list.title}</span>
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
       
      </>
   )
}

export default Curriculum
