// src/components/courseDetailData.ts

export interface PackagingRules {
  totalUnits: number;
  coreUnits: number;
  electiveUnits: number;
  selectionRules?: string;
  specialisation?: {
    ageing?: string;
    disability?: string;
    ageingAndDisability?: string;
  };
}

export interface CourseDetail {
  id: string;
  title: string;
  description: string;
  keyPoints?: string[];
  entryRequirements?: string;
  duration?: string;
  licensing?: string;
  packagingRules?: PackagingRules;
  targetLearners?: string;
  programObjectives?: string[];
  features?: string[];
  benefits?: string[];
  pathways?: {
    furtherStudy?: string[];
    jobOutcomes?: string[];
  } | string[] | string;
  jobOutcomes?: string[];
}

export const courseDetailData: CourseDetail[] = [
  {
    id: "CHC33021",
    title: "Certificate III in Individual Support (Ageing and Disability)",
    description:
      "This qualification reflects the role of individuals in the community, home or residential care setting who work under supervision and delegation as part of a multi-disciplinary team. They follow an individualised plan to provide person-centred support to people who may require support due to ageing, disability, or other reasons.",
    keyPoints: [
      "Take responsibility for own outputs within scope of job role and delegation.",
      "Workers have a range of factual, technical, procedural and some theoretical knowledge.",
      "Must complete at least 120 hours of work as detailed in Assessment Requirements."
    ],
    entryRequirements:
      "No formal entry requirements. Can be taken directly from school.",
    duration: "52 Weeks",
    licensing: "No licensing or certification requirements apply.",
    packagingRules: {
      totalUnits: 15,
      coreUnits: 9,
      electiveUnits: 6,
      specialisation: {
        ageing: "All Group A electives must be selected.",
        disability: "All Group B electives must be selected.",
        ageingAndDisability:
          "All Group A and B electives must be selected for award of the Certificate III in Individual Support (Ageing and Disability)."
      }
    },
    targetLearners:
      "Individuals willing to work in community and/or residential settings, including job seekers, new migrants, and unemployed people seeking employment opportunities.",
    pathways: {
      furtherStudy: [
        "CHC43015 Certificate IV in Ageing Support",
        "CHC43121 Certificate IV in Disability Support"
      ],
      jobOutcomes: [
        "Care Assistant",
        "Care Worker",
        "Personal Care Assistant",
        "Residential Care Worker",
        "Support Worker",
        "Disability Support Worker"
      ]
    }
  },
  {
    id: "CHC43015",
    title: "Certificate IV in Ageing Support",
    description:
      "Prepares support workers to complete specialised tasks and functions in aged services in residential, home, or community settings.",
    keyPoints: [
      "Take responsibility for outputs within defined organisation guidelines.",
      "Develop, facilitate, and review individualised service planning and delivery.",
      "Demonstrate leadership and maintain quality service delivery."
    ],
    entryRequirements:
      "No pre-requisite qualifications. Police clearance and some vaccinations are required before placement.",
    programObjectives: [
      "Develop foundation knowledge to work effectively with older people.",
      "Carry out activities to maintain personal care and activities of living.",
      "Work effectively with co-workers and report to a supervisor.",
      "Develop cultural awareness and respectful practices."
    ]
  },
  {
    id: "CHC43121",
    title: "Certificate IV in Disability Support",
    description:
      "Prepares workers to provide training and support to people with disabilities, empowering them to achieve independence, self-reliance, and community participation.",
    features: [
      "Person-centred approach, no direct supervision required.",
      "May supervise or coordinate a small team.",
      "Includes 120 hours of work placement with industry experts."
    ],
    benefits: [
      "Flexible study options",
      "Expert trainers",
      "Work placement support",
      "Payment plans available"
    ],
    pathways: [
      "HLT54121 Diploma of Nursing",
      "CHC52021 Diploma of Community Services",
      "CHC43015 Certificate IV in Ageing Support",
      "CHC43415 Certificate IV in Leisure and Health"
    ]
  },
  {
    id: "FBP30121",
    title: "Certificate III in Food Processing",
    description:
      "For learners working in operational roles in larger food processing sites. Focus on automated, large-scale processes.",
    entryRequirements:
      "No formal entry requirements but not suitable for direct-from-school learners.",
    duration: "54 Weeks",
    packagingRules: {
      totalUnits: 17,
      coreUnits: 5,
      electiveUnits: 12,
      selectionRules:
        "At least 6 from Groups A–M, up to 3 from Group N, and up to 4 from other training packages."
    },
    targetLearners:
      "Current food processing operators working in large organisations.",
    jobOutcomes: [
      "Advanced Packaging Operator",
      "Food Processing Technician",
      "Production Operator",
      "Salesperson (Food Processing)"
    ]
  },
  {
    id: "MSS30322",
    title: "Certificate III in Competitive Systems and Practices",
    description:
      "For workers applying competitive systems and practices to their work, helping to identify improvements and assist others in applying CSP.",
    entryRequirements:
      "No formal entry requirements. Not suitable for direct from school.",
    duration: "52 Weeks",
    packagingRules: {
      totalUnits: 12,
      coreUnits: 4,
      electiveUnits: 8
    },
    targetLearners:
      "Currently employed individuals in production, logistics, administration, healthcare, maintenance, financial services, or warehousing.",
    pathways: "MSS40322 Certificate IV in Competitive Systems and Practices"
  },
  {
    id: "MSS40322",
    title: "Certificate IV in Competitive Systems and Practices",
    description:
      "For team leaders or specialists implementing CSP to improve efficiency in a team or work group.",
    entryRequirements:
      "No formal entry requirements. Not suitable for direct from school.",
    duration: "52 Weeks",
    packagingRules: {
      totalUnits: 12,
      coreUnits: 3,
      electiveUnits: 9
    },
    targetLearners:
      "Workers in production, maintenance, office, logistics or value chain organisations with supervisory responsibilities.",
    pathways:
      "Provides career progression opportunities within CSP implementation roles."
  }
];
