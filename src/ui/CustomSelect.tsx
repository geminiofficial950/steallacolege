"use client";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useRouter } from "next/navigation";
import course_data from "@/data/home-data/CourseData";
const animatedComponents = makeAnimated();

const options = [
  {
    value: "Ageing-disability",
    label: "Ageing & Disability",
    categoryId: "CSAGING",
  },
  { value: "data-science", label: "Leisure & Health", categoryId: "CSLEISURE" },
  { value: "art-design", label: "Food Processing", categoryId: "CSFOOD" },
  { value: "first Aid", label: "First Aid", categoryId: "CSFIRSTAID" },
  {
    value: "Artificial Intelligence",
    label: "Artificial Intelligence",
    categoryId: "CSAI",
  },
  { value: "marketing", label: "Marketing", categoryId: "CSMARKETING" },
  {
    value: "management",
    label: "Management & Systems",
    categoryId: "CSMANAGEMENT",
  },
];

const CustomSelect = ({ value, onChange }: any) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const allCourses = course_data[0]?.course_details || [];

  // Filter courses based on search keyword and selected category
  const courseSearchResults = useMemo(() => {
    let results = allCourses;

    // Filter by selected category if any
    if (selectedCategory) {
      results = results.filter(
        (course: any) => course.categoryId === selectedCategory.categoryId
      );
    }

    // Filter by search keyword
    if (searchKeyword.trim()) {
      results = results.filter((course: any) =>
        course.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    return results;
  }, [searchKeyword, selectedCategory]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    setShowSuggestions(keyword.trim().length > 0);
    setFilteredCourses(courseSearchResults);
  };

  // Handle category selection
  const handleCategoryChange = (selected: any) => {
    setSelectedCategory(selected);
    onChange(selected);
    setSearchKeyword("");
    setShowSuggestions(false);
  };

  // Handle search form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If no keyword and no category, go to courses page
    if (!searchKeyword.trim() && !selectedCategory) {
      router.push("/courses");
      return;
    }

    // If category is selected, navigate with category ID
    if (selectedCategory) {
      router.push(`/courses?category_id=${selectedCategory.categoryId}`);
      return;
    }

    // If keyword is entered, still go to courses page (you can enhance this later)
    router.push("/courses");
  };

  // Handle course suggestion click
  const handleCourseSuggestionClick = (course: any) => {
    router.push(`/courses?category_id=${course.categoryId}`);
    setSearchKeyword("");
    setShowSuggestions(false);
  };

  return (
    <form onSubmit={handleSearch} className="tgmenu__search-form">
      <div className="input-grp">
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search For Course . . ."
            value={searchKeyword}
            onChange={handleSearchChange}
            style={{
              color: "#fff",
              backgroundColor: "transparent",
              // border: "1px solid #666",
              borderRadius: "4px",
              padding: "10px 14px",
              fontSize: "14px",
              width: "100%",
              outline: "none",
              transition: "border-color 0.3s",
            } as React.CSSProperties & {"::placeholder"?: string}}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#999";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#666";
            }}
          />
          <style>{`
            input::placeholder {
              color: #fff;
              opacity: 1;
            }
            input::-ms-input-placeholder {
              color: #fff;
            }
          `}</style>
          {showSuggestions && courseSearchResults.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "#1a1a2e",
                border: "1px solid #444",
                borderTop: "none",
                maxHeight: "300px",
                overflowY: "auto",
                zIndex: 10,
                marginTop: "-2px",
              }}
            >
              {courseSearchResults.map((course, index) => (
                <div
                  key={index}
                  onClick={() => handleCourseSuggestionClick(course)}
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid #333",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "14px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#2d2d4a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }}
                >
                  {course.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <button type="submit" aria-label="Search" style={{ display: "none" }}>
          <i className="flaticon-search"></i>
        </button>
      </div>
    </form>
  );
};

export default CustomSelect;