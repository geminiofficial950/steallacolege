"use client";
import { blog_detail_data } from "@/data/home-data/BlogDataEditor";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
// import BlogSidebar from "../blog-common/BlogSidebar";

interface DataType {
  style_1: boolean;
  limit?: number; // 👈 optional limit prop
}

const BlogArea = ({ style_1, limit }: DataType) => {
  const blog = blog_detail_data.blog_list;

  // If 'limit' exists, slice only that many blogs (no pagination)
  const displayedBlogs = limit ? blog.slice(0, limit) : blog;

  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = displayedBlogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(displayedBlogs.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % displayedBlogs.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="blog-area section-py-120">
      <div className="container">
        <div className="row">
          {/* ✅ Full width applied */}
          <div
            className={`col-xl-9 col-lg-8 ${style_1 ? "order-0 order-lg-2" : ""}`}
            style={{ width: "100%" }}
          >
            <div className="row gutter-20">
              {currentItems.map((item) => (
                <div
                  key={item.blogId}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="blog__post-item shine__animate-item">
                    <div className="blog__post-thumb">
                      <Link
                        href={`/blog-details/${item.blogId}`}
                        className="shine__animate-link"
                      >
                        <Image src={item.outsideimage} alt="img" />
                      </Link>
                    </div>
                    <div className="blog__post-content">
                      <div className="blog__post-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar"></i>
                            {item.date}
                          </li>
                         
                        </ul>
                      </div>
                      <h4 className="title">
                        <Link href={`/blog-details/${item.blogId}`}>
                          {item.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show pagination only if limit is not set */}
            {!limit && (
              <nav className="pagination__wrap mt-25">
                <ReactPaginate
                  breakLabel="..."
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  renderOnZeroPageCount={null}
                  className="list-wrap"
                />
              </nav>
            )}
          </div>
          {/* <BlogSidebar style_1={style_1} /> */}
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
