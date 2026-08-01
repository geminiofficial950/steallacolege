import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stella College - Australia’s leading education provider",
  description:
    "Stella College - Australia’s leading education provider",
  alternates: {
    canonical: "/",
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default index