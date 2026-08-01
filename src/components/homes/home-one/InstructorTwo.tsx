"use client"
import Image from "next/image";
import Link from "next/link";
import BtnArrow from "@/svg/BtnArrow";
import SvgAnimation from '@/hooks/SvgAnimation';
import InjectableSvg from "@/hooks/InjectableSvg";

import instructor_thumb1 from "@/assets/img/instructor/instructor_two01.png"
import instructor_thumb2 from "@/assets/img/instructor/instructor_two02.png"

interface StyleType{
   style?:boolean;
}

const InstructorTwo = ({ style }: StyleType) => {

   const svgIconRef = SvgAnimation('/assets/img/instructor/instructor_shape02.svg');
   const svgIconRef2 = SvgAnimation('/assets/img/instructor/instructor_shape02.svg');

   return (
      <section className={`${style ? "instructor__area-four" : "instructor__area-two"}`} style={{background:"white " , marginTop:"40px"}}>
         <div className="container">
            <div className="instructor__item-wrap-two">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="instructor__item-two tg-svg" ref={svgIconRef}>
                        <div className="instructor__thumb-two">
                           <Image src={instructor_thumb2} alt="img" />
                           <div className="shape-one">
                              <InjectableSvg src="/assets/img/instructor/instructor_shape01.svg" alt="img" className="injectable" />
                           </div>
                           <div className="shape-two">
                              <span className="svg-icon"></span>
                           </div>
                        </div>
                       <div className="instructor__content-two" style={{marginBottom:"10px"}}>
                           <h3 className="title"><span>Become a Student</span></h3>
                           <p>Embark on your academic journey with Stella College and gain access to world-class online learning alongside a global community of learners.</p>
                           <div className="tg-button-wrap">
                              <Link href="/contact" className="btn arrow-btn">Apply Now <BtnArrow /></Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-6">
                     <div className="instructor__item-two tg-svg" ref={svgIconRef2}>
                        <div className="instructor__thumb-two" style={{marginBottom:"0px"}}>
                           <Image src={instructor_thumb1} alt="img" />
                           <div className="shape-one">
                              <InjectableSvg src="/assets/img/instructor/instructor_shape01.svg" alt="img" className="injectable" />
                           </div>
                           <div className="shape-two">
                              <span className="svg-icon"></span>
                           </div>
                        </div>
                         <div className="instructor__content-two" >
                           <h3 className="title"><span >Become a Instructor</span></h3>
                           <p>Share your expertise and shape the future of education. Partner with Stella College as an instructor to empower students worldwide.</p>
                           <div className="tg-button-wrap">
                              <Link href="/contact" className="btn arrow-btn">Apply Now <BtnArrow /></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default InstructorTwo
