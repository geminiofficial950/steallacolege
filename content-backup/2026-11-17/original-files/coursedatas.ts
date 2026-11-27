import { StaticImageData } from "next/image";

import course_thumb1 from "@/assets/img/courses/course_thumb01.jpg";
import course_thumb2 from "@/assets/img/courses/course_thumb02.jpg";
import course_thumb3 from "@/assets/img/courses/course_thumb03.jpg";
import course_thumb4 from "@/assets/img/courses/course_thumb04.jpg";
import course_thumb5 from "@/assets/img/courses/course_thumb05.jpg";
import course_thumb6 from "@/assets/img/courses/course_thumb06.jpg";

interface CourseType {
  title: string;
  image: string | StaticImageData;
  detail: {
    tabs: {
      title: string;
      details: {
        title?: string;
        description: string | string[] | { [key: string]: string }[];
        card_type: string;
        notes?: string;
      }[];
    }[];
  }[];
}
// Main type with course_list
export interface CourseDetailType {
  course_list: CourseType[];
}

export const course_detail_data: CourseDetailType = {
  course_list: [
    {
      title: "CHC43015 – Certificate IV in Ageing Support",
      image: "course_thumb1",
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              details: [
                {
                  title: "Course Overview",
                  description: [
                    {
                      key: "Duration",
                      value: "52 weeks",
                    },
                    {
                      key: "Price",
                      value: "3500",
                    },
                    {
                      key: "Lesson",
                      value: "20 lesson",
                    },
                    {
                      key: "Category",
                      value: "Agening & Desability",
                    },
                  ],
                  card_type: "table",
                },
                {
                  title: "Course Description",
                  description:
                    "This qualification reflects the role of support workers who complete specialised tasks and functions in aged services; either in residential, home or community based environments.Workers will take responsibility for their own outputs within defined organisation guidelines and maintain quality service delivery through the development, facilitation and review of individualised service planning and delivery. Workers may be required to demonstrate leadership and have limited responsibility for the organisation and the quantity and quality of outputs of others within limited parameters.Our Certificate IV in Ageing Support course is suitable for those seeking to work in, working in, or who have studied in the Aged Care sector; as well as people with care or community service experience looking to advance their skills. This qualification addresses work primarily in residential facilities, or homes within defined organisation guidelines and service plans.During the course you will learn to carry out activities related to maintaining an individual’s well being through personal care and other activities of good living. You will also learn to provide services to individuals with complex needs, and work with groups of older people.",
                  card_type: "normal",
                },
                {
                  title: "Course Design & Target Audience",
                  description:
                    "The course is designed for individuals who are willing to work within community and/or residential settings. The training and assessment strategy is targeted at the learner cohort with no prior learning and experience in the aged care sector or CHC43015 - Certificate IV in Ageing Support qualification and would like to undertake this qualification for reasons like seeking employment in the aged care sector, to form a base for their higher studies in the Aged Care sector and/or for their personal development, as well as those wanting a pathway to Diploma of Community Services to undertake managerial roles.",
                  card_type: "normal",
                },
                {
                  title: "Study pathways",
                  description:
                    "<p>Upon successful completion of this program offers pathways into CHC52021 Diploma in Community Services (Note: This qualification is not delivered by Stella Collage Training at present)</p><p>Current & Previous Students have also enrolled into the following to broaden employment opportunities:</p>",
                  card_type: "normal",
                },
                {
                  description: [
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
                  card_type: "bullet",
                },
                {
                  description: [
                    {
                      title: "",
                      isHref: "YES",
                      LINK: "google.com",
                    },
                    {
                      title: "",
                      isHref: "NONE",
                    },
                  ],
                  card_type: "bullet_with_link",
                },
              ],
            },
            {
              title: "Curriculum",
              details: [
                {
                  description: "Course Units",
                  card_type: "normal",
                },
                {
                  description: "CHC43015 – Certificate IV in Ageing Support:",
                  card_type: "normal",
                },
                {
                  description: [
                    {
                      total_number_units: "Total number of units 17",
                      units: "15 core units",
                      " elective_units": "3 elective units",
                    },
                  ],
                  card_type: "bullet",
                },
                {
                  description: "PHP Course",
                  card_type: "Link",
                },
                {
                  title: "Unit Code & Unit Title",
                  description: [
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
                  card_type: "bullet",
                },
              ],
            },
            {
              title: "Entry Requirement",
              details: [
                {
                  description: "Entry Requirements",
                  card_type: "normal",
                },
                {
                  description:
                    "There are no pre-requisite qualifications for entry into this qualification. Stella Collage Training have processes in place to promote suitable and appropriate course enrolments including but not limited to: an invitation to a detailed information session, a Language Literacy and Numeracy Digital (LLND) assessment, and a Pre-Training Review to ensure the best suited course aligned to your needs and wants, is identified before enrolment is finalised.A national Police clearance is required before the placement component can be undertaken.Evidence of some vaccinations is also a requirement including but not limited to influenza (flu) vaccination, COVID vaccination prior to the placement component.",
                  card_type: "normal",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
