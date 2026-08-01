// Example of how to use coursedatas.ts data with Overview and Curriculum components

import React from 'react';
import Overview from '@/components/courses/course-details/Overview';
import Curriculum from '@/components/courses/course-details/Curriculum';

// Example component showing how to use coursedatas data directly
const CourseDetailsExample = () => {
  return (
    <div>
      <h1>Course Details Example - Using coursedatas.ts Directly</h1>
      
      {/* Overview component automatically uses data from coursedatas.ts */}
      <Overview courseId={0} />
      
      {/* Curriculum component automatically uses data from coursedatas.ts */}
      <Curriculum courseId={0} />
      
      {/* You can also use different courses by changing courseId */}
      <h2>Second Course (if available)</h2>
      <Overview courseId={1} />
      <Curriculum courseId={1} />
    </div>
  );
};

export default CourseDetailsExample;
