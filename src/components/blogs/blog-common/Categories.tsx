"use client";

import Link from "next/link";
import { blog_detail_data, BlogType } from "@/data/home-data/BlogDataEditor";
import { useParams } from "next/navigation";

const Categories = () => {
  const { id } = useParams();
  const blogId = Array.isArray(id) ? id[0] : id;

  console.log("Blog ID from URL:", blogId);

  // Find the current blog
  const blog: BlogType | undefined = blog_detail_data.blog_list.find(
    (b) => b.blogId === blogId
  );

  // Fetch articles from the first tab safely
  const articles: string[] =
    blog?.detail?.[0]?.tabs?.[0]?.articles || [];

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
