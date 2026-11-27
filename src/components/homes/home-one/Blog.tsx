"use client";
import { useBlogSummaries } from "@/context/ContentContext";
import Image from "next/image";
import ContentImage from "@/components/common/ContentImage";
import Link from "next/link";

interface StyleType {
  style?: boolean;
}

const Blog = ({ style }: StyleType) => {
  const blogs = useBlogSummaries(); // from MongoDB via ContentProvider
  const blogToShow = style
    ? blogs
    : blogs.slice(0, 4);

  return (
    <section className="blog__post-area blog__post-area--home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-40 blog__home-title">
              <h2 className="title">Our Latest News Feed</h2>
              <p>News & Event Info</p>
            </div>
          </div>
        </div>

        <div className="row gutter-20">
          {blogToShow.map((item, index) => (
            // Phones show only the first 2 posts (the "View All Blogs" button covers the rest).
            // Tablets / iPhone Duo (768–1199px) show 3 in one row, so the 4th is hidden there
            // instead of sitting alone on a second row; desktop (xl) shows all 4.
            <div
              key={item.blogId}
              className={`col-xl-3 col-md-4 ${
                index === 3
                  ? style
                    ? "d-flex d-md-none d-xl-flex"
                    : "d-none d-xl-flex"
                  : !style && index >= 2
                    ? "d-none d-md-flex"
                    : "d-flex"
              }`}
            >
              <div className="blog__post-item shine__animate-item w-100">
                <div className="blog__post-thumb">
                  <Link
                    href={`/blog-details/${item.blogId}`}
                    className="shine__animate-link"
                  >
                    <ContentImage
                      src={
                        typeof item.image === "string"
                          ? `/assets/img/blogs/outsideimage.jpg`
                          : item.outsideimage
                      }
                      alt="blog image"
                      width={370}
                      height={250}
                      className="blog__post-img"
                    />
                  </Link>
                  <Link
                    href={`/blog-details/${item.blogId}`}
                    className="post-tag"
                  >
                    {item.category}
                  </Link>
                </div>

                <div className="blog__post-content">
                  <div>
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar"></i>
                          {item.date}
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      <Link href={`/blog-details/${item.blogId}`}>
                        {item.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="courses__item-bottom">
                    <div className="button">
                      <Link href={`/blog-details/${item.blogId}`}>
                        <span className="text">View More</span>
                        <i className="flaticon-arrow-right"></i>
                      </Link>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {!style && (
            <div className="courses__item-bottom d-flex justify-content-center align-items-center mt-4">
              <Link
                href={`/blog`}
                className="btn btn-primary d-flex align-items-center"
              >
                <span className="me-2">View All Blogs</span>
                <i className="flaticon-arrow-right"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
