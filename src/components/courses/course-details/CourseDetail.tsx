"use client";

import { useParams } from "next/navigation";
import course_detail_data from "@/data/home-data/CourseDetailData";

export default function CourseDetail() {
  const { id } = useParams(); // URL se id le lo
  const course = course_detail_data.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-500">
          Course not found ❌
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Image */}
      <img
        src={course.thumb.src}
        alt={course.title}
        className="rounded-2xl shadow-lg mb-6 w-full max-h-96 object-cover"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.review}</p>

      {/* Description */}
      <p className="text-gray-700 mb-6">{course.description}</p>

      {/* Syllabus */}
      <h2 className="text-2xl font-semibold mb-4">Course Syllabus</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {course.syllabus?.map((topic, index) => (
          <li key={index} className="text-gray-700">
            {topic}
          </li>
        ))}
      </ul>

      {/* Price & Lesson Info */}
      <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
        <p>
          <strong>Price:</strong> ${course.price}
        </p>
        <p>
          <strong>Lessons:</strong> {course.lesson}
        </p>
        <p>
          <strong>Duration:</strong> {course.minute}
        </p>
      </div>
    </div>
  );
}
