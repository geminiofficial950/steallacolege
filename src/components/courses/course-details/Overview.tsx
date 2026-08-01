// Import the data directly from coursedatas.ts
import { course_detail_data } from "@/data/home-data/coursedataeditor";

interface OverviewProps {
  courseId?: number; // Optional course ID to select specific course, defaults to first course
}

const Overview = ({ courseId }: OverviewProps) => {
  // Get course data directly from coursedatas
  const course = course_detail_data.course_list.find(c => c.courseId === courseId);

  // Debug: Log course data
  console.log("Overview component - courseId:", courseId);
  console.log("Overview component using coursedatas course:", course);

  // Extract data from coursedatas structure
  const getCoursedatasData = () => {
    if (course?.detail?.[0]?.tabs) {
      const overviewTab = course.detail[0].tabs.find(
        (tab: any) => tab.title === "Overview"
      );
      return overviewTab?.description || [];
    }
    return [];
  };

  const coursedatasDetails = getCoursedatasData();

  // Get course description from coursedatas
  const getCoursedatasDescription = () => {
    if (course?.detail?.[0]?.tabs) {
      const overviewTab = course.detail[0].tabs.find(
        (tab: any) => tab.title === "Overview"
      );
      return overviewTab?.description || [];
    }
    return [];
  };

  // Get jobs data from coursedatas
  const getJobsData = () => {
    if (course?.detail?.[0]?.tabs) {
      const overviewTab = course.detail[0].tabs.find(
        (tab: any) => tab.title === "Overview"
      );
      return overviewTab?.jobs || [];
    }
    return [];
  };

  const jobs = getJobsData();
const getNotesData = () => {
  if (course?.detail?.[0]?.tabs) {
    const overviewTab = course.detail[0].tabs.find(
      (tab: any) => tab.title === "Overview"
    );
    return overviewTab?.notes || "";
  }
  return "";
};

const notes = getNotesData();

  const studentVisaNoticeCourseIds = new Set([
    "chc43015-certificate-iv-in-ageing-support-(r4)",
    "chc33021-certificate-iii-in-individual-support-ageing-and-disability-(r1)",
    "chc43415-certificate-iv-in-leisure-and-health-(r4)",
    "chc43121-certificate-iv-in-disability-support-(r1)",
    "fbp30121-certificate-iii-in-food-processing-(r1)",
  ]);
  const showStudentVisaNotice = courseId
    ? studentVisaNoticeCourseIds.has(String(courseId))
    : false;

  // Get jobs data from coursedatas
  const getLearningOutcomesData = () => {
    if (course?.detail?.[0]?.tabs) {
      const overviewTab = course.detail[0].tabs.find(
        (tab: any) => tab.title === "Overview"
      );
      return overviewTab?.LearningOutcomes || [];
    }
    return [];
  };

  const LearningOutcomes = getLearningOutcomesData();

  const defaultDescription =
    '<p><span style="background-color: transparent;">This course provides comprehensive training and knowledge in the specified field. Students will gain practical skills and theoretical understanding through structured learning modules.</span></p><p><span style="background-color: transparent;">The course is designed to prepare students for real-world applications and career advancement in their chosen field.</span></p>';
  console.log(course_detail_data.course_list.length); // Should be >= 4

  // Use course description from coursedatas only
  const description = getCoursedatasDescription() || defaultDescription;

  return (
    <>
    <div className="courses__overview-wrap">
      <div className="course-info">
        {/* Course Description */}
        <div className="course-meta mb-4">
          <div className="course-description">
            <div
              className="course-description-content"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        {LearningOutcomes && LearningOutcomes.length > 0 && (
          <div className="course-syllabus mb-4">
            <h4 className="title" >Core Learning Outcomes:</h4>
            <ul className="about__info-list list-wrap">
              {LearningOutcomes.map((item: any, index: number) => (
                <li key={index} className="about__info-list-item">
                  <i className="flaticon-angle-right"></i>
                  <p className="content" style={{ fontWeight: "normal" }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {jobs && jobs.length > 0 && (
          <div className="course-syllabus mb-4">
            <h4 className="title" >Potential future job roles</h4>
            <ul className="about__info-list list-wrap">
              {jobs.map((item: any, index: number) => (
                <li key={index} className="about__info-list-item">
                  <i className="flaticon-angle-right"></i>
                  <p className="content" style={{ fontWeight: "normal" }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
 {notes && (
  <div className="course-description">
    <div
      className="course-description-content"
      dangerouslySetInnerHTML={{ __html: notes }}
    />
  </div>
)}

      </div>
    </div>

    {showStudentVisaNotice && (
      <p className="courses__student-visa-notice">
        <strong>
          Individuals holding a Student Visa (Subclass 500) are not eligible to enrol in or attend the course as Stella College is not a registered CRICOS (Commonwealth Register of Institutions and Courses for Overseas Students)
        </strong>
      </p>
    )}
    </>
  );
};

export default Overview;
