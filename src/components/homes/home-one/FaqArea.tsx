"use client"
import Image from "next/image"
import faq_data from "@/data/home-data/FaqData"
import CurvedCircle from "./CurvedCircle"
import SvgAnimation from '@/hooks/SvgAnimation'
import InjectableSvg from "@/hooks/InjectableSvg"

// Stock photo: Bangun Stock Production on Unsplash (https://unsplash.com/photos/3g9VyuI2sd0), Unsplash License
import faq_img1 from "@/assets/img/faq-student.jpg"

const FaqArea = () => {

   const svgIconRef = SvgAnimation('/assets/img/others/faq_shape02.svg');

   return (
      <section className="faq__area">
         <div className="container">
            <div className="row align-items-start">
               <div className="col-md-6">
                  <div className="faq__img-wrap tg-svg" ref={svgIconRef}>
                     <div className="faq__round-text">
                        <CurvedCircle />
                     </div>
                     <div className="faq__img">
                        {/* full photo fills the rounded frame (the theme centres a cut-out PNG, so undo its offset) */}
                        <Image
                           src={faq_img1}
                           alt="Smiling Stella College student with a backpack and books"
                           fill
                           sizes="(max-width: 767px) 100vw, 450px"
                           placeholder="blur"
                           style={{ objectFit: "cover", objectPosition: "center top", transform: "none" }}
                        />
                        <div className="shape-one">
                           <InjectableSvg src="/assets/img/others/faq_shape01.svg" className="injectable tg-motion-effects4" alt="img" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-md-6">
                  <div className="faq__content faq__content--raised">
                     <div className="section__title pb-10">
                        <span className="sub-title">Frequently Asked Question’s </span>
                        <h2 className="title">Comprehensive Guidance for Academic and Career Advancement</h2>
                     </div>
                     <p>Insightful answers for your most important questions.</p>
                     <div className="faq__wrap">
                        <div className="accordion" id="accordionExample">
                           {faq_data.filter((items) => items.page === "home_1").map((item) => (
                              <div key={item.id} className="accordion-item">
                                 <h2 className="accordion-header">
                                    <button className={`accordion-button ${item.class_name}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`}
                                       aria-expanded="true" aria-controls={`collapse${item.id}`}>
                                       {item.question}
                                    </button>
                                 </h2>
                                 <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       <p>{item.answer}</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default FaqArea
