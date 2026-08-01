import Event from "@/components/inner-pages/events/event";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";
export const metadata: Metadata = {
   title: "Membership  Stella College - Online Courses & Education React Next js Template",
};
const page = () => {
   return (
      <Wrapper>
         <Event />
      </Wrapper>
   )
}

export default page