import { StaticImageData } from "next/image";

// NRT / courses without new assets in public/assets/courseImages
import course_thumb4 from "@/assets/img/new_course/pics/disablility.jpeg";
import course_thumb1 from "@/assets/img/new_course/pics/ageing.webp";
import course_thumb2 from "@/assets/img/new_course/pics/big card 2.webp";
import course_thumb3 from "@/assets/img/new_course/pics/liesure.webp";
import course_thumb5 from "@/assets/img/courseimages/cpr.webp";
import course_thumb6 from "@/assets/img/courseimages/fa.webp";
import course_thumb10 from "@/assets/img/courseimages/fb.webp";

// Category images
import image1 from "@/assets/img/graphics 3/ageing and disability.webp";
import image2 from "@/assets/img/graphics 3/compettitive.webp";
import image3 from "@/assets/img/graphics 3/first aid.webp";
import image4 from "@/assets/img/graphics 3/food processing.webp";
import image5 from "@/assets/img/graphics 3/leisure and health.webp";
import image6 from "@/assets/img/graphics 3/technology.webp";
import image7 from "@/assets/img/graphics 3/cybersecurity.webp";
import image8 from "@/assets/img/graphics/Language.png";
import image9 from "@/assets/img/graphics 3/business.webp";
import image10 from "@/assets/img/graphics 2/FB.png";
import image11 from "@/assets/img/graphics 3/professional development.webp";
import image12 from "@/assets/img/graphics 3/hd.png";
import image13 from "@/assets/img/graphics 3/hd.webp";

// New course card (outside) + detail (inside) images
import aiOutside from "../../../public/assets/courseImages/ai outside.png";
import aiInside from "../../../public/assets/courseImages/ai inside.png";
import aiBusinessOutside from "../../../public/assets/courseImages/ai for business outside.png";
import aiBusinessInside from "../../../public/assets/courseImages/ai for businesss inside.png";
import advancedAiOutside from "../../../public/assets/courseImages/advanced ai outside.png";
import advancedAiInside from "../../../public/assets/courseImages/advanced ai inside.png";
import workplaceOutside from "../../../public/assets/courseImages/australian workspace outside.png";
import workplaceInside from "../../../public/assets/courseImages/australian workspace inside.png";
import ausValuesOutside from "../../../public/assets/courseImages/australian values outside.png";
import ausValuesInside from "../../../public/assets/courseImages/australia value inside.png";
import businessOutside from "../../../public/assets/courseImages/business outside.png";
import businessInside from "../../../public/assets/courseImages/business inside.png";
import communicationOutside from "../../../public/assets/courseImages/communication outside.png";
import communicationInside from "../../../public/assets/courseImages/communication inside.png";
import entrepreneurOutside from "../../../public/assets/courseImages/enterprenuer outside.png";
import entrepreneurInside from "../../../public/assets/courseImages/enterprenuer inside.png";
import cyberOutside from "../../../public/assets/courseImages/cybersecurity outside.png";
import cyberInside from "../../../public/assets/courseImages/cybersecurity inside.png";
import cyberAwarenessOutside from "../../../public/assets/courseImages/cybersecurity awareness outside.png";
import cyberAwarenessInside from "../../../public/assets/courseImages/cybersecurity awreness inside.png";
import sentio1Outside from "../../../public/assets/courseImages/sentio part 1 outside.png";
import sentio1Inside from "../../../public/assets/courseImages/sentio part 1 inside.png";
import sentio2Outside from "../../../public/assets/courseImages/sentio part 2 outside.png";
import sentio2Inside from "../../../public/assets/courseImages/sentio part 2 inside.png";
import sentio3Outside from "../../../public/assets/courseImages/sentio part 3 outside.png";
import sentio3Inside from "../../../public/assets/courseImages/sentio part 3 inside.png";
import sentio4Outside from "../../../public/assets/courseImages/sentio part 4 outside.png";
import sentio4Inside from "../../../public/assets/courseImages/sentio part 4 inside.png";
import sentio5Outside from "../../../public/assets/courseImages/sentio part 5 outside.png";
import sentio5Inside from "../../../public/assets/courseImages/sentio part 5 inside.png";

const courseImg = {
  ai: { out: aiOutside, in: aiInside },
  aiBusiness: { out: aiBusinessOutside, in: aiBusinessInside },
  advancedAi: { out: advancedAiOutside, in: advancedAiInside },
  workplace: { out: workplaceOutside, in: workplaceInside },
  ausValues: { out: ausValuesOutside, in: ausValuesInside },
  business: { out: businessOutside, in: businessInside },
  communication: { out: communicationOutside, in: communicationInside },
  entrepreneur: { out: entrepreneurOutside, in: entrepreneurInside },
  cyber: { out: cyberOutside, in: cyberInside },
  cyberAwareness: { out: cyberAwarenessOutside, in: cyberAwarenessInside },
  sentio1: { out: sentio1Outside, in: sentio1Inside },
  sentio2: { out: sentio2Outside, in: sentio2Inside },
  sentio3: { out: sentio3Outside, in: sentio3Inside },
  sentio4: { out: sentio4Outside, in: sentio4Inside },
  sentio5: { out: sentio5Outside, in: sentio5Inside },
};

interface CourseType {
  courseId?: string;
  title: string;
  image: string | StaticImageData;
  courseimage?: string | StaticImageData;
  review?: string;
  category?: string;
  categoryId?: string;
  category_Image?: string | StaticImageData;
  duration?: string;
  modeofdelivery?: string;
  price?: string;
  units?: string;
  intakes?: string;
  certification?: string;
  rating?: string;
  workplacement?: string;
  allCourses?: string;
  modules?: string;
  removeprice?: string;
  Topics?: string;
  review_data?: ReviewDataType[];
  detail: {
    tabs: {
      title?: string;
      description?: string;
      notes?: string;
      jobs?: string[];
      LearningOutcomes?: string[];
      syllabus?: string[];
      review?: string;
    }[];
  }[];
}
// Main type with course_list
export interface CourseDetailType {
  course_list: CourseType[];
}
interface ReviewDataType {
  id: number;
  rating: number;
  width: string;
  review: string;
}

