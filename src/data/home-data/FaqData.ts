interface DataType {
   id: number;
   page: string;
   question: string;
   answer: string;
   class_name?:string;
}[];

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      question: "How does Stella College support its students in achieving real-world success?",
      answer: "Stella College is committed to delivering high-quality education and skills-based training. Our goal is to empower students with practical knowledge, critical thinking, and job-ready skills for real-world success. We focus on supportive learning environments, up-to-date industry content, and pathways to rewarding careers.",
   },
   {
      id: 2,
      page: "home_1",
      question: "Why choose us for your education?",
      class_name:"collapsed",
      answer: "You should choose Stella College because we offer nationally recognised qualifications, experienced trainers, flexible learning options (online and in-person), dedicated student support, and strong links to industry for career outcomes. We pride ourselves on our commitment to your personal and professional growth.",
   },
   {
      id: 3,
      page: "home_1",
      question: "How We Provide Service For you?",
      class_name:"collapsed",
      answer: "Stella College provides comprehensive support throughout your studies—including academic advice, wellbeing resources, technical help, and one-on-one mentoring. Trainers and support staff are always accessible via our online portal, email, phone, or in person at our campus.",
   },
   {
      id: 4,
      page: "home_1",
      question: "Do you offer affordable courses with flexible payment?",
      class_name:"collapsed",
      answer: "Yes, Stella College offers affordable courses with flexible payment plans, government funding options (where eligible), and clear fee structures. We strive to ensure quality education is accessible to as many students as possible.",
   },
   {
      id: 5,
      page: "home_1",
      question: "How do we start your learning journey?",
      class_name:"collapsed",
      answer: "Your learning journey starts with an easy application process online or by contacting our admissions team. Once enrolled, you complete your Pre– Training Review (PTR) and then gain access to our student portal and receive a tailored orientation. From there, you’ll have support every step of the way.",
   },
];

export default faq_data;