"use client"
import UseSticky from "@/hooks/UseSticky";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   const [showScroll, setShowScroll] = useState(false);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      let ticking = false;

      const checkScrollTop = () => {
         if (ticking) return;
         ticking = true;

         requestAnimationFrame(() => {
            ticking = false;
            const offset = window.pageYOffset;
            setShowScroll((prev) => {
               if (!prev && offset > 400) return true;
               if (prev && offset <= 400) return false;
               return prev;
            });
         });
      };

      window.addEventListener("scroll", checkScrollTop, { passive: true });
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, []);

   return (
      <>
        <button 
  onClick={scrollTop} 
  className={`scroll__top scroll-to-target ${sticky ? "open" : ""}`} 
  data-target="html"
>
  <i className="tg-flaticon-arrowhead-up"></i>
  <span className="visually-hidden">Scroll to top</span>
</button>
      </>
   )
}

export default ScrollToTop;
