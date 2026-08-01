// Test component to demonstrate Overview and Curriculum components using coursedatas.ts directly

import React from 'react';
import Overview from '@/components/courses/course-details/Overview';
import Curriculum from '@/components/courses/course-details/Curriculum';

const CourseDetailsTest = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-5">Course Details Test - Using coursedatas.ts Directly</h1>
          
          {/* Overview Component - Uses coursedatas.ts directly */}
          <div className="mb-5">
            <h2>Overview Component</h2>
            <Overview courseId={0} />
          </div>
          
          {/* Curriculum Component - Uses coursedatas.ts directly */}
          <div className="mb-5">
            <h2>Curriculum Component</h2>
            <Curriculum courseId={0} />
          </div>
          
          {/* Show that components are self-contained */}
          <div className="alert alert-info">
            <h4>✅ Components are now self-contained!</h4>
            <p>Both Overview and Curriculum components now:</p>
            <ul>
              <li>✅ Import data directly from <code>coursedatas.ts</code></li>
              <li>✅ Don&apos;t require course props to be passed</li>
              <li>✅ Use <code>courseId</code> prop to select which course to display</li>
              <li>✅ Display data from coursedatas.ts structure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsTest;
