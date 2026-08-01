"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import course_data from "@/data/home-data/CourseData";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
// import { course_detail_data } from "@/data/home-data/coursedataeditor";
import { courseDetailMap } from "@/components/courseLookup";

interface StyleType {
  style?: boolean;
}

const CourseArea = ({ style }: StyleType) => {
  const searchParams = useSearchParams();
  console.log("searchparam", searchParams);
  const qCategoryId = searchParams.get("category_id");

  const [activeTab, setActiveTab] = useState(0);

  // Get the category name from query param
  const initialCategory = qCategoryId
    ? course_data[0].course_details.find(course => course.categoryId === qCategoryId)?.category
    : null;

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 4600]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const allCourses = course_data.flatMap((course_item) => course_item.course_details);

  const NATIONALLY_RECOGNISED_CATEGORIES = new Set([
    "Ageing & Disability",
    "Leisure & Health",
    "Food Processing",
    "First Aid",
  ]);

  const categories = Array.from(new Set(allCourses.map(course => course.category)));
  const nationallyRecognisedCategories = categories.filter((category) =>
    NATIONALLY_RECOGNISED_CATEGORIES.has(category.trim())
  );
  const nonAccreditedCategories = categories.filter(
    (category) => !NATIONALLY_RECOGNISED_CATEGORIES.has(category.trim())
  );

  const getTrainingTypeLabel = (category: string) =>
    NATIONALLY_RECOGNISED_CATEGORIES.has(category.trim())
      ? "Nationally Recognised Training"
      : "Non Accredited Training";

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setItemOffset(0);
  };

  const filteredCourses = allCourses.filter(course => {
    // 1. CATEGORY FILTER
    if (selectedCategories.length > 0 && !selectedCategories.includes(course.category)) {
      return false;
    }

    // 2. GET PRICE FROM course_detail_data USING courseId
   const details = courseDetailMap.get(course.id);

    const coursePrice = details ? Number(details.price) : 0;

    // 3. PRICE FILTER
    if (coursePrice < priceRange[0] || coursePrice > priceRange[1]) {
      return false;
    }

    // 4. SEARCH FILTER
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // 5. RATING FILTER
    if (selectedRating) {
      const rating = parseFloat(course.review);
      if (rating < selectedRating) return false;
    }

    return true;
  });

const router = useRouter();

