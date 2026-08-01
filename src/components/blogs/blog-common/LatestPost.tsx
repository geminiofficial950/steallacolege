import Image from "next/image";
import Link from "next/link";
import { blog_detail_data } from "@/data/home-data/BlogDataEditor";

const LatestPost = () => {
  // Extract blog list from data
  const blogs = blog_detail_data.blog_list.slice(0, 4); // You can limit it to latest 4 posts

  return (
    <div className="blog-widget">
      <h4 className="widget-title">Latest Post</h4>

      {blogs.map((item) => (
        <div key={item.blogId} className="rc-post-item">
          <div className="rc-post-thumb">
            <Link href={`/blog-details/${item.blogId}`} passHref>
              <Image
                src={item.outsideimage}
                alt={item.title}
                width={90}
                height={90}
                style={{
                  borderRadius: "4px",
                  objectFit: "cover",
                }}
              />
            </Link>
          </div>

          <div className="rc-post-content">
            <span className="date">
              <i className="flaticon-calendar"></i> {item.date}
            </span>
            <h4 className="title">
              <Link href={`/blog-details/${item.blogId}`}>{item.title}</Link>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPost;
