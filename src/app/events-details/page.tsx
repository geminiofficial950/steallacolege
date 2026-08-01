import EventDetails from "@/components/inner-pages/events/event-details";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";
export const metadata: Metadata = {
   title: "Stella College Leading Educate Course Provider",
};
const page = () => {
   return (
      <Wrapper>
         <EventDetails />
      </Wrapper>
   )
}

export default page