const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    router.push(`?search=${searchQuery}`);
  }
};
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredCourses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredCourses.length / itemsPerPage);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCourses.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 4600]);
    setSearchQuery("");
    setSelectedRating(null);
    setItemOffset(0);
  };

  return (
    <section className="all-courses-area section-py-120">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-3 col-lg-4">
            <aside className="courses__sidebar">
              {/* Search Widget */}
              <div className="courses-widget">
                <h4 className="widget-title">Search Courses</h4>
                <div className="courses-cat-list">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setItemOffset(0);
                    }}
                     onKeyDown={handleSearchKeyPress}
                  />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="courses-widget">
                <h4 className="widget-title">Categories</h4>
                <div className="courses-cat-list">
                  {[
                    {
                      title: "Nationally Recognised Training",
                      items: nationallyRecognisedCategories,
                      idPrefix: "nrt",
                    },
                    {
                      title: "Non Accredited Training",
                      items: nonAccreditedCategories,
                      idPrefix: "nat",
                    },
                  ].map((group, groupIndex) =>
                    group.items.length > 0 ? (
                      <div
                        key={group.idPrefix}
                        className={`courses-cat-group${groupIndex > 0 ? " courses-cat-group--spaced" : ""}`}
                      >
                        <h5 className="courses-cat-group__title">{group.title}</h5>
                        <ul className="list-wrap">
                          {group.items.map((category, index) => {
                            const count = allCourses.filter((c) => c.category === category).length;
                            const inputId = `cat-${group.idPrefix}-${index}`;
                            return (
                              <li key={category}>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={inputId}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                  />
                                  <label className="form-check-label" htmlFor={inputId}>
                                    {category.trim()} <span>({count})</span>
                                  </label>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              {/* Price Range Widget */}
              <div className="courses-widget">
                <h4 className="widget-title">Price Range</h4>
                <div className="courses-cat-list">
                  <div className="price-range-wrap">
                    <div className="d-flex justify-content-between mb-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="4600"
                      step="50"
                      value={priceRange[1]}
                      onChange={(e) => {
                        setPriceRange([priceRange[0], parseInt(e.target.value)]);
                        setItemOffset(0);
                      }}
                    />
                    <div className="mt-2">
                      <small className="text-muted">Max Price: ${priceRange[1]}</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Filter Widget */}
              <div className="courses-widget">
                <h4 className="widget-title mb-3 text-gray-800 font-semibold">Reviews</h4>
                <div className="courses-cat-list">
                  <ul className="list-wrap space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <li key={rating}>
                        <div className="flex items-center space-x-2">
                          <input
                            className="cursor-pointer accent-yellow-400"
                            type="checkbox"
                            id={`rating-${rating}`}
                            checked={selectedRating === rating}
                            onChange={() => {
                              setSelectedRating((prev) => (prev === rating ? null : rating));
                              setItemOffset(0);
                            }}
                          />
                          <label
                            htmlFor={`rating-${rating}`}
                            className="flex space-x-1 cursor-pointer"
                          >
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className="fa fa-star"
                                style={{
                                  color: i < rating ? "#FFD700" : "#d1d5db", // yellow if below rating, gray otherwise
                                  fontSize: "18px",
                                }}
                              ></i>
                            ))}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>



              {/* Clear Filters Button */}
              <div className="courses-widget">
                <button
                  className="btn btn-secondary w-100"
                  onClick={clearFilters}
                >
                  Clear All Filters
                </button>
              </div>
            </aside>
          </div>

          {/* Main Content */}
          <div className="col-xl-9 col-lg-8">
            {/* Top Bar */}
            <div className="courses__top-wrap">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="courses__showing-result">
                    <p>Showing {itemOffset + 1}–{Math.min(endOffset, filteredCourses.length)} of {filteredCourses.length} Results</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="courses__top-right d-flex justify-content-md-end">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
                          onClick={() => handleTabClick(0)}
                          role="tab"
                          aria-controls="panel-grid"
                          aria-selected={activeTab === 0}
                          type="button"
                        >
                          <i className="fas fa-th"></i>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                          onClick={() => handleTabClick(1)}
                          role="tab"
                          aria-controls="panel-list"
                          aria-selected={activeTab === 1}
                          type="button"
                        >
                          <i className="fas fa-list"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-content" id="myTabContent">
              {/* Grid View */}
              <div className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`} id="grid" role="tabpanel" aria-labelledby="grid-tab">
                <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                  {currentItems.length > 0 ? currentItems.map((item) => (
                    <div key={item.id} className="col">
                      <div
                        className="courses__item shine__animate-item"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "95%"
                        }}
                      >
                        <div className="courses__item-thumb">
                          <Link
                            href={`/course-details/${item.id}`}
                            className="shine__animate-link"
                            aria-label={`View details for ${item.title}`}
                          >
                            <Image
                              src={item.thumb}
                              alt={item.title}
                              width={913}
                              height={514}
                              loading="lazy"
                              sizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) 340px, 340px"
                            />
                          </Link>
                        </div>
                        <div
                          className="courses__item-content"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            justifyContent: "space-between"
                          }}
                        >
                          <div>
                            <ul className="courses__item-meta list-wrap courses__item-meta--tags">
                              <li className="courses__item-tag">
                                <Link href="/courses">{item.category.trim()}</Link>
                              </li>
                              <li
                                className={`courses__item-tag courses__item-tag--training ${
                                  NATIONALLY_RECOGNISED_CATEGORIES.has(item.category.trim())
                                    ? "is-nrt"
                                    : "is-non-accredited"
                                }`}
                              >
                                <span>{getTrainingTypeLabel(item.category)}</span>
                              </li>
                            </ul>
                            <h3 className="title">
                              <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                            </h3>
                            <p className="author">
                              Duration <Link href="#">{item.duration}</Link>
                            </p>
                          </div>
                          <div className="courses__item-bottom">
                            <Link href={`/course-details/${item.id}`} className="btn btn-primary"
                              aria-label={`Learn more about ${item.title}`}
                            >
                              Learn More <span className="visually-hidden">about {item.title}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="col-12">
                      <div className="text-center py-5">
                        <h4>No courses found</h4>
                        <p>Try adjusting your filters to see more results.</p>
                        <button className="btn btn-primary mt-3" onClick={clearFilters}>
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {currentItems.length > 0 && (
                  <nav className="pagination__wrap mt-30">
                    <ReactPaginate
                      breakLabel="..."
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={3}
                      pageCount={pageCount}
                      renderOnZeroPageCount={null}
                      className="list-wrap"
                      previousLabel={<i className="fas fa-arrow-left"></i>}
                      nextLabel={<i className="fas fa-arrow-right"></i>}
                    />
                  </nav>
                )}
              </div>


              {/* List View */}
              <div
                className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}
                id="list"
                role="tabpanel"
                aria-labelledby="list-tab"
              >
                <div className="row courses__list-wrap row-cols-1">
                  {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                      <div key={item.id} className="col">
                        <div className="courses__item courses__item-three shine__animate-item">
                          {/* Thumbnail */}
                          <div className="courses__item-thumb">
                            <Link
                              href={`/course-details/${item.id}`}
                              className="shine__animate-link"
                              aria-label={`View details for ${item.title}`}
                            >
                              <Image
                                src={item.thumb}
                                alt={item.title}
                                width={913}
                                height={514}
                                loading="lazy"
                                sizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) 340px, 340px"
                              />
                            </Link>
                          </div>

                          {/* Content */}
                          <div className="courses__item-content">
                            <ul className="courses__item-meta list-wrap courses__item-meta--tags d-flex align-items-center">
                              <li className="courses__item-tag">
                                <Link href="/courses" aria-label={`View courses in ${item.category.trim()}`}>
                                  {item.category.trim()}
                                </Link>
                              </li>
                              <li
                                className={`courses__item-tag courses__item-tag--training ${
                                  NATIONALLY_RECOGNISED_CATEGORIES.has(item.category.trim())
                                    ? "is-nrt"
                                    : "is-non-accredited"
                                }`}
                              >
                                <span>{getTrainingTypeLabel(item.category)}</span>
                              </li>
                            </ul>

                            <h3 className="title mt-2">
                              <Link href={`/course-details/${item.id}`} aria-label={`Learn more about ${item.title}`}>
                                {item.title} <span className="visually-hidden">about {item.title}</span>
                              </Link>
                            </h3>



                            <p className="author">
                              Duration <Link href="#" aria-label={`View duration for ${item.title}`}>
                                {item.duration}
                              </Link>
                            </p>

                            <div className="courses__item-bottom mt-3">
                              <div className="courses__item-bottom">
                                <Link href={`/course-details/${item.id}`} className="btn btn-primary" aria-label={`Learn more about ${item.title}`}>
                                  Learn More <span className="visually-hidden">about {item.title}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <div className="text-center py-5">
                        <h4>No courses found</h4>
                        <p>Try adjusting your filters to see more results.</p>
                        <button className="btn btn-primary mt-3" onClick={clearFilters}>
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {currentItems.length > 0 && (
                  <nav className="pagination__wrap mt-30">
                    <ul className="list-wrap">
                      <ReactPaginate
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                        className="list-wrap"
                        previousLabel={<i className="fas fa-arrow-left"></i>}
                        nextLabel={<i className="fas fa-arrow-right"></i>}
                      />
                    </ul>
                  </nav>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseArea;
