"use client";

import Link from "next/link";


// `articles` = the current blog's section list (first tab), passed down from the blog page (MongoDB)
const Categories = ({ articles = [] }: { articles?: string[] }) => {

  return (
    <div className="blog-widget">
      <h4 className="widget-title">In this article</h4>
      <div className="shop-cat-list">
        <ul className="list-wrap">
          {articles.length > 0 ? (
            articles.map((cat, i) => (
              <li key={i}>
                <Link href={`#section-${i}`}>
                  <i className="flaticon-angle-right"></i> {cat}
                </Link>
              </li>
            ))
          ) : (
            <li>No categories found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
