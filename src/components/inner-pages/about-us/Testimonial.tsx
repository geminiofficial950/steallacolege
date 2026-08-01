"use client"
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import testi_avatar1 from "@/assets/img/others/testi_author01.png"
import testi_avatar2 from "@/assets/img/others/testi_author02.png"
import testi_avatar3 from "@/assets/img/others/testi_author03.png"

interface DataType {
   id: number;
   avatar_thumb: StaticImageData;
   avatar_name: string;
   desc: string;
}[];

const testi_data: DataType[] = [
   {
      id: 1,
      avatar_thumb: testi_avatar1,
      avatar_name: "Jamie Wright",
      desc: "“I find the topics covered, relevant to my work and to the duties I complete at the workplace. I have implemented some of what we have learned and I feel it has actually helped me and will in the future if I find myself with another employer”",
   },
   {
      id: 2,
      avatar_thumb: testi_avatar2,
      avatar_name: "Peter Dale",
      desc: "“My learning experiences with TPSC was pleasant and enjoyable. Together with TPSC, we are in the final development stage to roll out workshops for both workers and potentially into our supply chain.”",
   },
   {
      id: 3,
      avatar_thumb: testi_avatar3,
      avatar_name: "Precision Plating Australia",
      desc: "“It is great to have TPSC as a training partner due to their consistency in training and learning strategies. They bring a pathway and program which further develops and enhance our employees.”",
   },
  
];

const setting = {
   slidesPerView: 3,
   spaceBetween: 30,
   observer: true,
   observeParents: true,
   loop: true,
   breakpoints: {
      '1500': {
         slidesPerView: 3,
      },
      '1200': {
         slidesPerView: 3,
      },
      '992': {
         slidesPerView: 3,
         spaceBetween: 24,
      },
      '768': {
         slidesPerView: 2,
         spaceBetween: 24,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   // Navigation arrows
   navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
   },
}

const Testimonial = () => {

   const [isLoop, setIsLoop] = useState(false);
   useEffect(() => {
      setIsLoop(true);
   }, []);

   return (
      <section className="testimonial__area section-py-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Our Testimonials</span>
                     <h2 className="title">What Students Think and Say About Stella College</h2>
                  
                  </div>
               </div>
            </div>
            
            <div className="row">
               <div className="col-12">
                  <div className="testimonial__item-wrap">
                     <Swiper
                        {...setting}
                        modules={[Navigation]}
                        loop={isLoop} className="swiper-container testimonial-swiper-active">
                        {testi_data.map((item) => (
                           <SwiperSlide key={item.id} className="swiper-slide">
                              <div className="testimonial__item">
                                 <div className="testimonial__item-top">
                                    <div className="testimonial__author">
                                       <div className="testimonial__author-thumb">
                                          {/* <Image src={item.avatar_thumb} alt="img" /> */}
                                       </div>
                                       <div className="testimonial__author-content">
                                          <div className="rating">
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                          </div>
                                          <h2 className="title">{item.avatar_name}</h2>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="testimonial__content">
                                    <p>{item.desc}</p>
                                 </div>
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                     <div className="testimonial__nav">
                        <button className="testimonial-button-prev"><i className="flaticon-arrow-right"></i></button>
                        <button className="testimonial-button-next"><i className="flaticon-arrow-right"></i></button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonial
