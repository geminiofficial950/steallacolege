import { StaticImageData } from "next/image";

import course_thumb1 from "@/assets/img/courses/course_thumb01.jpg";
import course_thumb2 from "@/assets/img/courses/course_thumb02.jpg";
import course_thumb3 from "@/assets/img/courses/course_thumb03.jpg";
import course_thumb4 from "@/assets/img/courses/course_thumb04.jpg";
import course_thumb5 from "@/assets/img/courses/course_thumb05.jpg";
import course_thumb6 from "@/assets/img/courses/course_thumb06.jpg";

interface CourseDetailType {
  id: number;
  thumb: StaticImageData;
  tag: string;
  review: string;
  title: string;
  author?: string;
  price: number;
  lesson?: string;
  minute?: string;
  description?: string; // added for course detail page
  syllabus?: string[]; // added for course detail page
  entryRequirements?: string; // added for entry requirements
  duration?: string; // added for course duration
  licensingRequirements?: string; // added for licensing requirements
  courseDesign?: string;
  studyPaths?: string;
  jobs?: string[];
  course_requirement?: string;
  units?: number;
  core?: number;
  elective_units?: number;
  workPlacement?: {
    description: string;
    process: string[];
    requirements: string[];
    note: string;
  };
  // added for course design description
}

const course_detail_data: CourseDetailType[] = [
  {
    id: 1,
    thumb: course_thumb1,
    tag: "Ageing",
    review: "(4.8 Reviews)",
    title: "CHC43015 – Certificate IV in Ageing Support",
    author: "Rolling intake",
    price: 3500,
    lesson: "20 Lessons",
    minute: "5h 30m",
    description:
      "This qualification reflects the role of support workers who complete specialised tasks and functions in aged services; either in residential, home or community based environments.Workers will take responsibility for their own outputs within defined organisation guidelines and maintain quality service delivery through the development, facilitation and review of individualised service planning and delivery. Workers may be required to demonstrate leadership and have limited responsibility for the organisation and the quantity and quality of outputs of others within limited parameters.Our Certificate IV in Ageing Support course is suitable for those seeking to work in, working in, or who have studied in the Aged Care sector; as well as people with care or community service experience looking to advance their skills. This qualification addresses work primarily in residential facilities, or homes within defined organisation guidelines and service plans.During the course you will learn to carry out activities related to maintaining an individual’s well being through personal care and other activities of good living. You will also learn to provide services to individuals with complex needs, and work with groups of older people.",
    syllabus: [
      "MSS403058 - Facilitate breakthrough improvements",
      "MSS403081 - Ensure process improvements are sustained",
      "MSS405047 - Undertake analysis of cost and waste in terms of customer value",
      "MSS405078 - Lead and manage people within competitive systems and practices",
      "MS403045 - Facilitate and improve 5S",
      "MS403056 - Map an internal value stream",
      "MSS403059 - Facilitate continuous improvement through the use of standardised procedures",
      "MSS404051 - Mistake proof a process",
      "MSMENV472 - Implement and monitor environmentally sustainable work practices",
    ],
    jobs: [
      "Accommodation Support Worker",
      "Community Support Worker",
      "Assistant in Nursing",
      "Home Care Assistant",
      "Care Assistant",
      "Personal Care Assistant",
      "Care Service Employees",
      "Personal Care Giver",
      "Care Workers",
      "Personal Care Worker",
      "Community Care Worker",
      "Residential Care Worker",
      "Community Hours Worker",
      "Support Worker",
    ],
    entryRequirements:
      "There are no formal entry requirements for entry to this qualification.",
    duration: "52 weeks",
    licensingRequirements:
      "No licensing, legislative, regulatory or certification requirements apply to this qualification at the time of publication.",
    courseDesign:
      "The course is designed for individuals who are willing to work within community and/or residential settings. The training and assessment strategy is targeted at the learner cohort with no prior learning and experience in the aged care sector or CHC43015 - Certificate IV in Ageing Support qualification and would like to undertake this qualification for reasons like seeking employment in the aged care sector, to form a base for their higher studies in the Aged Care sector and/or for their personal development, as well as those wanting a pathway to Diploma of Community Services to undertake managerial roles.",
    studyPaths:
      "Upon successful completion of this program offers pathways into CHC52021 Diploma in Community Services (Note: This qualification is not delivered by Stella Collage Training at present)Current & Previous Students have also enrolled into the following to broaden employment opportunities:",
    course_requirement:
      "There are no pre-requisite qualifications for entry into this qualification. Stella Collage Training have processes in place to promote suitable and appropriate course enrolments including but not limited to: an invitation to a detailed information session, a Language Literacy and Numeracy (LLN) assessment, and a Pre-Training Review to ensure the best suited course aligned to your needs and wants, is identified before enrolment is finalised.A national Police clearance is required before the placement component can be undertaken.Evidence of some vaccinations is also a requirement including but not limited to influenza (flu) vaccination, COVID vaccination prior to the placement component.",
    units: 17,
    core: 15,
    elective_units: 3,
  },
  {
    id: 2,
    thumb: course_thumb2,
    tag: "Ageing / Disability",
    review: "(4.5 Reviews)",
    title:
      "CHC33021 Certificate III in Individual Support (Ageing and Disability)",
    author: "6-12 months",
    price: 3000,
    lesson: "25 Lessons",
    minute: "6h 15m",
    description:
      "This qualification reflects the role of individuals in community and residential settings, offering person-centred support to those who may require assistance due to ageing, disability, or other circumstance.By completing the nationally accredited CHC33021 Certificate III in Individual Support (Ageing and Disability), you’ll be equipped to embark on a meaningful career, whether as a personal carer in a residential care home, community setting, or as a support worker in the disability sector. The course ensures a foundational understanding of the principles behind person-centred care, coupled with a minimum of 120 hours of hands-on industry experience (work placement), managed by Stella Collage. With Government funding now available for study (subject to eligibility), it’s an opportune time to join this growing sector.",
    syllabus: [
      "HLTWHS002, Follow safe work practices for direct client care",
      "CHCDIV001, Work with diverse people",
      "HLTAAP002, Confirm physical health status",
      "CHCLAH005, Incorporate lifespan development and sociological concepts into leisure and health programming",
      "CHCLAH004, Participate in planning leisure and health programs for clients with complex needs",
      "CHCLAH003, Participate in the planning, implementation and monitoring of individual leisure and health programs",
      "CHCLAH002, Contribute to leisure and health programming",
      "CHCLAH001, Work effectively in the leisure and health industries",
      "CHCCCS038, Facilitate the empowerment of people receiving support",
      "CHCDIS012, Support community participation and social inclusion",
      "CHCCCS040, Support independence and wellbeing",
      "CHCPAL003, Deliver care services using a palliative approach",
      "CHCCOM002, Use communication to build relationships",
      "CHCPRP003, Reflect on and improve own professional practice",
      "CHCAGE011, Provide support to people living with dementia",
      "CHCCCS031, Provide individualised support",
      "HLTAID011, Provide First Aid",
      "FBPOPR3004, Set up a production or packaging line for operation",
      "FBPFSY3005, Control contaminants and allergens in food processing",
      "FBPFSY4005, Conduct a traceability exercise",
      "FBPPPL3003, Participate in improvement processes",
      "FBPPPL3005, Participate in an audit process",
      "FBPPPL3008, Establish compliance requirements for work area",
      "FBPFSY3002, Participate in a HACCP team",
      "FBPPPL3004, Lead work teams and groups",
      "FBPTEC3001, Apply raw materials, ingredient and process knowledge to production problems",
      "FBPTEC4008, Participate in product recall",
      "FBPOPR2070, Apply quality systems and procedures",
      "FBPFSY2002, Apply food safety procedures",
    ],
    entryRequirements:
      "There are no pre-requisite qualifications for entry into this qualification. Stella Collage Training have processes in place to promote suitable and appropriate course enrolments including but not limited to: an invitation to a detailed information session, a Language Literacy and Numeracy Digital (LLND) assessment, and a Pre-Training Review to ensure the best suited course aligned to your needs and wants, is identified before enrolment is finalised.Evidence of the following is required BEFORE work placement (hands-on industry experience) can be undertaken:National Working with Children Check – The cost of obtaining a Working with Children’s Check varies across different states. For detailed information on the fees applicable in your state, please refer to our course fees page. This can be organised via your State based authority responsible for issuing and providing the Working with Children Check Service.Vaccinations – Evidence of some vaccinations is also a requirement including but not limited to influenza (flu) vaccination, and 3 COVID vaccinations prior to the placement component",
    jobs: [
      "Accommodation Support Worker",
      "Community Support Worker",
      "Home Care Assistant",
      "Care Assistant",
      "Personal Care Assistant",
      "Care Service Employees",
      "Personal Care Giver",
      "Care Workers",
      "Personal Care Worker",
      "Residential Care Worker",
      "Community Hours Worker",
      "Support Worker",
    ],
    studyPaths:
      "Flexible Study: With Stella Collage you can tailor your studies to suit you with our online, instructor-support curriculumExpert Trainers: Learn from industry experienced and passionate trainers to support and guide youWork Placement: Stella Collage has strong ties with leading healthcare facilities, ensuring students have access to top-tier work placements. As a part of this course you will gain 120 hours of real-world experience through work placement with renowned industry experts in the field.Payment Plans: Stella Collage Training understands that sometimes you need flexibility in your ability to pay for the important things in life and there’s nothing more important than your education. Through our partner Debit Success you can access a range of payment plans to make your education accessible, affordable and flexible",
    units: 15,
    core: 9,
    elective_units: 6,
    workPlacement: {
      description:
        "Bring your learning to life by applying what you’ve learned in the classroom to real-world settings. Every qualification at Stella Collage includes a work placement. Our goal is to ensure you’re equipped with practical skills and knowledge that perfectly match industry standards.",
      process: [
        "Student placement will be organised on behalf of the Student by Stella Collage Training",
        "The Student will be allocated work placement within a 1-hour radius of the course location (public transport is not taken into consideration within this timing)",
        "Student work placement is non-negotiable and must be completed within a 3 week period Monday to Friday. No weekend work is required",
        "We work closely with our industry partners to make student’s work placement as seamless as possible",
      ],
      requirements: [
        "Our industry partners require a clean police check for us to place you for work placement. If you have concerns regarding your police check, please raise this before enrolment so we can advise if this may impact your ability to complete the qualification.",
      ],
      note: "Discover the prerequisites for enrolling in our work placement program.",
    },
  },

  {
    id: 3,
    thumb: course_thumb3,
    tag: "Leisure & Health",
    review: "(4.3 Reviews)",
    title: "CHC43415 Certificate IV in Leisure and Health",
    author: "David Millar",
    price: 3500,
    lesson: "18 Lessons",
    minute: "4h 45m",
    description: `This qualification reflects the role of workers participating in the design, implementation and evaluation of leisure, health activities and programs for clients in one or more sector areas. Workers may be in residential facilities and/or in community agencies and day centres, completing specialised tasks and functions in relation to leisure and health. While workers are responsible for their own outputs, work is carried out under direct or indirect supervision within defined organisation guidelines. The Certificate IV in Leisure and Health allows you to assess the human behaviour of those requiring support and implement leisure activities or programs to support their everyday lives. These programs focus on initiatives that are beyond clinical care and aim to be interactive, recreational and health related activities. Are you ready to begin a meaningful career and care for others in need? With Government funding now available for study (subject to eligibility); there has never been a better time!`,
    syllabus: [
      "Planning Leisure Activities",
      "Promoting Wellbeing",
      "Understanding Client Needs",
      "Program Implementation",
      "Evaluation and Reporting",
    ],
  },
  {
    id: 4,
    thumb: course_thumb4,
    tag: "Disability",
    review: "(4.5 Reviews)",
    title: "CHC43121 Certificate IV in Disability Support",
    author: "David Millar",
    price: 3500,
    lesson: "22 Lessons",
    minute: "5h 10m",
    description:
      "This qualification reflects the role of workers in a range of community settings and clients’ homes, who provide training and support in a manner that empowers people with disabilities to achieve greater levels of independence, self-reliance, community participation and well-being.Workers promote a person-centred approach, work without direct supervision and may be required to supervise and/or coordinate a small team.Are you ready to begin a meaningful career and care for others in need? By completing a nationally accredited Certificate in Disability; you gain entry to work in this growing sector as a Disability Support Worker/Carer at a Disability Provider or Community Services Provider. With Government funding now available for study (subject to eligibility); there has never been a better time!",
    jobs: [
      "Behavioural Support Officer",
      "Development Officer",
      "Disability Officer / Worker – Day Support",
      "Senior Disability Worker",
      "Employment Coordinator (Disability)",
      "Job Coordinator",
      "Lifestyle Support Officer",
      "Support Facilitator (Disability)",
      "Local Area Coordinator",
      "Marketing Coordinator (Disability)",
      "Residential Care Officer",
      "Senior Personal Care Assistant",
      "Social Educator (Disabiliy)",
      "Disability Team Leader",
      "Social Trainer",
      "Disability Support Assistant (Schools)",
      "Disability Officer / Worker – Day Support",
      "Disabilities Supervisor",
      "Community Development Officer",
      "Project Officer (Life Enhancement Team)",
    ],
    syllabus: [
      "MSS403003 - Contribute to improvements in competitive systems and practices",
      "MSS403012 - Facilitate change in a competitive systems and practices environment",
      "MSS403057 - Map an operational process",
      "MSS403058 - Facilitate breakthrough improvements",
      "MSS403081 - Ensure process improvements are sustained",
      "MSS405047 - Undertake analysis of cost and waste in terms of customer value",
      "MSS405078 - Lead and manage people within competitive systems and practices",
      "MS403045 - Facilitate and improve 5S",
      "MS403056 - Map an internal value stream",
      "MSS403059 - Facilitate continuous improvement through the use of standardised procedures and practices",
      "MSS404051 - Mistake proof a process",
      "MSMENV472 - Implement and monitor environmentally sustainable work practices",
    ],
    units: 10,
    core: 7,
    elective_units: 3,
    entryRequirements:
      "This course has the following entry Requirements:Completion of: CHC33021 Certificate III in Individual Support (Disability) orCompletion of: CHC33015 Certificate III in Individual Support (Disability) or Completion of: CHC30408 Certificate III in Disability PLUS the CHCSS00125 Entry to Certificate IV in Disability Support Skill Set Evidence of the following is required BEFORE work placement (hands-on industry experience) can be undertaken: National Working with Children Check – The cost of obtaining a Working with Children’s Check varies across different states. For detailed information on the fees applicable in your state, please refer to our course fees page. This can be organised via your State based authority responsible for issuing and providing the Working with Children Check Service. NDIS Worker Check – For detailed information on the fees applicable, please refer to our National Police Check – For detailed information on the fees applicable, please refer to our Vaccinations – Evidence of some vaccinations is also a requirement including but not limited to influenza (flu) vaccination, and 3 COVID vaccinations prior to the placement component     ",
  },
  {
    id: 5,
    thumb: course_thumb5,
    tag: "Food Processing",
    review: "(4.8 Reviews)",
    title: "FBP30121 Certificate III in Food Processing",
    author: "David Millar",
    price: 4599,
    lesson: "30 Lessons",
    minute: "54 Weeks",
    description:
      "This program is being offered as a qualification for learners wanting to complete the qualification of Certificate III in Food Processing. This qualification specifies the competencies required for individuals working in operational roles in larger food processing sites, where the work is mainly automated and large scale. They are required to work autonomously, use judgement, interpret information and apply solutions to routine and some non-routine problems. They may also take some responsibility for the output of others. This training program is suitable for experienced operators and also serves as a pathway for further learning.",
    syllabus: [
      "HLTWHS002 - Follow safe work practices for direct client care",
      "CHCDIV001 - Work with diverse people",
      "HLTAAP002 - Confirm physical health status",
      "CHCLAH005 - Incorporate lifespan development and sociological concepts into leisure and health programming",
      "CHCLAH004 - Participate in planning leisure and health programs for clients with complex needs",
      "CHCLAH003 - Participate in the planning, implementation and monitoring of individual leisure and health programs",
      "CHCLAH002 - Contribute to leisure and health programming",
      "CHCLAH001 - Work effectively in the leisure and health industries",
      "CHCCCS038 - Facilitate the empowerment of people receiving support",
      "CHCDIS012 - Support community participation and social inclusion",
      "CHCCCS040 - Support independence and wellbeing",
      "CHCPAL003 - Deliver care services using a palliative approach",
      "CHCCOM002 - Use communication to build relationships",
      "CHCPRP003 - Reflect on and improve own professional practice",
      "CHCAGE011 - Provide support to people living with dementia",
      "CHCCCS031 - Provide individualised support",
      "HLTAID011 - Provide First Aid",
      "FBPOPR3004 - Set up a production or packaging line for operation",
      "FBPFSY3005 - Control contaminants and allergens in food processing",
      "FBPFSY4005 - Conduct a traceability exercise",
      "FBPPPL3003 - Participate in improvement processes",
      "FBPPPL3005 - Participate in an audit process",
      "FBPPPL3008 - Establish compliance requirements for work area",
      "FBPFSY3002 - Participate in a HACCP team",
      "FBPPPL3004 - Lead work teams and groups",
      "FBPTEC3001 - Apply raw materials, ingredient and process knowledge to production problems",
      "FBPTEC4008 - Participate in product recall",
      "FBPOPR2070 - Apply quality systems and procedures",
      "FBPFSY2002 - Apply food safety procedures",
    ],
    entryRequirements:
      "There are no formal entry requirements for entry to FBP30121. However, it should be noted that this qualification reflects the role of individuals required to apply a broad range of knowledge and skills in varied contexts and undertake skilled work. This qualification is suitable for experienced operators, technicians and trade workers. This qualification is not suitable for direct from school.",
    units: 17,
    core: 5,
    elective_units: 12,
    jobs: [
      "Advanced packaging operator",

      "Advanced production operator",

      "Food processing technician (poultry)",

      "Salesperson (food processing)",

      "Food processing operator (grain)",

      "Food processing technician (poultry)",

      "Salesperson (food processing)",
    ],
  },
  {
    id: 6,
    thumb: course_thumb6,
    tag: "Competitive Systems & Practices",
    review: "(4.5 Reviews)",
    title: "MSS30322 Certificate III in Competitive Systems & Practices",
    author: "David Millar",
    price: 3000,
    lesson: "28 Lessons",
    minute: "52 Weeks",
    description:
      "This program is being offered as a qualification for learners wanting to complete the qualification of Certificate III in Competitive Systems and Practices (CSP).It is targeted towards currently full time/part time employed individuals who apply competitive systems and practices to their own work, contribute to identifying improvements and, where required, assist others to apply competitive systems and practices to their work. This qualification provides a mixture of fundamental and more advanced skills in competitive systems and practices. It can also provide skills in guiding and assisting others in the competitive systems and practices environment.It is also suitable for new full-time/part-time individuals with current or past work experiences entering into the manufacturing/production/service industry. It is also an add-on, or overlay, for a person who has existing skills in their work for example in production, logistics, administration, healthcare, maintenance, financial services, warehousing, agribusinesses or other industries or job roles.These individuals must have the capacity to fully demonstrate the required range skills and knowledge in a broader context or in different environments for the purpose of this qualification. For this reason, this qualification is not suitable for direct entry from school.This qualification provides a mixture of fundamental and more advanced skills in competitive systems and practices. It can also provide skills in guiding and assisting others in the competitive systems and practices environment.",
    syllabus: [
      "HLTWHS002 - Follow safe work practices for direct client care",
      "CHCDIV001 - Work with diverse people",
      "HLTAAP002 - Confirm physical health status",
      "CHCLAH005 - Incorporate lifespan development and sociological concepts into leisure and health programming",
      "CHCLAH004 - Participate in planning leisure and health programs for clients with complex needs",
      "CHCLAH003 - Participate in the planning, implementation and monitoring of individual leisure and health programs",
      "CHCLAH002 - Contribute to leisure and health programming",
      "CHCLAH001 - Work effectively in the leisure and health industries",
      "CHCCCS038 - Facilitate the empowerment of people receiving support",
      "CHCDIS012 - Support community participation and social inclusion",
      "CHCCCS040 - Support independence and wellbeing",
      "CHCPAL003 - Deliver care services using a palliative approach",
      "CHCCOM002 - Use communication to build relationships",
      "CHCPRP003 - Reflect on and improve own professional practice",
      "CHCAGE011 - Provide support to people living with dementia",
      "CHCCCS031 - Provide individualised support",
      "HLTAID011 - Provide First Aid",
      "FBPOPR3004 - Set up a production or packaging line for operation",
      "FBPFSY3005 - Control contaminants and allergens in food processing",
      "FBPFSY4005 - Conduct a traceability exercise",
      "FBPPPL3003 - Participate in improvement processes",
      "FBPPPL3005 - Participate in an audit process",
      "FBPPPL3008 - Establish compliance requirements for work area",
      "FBPFSY3002 - Participate in a HACCP team",
      "FBPPPL3004 - Lead work teams and groups",
      "FBPTEC3001 - Apply raw materials, ingredient and process knowledge to production problems",
      "FBPTEC4008 - Participate in product recall",
      "FBPOPR2070 - Apply quality systems and procedures",
      "FBPFSY2002 - Apply food safety procedures",
    ],
    jobs: [
      "production or operations",
      "office",
      "maintenance",
      "organisations in a value chain, such as suppliers, distributors, transport and logistics",
      "and other job roles requiring the skills delivered by completing the qualification",
    ],
    entryRequirements:
      "There are no formal entry requirements for entry to MSS30322. However, it should be noted that this qualification is not intended to supply operational or technical skills that are used in conjunction with competitive systems and practices skills. This qualification is not suitable for direct from school.",
    units: 12,
    core: 4,
    elective_units: 8,
  },
  {
    id: 7,
    thumb: course_thumb6,
    tag: "Competitive Systems & Practices",
    review: "(4.5 Reviews)",
    title: "MSS40322 Certificate IV in Competitive Systems and Practices",
    author: "David Millar",
    price: 3000,
    lesson: "28 Lessons",
    minute: "52 Weeks",
    description:
      "This program is being offered as a qualification for learners wanting to complete the qualification of Certificate IV in Competitive Systems and Practices (CSP).It is targeted towards currently full time/part time employed individuals who are responsible for facilitating and monitoring the implementation of CSP to improve efficiency in a team or work area and own work role. Individuals apply broad knowledge and analytical skills to facilitate change and improve efficiency.This qualification provides the skills and knowledge required by a team leader or other person to implement competitive systems and practices in the work of a team or work group, or by a specialist in competitive systems and practices. For this reason, this qualification is not suitable for direct entry from school.",
    syllabus: [
      "MSS403003 - Contribute to improvements in competitive systems and practices",
      "MSS403012 - Facilitate change in a competitive systems and practices environment",
      "MSS403057 - Map an operational process",
      "MSS403058 - Facilitate breakthrough improvements",
      "MSS403081 - Ensure process improvements are sustained",
      "MSS405047 - Undertake analysis of cost and waste in terms of customer value",
      "MSS405078 - Lead and manage people within competitive systems and practices",
      "MS403045 - Facilitate and improve 5S",
      "MS403056 - Map an internal value stream",
      "MSS403059 - Facilitate continuous improvement through the use of standardised procedures and practices",
      "MSS404051 - Mistake proof a process",
      "MSMENV472 - Implement and monitor environmentally sustainable work practices",
    ],
    jobs: [
      "production or operations",
      "office",
      "maintenance",
      "organisations in a value chain, such as suppliers, distributors, transport and logistics",
      "and other job roles requiring the skills delivered by completing the qualification",
    ],
    entryRequirements:
      "There are no formal entry requirements for entry to MSS40322. However, it should be noted that this qualification is not intended to supply operational or technical skills that are used in conjunction with competitive systems and practices skills. This qualification is not suitable for direct from school.",
    units: 12,
    core: 3,
    elective_units: 9,
  },
];

export default course_detail_data;
