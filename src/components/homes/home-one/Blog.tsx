"use client";
import { blog_detail_data } from "@/data/home-data/BlogDataEditor";
import Image from "next/image";
import Link from "next/link";

interface StyleType {
  style?: boolean;
}

const Blog = ({ style }: StyleType) => {
  const blogToShow = style
    ? blog_detail_data.blog_list
    : blog_detail_data.blog_list.slice(0, 4);

  return (
    <section className="blog__post-area blog__post-area--home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-40">
              <h2 className="title">Our Latest News Feed</h2>
              <p>News & Event Info</p>
            </div>
          </div>
        </div>

        <div className="row gutter-20">
          {blogToShow.map((item) => (
            <div key={item.blogId} className="col-xl-3 col-md-6 d-flex">
              <div className="blog__post-item shine__animate-item w-100">
                <div className="blog__post-thumb">
                  <Link
                    href={`/blog-details/${item.blogId}`}
                    className="shine__animate-link"
                  >
                    <Image
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
