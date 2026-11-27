"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { BlogSummary, CourseCard } from "@/types/content";

// Course cards + blog summaries loaded from MongoDB in the root layout and shared with client components
// (header search, mobile menu, home sliders, blog lists). Full course/blog bodies are fetched per page.
interface ContentContextValue {
  courses: CourseCard[];
  blogs: BlogSummary[];
}

const ContentContext = createContext<ContentContextValue>({ courses: [], blogs: [] });

export function ContentProvider({
  courses,
  blogs,
  children,
}: ContentContextValue & { children: ReactNode }) {
  return <ContentContext.Provider value={{ courses, blogs }}>{children}</ContentContext.Provider>;
}

export const useCourseCards = () => useContext(ContentContext).courses;
export const useBlogSummaries = () => useContext(ContentContext).blogs;
