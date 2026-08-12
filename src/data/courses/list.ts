import { StaticImageData } from "next/image";

// ✅ Type definition
export interface CourseListItem {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  image: string | StaticImageData;
  price: number;
  duration: string;
  rating?: number;
  mode?: string;
  badge?: string;
}

// ✅ Course List Data (LIGHTWEIGHT)
export const courseList: CourseListItem[] = [
  {
    id: "chc43015-certificate-iv-in-ageing-support-(r4)",
    title: "CHC43015 – Certificate IV in Ageing Support (R4)",
    category: "Ageing & Disability",
    categoryId: "CSAGEING",
    image: "/images/courses/ageing-support.jpg",
    price: 3500,
    duration: "52 Weeks",
    rating: 5,
    badge: "Nationally Recognised Training",
  },
  {
    id: "chc33021-certificate-iii-in-individual-support-(ageing-&-disability)-(r1)",
    title:
      "CHC33021 Certificate III in Individual Support (Ageing & Disability) (R1)",
    category: "Ageing & Disability",
    categoryId: "CSAGEING",
    image: "/images/courses/individual-support.jpg",
    price: 3000,
    duration: "52 Weeks",
    rating: 5,
  },
  {
    id: "chc43121-certificate-iv-in-disability-support-(r1)",
    title: "CHC43121 Certificate IV in Disability Support (R1)",
    category: "Ageing & Disability",
    categoryId: "CSDISABILITY",
    image: "/images/courses/disability-support.jpg",
    price: 3500,
    duration: "34 Weeks",
    rating: 5,
  },
  {
    id: "chc43415-certificate-iv-in-leisure-and-health-(r4)",
    title: "CHC43415 Certificate IV in Leisure & Health (R4)",
    category: "Leisure & Health",
    categoryId: "CSLEISURE",
    image: "/images/courses/leisure-health.jpg",
    price: 3500,
    duration: "52 Weeks",
    rating: 5,
  },
  {
    id: "sentio-framework-introduction",
    title:
      "The SENTIO Framework: Introduction (Part 1 of 5 Mental Health Series)",
    category: "Mental Health",
    categoryId: "CSMENTAL",
    image: "/images/courses/sentio.jpg",
    price: 0,
    duration: "2 Hours",
    rating: 5,
  },
  {
    id: "hltaid011-provide-first-aid",
    title: "HLTAID011 Provide First Aid",
    category: "First Aid",
    categoryId: "CSFIRSTAID",
    image: "/images/courses/first-aid.jpg",
    price: 100,
    duration: "1 Day",
  },
  {
    id: "hltaid009-provide-cpr",
    title: "HLTAID009 Provide Cardiopulmonary Resuscitation",
    category: "First Aid",
    categoryId: "CSFIRSTAID",
    image: "/images/courses/cpr.jpg",
    price: 69,
    duration: "1 Day",
  },
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals – Understanding Artificial Intelligence",
    category: "Technology and AI",
    categoryId: "CSTECH",
    image: "/images/courses/ai.jpg",
    price: 500,
    duration: "48 Hours",
  },
  {
    id: "ai-business",
    title: "AI for Business Decision Making",
    category: "Technology and AI",
    categoryId: "CSTECH",
    image: "/images/courses/ai-business.jpg",
    price: 500,
    duration: "30 Hours",
  },
  {
    id: "advanced-ai",
    title: "Advanced AI Applications",
    category: "Technology and AI",
    categoryId: "CSTECH",
    image: "/images/courses/advanced-ai.jpg",
    price: 600,
    duration: "30 Hours",
  },
];