export const course_detail_data: CourseDetailType = {
  course_list: [
    {
      courseId: "chc43015-certificate-iv-in-ageing-support-(r4)",
      title: "CHC43015 – Certificate IV in Ageing Support (R4)",
      image: course_thumb1,
      courseimage: course_thumb1,
      review: "0",
      category: "Ageing & Disability",
      certification: "Nationally Recognised Training",
      categoryId: "CSAGEING",
      duration: "52 Weeks",
      price: "3500",
      units: "18 Units",
      intakes: "Monthly",
      modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
      workplacement: "120 Hours",
      rating: "5",
      category_Image: image1,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description: `<p><h5>Course Description</h5></p><p class="ql-align-justify">This program is ideal for those starting out in the industry who need a comprehensive introduction, as well as current employees in the aged care sector seeking to strengthen or broaden their skills. This qualification reflects the role of support workers who undertake specialised tasks and functions within aged services, including residential, home-based, or community settings. Workers are responsible for their own outputs within defined organisational guidelines and ensure quality service delivery through developing, facilitating, and reviewing individualised service plans. They may also be required to demonstrate leadership skills and have limited responsibility for managing the workload and quality of outputs of others within set parameters.</p><p class="ql-align-justify">Stella College’s Certificate IV in Ageing Support is suited to those currently working in, seeking work in, or who have previous experience or studies in the aged care sector. This course also benefits individuals with care or community service backgrounds who wish to advance their skills. The qualification focuses primarily on work in residential facilities or home environments within defined organisational policies and care plans.</p><p class="ql-align-justify">Throughout the course, you will learn to perform activities that maintain an individual’s wellbeing through personal care and other everyday living activities. You will also be trained to provide services to individuals with complex needs and to work effectively with groups of older people.</p><p><h5>Work Placement</h5></p><p>At least 120 hours of supervised work placement should be completed.</p><p>Students are encouraged to arrange their own placement, with support from Stella College provided on an as-needed basis.</p><p>Students can also request support from Stella College Admin team to find placement for the students.</p><p>Students can use their current workplace for placement (Has to be approved by Stella College before beginning the placement)</p><p>Each unit with a placement component includes a work placement assessment&nbsp;task.</p><p>For detailed information, please refer to placement section under student hub.</p><p><h5>Study Pathways</h5></p><p>Completion enables graduates to pursue advanced qualifications, including CHC52021 Diploma of Community Services (not offered by Stella College currently). Current &amp; Previous Students have also enrolled into the following to broaden employment opportunities: <a href="/course-details/chc43415-certificate-iv-in-leisure-and-health-(r4)" style="color: rgb(33, 94, 153);">CHC43415 Certificate IV in Leisure &amp; Health</a><u style="color: rgb(33, 94, 153);"> or </u><a href="/course-details/chc43121-certificate-iv-in-disability-support-(r1)" style="color: rgb(33, 94, 153);">CHC43121 Certificate IV in Disability Support</a></p><p><h5>Why Study in the Ageing Support Industry at Stella College?</h5></p><p>Pursuing a qualification in Ageing Support at Stella College empowers you to create meaningful change in the lives of older Australians. As our population ages, skilled professionals are urgently needed to deliver compassionate, high-quality support and care. Stella College provides the ideal environment to begin this rewarding journey.</p><p><h5>Be Part of a Growing, Essential Workforce</h5></p><p> The aged care sector is one of Australia’s fastest-growing industries, offering excellent job stability and ongoing demand for dedicated staff. By studying with Stella College, you prepare yourself for a sector where your expertise will always be valued and needed.</p><p><h5>Make a Real Impact Every Day</h5></p><p> Working in ageing support means you have the chance to brighten lives and enable independence for older people, improving their wellbeing and dignity. Every day, your actions make a difference within homes, communities, and residential care settings.</p><p><h5>Build Professional and Personal Skills</h5></p><p> Stella College’s course equips you with vital skills in communication, person-centred care, and teamwork—abilities that not only prepare you for a future in healthcare but also foster personal growth and confidence.</p><p><h5>Pathways for Career Progression</h5></p><p> Aged care offers a pathway to specialisations and advancement—whether you wish to move into supervisory positions, specialise in palliative or dementia care, or build on your studies with higher qualifications.</p><p>&nbsp;</p>`,
              jobs: [
                "Accommodation Support Worker",
                "Personal Care Assistant",
                "Home Care Worker",
                "Community Support Worker",
                "Assistant in Nursing",
                "Care Service Employee",
                "Residential Care Worker",
                "Support Worker",
                "Care Assistant",
              ],
              LearningOutcomes: [
                "Deliver comprehensive personal care and support for people with complex and diverse needs.",
                "Apply leadership and quality standards through individualised service planning and review.",
                "Facilitate independence, wellbeing, and respectful engagement for older individuals.",
                "Take initiative and show responsibility within defined organisational policies.",
                "Develop the capability to guide others and enhance service delivery.",
              ],
            },
            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>CHC43015 – Certificate IV in Ageing Support:</p> <p><strong>Duration</strong> 52 Weeks</p><ul><li>Total number of units 18</li><li>15 core units</li><li>3 Elective units </li></ul><p></p>",
              syllabus: [
                "CHCADV001 – Facilitate the interests and rights of clients",
                "CHCAGE001 – Facilitate the empowerment of older people",
                "CHCAGE003 – Coordinate services for older people",
                "CHCAGE004 – Implement interventions with older people at risk",
                "CHCAGE005 – Provide support to people living with dementia",
                "CHCCCS006 – Facilitate individual service planning and delivery",
                "CHCCCS011 – Meet personal support needs",
                "CHCCCS023 – Support independence and wellbeing",
                "CHCCCS025 – Support relationships with carers and families",
                "CHCDIV001 – Work with diverse people",
                "CHCLEG003 – Manage legal and ethical compliance",
                "CHCPAL001 – Deliver care services using a palliative approach",
                "CHCPRP001 – Develop and maintain networks and collaborative partnerships",
                "HLTAAP001 – Recognise healthy body systems",
                "HLTWHS002 – Follow safe work practices for direct client care",
                "CHCCOM005 – Communicate and work in health or community services",
                "HLTHPS006 – Assist clients with medication",
                "HLTAID011 – Provide first aid",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<h4>Training package entry requirements</h4><p>The training package does not specify any entry requirements for this qualification.</p><h4>Recommended background</h4><p>Completion of a Certificate III in Individual Support (Ageing), or equivalent aged care experience, is recommended but is not an entry requirement.</p><h4>Stella College admission requirements</h4><ul><li>Completion of Stella College's pre-training review, including the LLN and digital literacy assessment.</li><li>Sufficient spoken and written English for supervisory-level communication and documentation, including care planning, reporting and liaising with families and health professionals.</li><li>A Unique Student Identifier (USI).</li><li>Reliable access to a computer and the internet for online learning components. It is the student’s responsibility to source the device and an internet connection when studying blended or online delivery. If due to any reason you are unable to do so, kindly get in touch with us to discuss your options.</li><li>Applicants must be at least 18 years of age for this course, reflecting host organisation requirements for aged care placements.</li></ul><h4>Work placement</h4><p>To be awarded this qualification you must complete at least 120 hours of work placement, as detailed in the assessment requirements of the units of competency, in an aged care service. Students already employed in a relevant role may be able to meet placement requirements in their workplace subject to College and employer approval.</p><h4>Screening and checks required before placement</h4><ul><li>Worker screening as required of aged care workers under applicable aged care legislation and the host organisation's policy. Depending on the host and current legislative arrangements, this is a National Police Check and/or an NDIS Worker Screening Check clearance.</li><li>Immunisations as required by the host organisation, commonly including current influenza vaccination.</li><li>The costs of checks and immunisations are met by the student.</li></ul><h4>Physical requirements</h4><p>This course involves personal care, manual handling and mobility assistance tasks, together with extended periods on your feet. Consider these requirements before applying, and raise any concerns or support needs at the pre-training review.</p>",
            },
          ],
        },
      ],
    },
    {
      courseId:
        "chc33021-certificate-iii-in-individual-support-ageing-and-disability-(r1)",
      title:
        "CHC33021 Certificate III in Individual Support (Ageing & Disability) (R1)",
      image: course_thumb2,
      courseimage: course_thumb2,
      review: "0",
      category: "Ageing & Disability",
      categoryId: "CSAGEING",
      category_Image: image1,
      modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
      duration: "52 Weeks",
      certification: "Nationally Recognised Training",
      price: "3000",
      units: "15 Units",
      intakes: "Monthly",
      workplacement: "120 Hours",
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description: `<p><h5>Course Description</h5></p><p>This program is ideal for those starting out in the industry who need a comprehensive introduction, as well as current employees in the aged care sector and disability seeking to strengthen or broaden their skills. This qualification represents the role of individuals working under supervision within community, home, or residential care environments as part of a multidisciplinary team. They provide person-centred support according to individualised plans for people who may require assistance due to ageing, disability, or other reasons.</p><p>Workers take accountability for their own tasks within their job role and delegated responsibilities. They possess a range of factual, technical, and procedural knowledge, alongside a foundational understanding of the theories and practices necessary to deliver person-centred care. By completing the nationally accredited CHC33021 Certificate III in Individual Support (Ageing and Disability) with Stella College, you will be prepared for a rewarding career as a personal carer in residential aged care homes, community settings, or as a disability support worker.</p><p><h5>Work Placement</h5></p><p>At least 120 hours of supervised work placement should be completed.</p><p>Students are encouraged to arrange their own placement, with support from Stella College provided on an as-needed basis.</p><p>Students can also request support from Stella College Admin team to find placement for the students.</p><p>Students can use their current workplace for placement (Has to be approved by Stella College before beginning the placement)</p><p>Each unit with a placement component includes a work placement assessment&nbsp;task.</p><p>For detailed information, please refer to placement section under student hub.</p><p><h5>Study Pathways</h5></p><p>Upon completing the CHC33021 Certificate III in Individual Support (Ageing and Disability), students can choose to further develop their skills and qualifications through advanced courses. The next steps might include:</p><ul><li>The <a href="/course-details/chc43015-certificate-iv-in-ageing-support-(r4)" style="color: rgb(33, 94, 153);">CHC43015 – Certificate IV in Ageing Support</a>, which offers more comprehensive training on the complexities of caring for older adults across different care settings.</li><li>The <a href="/course-details/chc43121-certificate-iv-in-disability-support-(r1)" style="color: rgb(33, 94, 153);">CHC43121 Certificate IV in Disability Support</a>, focuses on enhancing skills to tailor support for people living with disabilities.</li><li>The <a href="/course-details/chc43415-certificate-iv-in-leisure-and-health-(r4)" style="color: rgb(33, 94, 153);">CHC43415 Certificate IV in Leisure &amp; Health</a>, highlights the role of leisure activities in promoting health and wellbeing, and how to design engaging, supportive programs.</li></ul><p>Each of these programs helps students take on more specialised roles, shoulder greater responsibilities, and open up broader career opportunities. Whether you want to deepen your knowledge in a particular area or expand your expertise, these qualifications provide valuable pathways for professional growth and development.</p><p><h5>Why Study this course at Stella College?</h5></p><p>Pursuing a career in individual support means making a genuine, positive difference in the lives of people who need assistance due to age, disability, or other factors. At Stella College, you gain industry-relevant skills to deliver care with dignity, compassion, and professionalism in both community and residential settings.</p><p><h5>Transform Lives Every Day</h5></p><p>Whether supporting older adults or those living with disabilities, you’ll help maintain independence, well-being, and social inclusion. Each day brings new opportunities to enrich lives and build respectful, empowering relationships.</p><p><h5>High Demand, Meaningful Work</h5></p><p> Individual support roles are in constant demand as communities grow and diversify. Training at Stella College positions you for stable employment and ongoing professional growth in a future-proof industry.</p><p><h5>Build Transferable Skills for Life and Work</h5></p><p><strong> </strong>Our programs emphasise communication, teamwork, and cultural awareness, preparing you for success across the broader health and community services sector.</p><p><h5>Flexible, Supportive Learning Environment</h5></p><p> Stella College offers tailored learning pathways, hands-on experience through work placements, and guidance from experienced trainers—helping you graduate job-ready and confident.</p><p><h5>A Pathway to Progress</h5></p><p> Start with foundational qualifications, then specialise or pursue supervisory roles, laying the groundwork for lifelong learning and leadership in care.</p>`,
              LearningOutcomes: [
                "Fundamentals of person-centred support for older people and individuals with disabilities.",
                "How to deliver individualised assistance with respect, empathy, and professionalism.",
                "Techniques to support independence, wellbeing, and inclusion.",
                "Foundational workplace communication, ethical, and cultural understanding.",
                "How to follow care plans and comply with current safety and legal requirements.",
              ],
              jobs: [
                "Personal Care Worker",
                "Home Support Worker",
                "Aged Care Assistant",
                "Disability Support Worker",
                "Residential Care Worker",
                "Community Care Worker",
                "Accommodation Support Worker",
              ],
            },
            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>CHC33021 - Certificate III in Individual Support: <strong> </p>Duration:</strong> 52 Weeks <ul><li>Total number of units 15</li><li>9 core units</li><li>6 Elective units </li></ul><p></p>",
              syllabus: [
                "CHCCCS031 – Provide individualised support",
                "CHCCCS040 – Support independence and wellbeing",
                "CHCCOM005 – Communicate and work in health or community services",
                "CHCDIV001 – Work with diverse people",
                "CHCLEG001 – Work legally and ethically",
                "CHCCCS041 – Recognise healthy body systems",
                "HLTWHS002 – Follow safe work practices for direct client care",
                "HLTINF006 – Apply basic principles and practices of infection prevention and control",
                "CHCCCS038 – Facilitate the empowerment of people receiving support",
                "CHCAGE011 – Provide support to people living with dementia",
                "CHCPAL003 – Deliver care services using a palliative approach",
                "CHCAGE013 – Work effectively in aged care",
                "CHCDIS011 – Contribute to ongoing skills development using a strengths-based approach",
                "CHCDIS012 – Support community participation and social inclusion",
                "CHCDIS020 – Work effectively in disability support",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<h4>Training package entry requirements</h4><p>The training package does not specify any entry requirements for this qualification.</p><h4>Stella College admission requirements</h4><ul><li>Completion of Stella College's pre-training review, including the LLN and digital literacy assessment.</li><li>Sufficient spoken and written English to communicate with clients, families and colleagues, and to read, interpret and complete workplace documentation such as care plans and progress notes.</li><li>A Unique Student Identifier (USI).</li><li>Reliable access to a computer and the internet for online learning components. It is the student’s responsibility to source the device and an internet connection when studying blended or online delivery. If due to any reason you are unable to do so, kindly get in touch with us to discuss your options.</li><li>Applicants must be at least 18 years of age; most placement hosts require students to be 18 or over.</li></ul><h4>Work placement</h4><p>To be awarded this qualification you must complete at least 120 hours of work placement, as detailed in the assessment requirements of the units of competency. Placement is completed in an aged care and/or disability service depending on your chosen specialisation. Stella College supports you to source and confirm a suitable placement, or, if you are already employed in a relevant role, you may be able to meet placement requirements in your workplace subject to College and employer approval.</p><h4>Screening and checks required before placement</h4><ul><li>A current National Police Check, clear of offences that would exclude you from working with vulnerable people. Some host organisations require the check to have been issued within a specified period before placement starts.</li><li>An NDIS Worker Screening Check clearance for placements with registered NDIS providers (disability settings).</li><li>Any worker screening required of the host organisation under aged care legislation for aged care placements.</li><li>A Working with Children Check if your placement setting involves contact with children.</li><li>Immunisations as required by the host organisation, commonly including current influenza vaccination; hosts may set additional requirements.</li><li>The costs of checks and immunisations are met by the student and are additional to course fees.</li></ul><h4>Physical requirements</h4><p>This course and the roles it leads to involve personal care tasks, manual handling, assisting people with mobility and transfers, and standing or walking for extended periods. Consider these requirements before applying, and raise any concerns or support needs at the pre-training review.</p>",
            },
          ],
        },
      ],
    },
    {
      courseId: "chc43415-certificate-iv-in-leisure-and-health-(r4)",
      title: "CHC43415 Certificate IV in Leisure & Health (R4)",
      image: course_thumb3,
      courseimage: course_thumb3,
      review: "0",
      category: "Leisure & Health",
      categoryId: "CSLEISURE",
      price: "3500",
      duration: "52  Weeks",
      units: "17 Units",
      intakes: "Monthly",
      modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
      certification: "Nationally Recognised Training",
      workplacement: "120 hours",
      category_Image: image5,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description: `<p><h5>Course Description</h5></p><p>This program is designed for both new entrants who need a broad introduction to the industry and for current workers in aged care, disability, or home and community care who want to build on their knowledge and career prospects. The qualification prepares you to undertake roles involving the design, delivery, and evaluation of leisure, health, and lifestyle programs for clients across one or more care sectors.</p><p>You could be working in residential care facilities, community agencies, or day centres, responsible for specialised tasks related to leisure and health services. While you will be accountable for your own work, you will perform these duties under direct or indirect supervision within established organisational guidelines.</p><p>The Certificate IV in Leisure and Health equips you to assess the behaviours of clients requiring support and develop leisure programs aimed at enhancing their daily lives. These programs go beyond clinical care to include interactive, recreational, and health-focused activities designed to improve wellbeing.</p><p><h5>Work Placement</h5></p><p>At least 120 hours of supervised work placement should be completed.</p><p>Students are encouraged to arrange their own placement, with support from Stella College provided on an as-needed basis.</p><p>Students can also request support from Stella College Admin team to find placement for the students.</p><p>Students can use their current workplace for placement (Has to be approved by Stella College before beginning the placement)</p><p>Each unit with a placement component includes a work placement assessment&nbsp;task.</p><p>For detailed information, please refer to placement section under student hub.</p><p><h5>Study Pathways</h5></p><p>Upon completing the CHC43415 Certificate IV in Leisure & Health, students can choose to further develop their skills and qualifications through advanced courses. The next steps might include:</p><ul><li>&nbsp;The <a href="/course-details/chc43015-certificate-iv-in-ageing-support-(r4)" style="color: rgb(33, 94, 153);">CHC43015 – Certificate IV in Ageing Support</a>, which offers more comprehensive training on the complexities of caring for older adults across different care settings.</li><li>&nbsp;The <a href="/course-details/chc43121-certificate-iv-in-disability-support-(r1)" style="color: rgb(33, 94, 153);">CHC43121 Certificate IV in Disability Support</a>, focuses on enhancing skills to tailor support for people living with disabilities.</li><li>The <u>CHC52025 Diploma in Community Services</u> (This qualification is not delivered by Stella College at present) provides advanced knowledge and skills to support individuals and communities through effective service delivery and advocacy.</li><li> The <u>CHC53415 Diploma of Leisure and Health </u>(This qualification is not delivered by Stella College at present) focuses on developing and managing leisure and health programs that enhance wellbeing and promote active lifestyles in diverse care environments.</li></ul><p>Each of these programs helps students take on more specialised roles, shoulder greater responsibilities, and open up broader career opportunities. Whether you want to deepen your knowledge in a particular area or expand your expertise, these qualifications provide valuable pathways for professional growth and development.</p><p><h5>Why Study This Course at Stella College?</h5></p><p>Choosing the CHC43415 Certificate IV in Leisure &amp; Health at Stella College is your gateway to a career where you can make a real difference in people’s daily lives. Stella College provides specialised training for those who want to design and deliver creative, person-centred programs that support the wellbeing and engagement of older adults, people with disabilities, and communities.</p><p>Reasons to Choose Stella College:</p><p><h5>Flexible, Supportive Learning Environment:</h5> Stella College offers tailored learning pathways, hands-on experience through work placements, and guidance from experienced trainers helping you graduate job-ready and confident.</p><p><h5>Practical, Job-Ready Skills:</h5>&nbsp;The course blends essential theory with hands-on practice in classrooms and real-world settings. You’ll build confidence through workplace placement, arranged for you by Stella, so you graduate truly work-ready.</p><p><h5>High Job Demand and Varied Roles:</h5>&nbsp;There’s growing need for leisure and health professionals in residential care, community organisations, and disability services. Our graduates are well-equipped for roles such as Activities Officer, Community Leisure Officer, Diversional Therapy Assistant, Disability Support Worker, and more.</p><p><h5>No Prior Experience Needed:</h5>&nbsp;Start your journey without the requirement for previous qualifications. All students complete a pre-training review for tailored support, and we help you meet all necessary checks and vaccination requirements to ensure you’re placement ready.</p><p><h5>Career Progression and Further Study:</h5>&nbsp;Successful graduates can expand their expertise by moving into advanced qualifications or branching into related care sectors, opening up new and rewarding career possibilities.</p><p><h5>Active Connections With Industry:</h5>&nbsp;Stella College’s close ties with employers and service providers support your transition from student to working professional, with access to career opportunities and support beyond graduation.</p>`,
              jobs: [
                "Activities Officer",
                "Community Leisure Officer",
                "Disability Officer – Day Support",
                "Diversional Therapy Assistant",
                "Leisure Officer",
                "Recreational Activities Officer",
              ],
              LearningOutcomes: [
                "Develop practical skills in designing and running meaningful programs for diverse clients",
                "Learn to promote wellbeing through recreational, cultural, and therapeutic activities",
                "Build teamwork, communication, and cultural awareness for holistic person-centred care",
                "Get supported by experienced trainers and tailored training resources",
              ],
            },
            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>CHC43415 Certificate IV in Leisure & Health:</p> <strong>Duration: 52 Weeks</strong><ul><li>Total number of units 17</li><li>10 core units</li><li>7 Elective units </li></ul><p></p>",
              syllabus: [
                "CHCCOM002 – Use communication to build relationships",
                "CHCDIV001 – Work with diverse people",
                "CHCLAH001 – Work effectively in the leisure and health industries",
                "CHCLAH002 – Contribute to leisure and health programming",
                "CHCLAH003 – Participate in the planning, implementation and monitoring of individual leisure and health programs",
                "CHCLAH004 – Participate in planning leisure and health programs for clients with complex needs",
                "CHCLAH005 – Incorporate lifespan development and sociological concepts into leisure and health programming",
                "CHCPRP003 – Reflect on and improve own professional practice",
                "HLTAAP002 – Confirm physical health status",
                "HLTWHS002 – Follow safe work practices for direct client care",
                "CHCCCS038 – Facilitate the empowerment of people receiving support",
                "CHCAGE011 – Provide support to people living with dementia",
                "HLTAID011 – Provide first aid",
                "CHCCCS031 – Provide individualised support",
                "CHCCCS040 – Support independence and wellbeing",
                "CHCDIS012 – Support community participation and social inclusion",
                "CHCPAL003 – Deliver care services using a palliative approach",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<h4>Training package entry requirements</h4><p>The training package does not specify any entry requirements for this qualification.</p><h4>Stella College admission requirements</h4><ul><li>Completion of Stella College's pre-training review, including the LLN and digital literacy assessment.</li><li>Sufficient spoken and written English to plan, document and facilitate leisure and health programs and to communicate with clients, families and colleagues.</li><li>A Unique Student Identifier (USI).</li><li>Reliable access to a computer and the internet for online learning components. It is the student’s responsibility to source the device and an internet connection when studying blended or online delivery. If due to any reason you are unable to do so, kindly get in touch with us to discuss your options.</li><li>Applicants must be at least 18 years of age; most placement hosts require students to be 18 or over.</li></ul><h4>Work placement</h4><p>To be awarded this qualification you must complete at least 120 hours of work placement, as detailed in the assessment requirements of the units of competency, in an aged care, disability or community setting. Students already employed in a relevant role may be able to meet placement requirements in their workplace subject to College and employer approval.</p><h4>Screening and checks required before placement</h4><ul><li>Screening as required by the host organisation and applicable legislation for the placement setting: a National Police Check, and/or an NDIS Worker Screening Check clearance for NDIS settings, and/or a Working with Children Check where the setting involves contact with children.</li><li>Immunisations as required by the host organisation.</li><li>The costs of checks and immunisations are met by the student.</li></ul><h4>Physical requirements</h4><p>This course involves facilitating group and individual activities, which can include periods of standing, moving equipment and supporting clients to participate. Raise any concerns or support needs at the pre-training review.</p>",
            },
          ],
        },
      ],
    },
    {
      courseId: "chc43121-certificate-iv-in-disability-support-(r1)",
      title: "CHC43121 Certificate IV in Disability Support (R1)",
      image: course_thumb4,
      courseimage: course_thumb4,
      review: "0",
      category: "Ageing & Disability",
      categoryId: "CSAGEING",
      price: "3500",
      modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
      certification: "Nationally Recognised Training",
      workplacement: "120 Hours",
      intakes: "Monthly",
      units: "10 units",
      duration: "35 Weeks",
      category_Image: image1,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description: `<p><h3>Course Description</h3></p><p>The&nbsp;Certificate IV in Disability Support (CHC43121)&nbsp;at&nbsp;Stella College&nbsp;is designed for individuals passionate about helping others lead independent and fulfilling lives. This nationally recognised qualification prepares you to support people with disabilities in achieving greater self-reliance, dignity, and community participation.</p><p> The program is suited to&nbsp;new entrants to the industry&nbsp;who are seeking a broad introduction to the disability and community services sector,&nbsp;as well as existing workers&nbsp;who wish to deepen their skills, gain formal qualifications, or advance into supervisory and leadership roles. Students will learn to implement individualised care plans, deliver person-centred support, and promote inclusion and empowerment across various community and residential settings.</p><p><h3>Work Placement</h3></p><p>At least 120 hours of supervised work placement should be completed.</p><p>Students are encouraged to arrange their own placement, with support from Stella College provided on an as-needed basis.</p><p>Students can also request support from Stella College Admin team to find placement for the students.</p><p>Students can use their current workplace for placement (Has to be approved by Stella College before beginning the placement)</p><p>For detailed information, please refer to placement section under student hub.</p><p><h3>Study Pathways</h3></p><p>Many graduates also choose to broaden their skill set with:</p><ul><li>The&nbsp;<a href="/course-details/chc43015-certificate-iv-in-ageing-support-(r4)">CHC43015 – Certificate IV in Ageing Support</a>, which offers more comprehensive training on the complexities of caring for older adults across different care settings.</li><li>The&nbsp;<a href="/course-details/chc43415-certificate-iv-in-leisure-and-health-(r4)">CHC43415 Certificate IV in Leisure &amp; Health</a>, highlights the role of leisure activities in promoting health and wellbeing, and how to design engaging, supportive programs.</li></ul><p>Students can progress into higher-level studies such as:</p><ul><li>HLT54121 Diploma of Nursing (not offered by Stella College currently)</li><li>CHC52021 Diploma of Community Services (not offered by Stella College currently)</li></ul><p>These further study options enable graduates to take on advanced care, leadership, or specialist support roles within the health and community services sectors.</p><p><h3>Why Study this Course at Stella College?</h3></p><p>Industry-Driven Training: Learn from qualified trainers who bring years of experience working in disability and community care.</p><p>Work Placement Support: Stella College partners with respected care providers to offer meaningful placement opportunities.</p><p>Career-Focused Learning: Our curriculum blends practical skill-building with real-world case studies to prepare you for immediate industry entry.</p><p>Personalised Support: Receive guidance every step of the way—from enrolment to employment assistance through our alumni network.</p><p><br></p>`,
              jobs: [
                "Disability Support Worker",
                "Senior Personal Care Assistant",
                "Behavioural or Development Support Officer",
                "Lifestyle Support Officer",
                "Employment or Job Coordinator (Disability)",
                "Community Development Officer",
                "Disability Team Leader or Supervisor",
                "Social Educator or Project Officer (Life Enhancement Teams)",
              ],
              LearningOutcomes: [
                "Deliver safe, responsive, and person-centred disability support.",
                "Build and maintain effective working relationships with clients and teams.",
                "Facilitate personal skill development and social engagement for people with disabilities.",
                "Identify and manage legal, ethical, and health responsibilities in support settings.",
                "Promote empowerment, dignity, and inclusion in all aspects of support work.",
                "Apply practical problem-solving and leadership skills in community environments.",
              ],
            },
            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>CHC43121 Certificate IV in Disability Support:</p><strong>Duration: 35 Weeks</strong><ul><li>Total number of units 10</li><li>7 core units</li><li>3 Elective units </li></ul><p></p>",
              syllabus: [
                "CHCCCS044 – Follow established person-centred behaviour supports",
                "CHCDIS017 – Facilitate community participation and social inclusion",
                "CHCDIS018 – Facilitate ongoing skills development using a person-centred approach",
                "CHCDIS019 – Provide person-centred services to people with disability with complex needs",
                "CHCLEG003 – Manage legal and ethical compliance",
                "CHCMHS001 – Work with people with mental health issues",
                "HLTWHS003 – Maintain work health and safety",
                "CHCDIS020 – Work effectively in disability support",
                "CHCCCS004 – Assess co-existing needs",
                "BSBLDR411 – Demonstrate leadership in the workplace",
              ],
            },
            {
              title: "Entry Requirement",
              description: `<h4>Training package entry requirements (mandatory)</h4><p>Entry to this qualification requires completion of one of the following:</p><ul><li>CHC33021 Certificate III in Individual Support (Disability); or</li><li>CHC33015 Certificate III in Individual Support (Disability); or</li><li>CHC30408 Certificate III in Disability, plus the CHCSS00125 Entry to Certificate IV in Disability Support Skill Set.</li></ul><p>These requirements are set by the training package as published on the National Register and cannot be waived by Stella College. You must provide verifiable evidence of the completed qualification (and skill set where applicable), including your testamur and record of results, and your enrolment cannot be confirmed until this evidence has been verified.</p><p><strong>Please note:</strong> the Ageing specialisation of the Certificate III in Individual Support does not meet this entry requirement on its own. If you hold the Ageing specialisation, or a related qualification not listed above, contact us to discuss the pathway options for meeting the entry requirement, which may involve completing the required disability units or skill set before entry.</p><p>Stella College delivers CHC33021 Certificate III in Individual Support with the Disability specialisation available, which provides a direct pathway into this course.</p><h4>Stella College admission requirements</h4><ul><li>Completion of Stella College's pre-training review, including the LLN and digital literacy assessment.</li><li>Sufficient spoken and written English for communication with clients, families, colleagues and other professionals, and for documentation such as support plans and incident reports.</li><li>A Unique Student Identifier (USI).</li><li>Reliable access to a computer and the internet for online learning components. It is the student’s responsibility to source the device and an internet connection when studying blended or online delivery. If due to any reason you are unable to do so, kindly get in touch with us to discuss your options.</li></ul><h4>Work placement</h4><p>To be awarded this qualification you must complete at least 120 hours of work placement, as detailed in the assessment requirements of the units of competency, in a disability support setting. Students already employed in a relevant role may be able to meet placement requirements in their workplace subject to College and employer approval.</p><h4>Screening and checks required before placement</h4><ul><li>An NDIS Worker Screening Check clearance for placements with registered NDIS providers.</li><li>A current National Police Check where required by the host organisation.</li><li>A Working with Children Check if your placement involves contact with children.</li><li>Immunisations as required by the host organisation.</li><li>The costs of checks and immunisations are met by the student.</li></ul><h4>Physical requirements</h4><p>Disability support roles can involve manual handling, transfers and mobility assistance, community access activities and responding to clients with complex needs. Consider these requirements before applying, and raise any concerns or support needs at the pre-training review.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId: "fbp30121-certificate-iii-in-food-processing-(r1)",
      title: "FBP30121 Certificate III in Food Processing (R1)",
      image: course_thumb10,
      courseimage: course_thumb10,
      review: "4",
      category: "Food Processing",
      categoryId: "CSFOOD",
      price: "4599",
      certification: "Nationally Recognised Training",
      units: "17 units",
      duration: "54 Weeks",
      modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
      rating: "5",
      category_Image: image4,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "4" },
        { id: 2, rating: 4, width: "50", review: "1" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description: `<p><h4>Course Description</h4>
<p>This program is being offered as a qualification for learners wanting to complete the qualification of Certificate III in Food Processing. This qualification specifies the competencies required for individuals working in operational roles in larger food processing sites, where the work is mainly automated and large scale. They are required to work autonomously, use judgement, interpret information and apply solutions to routine and some non-routine problems. They may also take some responsibility for the output of others. This training program is suitable for experienced operators and also serves as a pathway for further learning.</p>
<h4>Qualifications and Employment Pathways</h4>
<p>Pathway into the qualification is suitable for either direct entry or progression from FBP20121 Certificate II in Food Processing. Pathway from the qualification includes FBP40321 Certificate IV in Food Processing. This qualification caters for multi-skilled outcomes and roles that include team leader functions within the production environment. This qualification will further the learner’s knowledge and capability in food processing.</p>
<h4><a href="https://tpsconsultancy.com.au/files/qualifications/FBP30121-Info-V2.2.pdf" rel="noopener noreferrer" target="_blank">Licensing and Regulatory requirements</a></h4>
<p>There are no specific licences that relate to this qualification. However, all work must be carried out to comply with workplace procedures, in accordance with state/territory food safety, and work health and safety codes, regulations, and legislation that apply to the workplace.</p>
<h4>Target Learners</h4>
<p>The course targets currently employed workers in full-time or part-time food processing operations working in large-sized organisations. As a Food Processing Operator and/or Food Packaging Operator, the learner:</p>
<ul>
  <li>Monitors the progress and quality of food products.</li>
  <li>Is responsible for operating and maintaining the machines that carry out these processes.</li>
  <li>Is responsible for the operation, monitoring, and adjustment of the packaging equipment consistent with production needs and quality standards.</li>
  <li>Is responsible for producing finished products according to preapproved instructions and ensuring that the necessary calibrations are performed, records kept, and that premises and equipment are maintained.</li>
</ul><p></p>`,
              jobs: [
                "Advanced packaging operator",
                "Advanced production operator",
                "Food processing technician (poultry)",
                "Salesperson (food processing)",
                "Food processing operator (grain)",
              ],
            },
            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>FBP30121 Certificate III in Food Processing</p><ul><li>Total number of units 17</li><li>5 core units</li><li>12 Elective units </li></ul><p></p>",
              syllabus: [
                "FBPFSY2002 - Apply food safety procedures",
                "FBPWHS3001 - Contribute to work health and safety processes",
                "FBPFSY3003 - Monitor the implementation of food safety and quality programs",
                "FBPFSY3005 - Control contaminants and allergens in food processing",
                "FBPTEC3001 - Apply raw materials, ingredient and process knowledge to production problems",
                "FBPFSY3002 - Participate in a HACCP team",
                "FBPFSY3004 - Participate in traceability activities",
                "FBPFSY4005 - Conduct a traceability exercise",
                "FBPTEC4008 - Participate in product recall",
                "FBPOPR3021 - Apply good manufacturing practice requirements in food processing",
                "FBPPPL3008 - Establish compliance requirements for work area",
                "FBPOPR3004 - Set up a production or packaging line for operation",
                "FBPOPR3019 - Operate and monitor interrelated processes in a production or packaging system",
                "FBPOPR2070 - Apply quality systems and procedures",
                "FBPPPL3004 - Lead work teams and groups",
                "FBPPPL3003 - Participate in improvement processes",
                "FBPPPL3005 - Participate in an audit process",
              ],
            },
            {
              title: "Entry Requirement",
              description: `There are no formal entry requirements for entry to FBP30121. However, it should be noted that this qualification reflects the role of individuals required to apply a broad range of knowledge and skills in varied contexts and undertake skilled work. This qualification is suitable for experienced operators, technicians and trade workers. This qualification is not suitable for direct from school.`,
            },
            {
              title: "Reviews",
              description: `<p><strong>Jonar Castro</strong></p>
  <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 6 days ago</p>
  <p>Vince is a superb trainer. He's extremely knowledgeable. His use of examples and exercises keeps the class engaged.</p>
  <p><br></p>

  <p><strong>Jemima Kreutzer</strong></p>
  <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> a month ago</p>
  <p>Vince is an excellent trainer. He explains the coursework really well and breaks things down simply when teaching, helping me understand the work. Super happy with my experiences with Vince.</p>
  <p><br></p>

  <p><strong>Tapenisi Kafoa</strong></p>
  <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 weeks ago</p>
  <p>I'm enjoying participating in the training sessions and look forward to consistently applying my knowledge and practices towards my staff. Vince has great knowledge and experience in delivering relatable content and contextualisation.</p>
  <p><br></p>

  <p><strong>Namita Pathak</strong></p>
  <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
  <p>Outstanding training module to be accessed with friendly staff and management. Quality over quantity and engagement with learners is the priority. Stella College works with high ethics and standards to assist the community to be skilled and accountable towards their chosen profession.</p>
  <p>Honesty and integrity are core values that I have observed and appreciate. All the best wishes to Stella College.</p>`,
            },
          ],
        },
      ],
    },

    {
      courseId: "hltaid011-provide-first-aid-(r1)",
      title: "HLTAID011 Provide First AID (R1)",
      image: course_thumb6,
      courseimage: course_thumb6,
      review: "5",
      category: " First Aid",
      categoryId: "CSFIRSTAID",
      category_Image: image3,
      modeofdelivery: "Face To Face",
      duration: "1 Day",
      price: "99",
      allCourses: "All Courses",
      certification: "Nationally Recognised Training",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "1" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description: `<p>Duration:&nbsp;1 Day </p><p>This unit describes the skills and knowledge required to provide a first aid response to a casualty in line with first aid guidelines determined by the Australian Resuscitation Council (ARC) and other Australian national peak clinical bodies.</p><p>The unit applies to all persons who may be required to provide a first aid response in a range of situations, including community and workplace settings.</p><p></p><p>On successful completion of this course, you will be issued with the following statements of attainment:</p><p>HLTAID011 Provide First Aid</p><p>HLTAID009 Provide cardiopulmonary resuscitation</p>`,
            },
            {
              title: "Curriculum",
              description:
                "<p>HLTAID011 - Provide First Aid</p><p>Duration: 1 Day</p><p>HLTAID011 - Provide First Aid</p><p>HLTAID009 - Provide cardiopulmonary resuscitation</p>",
            },
            {
              title: "Entry Requirement",
              description: `You must be 18 years or older to be enrolled into this course
You must have the physical capacity to perform the practical demonstrations, such as 2 minutes of uninterrupted CPR on the floor and performing rescue breathing techniques on manikins. </br>
Stella College recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that first aid skills are renewed every 3 years, and resuscitation skills are renewed every 12 months.`,
            },
          ],
        },
      ],
    },
    {
      courseId: "hltaid009-provide-cardiopulmonary-resuscitation-(r1)",
      title: "HLTAID009 Provide Cardiopulmonary Resuscitation (R1)",
      image: course_thumb5,
      courseimage: course_thumb5,
      review: "0",
      category: " First Aid",
      categoryId: "CSFIRSTAID",
      category_Image: image3,
      certification: "Nationally Recognised Training",
      price: "69",
      modeofdelivery: "Face To Face",
      duration: "1 Day",
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description: `<p><h4> Course Description </h4>This unit describes the skills and knowledge required to perform cardiopulmonary resuscitation (CPR) in line with the Australian Resuscitation Council (ARC) guidelines.</p><p></p><p>This unit applies to all persons who may be required to provide CPR, in a range of situations, including community and workplace settings.</p><p>On successful completion of this course, you will be issued with the following statement of attainment:&nbsp;HLTAID009 Provide cardiopulmonary resuscitation</p><p>TPSC recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that resuscitation skills are renewed every 12 months.</p><p></p>`,
            },
            {
              title: "Curriculum",
              description:
                "<p>HLTAID009 - Provide cardiopulmonary resuscitation</p><p>Duration: 1 Day</p> </br>  HLTAID009 - Provide cardiopulmonary resuscitation",
              syllabus: ["HLTAID009 - Provide cardiopulmonary resuscitation"],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>You must be 18 years or older to be enrolled into this course</p><p>You must have the physical capacity to perform the practical demonstrations, such as 2 minutes of uninterrupted CPR on the floor and performing rescue breathing techniques on manikins.</p><p>Stella College recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that first aid skills are renewed every 3 years, and resuscitation skills are renewed every 12 months.</p>",
            },
          ],
        },
      ],
    },
    {
      courseId:
        "hltaid012-provide-first-aid-in-an-education-and-care-setting-(r2)",
      title:
        "HLTAID012 - Provide First Aid in an education and care setting (R2)",
      image: course_thumb6,
      courseimage: course_thumb6,
      review: "0",
      category: " First Aid",
      categoryId: "CSFIRSTAID",
      category_Image: image3,
      certification: "Nationally Recognised Training",
      price: "120",
      modeofdelivery: "Face To Face",
      duration: "1 Day",
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "1" },
        { id: 2, rating: 4, width: "50", review: "1" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p>Face to Face contact time of at least 9 Hours</p><p><h4>Course Description</h4></p><p>The Provide First Aid in an Education and Care Setting course is designed to give educators, childcare workers, and support staff the essential skills and knowledge to respond to first aid emergencies involving children and infants. This nationally recognised course helps participants manage common injuries, illnesses, and accidents that can happen in childcare and school environments, ensuring quick and effective care suited to young children.</p><p><h4>Why choose this course?</h4></p><p>This course is ideal for childcare educators, early childhood professionals, teachers, and anyone working in education or care settings who needs specialised first aid skills. It is particularly suited to those responsible for the safety and wellbeing of children in schools, childcare centres, and community care environments.</p><p>Upon completion, participants will be able to apply first aid in line with the Australian Resuscitation Council (ARC) guidelines and meet first aid requirements specific to education and care environments. The course builds confidence to respond effectively to emergencies while supporting workplace health and safety standards. Graduates will be equipped to contribute to a safer environment for children and promote their overall well-being</p>",
              //               jobs:["HLTAID011 Provide First Aid",
              // "HLTAID009 Provide cardiopulmonary resuscitation",
              // "HLTAID012 - Provide First Aid in an education and care setting",
              // ],
              LearningOutcomes: [
                "Assess and respond to a variety of first aid situations, including choking, asthma, allergic reactions, and anaphylaxis.",
                "Perform cardiopulmonary resuscitation (CPR) on infants and children.",
                "Use an automated external defibrillator (AED) safely and correctly.",
                "Provide first aid for wounds, fractures, burns, and other common injuries.",
                "Follow the DRSABCD action plan to ensure a structured and safe emergency response.",
              ],
            },
            {
              title: "Curriculum",
              description: `
    <p>HLTAID012 - Provide First Aid in an education and care setting</p>
    <p>Duration:&nbsp;1 Day</p>
    <p>Category: First Aid</p>
    <p>Face to Face contact time of at least 9 Hours</p>
    <p>This course can be delivered/assessed in the workplace or at a facility organised by the training provider.</p>

    <p><h4>Assessment Activities</h4></p>
    <p>At Stella College, students will complete both practical and theory-based assessments to demonstrate their ability to provide first aid in education and care settings.</p>

    <p><h4>Performance tasks and practical scenarios:</h4></p>
    <ul>
      <li>Perform CPR on an adult, including the use of an AED and placing a casualty in the recovery position</li>
      <li>Complete a first aid incident report form based on a simulated first aid scenario</li>
      <li>Perform CPR on a child</li>
      <li>Perform CPR on an infant</li>
      <li>Manage a child casualty with anaphylaxis</li>
      <li>Manage a child casualty with asthma</li>
      <li>Manage a choking child and infant casualty</li>
      <li>Manage a child casualty with non-life-threatening bleeding and shock, requiring minor wound cleaning</li>
      <li>Manage a child casualty with a nosebleed</li>
      <li>Manage a child casualty with a fracture and dislocation</li>
      <li>Manage a child casualty with a sprain and strain</li>
      <li>Manage a child casualty with envenomation (snake or funnel-web spider bite)</li>
    </ul>

    <p><h4>Theory assessment:</h4></p>
    <p>Complete a written assessment consisting of multiple-choice questions</p>
    <p><span style="color: black;">HLTAID011 - Provide First Aid</span></p>
    <p><span style="color: black;">HLTAID009 - Provide cardiopulmonary resuscitation</span></p>
    <p>HLTAID012 - Provide First Aid in an education and care setting</p>
  `,
            },

            {
              title: "Entry Requirement",
              description:
                "<p>You must be 18 years or older to be enrolled into this course</p><p>You must have the physical capacity to perform the practical demonstrations, such as 2 minutes of uninterrupted CPR on the floor and performing rescue breathing techniques on manikins.</p><p>Stella College recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that first aid skills are renewed every 3 years, and resuscitation skills are renewed every 12 months.</p>",
            },
          ],
        },
      ],
    },
    // {
    //   courseId: "KK4TAOQE",
    //   title: "Development",
    //   image: course_thumb3,
    //   review: "0 Reviews",
    //   category: "Development",
    //   categoryId: "CSDEVELOPMENT",
    //   modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
    //   certification: "Nationally Recognised Training",
    //   category_Image: image3,
    //   price: "49",
    //   duration: "1 Days",
    //   allCourses: "All Courses",
    //   review_data: [
    //     { id: 1, rating: 5, width: "80", review: "1" },
    //     { id: 2, rating: 4, width: "50", review: "1" },
    //     { id: 3, rating: 3, width: "0", review: "0" },
    //     { id: 4, rating: 2, width: "0", review: "0" },
    //     { id: 5, rating: 1, width: "0", review: "0" },
    //   ],
    //   detail: [
    //     {
    //       tabs: [
    //         {
    //           title: "Overview",
    //           description: `<p><strong>Duration:</strong>&nbsp;1 Day  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : $49</p><p>This unit describes the skills and knowledge required to perform cardiopulmonary resuscitation (CPR) in line with the Australian Resuscitation Council (ARC) guidelines.</p><p></p><p>This unit applies to all persons who may be required to provide CPR, in a range of situations, including community and workplace settings.</p><p>On successful completion of this course, you will be issued with the following statement of attainment:&nbsp;HLTAID009 Provide cardiopulmonary resuscitation</p><p>TPSC recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that resuscitation skills are renewed every 12 months.</p><p></p>`,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   courseId: "KK4TEEFD",
    //   title: "Technology",
    //   image: course_thumb6,
    //   review: "0 Reviews",
    //   category: "Technology",
    //   categoryId: "CSTECHNOLOGY",
    //   certification: "Nationally Recognised Training",
    //   category_Image: image6,
    //   modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
    //   price: "49",
    //   duration: "1 Days",
    //   allCourses: "All Courses",
    //   review_data: [
    //     { id: 1, rating: 5, width: "80", review: "1" },
    //     { id: 2, rating: 4, width: "50", review: "1" },
    //     { id: 3, rating: 3, width: "0", review: "0" },
    //     { id: 4, rating: 2, width: "0", review: "0" },
    //     { id: 5, rating: 1, width: "0", review: "0" },
    //   ],
    //   detail: [
    //     {
    //       tabs: [
    //         {
    //           title: "Overview",
    //           description: `<p><strong>Duration:</strong>&nbsp;1 Day  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : $49</p><p>This unit describes the skills and knowledge required to perform cardiopulmonary resuscitation (CPR) in line with the Australian Resuscitation Council (ARC) guidelines.</p><p></p><p>This unit applies to all persons who may be required to provide CPR, in a range of situations, including community and workplace settings.</p><p>On successful completion of this course, you will be issued with the following statement of attainment:&nbsp;HLTAID009 Provide cardiopulmonary resuscitation</p><p>TPSC recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that resuscitation skills are renewed every 12 months.</p><p></p>`,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   courseId: "QFDIHFDF",
    //   title: "Business",
    //   image: course_thumb6,
    //   review: "0 Reviews",
    //   category: "Business",
    //   categoryId: "CSBUSINESS",
    //   certification: "Nationally Recognised Training",
    //   modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
    //   category_Image: image9,
    //   price: "49",
    //   duration: "1 Day",
    //   allCourses: "All Courses",
    //   review_data: [
    //     { id: 1, rating: 5, width: "80", review: "1" },
    //     { id: 2, rating: 4, width: "50", review: "1" },
    //     { id: 3, rating: 3, width: "0", review: "0" },
    //     { id: 4, rating: 2, width: "0", review: "0" },
    //     { id: 5, rating: 1, width: "0", review: "0" },
    //   ],
    //   detail: [
    //     {
    //       tabs: [
    //         {
    //           title: "Overview",
    //           description: `<p><strong>Duration:</strong>&nbsp;1 Day  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : $49</p><p>This unit describes the skills and knowledge required to perform cardiopulmonary resuscitation (CPR) in line with the Australian Resuscitation Council (ARC) guidelines.</p><p></p><p>This unit applies to all persons who may be required to provide CPR, in a range of situations, including community and workplace settings.</p><p>On successful completion of this course, you will be issued with the following statement of attainment:&nbsp;HLTAID009 Provide cardiopulmonary resuscitation</p><p>TPSC recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that resuscitation skills are renewed every 12 months.</p><p></p>`,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   courseId: "OJGODD",
    //   title: "Cyber Security",
    //   image: course_thumb6,
    //   review: "0 Reviews",
    //   category: "Cyber Security",
    //   certification: "Nationally Recognised Training",
    //   categoryId: "CSCYBER",
    //   category_Image: image7,
    //   modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
    //   price: "49",
    //   duration: "1 Day",
    //   allCourses: "All Courses",
    //   review_data: [
    //     { id: 1, rating: 5, width: "80", review: "1" },
    //     { id: 2, rating: 4, width: "50", review: "1" },
    //     { id: 3, rating: 3, width: "0", review: "0" },
    //     { id: 4, rating: 2, width: "0", review: "0" },
    //     { id: 5, rating: 1, width: "0", review: "0" },
    //   ],
    //   detail: [
    //     {
    //       tabs: [
    //         {
    //           title: "Overview",
    //           description: `<p><strong>Duration:</strong>&nbsp;1 Day  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : $49</p><p>This unit describes the skills and knowledge required to perform cardiopulmonary resuscitation (CPR) in line with the Australian Resuscitation Council (ARC) guidelines.</p><p></p><p>This unit applies to all persons who may be required to provide CPR, in a range of situations, including community and workplace settings.</p><p>On successful completion of this course, you will be issued with the following statement of attainment:&nbsp;HLTAID009 Provide cardiopulmonary resuscitation</p><p>TPSC recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that resuscitation skills are renewed every 12 months.</p><p></p>`,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   courseId: "ACDFDD",
    //   title: "Language",
    //   image: course_thumb6,
    //   review: "0 Reviews",
    //   category: "Language",
    //   categoryId: "CSLANGUAGE",
    //   certification: "Nationally Recognised Training",
    //   modeofdelivery: "Classroom, Virtual Classroom(Online), Workplace",
    //   price: "49",
    //   duration: "1 Day",
    //   category_Image: image8,
    //   allCourses: "All Courses",
    //   review_data: [
    //     { id: 1, rating: 5, width: "80", review: "1" },
    //     { id: 2, rating: 4, width: "50", review: "1" },
    //     { id: 3, rating: 3, width: "0", review: "0" },
    //     { id: 4, rating: 2, width: "0", review: "0" },
    //     { id: 5, rating: 1, width: "0", review: "0" },
    //   ],
    //   detail: [
    //     {
    //       tabs: [
    //         {
    //           title: "Overview",
    //           description: `<p><strong>Duration:</strong>&nbsp;1 Day  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : $49</p><p>This unit describes the skills and knowledge required to perform cardiopulmonary resuscitation (CPR) in line with the Australian Resuscitation Council (ARC) guidelines.</p><p></p><p>This unit applies to all persons who may be required to provide CPR, in a range of situations, including community and workplace settings.</p><p>On successful completion of this course, you will be issued with the following statement of attainment:&nbsp;HLTAID009 Provide cardiopulmonary resuscitation</p><p>TPSC recommends, as per the First Aid in the Workplace Code of Practice and the Australian Resuscitation Council guidelines, that resuscitation skills are renewed every 12 months.</p><p></p>`,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      courseId:
        "scai0625-ai-fundamentals-understanding-artificial-intelligence",
      title:
        "SCAI0625 - AI Fundamentals – Understanding Artificial Intelligence",
      image: courseImg.ai.out,
      courseimage: courseImg.ai.in,
      review: "4.8",
      category: "Technology",
      certification: "Digital Certificate and Badge",
      categoryId: "CSTECHNOLOGY",
      price: "999",
      modeofdelivery: "Online, Self-paced",
      duration: "48 Hours",
      modules: "5",
      category_Image: image6,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "90", review: "3" },
        { id: 2, rating: 4, width: "40", review: "2" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><h4>Course Description</h4></p><p>AI Fundamentals is a professionally designed, beginner-friendly course that introduces working professionals to the core principles and real-world applications of artificial intelligence. Through a blend of short video lessons, interactive exercises, and hands-on practice with leading AI tools like ChatGPT, Google Gemini, and Microsoft Copilot, this course provides a step-by-step pathway to becoming AI-literate no technical or coding background required. Learners will gain clarity on key concepts such as&nbsp;machine learning, data-driven decision-making, and ethical AI, all contextualised for the Australian workplace and tailored for immediate workplace relevance.</p><p>By the end of the program, participants will confidently use AI tools in their daily work, identify opportunities for automation and innovation, and understand the ethical and strategic implications of AI adoption across industries. The course not only helps you build practical skills and career resilience in an evolving digital landscape, but also positions you as a forward-thinking professional who can advocate for and lead responsible AI initiatives within your organisation.</p><p><h4>Why These Skills Are Important</h4></p><p >For Individuals:</p><ul><li >Over 50% of Australian businesses are already adopting AI, making AI literacy a baseline expectation for future competitiveness.</li><li >Professionals with AI skills earn 15–25% higher salaries and are better protected against job displacement by technology changes.</li><li >&nbsp;AI competence sets you apart for promotions, opportunities, and enables you to work confidently alongside evolving technologies.</li></ul></p>",
              // jobs: [
              //   "Core AI concepts and terminology without technical background",
              //   "Hands-on skills using popular AI tools",
              //   "How machine learning works and applications",
              //   "Ethical considerations and responsible AI",
              //   "How to apply AI in your specific role",
              //   "Career pathways and continuous learning strategies",
              //   "Australian regulatory context",
              // ],
              LearningOutcomes: [
                "Understand the fundamental concepts and terminology of artificial intelligence and machine learning.",
                "Develop practical skills to effectively use AI tools for workplace productivity and decision-making.",
                "Recognize ethical considerations and apply frameworks for responsible and fair AI use.",
                "Analyze real-world AI applications and identify opportunities for AI adoption in your role or organization.",
                "Create a personal AI learning and implementation strategy aligned with career goals.",
                "Critically evaluate AI outputs and understand the limitations and risks of AI technology.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCAI0625 - AI Fundamentals – Understanding Artificial Intelligence</p><p>Duration: 2 Weeks</p><p>Modules: 5</p>",
              syllabus: [
                "Module 1: What is AI and Why It Matters",
                "Module 2: Machine Learning Basics ",
                "Module 3: AI Tools and Applications ",
                "Module 4: Responsible AI and Ethics ",
                "Module 5: Getting Started with AI in Your Role ",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>• No formal qualifications required.</p><p>• You must be at least 18 years old.</p><p>• Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>&nbsp;Must have Microsoft Word, PowerPoint, Excel, and a PDF reader (e.g., Adobe Acrobat) installed.</li><li>&nbsp;Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Nikhil Nair</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Exceptional course guidance throughout.</p>
    <p><br></p>

    <p><strong>Antonio Rahman</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Absolutely fantastic experience. The course content is comprehensive and up to date with current industry standards. The instructors are knowledgeable, patient, and always willing to help. The online platform is user-friendly, and the pace is manageable. I’ve already recommended this to several friends.</p>
    <p><br></p>

    <p><strong>Neha Hussain</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Fantastic course! Learned so much in just a few hours.</p>
    <p><br></p>

    <p><strong>Amit Singh</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐</span> 1 week ago</p>
    <p>Very impressed with the course materials and quiz.</p>
    <p><br></p>

    <p><strong>Miguel Silva</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 weeks ago</p>
    <p>Very informative and easy to follow. Perfect for beginners.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId: "scai0725-ai-for-business-decision-making",
      title: "SCAI0725 - AI For Business Decision Making",
      image: courseImg.aiBusiness.out,
      courseimage: courseImg.aiBusiness.in,
      review: "4.5",
      category: "Technology",
      categoryId: "CSTECHNOLOGY",
      certification: "Digital Certificate and Badge",
      modeofdelivery: "Online, Self-paced",
      price: "799",
      duration: "30 Hours",
      category_Image: image6,
      modules: "5",
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "2" },
        { id: 2, rating: 4, width: "50", review: "2" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><h4>Course Description</h4></p><p>This course is designed for managers, leaders, and professionals who make critical business decisions. It provides a deep understanding of how to leverage artificial intelligence as a strategic advantage to enhance decision-making, improve operational efficiency, and drive innovation across your organisation. Learners will explore the business implications of AI technologies, gaining insights into how AI can transform core functions such as marketing, finance, human resources, and supply chain management. Emphasis is placed on translating technical AI concepts into actionable business strategies.</p><p>Alongside technical understanding, the course develops your capacity to formulate and implement AI strategies aligned with organisational goals. You will learn to identify high-impact AI opportunities, assess risks including ethical considerations, and lead AI adoption initiatives that create sustainable competitive advantages. By blending strategic thinking with practical tools, this course empowers you to confidently navigate and harness AI’s potential for organisational success and growth.</p><p ><h4>Why These Skills Are Important</h4></p><ul><li>Managers who understand AI create up to 30% higher business value and are more likely to earn 20–35% higher salaries in leadership roles.</li><li>&nbsp;Strategic AI skills differentiate you as a change leader and are essential for staying relevant in an AI-driven economy.</li><li>&nbsp;AI competency accelerates promotion opportunities and builds resilience against technological disruption.</li><li>&nbsp;Data-driven and AI-empowered businesses outperform competitors by 5–7% in profitability and market positioning.</li><li>&nbsp;AI adoption fosters innovation, improves customer personalisation, and drives new product development.</li><li>AI enables significant cost savings through automation and better forecasting, while mitigating risks like fraud and errors.</li></ul>",
              jobs: [
                "Framework for data-driven decision-making",
                "Practical AI applications across business functions",
                "How to quantify business impact and ROI",
                "Organisational AI strategy and adoption",
                "Change management and implementation",
                "Competitive advantage through AI",
              ],
              LearningOutcomes: [
                "Align AI initiatives with business objectives to drive strategic value and organisational goals.",
                "Develop data literacy to interpret, analyse, and act upon complex business datasets using AI tools.",
                "Apply business acumen to connect AI capabilities with measurable business outcomes and ROI.",
                "Lead AI transformation projects by guiding teams through adoption, change management, and governance.",
                "Quantify the financial and operational impact of AI-driven strategies to secure stakeholder buy-in.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCAI0725 - AI For Business Decision Making</p><p>Duration: 30 hours</p><ul><li>Modules: 5</li></ul>",
              syllabus: [
                "Module 1: Data-Driven Decision Making ",
                "Module 2: AI in Marketing and Customer Analytics ",
                "Module 3: AI for Operations and Process Improvement ",
                "Module 4: Financial Applications of AI ",
                "Module 5: Building Your AI Strategy ",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<ul><li>No formal qualifications required (AI Fundamentals recommended).</li><li>You must be at least 18 years old.</li><li>&nbsp;Stable internet connection and computer (as per standard IT specs)</li></ul><p>IT Specifications Required for Study</p><ul><li>&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>&nbsp;Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>Must have Microsoft Word, PowerPoint, Excel, and a PDF reader (e.g., Adobe Acrobat) installed.</li><li>&nbsp;Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Padma Bhat</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐</span> 4 days ago</p>
    <p>Remarkable course that delivers real value. The content is relevant to today’s workplace. Highly recommended for anyone serious about professional development.</p>
    <p><br></p>

    <p><strong>Deepika Saxena</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Great course!</p>
    <p><br></p>

    <p><strong>Isabel</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Outstanding quality and great value. Would do another course.</p>
    <p><br></p>

    <p><strong>Pooja Menon</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 3 months ago</p>
    <p>Great course. Highly recommend to anyone looking to upskill.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId: "scai0825-advanced-ai-applications",
      title: "SCAI0825 - Advanced AI Applications",
      image: courseImg.advancedAi.out,
      courseimage: courseImg.advancedAi.in,
      review: "5",
      category: "Technology",
      categoryId: "CSTECHNOLOGY",
      certification: "Digital Certificate and Badge",
      modeofdelivery: "Online, Self-paced",
      price: "799",
      duration: "30 Hours",
      modules: "4",
      category_Image: image6,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "3" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><h4>Course Description</h4></p><p>This advanced course is tailored for professionals who are ready to deepen their expertise and specialise in the application of AI within specific industries. It covers cutting-edge AI technologies and their practical implementations, focusing on transforming complex industry challenges into AI-driven solutions. Participants will explore how AI is revolutionising sectors such as healthcare, finance, manufacturing, retail, transportation, and energy. Through real-world case studies and hands-on application, the course equips you with the knowledge to design, lead, and manage sophisticated AI projects that deliver measurable business value.</p><p>Beyond technical knowledge, this course emphasises strategic leadership and organisational transformation. You will learn to assess industry-specific AI opportunities, develop effective AI integration plans, and navigate ethical, regulatory, and operational considerations unique to your sector. This holistic approach prepares you to act as an AI leader within your organisation, driving innovation and sustainable competitive advantage amid rapid technological advancement.</p><p>By the end of the course, you will be empowered to implement complex AI solutions tailored to your industry’s needs, lead cross-functional AI initiatives, and influence business strategy with data-driven insights. Whether you aim to become a specialist in AI applications or a visionary leader shaping your organisation’s AI future, this course bridges the gap between AI theory and impactful enterprise action.</p><p ><h4>Why These Skills Are Important</h4></p><ul><li>&nbsp;Position yourself as an industry AI leader who influences transformation and innovation.</li><li>Develop high-value expertise sought after for advisory and strategic roles.</li><li>&nbsp;Advanced AI specialists command significantly higher salaries than peers.</li><li>&nbsp;Open opportunities to work across industries and internationally with in-demand skills.</li><li>&nbsp;Deploying advanced AI differentiates your organisation in a crowded market.</li><li>&nbsp;Achieve faster returns on AI investments with mature implementation strategies.</li><li>&nbsp;Reduce reliance on external consultants and optimise internal resources.</li><li>&nbsp;Build capacity to lead large-scale AI-driven digital transformation initiatives.</li></ul>",
              jobs: [
                "Advanced practical AI applications in your sector.",
                "Strategic implementation of enterprise AI.",
                "Change management for transformation.",
                "Emerging technologies and future-proofing.",
                "Building organisational AI capability.",
              ],
              LearningOutcomes: [
                "Develop a deep understanding of advanced AI technologies such as deep learning, natural language processing, generative AI, and spatio-temporal data analytics.",
                "Analyse and evaluate AI applications and case studies across multiple industries to identify innovation opportunities and create business value.",
                "Implement advanced AI tools and methodologies to solve real-world problems and effectively communicate insights and results to stakeholders.",
                "Navigate ethical, legal, and regulatory challenges in deploying AI at scale within industry-specific contexts.",
              ],

              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCAI0825 - Advanced AI Applications </p><p>Duration: 30 hours</p><ul><li>Modules: 4</li></ul>",
              syllabus: [
                "Module 1: AI in Your Industry ",
                "Module 2: Generative AI and Content Creation ",
                "Module 3: AI Integration and Workflow Optimisation ",
                "Module 4: Future-Ready AI Skills ",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<ul><li>No formal qualifications required (AI Fundamentals recommended).</li><li>You must be at least 18 years old.</li><li>&nbsp;Stable internet connection and computer (as per standard IT specs)</li></ul><p>IT Specifications Required for Study</p><ul><li>&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>&nbsp;Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>Must have Microsoft Word, PowerPoint, Excel, and a PDF reader (e.g., Adobe Acrobat) installed.</li><li>&nbsp;Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Xiu Y</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 3 weeks ago</p>
    <p>This course exceeded all my expectations. Not only did I learn valuable skills, but I also gained confidence in applying them to my work. The certification at the end was a great bonus. Definitely worth the investment.</p>
    <p><br></p>

    <p><strong>Ritika</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Amazing materials. Worth every penny.</p>
    <p><br></p>

    <p><strong>Rahul</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Very good, informative, and easy to follow. Perfect for me. Great if you have the basics covered.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId:
        "scdv0825-understanding-australian-workplace-culture-and-values",
      title: "SCDV0825 - Understanding Australian Workplace Culture and Values",
      image: courseImg.workplace.out,
      courseimage: courseImg.workplace.in,
      review: "5",
      category: "Professional Development",
      categoryId: "CSDEVELOPMENT",
      certification: "Digital Certificate and Badge",
      price: "499",
      duration: "30 Hours",
      modules: "5",
      category_Image: image11,
      modeofdelivery: "Online, Self-paced",
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "2" },
        { id: 2, rating: 4, width: "50", review: "1" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><h4>Course Description</h4></p><p>This course is specifically designed for professional migrants and skilled workers seeking to succeed in Australian workplaces. Navigating a new workplace culture can be challenging, and understanding Australian workplace values, norms, and unwritten expectations is essential for career success and integration. The course demystifies Australian business culture, including concepts such as egalitarianism, directness in&nbsp;communication, informality, work-life balance priorities, and the expectation of individual initiative. Through practical examples and real workplace scenarios, learners gain confidence in professional interactions, understand how to build relationships with Australian colleagues, and learn to navigate workplace hierarchies and decision-making processes. This knowledge accelerates your career progression and enables you to contribute meaningfully from day one.</p><p>Beyond cultural awareness, the course equips you with practical strategies for workplace success in Australia. You will learn professional communication styles, how to engage in workplace discussions and meetings effectively, understand diversity and inclusion in Australian organisations, and navigate workplace rights and responsibilities. The course also addresses common cultural differences that may arise from your background, providing strategies to bridge gaps and leverage your unique perspectives as strengths. By completing this course, you will feel more confident, integrated, and positioned to achieve your career goals in the Australian workplace environment.</p><p ><h4>Why These Skills Are Important?</h4></p><ul><li>Understanding Australian workplace culture accelerates career success by 2–3 years and enables faster progression and higher salaries.</li><li>&nbsp;Reduces workplace stress and builds confidence in professional interactions, helping you feel integrated and valued in your new environment.</li><li>Knowledge of Australian workplace norms improves professional relationships and prevents costly cultural misunderstandings that could impact your career.</li><li>Support programs attract skilled migrants and significantly improve retention rates among international professionals.</li><li>&nbsp;Early integration of migrant workers improves productivity, whilst diverse teams with strong cultural understanding outperform homogeneous teams.</li><li>&nbsp;Organisations known for supporting migrant integration build reputations as inclusive employers and strengthen their organisational culture.</li></ul>",
              jobs: [
                "Core Australian values and practical implications.",
                "Workplace norms and expectations.",
                "Professional communication style.",
                "Discrimination laws and rights.",
                "Career progression pathways in Australia.",
                "How to navigate job market and build networks.",
                "Confidence in Australian workplaces.",
              ],
              LearningOutcomes: [
                "Understand core Australian workplace values including egalitarianism, directness, informality, work-life balance, and meritocracy, and how these shape workplace interactions and decision-making.",
                "Develop practical communication skills adapted to Australian workplace norms, including how to build relationships, participate in meetings, and navigate workplace hierarchies effectively.",
                "Navigate workplace rights, responsibilities, and legal protections in Australia, including understanding employment law, discrimination, and workplace safety obligations.",
                "Bridge cultural differences by recognising your unique strengths and perspectives, building confidence in professional interactions, and contributing authentically to Australian workplaces.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCDV0825 - Understanding Australian Workplace Culture and Values</p><p>Duration: 30 hours</p><ul><li>Modules: 5</li></ul>",
              syllabus: [
                "Module 1: Australian Culture and Values Overview ",
                "Module 2: Australian Workplace Norms and Expectations ",
                "Module 3: Diversity, Inclusion, and Equal Opportunity ",
                "Module 4: Professional Development and Career Progression ",
                "Module 5: Practical Integration: Building Your Career ",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>•&nbsp;No prior qualifications required.</p><p>•&nbsp;&nbsp;You must be at least 18 years old.</p><p>•&nbsp;&nbsp;Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>&nbsp;Must have PDF reader (e.g., Adobe Acrobat) installed.</li><li>Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Isadora Jayasinghe</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>As a Sri Lankan professional, this course addressed all my concerns about fitting in at work. It helped me understand communication and collaboration styles.</p>
    <p><br></p>

    <p><strong>Devi Ariyadasa</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Transformative course explaining Australian values of equality, directness, and mateship. Highly recommended for anyone relocating to Australia!</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId: "scdv0925-australian-values-rights-and-civic-participation",
      title: "SCDV0925 - Australian Values, Rights, and Civic Participation",
      image: courseImg.ausValues.out,
      courseimage: courseImg.ausValues.in,
      review: "4.5",
      category: "Professional Development",
      categoryId: "CSDEVELOPMENT",
      modeofdelivery: "Online, Self-paced",
      price: "499",
      duration: "30 Hours",
      certification: "Digital Certificate and Badge",
      modules: "4",
      category_Image: image8,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "1" },
        { id: 2, rating: 4, width: "50", review: "1" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><h4>Course Description</h4></p><p>This course is designed for immigrants seeking a deeper understanding of Australian society, government, and community participation. It provides comprehensive knowledge of Australian history, cultural values, and how society functions, helping newcomers understand the context of Australian life. The course covers the structure of Australian government at federal, state, and local levels, explains how laws are made&nbsp;and enforced, and clarifies civic rights and responsibilities. Participants learn about essential systems including healthcare, safety, education, and social support services, enabling them to navigate these institutions confidently. Understanding these foundational aspects of Australian society is essential for successful long-term settlement and building meaningful community connections.</p><p>Beyond institutional knowledge, the course emphasises active citizenship and community engagement. Participants explore how to participate in civic life, understand their legal rights and responsibilities as residents, and discover pathways to contribute to their local and broader communities. The course also addresses important topics such as equality, diversity, and Australian values of fairness and mateship, helping newcomers understand and embrace these cultural principles. For those considering citizenship, this course provides the knowledge base needed for the citizenship application process and helps build a sense of belonging to Australian society. By the end of the program, you will have the cultural literacy and practical knowledge to participate confidently as a member of the Australian community.</p><p ><h4>Why These Skills Are Important?</h4></p><ul><li>&nbsp;Understanding Australian systems, rights, and available support sources provides confidence and security in navigating daily life.</li><li>&nbsp;Knowledge of healthcare systems, mental health support, and social services enables you to access essential care and support for yourself and your family.</li><li>Understanding Australian values and civic systems facilitates meaningful friendships, reduces isolation, and builds a genuine sense of belonging.</li><li>Civic knowledge supports informed decision-making about settlement, citizenship pathways, and economic participation in Australian society.</li><li>&nbsp;Integrated immigrants who understand Australian society strengthen community bonds and foster mutual respect across diverse backgrounds.</li><li>&nbsp;Engaged citizens who understand government systems actively contribute to economic growth and strengthen democratic participation.</li><li>&nbsp;Diverse communities with well-integrated newcomers experience innovation, resilience, and cultural enrichment.</li><li>Successfully settled skilled immigrants support population growth, reduce social issues, and contribute meaningfully to community wellbeing.</li></ul>",
              jobs: [
                "Australian history and contemporary society.",
                "How government works and your role.",
                "Core Australian values and principles.",
                "Healthcare, safety, and support systems.",
                "Community organisations and engagement.",
                "Pathways to settlement and citizenship.",
                "How to build meaningful community connections.",
              ],
              LearningOutcomes: [
                "Understand Australian history, cultural values, and societal principles including democracy, equality, mateship, and fair go that underpin Australian society.",
                "Navigate Australian government structures at federal, state, and local levels, and understand how laws are made, enforced, and how to access government services.",
                "Know your civic rights and responsibilities as a resident of Australia, including legal protections, voting rights, and obligations to the community.",
                "Access and utilise essential Australian systems including healthcare, education, safety services, and social support, and understand how to engage with these institutions.",
                "Build community connections and participate actively in civic life through volunteering, community groups, and local engagement that strengthen your sense of belonging.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCDV0925 - Australian Values, Rights, and Civic Participation</p><p>Duration: 30 hours</p><ul><li>Modules: 4</li></ul>",
              syllabus: [
                "Module 1: Australian History, Government, and Democracy ",
                "Module 2: Core Australian Values and Principles ",
                "Module 3: Safety, Health, and Wellbeing in Australia ",
                "Module 4: Building Community and Civic Participation ",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>•&nbsp;No prior qualifications required.</p><p>•&nbsp;&nbsp;You must be at least 18 years old.</p><p>•&nbsp;&nbsp;Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>&nbsp;Must have PDF reader (e.g., Adobe Acrobat) installed.</li><li>Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Jose</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐</span> 2 months ago</p>
    <p>As a Filipino professional on a residency pathway, this course was crucial for understanding Australian values, political system, and civic duties.</p>
    <p><br></p>

    <p><strong>Maria Hernandez</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Excellent explanations about Australian government and rights. Very informative and worth taking.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId: "scbu0125-business-fundamentals-for-emerging-leaders",
      title: "SCBU0125 - Business Fundamentals for Emerging Leaders",
      image: courseImg.business.out,
      courseimage: courseImg.business.in,
      review: "4.9",
      category: "Business",
      categoryId: "CSBUSINESS",
      modeofdelivery: "Online, Self-paced",
      price: "699",
      duration: "20 Hours",
      certification: "Digital Certificate and Badge",
      modules: "5",
      category_Image: image9,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "5" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                '<p><h4>Course Description</h4></p><p>This course offers a comprehensive introduction to essential business concepts, including strategy, finance, and leadership, tailored specifically for aspiring leaders and those transitioning into managerial roles. Participants will build foundational business acumen and develop strategic thinking skills applicable across all organisational functions, enabling them to understand how different parts of a business interconnect&nbsp;and contribute to overall success. Through real-world case studies and practical exercises, learners will explore leadership fundamentals, financial principles, market analysis, and effective communication techniques necessary for managing teams and driving organisational goals.</p><p>Beyond foundational knowledge, the course emphasises the development of critical leadership competencies such as emotional intelligence, problem-solving, and decision-making in dynamic business environments. Learners will gain tools to navigate change, foster collaboration, and create high-performing cultures aligned with organisational vision and values. With a focus on real-world application, this course prepares emerging leaders to confidently step into leadership roles, inspire teams, and contribute meaningfully to their organisation’s growth and success.</p><p class="ql-align-justify"><h4>Why These Skills Are Important?</h4></p><ul><li>Mastery of business fundamentals is essential for success in any management or leadership role.</li><li>&nbsp;Australian managers with strong business literacy typically earn 25–40% higher salaries.</li><li>Business skills are valued across industries, increasing employability and career resilience.</li><li>&nbsp;Deep business knowledge enables more effective decision-making and leadership in complex environments.</li><li>&nbsp;Developing staff business skills prepares them to step into future leadership roles.</li><li>&nbsp;Business-savvy teams make better decisions aligned with company goals.</li><li>&nbsp;Investing in employee development increases job satisfaction and retention.</li><li>&nbsp;Shared understanding of business direction fosters collaboration, innovation, and a cohesive workplace.</li></ul>',
              jobs: [
                "How organization’s work and make decisions.",
                "Strategic planning and goal setting.",
                "Financial management and budgeting.",
                "Leadership and team management.",
                "Process improvement and change management.",
                "Business analytical skills.",
              ],
              LearningOutcomes: [
                "Develop foundational knowledge of business concepts including strategy, finance, marketing, and operations essential for effective management.",
                "Cultivate critical leadership skills such as communication, decision-making, delegation, and team motivation to enable successful leadership in diverse organisational contexts.",
                "Build strategic thinking and problem-solving abilities necessary to align team goals with broader organisational objectives and navigate business challenges.",
                "Gain confidence and practical skills to lead change initiatives, foster innovation, and contribute to creating a positive organisational culture.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCBU0125 - Business Fundamentals for Emerging Leaders</p><p>Duration: 20 hours</p><ul><li>Modules: 5</li></ul>",
              syllabus: [
                "Module 1: Understanding the Business Environment ",
                "Module 2: Strategic Planning and Goal Setting ",
                "Module 3: Financial Fundamentals for Non-Financial Managers",
                "Module 4: Leadership, Motivation, and People Management ",
                "Module 5: Operational Excellence and Change Management",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>•&nbsp;No prior qualifications required.</p><p>•&nbsp;&nbsp;You must be at least 18 years old.</p><p>•&nbsp;&nbsp;Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>&nbsp;Must have PDF reader (e.g., Adobe Acrobat) installed.</li><li>Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Carmen Castillo</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Absolutely fantastic experience. The course content is comprehensive. The instructors are knowledgeable, patient, and always willing to help. I’ve already recommended this to several friends.</p>
    <p><br></p>

    <p><strong>Xiu Park</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Remarkable course that delivers real value.</p>
    <p><br></p>

    <p><strong>Priya Kaur</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 3 weeks ago</p>
    <p>Phenomenal experience from start to finish! Logical and progressive course with clear learning outcomes at each stage.</p>
    <p><br></p>

    <p><strong>Anjali Mishra</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐</span> 1 week ago</p>
    <p>Excellent content and well-structured. Really helped me understand the basics.</p>
    <p><br></p>

    <p><strong>Aditya Joshi</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 3 months ago</p>
    <p>Simply outstanding! The course has given me the tools and confidence I needed for career advancement.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId:
        "scbu0225-communication-and-negotiation-skills-for-professionals",
      title:
        "SCBU0225 - Communication and Negotiation Skills for Professionals",
      image: courseImg.communication.out,
      courseimage: courseImg.communication.in,
      review: "4.5",
      category: "Business",
      categoryId: "CSBUSINESS",
      modeofdelivery: "Online, Self-paced",
      price: "799",
      duration: "30 Hours",
      certification: "Digital Certificate and Badge",
      modules: "5",
      category_Image: image9,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "4" },
        { id: 2, rating: 4, width: "50", review: "1" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><strong>Course Description</strong></p><p>This course is designed to help individual contributors, managers, and professionals master the essential soft skills of communication and negotiation to accelerate their careers and increase their influence. You will learn key principles of effective communication, including how to listen actively, convey your ideas clearly, and adapt your style for different audiences. These foundational skills help you build strong relationships, collaborate effectively, and stand out in your workplace.The negotiation component of the course equips you with strategies to navigate challenging conversations, manage conflicts, and create win-win outcomes. You will develop techniques for preparation, persuasion, emotional intelligence, and flexibility that allow you to achieve favorable results in salary discussions, client negotiations, and team dynamics. Whether you are seeking to gain promotions, close deals, or improve workplace interactions, this course empowers you with practical, transferable skills essential for long-term professional success.</p><p ><strong>Why These Skills Are Important?</strong></p><ul><li>85% of career success is attributed to strong communication and interpersonal skills, far outweighing technical abilities.</li><li>Professionals with effective communication skills can earn up to 30% higher salaries due to enhanced influence and leadership capabilities.</li><li>&nbsp;Mastery of communication and negotiation is critical for securing leadership roles and career growth.</li></ul><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Building clear communication skills increases self-assurance and helps develop strong professional networks.</p><ul><li>&nbsp;Effective communication reduces conflicts, improves collaboration, and drives overall team performance.</li><li>Strong communication skills lead to enhanced client satisfaction and better service outcomes.</li><li>&nbsp;Positive communication cultures increase engagement and reduce staff turnover.</li><li>Communication fosters psychologically safe workplaces that support diversity and innovation.</li></ul>",
              jobs: [
                "Professional communication principles and techniques",
                "How to handle difficult situations",
                "Negotiation strategies and tactics",
                "Professional relationship building",
                "Cross-cultural and remote communication",
                "Personal communication style awareness",
              ],
              LearningOutcomes: [
                "Master effective interpersonal communication techniques, including active listening, clear messaging, and adapting style to diverse audiences.",
                "Develop advanced negotiation skills such as planning, managing conflicts, overcoming objections, and creating win-win outcomes in professional settings.",
                "Enhance your ability to manage difficult conversations, provide and receive feedback constructively, and resolve workplace conflicts positively.",
                "Build confidence and influence in varied communication scenarios, leading to improved professional relationships and career advancement.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p> SCBU0225 - Communication and Negotiation Skills for Professionals</p><p>Duration: 30 hours</p><ul><li>Modules: 5</li></ul>",
              syllabus: [
                "Module 1: Effective Communication Foundations",
                "Module 2: Communication in Professional Settings",
                "Module 3: Difficult Conversations and Conflict Resolution",
                "Module 4: Negotiation and Persuasion",
                "Module 5: Building Professional Relationships",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>•&nbsp;No prior qualifications required.</p><p>•&nbsp;&nbsp;You must be at least 18 years old.</p><p>•Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>&nbsp;Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li></ul><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Must have PDF reader (e.g., Adobe Acrobat) installed.</p><ul><li>&nbsp;Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Carmen Santos</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Highly recommended for anyone serious about their PD.</p>
    <p><br></p>

    <p><strong>Isha</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Excellent course. Well-designed with clear learning outcomes. Also taking advanced business courses from Stella College.</p>
    <p><br></p>

    <p><strong>Vikram Singh</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 1 month ago</p>
    <p>The depth of knowledge and practical insights into negotiation have significantly improved my conflict resolution capabilities.</p>
    <p><br></p>

    <p><strong>Rohan Kumar</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐</span> 4 weeks ago</p>
    <p>The course taught a great deal about using negotiation skills effectively.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId: "scbu0325-entrepreneurship-and-business-growth-strategy",
      title: "SCBU0325 - Entrepreneurship and Business Growth Strategy",
      image: courseImg.entrepreneur.out,
      courseimage: courseImg.entrepreneur.in,
      review: "5",
      category: "Business",
      categoryId: "CSBUSINESS",
      modeofdelivery: "Online, Self-paced",
      price: "799",
      duration: "30 Hours",
      certification: "Digital Certificate and Badge",
      modules: "5",
      category_Image: image9,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "5" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><strong>Course Description</strong></p><p >This course equips aspiring entrepreneurs, business owners, and intrapreneurs with a comprehensive framework for identifying profitable opportunities, developing robust business models, and executing effective market entry and growth strategies. Through practical, real-world applications, learners explore all critical stages from venture ideation to scaling operations, focusing on strategic decision-making, financial planning, marketing, and leadership.</p><p >Participants will develop actionable skills to navigate complex challenges, secure funding, build sustainable competitive advantages, and lead business growth initiatives. The course empowers learners to translate innovative ideas into viable enterprises and scale them efficiently, preparing them to thrive in dynamic, competitive markets.</p><p ><strong>Why These Skills Are Important?</strong></p><ul><li>&nbsp;Entrepreneurship provides significant income generation potential and wealth-building opportunities.</li><li>&nbsp;Owning a business gives you full control over your strategic direction, priorities, and work-life balance.</li><li>&nbsp;Entrepreneurs create jobs and contribute substantially to local and national economic growth.</li><li>&nbsp;Entrepreneurship develops strong problem-solving skills and prepares you to navigate uncertainty effectively, supported by Australia’s robust entrepreneurial ecosystem.</li><li>&nbsp;Entrepreneurial thinking fosters new revenue streams and innovative business models.</li><li>&nbsp;Cultivates a culture that attracts and retains creative and proactive talent.</li><li>&nbsp;Builds adaptable, inventive teams capable of responding to market changes.</li><li>&nbsp;Supports scalable growth and nurtures an ownership mentality that increases engagement and accountability.</li></ul>",
              jobs: [
                "End-to-end business development",
                "Opportunity validation before investment",
                "Business model and financial planning",
                "Marketing and customer acquisition",
                "Growth management and team building",
                "Legal, financial, and risk management",
              ],
              LearningOutcomes: [
                "Identify and validate entrepreneurial opportunities using market research and feasibility analysis to develop viable business concepts.",
                "Create comprehensive business models and strategic plans including financial projections, competitive analysis, and go-to-market strategies.",
                "Execute business launches effectively by managing resources, marketing, operations, and customer acquisition to achieve early success.",
                "Scale and grow businesses sustainably by implementing growth strategies, building teams, securing funding, and navigating expansion challenges.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p> SCBU0325 - Entrepreneurship and Business Growth Strategy</p><p>Duration: 30 hours</p><ul><li>Modules: 5</li></ul>",
              syllabus: [
                "Module 1: Entrepreneurial Mindset and Opportunity Recognition",
                "Module 2: Business Model and Planning",
                "Module 3: Marketing and Customer Acquisition",
                "Module 4: Scaling and Growth Strategies",
                "Module 5: Risk Management and Exit Strategies",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>•&nbsp;&nbsp;&nbsp;No prior qualifications required.</p><p>•&nbsp;&nbsp;You must be at least 18 years old.</p><p>• &nbsp;Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>&nbsp;Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>&nbsp;Must have PDF reader (e.g., Adobe Acrobat) installed.</li><li>Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Aniket</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 4 weeks ago</p>
    <p>Outstanding! This course transformed how I approach startups. Worth every dollar!</p>
    <p><br></p>

    <p><strong>Raj Nair</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 weeks ago</p>
    <p>As an aspiring entrepreneur, this course genuinely filled knowledge gaps. Excellent coverage of business growth.</p>
    <p><br></p>

    <p><strong>Gabriela Perez</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 3 weeks ago</p>
    <p>Great value course, quick response from the team.</p>
    <p><br></p>

    <p><strong>Ling Liu</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Phenomenal course explaining business growth and scaling with real-world examples. Highly recommended.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId:
        "sccs0425-cybersecurity-fundamentals-protecting-your-digital-assets",
      title:
        "SCCS0425 - Cybersecurity Fundamentals – Protecting Your Digital Assets",
      image: courseImg.cyber.out,
      courseimage: courseImg.cyber.in,
      review: "4.5",
      category: "Cyber Security",
      categoryId: "CSCYBERSECURITY",
      modeofdelivery: "Online, Self-paced",
      price: "699",
      duration: "20 Hours",
      certification: "Digital Certificate and Badge",
      modules: "5",
      category_Image: image7,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "3" },
        { id: 2, rating: 4, width: "50", review: "1" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><strong>Course Description</strong></p><p>In an increasingly digital world, cybersecurity has become essential for every professional across all industries. This course provides comprehensive, practical knowledge about the threats facing individuals and organisations, along with proven strategies to protect digital assets and data. Designed for professionals without&nbsp;technical backgrounds, the course demystifies cybersecurity concepts and equips learners with actionable skills to identify threats, implement protections, and respond effectively to security incidents. You will explore real-world cyber attacks, understand vulnerabilities in systems and human behavior, and learn best practices that organisations worldwide rely upon.</p><p>The course covers three critical dimensions of cybersecurity. First, you will master personal security practices—protecting your devices, passwords, and online accounts from common threats such as phishing, malware, and social engineering. Second, you will understand how organisations implement security frameworks, compliance requirements, and incident response procedures to safeguard sensitive information. Third, you will explore the rapidly growing cybersecurity career landscape, discovering opportunities for specialisation and advancement in this high-demand field. Throughout, the course emphasises practical application with real Australian regulatory context, including the Privacy Act and mandatory data breach notification requirements.</p><p ><strong>Why These Skills Are Important?</strong></p><ul><li>&nbsp;Critical shortage of cybersecurity professionals creates exceptional job market demand and career advancement pathways.</li><li>Cybersecurity roles command high salaries with strong job security in a rapidly growing industry.</li><li>Master skills to protect your identity, finances, and personal data from increasingly sophisticated threats.</li><li>&nbsp;Cybersecurity awareness is now an essential skill across all industries and professional roles, enhancing your overall value.</li><li>&nbsp;90% of data breaches involve human error; employee cybersecurity awareness training significantly reduces breach risk.</li><li>&nbsp;Trained workforces help meet mandatory compliance requirements including Australia's Privacy Act and data breach notification laws.</li></ul>",
              jobs: [
                "Core cybersecurity concepts and principles",
                "Common types of cyber threats and recognition",
                "Personal and organisational security practices",
                "Incident response and reporting",
                "Australian regulatory environment",
                "Career opportunities in cybersecurity",
                "How to build a security-conscious culture",
              ],
              LearningOutcomes: [
                "Understand fundamental cybersecurity concepts, common threats, attack vectors, and the motivations behind cyber attacks in professional environments.",
                "Implement practical personal and organisational security practices including password management, multi-factor authentication, and threat recognition.",
                "Recognise and respond effectively to security incidents, understand compliance requirements including Australia's Privacy Act, and support organisational security cultures.",
                "Explore cybersecurity career pathways, specialisations, and professional certifications to guide your development in this high-demand field.",
                "Develop critical thinking skills to evaluate security risks, assess vulnerabilities in systems and processes, and recommend appropriate mitigation strategies.",
                "Build confidence to advocate for security-first practices in your workplace and contribute to creating psychologically safe, security-aware organisational cultures.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCCS0425 - Cybersecurity Fundamentals – Protecting Your Digital Assets</p><p>Duration: 20 hours</p><ul><li>Modules: 5</li></ul>",
              syllabus: [
                "Module 1: Introduction to Cybersecurity",
                "Module 2: Core Security Principles",
                "Module 3: Common Cyber Threats and How to Prevent Them",
                "Module 4: Organisational Cybersecurity",
                "Module 5: Your Cybersecurity Career Path",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>•&nbsp;No prior qualifications required.</p><p>•&nbsp;&nbsp;You must be at least 18 years old.</p><p>•&nbsp;&nbsp;&nbsp;Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li> Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>&nbsp;Must have PDF reader (e.g., Adobe Acrobat) installed.</li><li> Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Zahra</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Filled my knowledge gaps in cyber protection and threat prevention. Transformative learning experience.</p>
    <p><br></p>

    <p><strong>Divya Saxena</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 3 weeks ago</p>
    <p>Good fundamentals covered. Ideal for those with zero knowledge.</p>
    <p><br></p>

    <p><strong>Nur Ismail</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Structured learning for data protection — exactly what I needed as a business manager.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId: "sccs0525-cybersecurity-awareness-and-best-practices",
      title: "SCCS0525 - Cybersecurity Awareness and Best Practices",
      image: courseImg.cyberAwareness.out,
      courseimage: courseImg.cyberAwareness.in,
      review: "5",
      category: "Cyber Security",
      categoryId: "CSCYBERSECURITY",
      modeofdelivery: "Online, Self-paced",
      price: "699",
      duration: "20 Hours",
      certification: "Digital Certificate and Badge",
      modules: "4",
      category_Image: image8,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "3" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><strong>Course Description</strong></p><p>This practical, focused course is designed for individuals and organisations seeking rapid, actionable cybersecurity awareness. Unlike comprehensive foundational courses, this streamlined program concentrates on essential knowledge and real-world practices that directly address workplace security needs. Learners will master personal&nbsp;device protection, recognise common attack methods such as phishing and social engineering, and understand critical workplace security policies. The course is ideal for employee onboarding, ongoing compliance training, and organisations requiring all staff to meet baseline cybersecurity awareness standards. With a format suited to busy professionals, learners gain practical skills in short, digestible modules that fit easily into work schedules.</p><p>This course emphasises actionable practices and incident response procedures essential for protecting both personal and organisational assets. Participants will learn to identify data sensitivity, handle sensitive information appropriately, understand privacy regulations including Australia's Privacy Act, and respond confidently when security incidents occur. By the end of the program, you will have the awareness and practical skills to protect yourself and your organisation, and the confidence to report security concerns and support your workplace's security culture. This course serves as either a standalone awareness program or a preparatory foundation for those considering deeper specialisation in cybersecurity.</p><p ><strong>Why These Skills Are Important?</strong></p><ul><li>&nbsp;&nbsp;Master practical skills to safeguard your identity, financial information, and personal devices from cyber threats.</li><li>&nbsp;Cybersecurity awareness is now an essential professional competency expected across all roles and industries.</li><li>&nbsp;Understand common attack methods and implement practical defences that significantly reduce your personal cyber risk.</li><li>&nbsp;&nbsp;Your security awareness directly strengthens your team's and organisation's ability to defend against threats.</li><li>&nbsp;Employee cybersecurity awareness is the most effective breach prevention strategy available to organisations.</li><li>&nbsp;Meet mandatory compliance requirements including Australia's Privacy Act and mandatory breach notification obligations.</li><li>&nbsp;Builds shared responsibility and accountability for protecting digital assets across the entire workforce.</li><li>&nbsp;&nbsp;A trained, security-aware workforce reduces cyber insurance premiums and protects against costly breach incidents.</li></ul>",
              jobs: [
                "How to protect personal devices and accounts",
                "Workplace security policies and practices",
                "Data handling and privacy laws",
                "How to identify threats and respond",
                "When and how to report security issues",
                "Best practices for daily security",
              ],
              LearningOutcomes: [
                "Recognise common cyber threats including phishing, malware, social engineering, and password attacks with practical examples relevant to Australian workplaces.",
                "Implement essential personal security practices such as strong password management, multi-factor authentication, and safe device usage to protect yourself and organisational data.",
                "Understand workplace security policies, data handling protocols, and incident reporting procedures to support your organisation's security posture.",
                "Identify suspicious activities and respond appropriately by reporting security concerns through proper channels and following organisational incident response procedures.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCCS0525 - Cybersecurity Awareness and Best Practices</p><p>Duration: 20 hours</p><ul><li>Modules: 4</li></ul>",
              syllabus: [
                "Module 1: Personal Cybersecurity ",
                "Module 2: Workplace Cybersecurity ",
                "Module 3: Data Protection and Privacy ",
                "Module 4: Recognising and Responding to Threats ",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>•&nbsp;&nbsp;No prior qualifications required.</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;You must be at least 18 years old.</p><p>•&nbsp;&nbsp;&nbsp;Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>&nbsp;&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>&nbsp;Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>&nbsp;&nbsp;Must have PDF reader (e.g., Adobe Acrobat) installed.</li><li>Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Kenji</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 months ago</p>
    <p>Very informative and easy to follow. Perfect for those with basic fundamentals.</p>
    <p><br></p>

    <p><strong>Rosa Pratama</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Excellent content. Really helped me understand the entire course.</p>
    <p><br></p>

    <p><strong>Karan Singh</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 3 weeks ago</p>
    <p>Perfect for security compliance professionals! Comprehensive yet accessible.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId: "sccs0625-advanced-cybersecurity",
      title: "SCCS0625 - Advanced Cybersecurity",
      image: courseImg.cyber.out,
      courseimage: courseImg.cyber.in,
      review: "4.8",
      category: "Cyber Security",
      categoryId: "CSCYBERSECURITY",
      modeofdelivery: "Online, Self-paced",
      price: "799",
      duration: "30 Hours",
      certification: "Digital Certificate and Badge",
      modules: "5",
      category_Image: image8,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "2" },
        { id: 2, rating: 4, width: "50", review: "1" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><strong>Course Description</strong></p><p>This advanced course is designed for security professionals and individuals committed to building careers in cybersecurity. Building on foundational knowledge, the course delves into sophisticated threat analysis, security architecture design, and enterprise-level risk management strategies. Participants will examine advanced attack&nbsp;methodologies, defensive technologies, and security frameworks used by leading organisations worldwide. Through real-world case studies and hands-on scenarios, learners develop the technical depth and strategic thinking required to design secure systems, evaluate security solutions, and protect organisations against evolving threats. This course is intended for those with cybersecurity fundamentals knowledge and those seeking to advance their professional credentials.</p><p>The course emphasises both technical competency and strategic security leadership. Learners will explore incident response procedures, forensic investigation principles, security governance, and compliance frameworks including those specific to Australia. The program covers emerging threats such as ransomware, advanced persistent threats, and cloud security challenges, ensuring relevance to current threat landscapes. Participants develop skills in risk assessment, security architecture evaluation, and business continuity planning—critical capabilities for security leadership roles. The course also addresses the human and organisational dimensions of security, including change management and building security cultures.</p><p ><strong>Why These Skills Are Important?</strong></p><ul><li>Advanced cybersecurity professionals are in critical shortage with exceptional demand and excellent career prospects.</li><li> &nbsp;Advanced security specialists command salaries ranging from AUD $160,000–220,000 and upwards to $300,000+ in senior roles.</li><li>&nbsp;&nbsp;&nbsp;Lead initiatives to protect critical infrastructure, organisational assets, and contribute to national security resilience.</li><li>&nbsp;&nbsp;Advance to Chief Information Security Officer (CISO) and executive security leadership roles with significant influence and responsibility.</li><li>&nbsp;&nbsp;Advanced security expertise enables detection and prevention of sophisticated, targeted attacks.</li><li>&nbsp;&nbsp;&nbsp;Build mature, enterprise-level security capabilities that sustain operations despite evolving threats.</li><li>&nbsp;&nbsp;Develop comprehensive security programs aligned with business objectives and industry best practices.</li><li>Meet advanced regulatory requirements and establish reputation for security excellence and trustworthiness.</li></ul>",
              jobs: [
                "Advanced threat analysis and defence",
                "Security architecture and design",
                "Risk management and quantification",
                "Incident response and investigation",
                "Career specialisation and leadership",
                "Professional certification pathways",
              ],
              LearningOutcomes: [
                "Analyse advanced cyber threats including advanced persistent threats, ransomware, and zero-day exploits to understand sophisticated attack methodologies and threat actors.",
                "Design and evaluate security architectures, implementing layered defence strategies and security controls aligned with industry frameworks and compliance requirements.",
                "Conduct risk assessments, develop incident response procedures, and lead forensic investigations to detect, contain, and remediate security breaches effectively.",
                "Develop security governance frameworks, manage compliance obligations including Australian regulatory requirements, and build organisational security programmes.",
                "Lead security initiatives and mentor teams by translating technical security concepts into business language, preparing for CISO and senior security leadership roles.",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<p>SCCS0625 - Advanced Cybersecurity</p><p>Duration: 30 hours</p><ul><li>Modules: 5</li></ul>",
              syllabus: [
                "Module 1:Advanced Threat Landscape ",
                "Module 2: Defence Mechanisms and Security Architecture  ",
                "Module 3:Risk Assessment and Management  ",
                "Module 4: : Incident Response and Forensics  ",
                "Module 4: : Cybersecurity Career Specialisations   ",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<p>•&nbsp;&nbsp;&nbsp;&nbsp;No prior qualifications required (Cybersecurity Fundamentals recommended)</p><p>•&nbsp;You must be at least 18 years old.</p><p>•&nbsp;&nbsp;Stable internet connection and computer (as per standard IT specs)</p><p>IT Specifications Required for Study</p><ul><li>&nbsp;&nbsp;&nbsp;A computer or device with at least 8GB of RAM and a processor running at 1.5GHz or faster.</li><li>&nbsp;&nbsp;Stable internet connection with minimum download speed of 10 Mbps and upload speed of 1 Mbps.</li><li>&nbsp;&nbsp;Must have PDF reader (e.g., Adobe Acrobat) installed.</li><li>&nbsp;Operating system must be Microsoft Windows 8 or newer or Mac OS version 10 or newer.</li></ul>",
            },
            {
              title: "Reviews",
              description: `<p><strong>Nikhil</strong></p>
    <p>3 weeks ago</p>
    <p>Network security specialist for 5 years — Excellent course with invaluable modules on threat analysis and incident response already implemented at work.</p>
    <p><br></p>

    <p><strong>Albert Wang</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 2 weeks ago</p>
    <p>Great course! Learned a lot about network security and threat detection.</p>
    <p><br></p>

    <p><strong>Seema Iyer</strong></p>
    <p><span style='color: rgb(206, 145, 120);'>⭐⭐⭐⭐⭐</span> 1 month ago</p>
    <p>Perfect for anyone in cybersecurity. Clear explanations and real-world examples.</p>`,
            },
          ],
        },
      ],
    },
    {
      courseId:
        "the_sentio_framework_introduction_part_1_of_5_mental_health_series",
      title:
        "The SENTIO Framework : Introduction (Part 1 of 5 mental health series)",
      image: courseImg.sentio1.out,
      courseimage: courseImg.sentio1.in,
      review: "0",
      category: "Mental Health",
      certification: "Digital Certification",
      categoryId: "PSODFCSD",
      duration: "2 Hours",
      price: "199",

      Topics: "5 Topics",
      modeofdelivery: "Workshop + Online",
      rating: "5",
      category_Image: image13,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description: `<p></br><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Course Description</strong></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">This course is designed for individuals, educators, professionals, and people in people-facing roles who seek to better understand human behaviour and emotional experiences in everyday environments.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">It provides a structured approach to recognising and interpreting early emotional and behavioural shifts — particularly in situations where something feels “off” but is not yet clearly understood. The course focuses on what happens before problems become visible, offering a practical framework for identifying subtle signals and improving clarity in real-time situations.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Learners will explore how perception influences understanding and response, gaining insight into how internal experiences shape behaviour. The coursewo rk emphasises translating these insights into practical application across environments such as workplaces, educational settings, and interpersonal contexts.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Alongside conceptual understanding, the course develops the ability to respond with greater awareness and intention. Participants will learn to recognise patterns, reduce reactive responses, and apply structured approaches to navigate uncertainty with clarity. By combining simplicity with practical tools, this course supports participants in improving everyday decision-making, communication, and engagement.</span></p><p><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">Why These Skills Are Important</strong></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Individuals with strong early awareness and perception skills are better equipped to respond to situations before they escalate, reducing the likelihood of reactive or delayed responses.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Early recognition supports improved communication, stronger interpersonal relationships, and more effective decision-making in both personal and professional contexts.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">In environments such as education, workplaces, and community settings, the ability to interpret behaviour beyond surface-level observation contributes to more thoughtful and proportionate responses.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Developing awareness at an earlier stage creates an advantage — not by solving problems faster, but by recognising them sooner and responding with greater clarity.</span></p><p></p>`,
              jobs: [
                "Personal development and self-awareness",
                "Leadership and people management",
                "Education and student support environments",
                "Workplace well-being and team dynamics",
                "Community and support-based roles",
              ],
              notes:
                "<p> Note : This is a non accredited training/ course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>The Sentio Framework : Coursework</p> <p><strong>Duration</strong> 2 hours</p></ul><p></p>",
              syllabus: [
                "Understand early emotional signals before they translate into visible behaviour",
                "Develop clarity around internal experiences without reliance on labels or diagnosis",
                "Recognise how perception influences interpretation and response",
                "Identify patterns in emotional and behavioural shifts",
                "Apply structured awareness techniques in real-world situations",
                "Respond with greater intention rather than reaction in everyday interactions",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<ul><li>No formal prerequisite qualifications are required to enrol.</li><li>You will be invited to attend a detailed information session.</li><li>Must be 18 years and above.</li></ul>",
            },
          ],
        },
      ],
    },
    {
      courseId: "the_sentio_framework_part_2_of_5_mental_health_series",
      title: "The Sentio Framework · Part 2 of 5 – Perception & Interpretation",
      image: courseImg.sentio2.out,
      courseimage: courseImg.sentio2.in,
      review: "0",
      category: "Mental Health",
      certification: "Digital Certificate",
      categoryId: "PSODFCSD",
      duration: "2 Hours",
      price: "199",
      Topics: "6 Topics",
      modeofdelivery: "Workshop + Online",
      rating: "5",
      category_Image: image13,
      allCourses: "All Courses",
      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],
      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p><span>This course is designed for individuals, educators, professionals, and people in people-facing roles who seek to deepen their understanding of how perception shapes the way human behaviour is interpreted and understood.</span></p><p><span>It provides a structured approach to examining the lens through which we observe others — exploring how assumptions, prior experience, and internal filters influence what we see and how we respond. The course focuses on the space between observation and interpretation, offering practical tools to improve clarity and reduce misreading in everyday situations.</span></p><p><span>Learners will explore how perception operates beneath conscious awareness, gaining insight into why two people can witness the same moment and arrive at entirely different conclusions. The coursework emphasises translating this understanding into more accurate, grounded responses across workplaces, educational settings, and interpersonal contexts.</span></p><p><span>Alongside conceptual understanding, the course develops the ability to pause before interpreting — creating the conditions for more considered, proportionate, and effective engagement with others.</span></p><p><span>Why these skills are important</span></p><p><span>Individuals who understand how perception operates are better positioned to separate what they observe from what they assume — reducing the likelihood of misinterpretation and reactive responses.</span></p><p><span>Stronger perceptual awareness supports clearer communication, more accurate assessment of situations, and improved relationships in both personal and professional contexts.</span></p><p><span>In environments such as education, workplaces, and community settings, the ability to recognise how one's own lens shapes understanding leads to more thoughtful and proportionate engagement.</span></p><p><span>Developing this layer of awareness creates a meaningful advantage — not by seeing more, but by interpreting what is already visible with greater accuracy and intention.</span></p>",
              jobs: [
                "Personal development and self-awareness",
                "Leadership and people management",
                "Education and student support environments",
                "Workplace well-being and team dynamics",
                "Community and support-based roles",
              ],
              notes:
                "<p>Note: This is a non-accredited training/course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },
            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>The Sentio Framework : Coursework</p><p><strong>Duration</strong> · 2 hours</p>",
              syllabus: [
                "Understand how personal perception filters shape the interpretation of behaviour and communication",
                "Recognise the difference between observation and assumption in real-time interactions",
                "Identify how prior experience and belief systems influence what we notice and how we respond",
                "Explore how misinterpretation forms and how to interrupt it before it drives reaction",
                "Apply perceptual awareness techniques across workplace, educational, and interpersonal environments",
                "Respond with greater clarity and intention by pausing to reassess before reacting",
              ],
            },
            {
              title: "Entry Requirement",
              description:
                "<ul><li>No formal prerequisite qualifications are required to enrol.</li><li>You will be invited to attend a detailed information session.</li><li>Must be 18 years and above.</li></ul>",
            },
          ],
        },
      ],
    },
    {
      courseId:
        "the_sentio_framework_part_3_of_5_internal_experiences_behaviour",
      title:
        "The Sentio Framework · Part 3 of 5 – Internal Experiences & Behaviour",
      image: courseImg.sentio3.out,
      courseimage: courseImg.sentio3.in,
      review: "0",
      category: "Mental Health",
      certification: "Digital Certificate",
      categoryId: "PSODFCSD",
      duration: "2 Hours",
      price: "199",
      Topics: "6 Topics",
      modeofdelivery: "Workshop + Online",
      rating: "5",
      category_Image: image13,
      allCourses: "All Courses",

      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],

      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p>This course is designed for individuals, educators, professionals, and people in people-facing roles who seek to understand the relationship between what people experience internally and how that experience shows up in their behaviour and interactions.</p><p>It provides a structured approach to exploring the connection between internal emotional states and outward behaviour — examining why people act the way they do, and what those actions are communicating beneath the surface. The course focuses on developing the ability to read behaviour not as a problem to manage, but as information to understand.</p><p>Learners will explore how feelings, thoughts, and physical sensations shape the way people engage with others and navigate their environments. The coursework emphasises moving beyond surface-level observation to build a more complete picture of what drives human behaviour in everyday situations.</p><p>Alongside conceptual understanding, the course develops practical skills for interpreting behaviour with greater accuracy and compassion — equipping participants to respond in ways that are grounded, measured, and genuinely useful.</p><p>Why these skills are important</p><p>Individuals who understand the link between internal experience and behaviour are better equipped to respond to others with accuracy rather than assumption — reducing misreading, mishandling, and unnecessary escalation.</p><p>The ability to interpret what behaviour is communicating supports stronger relationships, more effective conversations, and more proportionate responses in both personal and professional contexts.</p><p>In environments such as education, workplaces, and community settings, recognising the meaning behind behaviour — rather than reacting to it at face value — leads to more thoughtful and effective engagement.</p><p>Developing this understanding creates a meaningful advantage — not by diagnosing or analysing people, but by being present enough to notice what is actually happening and respond with intention.</p>",
              jobs: [
                "Personal development and self-awareness",
                "Leadership and people management",
                "Education and student support environments",
                "Workplace well-being and team dynamics",
                "Community and support-based roles",
              ],
              notes:
                "<p>Note: This is a non-accredited training/course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },

            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>The Sentio Framework : Coursework</p><p><strong>Duration</strong> · 2 hours</p>",
              syllabus: [
                "Understand the relationship between internal emotional states and outward behaviour in everyday situations",
                "Recognise how feelings, thoughts, and physical sensations shape the way people engage and respond",
                "Identify what behaviour is communicating beneath the surface rather than responding to it at face value",
                "Explore how unmet needs and internal experiences drive patterns of action and withdrawal",
                "Apply a structured approach to interpreting behaviour with greater accuracy and compassion across real-world environments",
                "Respond to others with greater intention by connecting observed behaviour to its internal source",
              ],
            },

            {
              title: "Entry Requirement",
              description:
                "<ul><li>No formal prerequisite qualifications are required to enrol.</li><li>You will be invited to attend a detailed information session.</li><li>Must be 18 years and above.</li></ul>",
            },
          ],
        },
      ],
    },
    {
      courseId: "the_sentio_framework_part_4_of_5_pattern_recognition",
      title: "The Sentio Framework · Part 4 of 5 – Pattern Recognition",
      image: courseImg.sentio4.out,
      courseimage: courseImg.sentio4.in,
      review: "0",
      category: "Mental Health",
      certification: "Digital Certificate",
      categoryId: "PSODFCSD",
      duration: "2 Hours",
      price: "199",
      Topics: "6 Topics",
      modeofdelivery: "Workshop + Online",
      rating: "5",
      category_Image: image13,
      allCourses: "All Courses",

      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],

      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p>This course is designed for individuals, educators, professionals, and people in people-facing roles who seek to move beyond reacting to isolated incidents and develop the ability to recognise recurring patterns in emotional and behavioural experience over time.</p><p>It provides a structured approach to identifying what repeats — in individuals, in relationships, and in environments — and understanding what those repetitions are communicating. The course focuses on developing the capacity to step back from individual moments and see the larger picture that those moments form together.</p><p>Learners will explore how patterns form, why they persist, and what sustains them beneath the surface. The coursework emphasises building the observational skills needed to track shifts over time — moving from snapshot awareness to a more continuous and informed understanding of human experience.</p><p>Alongside conceptual understanding, the course develops practical tools for recognising patterns without over-interpreting them — equipping participants to use pattern awareness as a foundation for more considered, timely, and effective responses.</p><p>Why these skills are important</p><p>Individuals who can recognise patterns are better positioned to respond to situations before they escalate — seeing the build-up rather than only the breaking point, and acting with greater clarity and less reactivity.</p><p>Pattern recognition supports more informed decision-making, stronger interpersonal awareness, and the ability to distinguish between a one-off moment and a signal that something more sustained is occurring.</p><p>In environments such as education, workplaces, and community settings, the ability to track what repeats — across people, interactions, and time — enables more targeted, proportionate, and genuinely helpful responses.</p><p>Developing this skill creates a meaningful advantage — not by predicting people, but by paying close enough attention to notice what they are consistently communicating, and responding with intention rather than surprise.</p>",
              jobs: [
                "Personal development and self-awareness",
                "Leadership and people management",
                "Education and student support environments",
                "Workplace well-being and team dynamics",
                "Community and support-based roles",
              ],
              notes:
                "<p>Note: This is a non-accredited training/course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },

            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>The Sentio Framework : Coursework</p><p><strong>Duration</strong> · 2 hours</p>",
              syllabus: [
                "Understand how emotional and behavioural patterns form and why they persist over time",
                "Recognise the difference between an isolated incident and a recurring signal that requires attention",
                "Identify patterns across individuals, relationships, and environments without over-interpreting individual moments",
                "Explore what sustains patterns beneath the surface and how early recognition changes the trajectory of a response",
                "Apply structured observation techniques to track shifts in behaviour and experience across time and context",
                "Respond with greater timeliness and intention by using pattern awareness as a foundation for action",
              ],
            },

            {
              title: "Entry Requirement",
              description:
                "<ul><li>No formal prerequisite qualifications are required to enrol.</li><li>You will be invited to attend a detailed information session.</li><li>Must be 18 years and above.</li></ul>",
            },
          ],
        },
      ],
    },
    {
      courseId: "the_sentio_framework_part_5_of_5_responding_with_intention",
      title: "The Sentio Framework · Part 5 of 5 – Responding with Intention",
      image: courseImg.sentio5.out,
      courseimage: courseImg.sentio5.in,
      review: "0",
      category: "Mental Health",
      certification: "Digital Certificate",
      categoryId: "PSODFCSD",
      duration: "2 Hours",
      price: "199",
      Topics: "6 Topics",
      modeofdelivery: "Workshop + Online",
      rating: "5",
      category_Image: image12,
      allCourses: "All Courses",

      review_data: [
        { id: 1, rating: 5, width: "80", review: "0" },
        { id: 2, rating: 4, width: "50", review: "0" },
        { id: 3, rating: 3, width: "0", review: "0" },
        { id: 4, rating: 2, width: "0", review: "0" },
        { id: 5, rating: 1, width: "0", review: "0" },
      ],

      detail: [
        {
          tabs: [
            {
              title: "Overview",
              description:
                "<p>Course description</p><p>This course is designed for individuals, educators, professionals, and people in people-facing roles who seek to translate awareness into action — developing the ability to respond to people and situations with deliberate intention rather than instinct or habit.</p><p>It provides a structured approach to the moment between noticing and responding — examining what shapes our reactions, how to interrupt unhelpful patterns, and how to engage with others in ways that are grounded, considered, and effective. The course focuses on the practical application of everything covered across the Sentio Framework.</p><p>Learners will explore what it means to respond rather than react — understanding how to hold space, communicate clearly, and act in ways that are proportionate to what is actually happening rather than to what is assumed or feared. The coursework brings together early signals, perception, internal experience, and pattern recognition into a unified, practical approach.</p><p>Alongside conceptual understanding, the course develops the capacity to remain present and composed in difficult moments — equipping participants to close the gap between what they know and how they show up in real situations.</p><p>Why these skills are important</p><p>Individuals who respond with intention rather than reaction are better positioned to navigate difficult conversations, support others effectively, and avoid the compounding effects of mishandled moments in both personal and professional contexts.</p><p>The ability to pause, assess, and respond deliberately supports stronger relationships, clearer communication, and more effective outcomes — particularly in high-pressure or emotionally charged situations.</p><p>In environments such as education, workplaces, and community settings, intentional response reduces escalation, builds trust, and creates the conditions for more productive and human-centred interactions.</p><p>Developing this capacity is the final and most practical step in the Sentio Framework — bringing awareness off the page and into the room, where it can make a real and immediate difference.</p>",
              jobs: [
                "Personal development and self-awareness",
                "Leadership and people management",
                "Education and student support environments",
                "Workplace well-being and team dynamics",
                "Community and support-based roles",
              ],
              notes:
                "<p>Note: This is a non-accredited training/course. You will receive a digital certificate that can contribute to your Professional Development or to fill the gap in your upskilling.</p>",
            },

            {
              title: "Curriculum",
              description:
                "<h3>Course Units</h3><p>The Sentio Framework : Coursework</p><p><strong>Duration</strong> · 2 hours</p>",
              syllabus: [
                "Understand the difference between reacting and responding, and what determines which one occurs in a given moment",
                "Recognise how habitual patterns of response form and how to interrupt them before they drive unhelpful outcomes",
                "Identify what proportionate, grounded response looks like across a range of emotional and interpersonal situations",
                "Explore how to hold space for others without absorbing, dismissing, or escalating what they bring",
                "Apply the full Sentio Framework — early signals, perception, internal experience, and pattern recognition — as a unified approach to real-world situations",
                "Respond with intention, clarity, and presence in everyday interactions across professional, educational, and interpersonal contexts",
              ],
            },

            {
              title: "Entry Requirement",
              description:
                "<ul><li>No formal prerequisite qualifications are required to enrol.</li><li>You will be invited to attend a detailed information session.</li><li>Must be 18 years and above.</li></ul>",
            },
          ],
        },
      ],
    },
  ],
};
