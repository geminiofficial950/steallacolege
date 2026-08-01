// courseLookup.ts
import { course_detail_data } from "@/data/home-data/coursedataeditor";

export const courseDetailMap = new Map(
  course_detail_data.course_list.map((c) => [c.courseId, c])
);