import BrandOne from "@/components/common/brands/BrandOne";
import Banner from "./Banner";
import About from "./About";
import CourseArea from "./CourseArea";
import Newsletter from "./Newsletter";
import Instructor from "./Instructor";
import Counter from "./Counter";
import FaqArea from "./FaqArea";
import Features from "./Features";
import FeaturesTwo from "./FeaturesTwo";
import InstructorTwo from "./InstructorTwo";
import Blog from "./Blog";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Categories from "./Categories";
import Reviews from "./Reviews";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main className="main-area fix">
        <Banner />
        <BrandOne />
        <Categories />
        <About />
        <CourseArea />
        <Newsletter />
        {/* <Instructor /> */}
        <Counter />
        {/* Add id here */}
        <div id="faqArea">
          <FaqArea />
        </div>
        <Features />
        <InstructorTwo />
        <FeaturesTwo />
        <Blog />
        {/* <Reviews /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
