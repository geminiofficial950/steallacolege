import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import BtnArrow from "@/svg/BtnArrow";

import instructor_thumb1 from "@/assets/img/instructor/instructor01.png"
import instructor_thumb2 from "@/assets/img/instructor/instructor02.png"
import instructor_thumb3 from "@/assets/img/instructor/instructor03.png"
import instructor_thumb4 from "@/assets/img/instructor/instructor04.png"

interface DataType {
   id: number;
   thumb: StaticImageData
   title: string;
   designation: string;
}[];

const instructor_data: DataType[] = [
   {
      id: 1,
      thumb: instructor_thumb1,
      title: "Jaime Yeo",
      designation: "CEO",
   },
   {
      id: 2,
      thumb: instructor_thumb2,
      title: "Vince",
      designation: "Trainer & Assessor",
   },
   {
      id: 3,
      thumb: instructor_thumb3,
      title: "Sani Stefanonski",
      designation: "Trainer & Assessor",
   },
   {
      id: 4,
      thumb: instructor_thumb4,
      title: "Danny",
      designation: "Trainer & Assessor",
   },
];

const Instructor = () => {
   return (
      <section className="instructor__area">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-4">
                  <div className="instructor__content-wrap">
                     <div className="section__title mb-15">
                        <span className="sub-title">Experience Support at Every Step</span>
                        <h2 className="title">Together We Thrive: Experience the Full Strength of Our Stella College Team</h2>
                     </div>
                     <p>Our community thrives on teamwork. From passionate trainers to caring administrative staff, each person at Stella College is committed to your growth and success.</p>
                     <div className="tg-button-wrap">
                        <Link href="/instructors" className="btn arrow-btn">See All Instructors<BtnArrow /></Link>
                     </div>
                  </div>
               </div>
               
               <div className="col-xl-8">
                  <div className="instructor__item-wrap">
                     <div className="row">
                        {instructor_data.map((item) => (
                           <div key={item.id} className="col-sm-6">
                              <div className="instructor__item">
                                 <div className="instructor__thumb">
                                    <Link href="/instructor-datails"><Image src={item.thumb} alt="img" /></Link>
                                 </div>
                                 <div className="instructor__content">
                                    <h2 className="title"><Link href="/instructor-datails">{item.title}</Link></h2>
                                    <span className="designation">{item.designation}</span>
                                  
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Instructor
