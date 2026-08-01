import { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icons/features_icon01.svg";
import icon_2 from "@/assets/img/icons/features_icon02.svg";
import icon_3 from "@/assets/img/icons/features_icon03.svg";
import icon_4 from "@/assets/img/icons/features_icon04.svg";
import homefFeature_1 from "@/assets/img/icons/h4_features_icon01.svg"
import homefFeature_2 from "@/assets/img/icons/h4_features_icon02.svg"
import homefFeature_3 from "@/assets/img/icons/h4_features_icon03.svg"

import icon_5 from "@/assets/img/Graphics for corporate/Corporate Training.png";
import icon_6 from "@/assets/img/Graphics for corporate/Government Entities.png";
import icon_7 from "@/assets/img/Graphics for corporate/Local Businesses.png";
import icon_8 from "@/assets/img/Graphics for corporate/Stella Corporate Network.png";
interface DataType {
   id: number;
   page: string;
   icon?: StaticImageData;
   icon_2?: string;
   icon_3?: string;
   title: string;
   desc: string;
}[];

const feature_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: icon_1,
      title: "Learn with Experts",
      desc: "Master Your Future with Expert Guidance.",
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Earn digital badge ",
      desc: "Display your digital certificate and badge on your social account and resume",
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "Flexible delivery options",
      desc: "Choose from online, In- person, or blended learning mode to suit your schedule",
   },
   {
      id: 4,
      page: "home_1",
      icon: icon_4,
      title: "Join a community",
      desc: "Join a community with similar goals ",
   },
// for another
{
   id:1,
   page:"another",
   icon:icon_5,
   title:"Corporate Training",
   desc:"Boost your team goals with customised training and discounts"
},
{
   id:2,
   page:"another",
   icon:icon_6,
   title:"Government Entities ",
   desc:"Equip government workforces  with latest knowledge to perform at their best"
},
{
   id:3,
   page:"another",
   icon:icon_7,
   title:"Local Businesses",
   desc:"Domestic and International skills training to manage and grow your business efficiently "
},
{
   id:4,
   page:"another",
   icon:icon_8,
   title:"Stella Corporate Network ",
   desc:"Join our corporate team and connect with mutually benefiting businesses"
},
   // home_2

   {
      id: 1,
      page: "home_2",
      icon_2: "/assets/img/icons/h2_features_icon01.svg",
      title: "Expert Trainers",
      desc: "Learn from respected trainers with practical industry experience, dedicated to your professional growth.",
   },

   {
      id: 2,
      page: "home_2",
      icon_2: "/assets/img/icons/h2_features_icon02.svg",
      title: "Effective Courses",
      desc: "Benefit from modern, hands-on study options designed to give you job-ready skills for Australia’s workforce.",
   },

   {
      id: 3,
      page: "home_2",
      icon_2: "/assets/img/icons/h2_features_icon03.svg",
      title: "Earn Certification",
      desc: "Receive certificates upon completion, boosting your employment prospects and career advancement.",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      icon_2: "assets/img/icons/h3_features_icon01.svg",
      title: "Scholarship Facility",
      desc: "Eestuidar University we prepare you to launch your.",
   },
   {
      id: 2,
      page: "home_3",
      icon_2: "assets/img/icons/h3_features_icon02.svg",
      title: "Learn From Experts",
      desc: "Eestuidar University we prepare you to launch your.",
   },
   {
      id: 3,
      page: "home_3",
      icon_2: "assets/img/icons/h3_features_icon03.svg",
      title: "Graduation Courses",
      desc: "Eestuidar University we prepare you to launch your.",
   },
   {
      id: 4,
      page: "home_3",
      icon_2: "assets/img/icons/h3_features_icon04.svg",
      title: "Certificate Program",
      desc: "Eestuidar University we prepare you to launch your.",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      icon: homefFeature_1,
      title: "Support & Motivation",
      desc: "We are able to offer every yoga training experienced & best yoga trainer.",
   },
   {
      id: 2,
      page: "home_4",
      icon: homefFeature_2,
      title: "Strong Body Life",
      desc: "We are able to offer every yoga training experienced & best yoga trainer.",
   },
   {
      id: 3,
      page: "home_4",
      icon: homefFeature_3,
      title: "Increased Flexibility",
      desc: "We are able to offer every yoga training experienced & best yoga trainer.",
   },

   // home-five

   {
      id: 1,
      page: "home_5",
      icon_3: "/assets/img/others/h5_features_item_shape02.svg",
      icon_2: "skillgro-video-tutorial",
      title: "Easy Class",
      desc: "Dear Psum Dolor Amettey Adipis Aecing Eiusmod Incididutt Reore",
   },
   {
      id: 2,
      page: "home_5",
      icon_3: "/assets/img/others/h5_features_item_shape02.svg",
      icon_2: "skillgro-verified",
      title: "Safety & Security",
      desc: "Dear Psum Dolor Amettey Adipis Aecing Eiusmod Incididutt Reore",
   },
   {
      id: 3,
      page: "home_5",
      icon_3: "/assets/img/others/h5_features_item_shape02.svg",
      icon_2: "skillgro-instructor",
      title: "Skilled Teacher",
      desc: "Dear Psum Dolor Amettey Adipis Aecing Eiusmod Incididutt Reore",
   },
   {
      id: 4,
      page: "home_5",
      icon_3: "/assets/img/others/h5_features_item_shape02.svg",
      icon_2: "skillgro-book-1",
      title: "Clean Curriculum",
      desc: "Dear Psum Dolor Amettey Adipis Aecing Eiusmod Incididutt Reore",
   },

   // home_8

   {
      id: 1,
      page: "home_8",
      icon_3: "/assets/img/others/h5_features_item_shape02.svg",
      icon_2: "skillgro-book-1",
      title: "Learn skills with 120k+",
      desc: "video courses.",
   },
   {
      id: 2,
      page: "home_8",
      icon_3: "/assets/img/others/h5_features_item_shape02.svg",
      icon_2: "skillgro-instructor",
      title: "Choose courses",
      desc: "real-world experts.",
   },
   {
      id: 3,
      page: "home_8",
      icon_3: "/assets/img/others/h5_features_item_shape02.svg",
      icon_2: "skillgro-tutorial",
      title: "processional Tutors",
      desc: "video courses.",
   },
   {
      id: 4,
      page: "home_8",
      icon_3: "/assets/img/others/h5_features_item_shape02.svg",
      icon_2: "skillgro-graduated",
      title: "Online Degrees",
      desc: "Study flexibly online",
   },

];

export default feature_data;