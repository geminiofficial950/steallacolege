'use client'
import { useEffect, useState } from "react";

interface StickyState {
   sticky: boolean;
}

const UseSticky = (): StickyState => {
   const [sticky, setSticky] = useState(false);

   useEffect(() => {
      let ticking = false;

      const stickyHeader = (): void => {
         if (ticking) return;
         ticking = true;

         requestAnimationFrame(() => {
            ticking = false;
            const nextSticky = window.scrollY > 200;
            setSticky((prev) => (prev === nextSticky ? prev : nextSticky));
         });
      };

      window.addEventListener("scroll", stickyHeader, { passive: true });

      return (): void => {
         window.removeEventListener("scroll", stickyHeader);
      };
   }, []);

   return {
      sticky,
   };
}

export default UseSticky
