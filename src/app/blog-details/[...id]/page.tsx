import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogSidebar from "@/components/blogs/blog-common/BlogSidebar";
import { blog_detail_data, type BlogType } from "@/data/home-data/BlogDataEditor";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import { absoluteUrl, excerpt, getBlogPostingSchema, stripHtml, toIsoDate } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    id: string[];
  }>;
};

function getBlogById(blogId: string) {
  return blog_detail_data.blog_list.find((blog) => blog.blogId === blogId);
}

function getBlogDescription(blog: BlogType) {
  const firstTab = blog.detail?.[0]?.tabs?.[0];
  return stripHtml(firstTab?.description);
}

function getImageSrc(image: unknown) {
  if (!image) {
    return undefined;
  }

  if (typeof image === "string") {
    return image.startsWith("http") ? image : absoluteUrl(image);
  }

  if (typeof image === "object" && image !== null && "src" in image) {
    const src = (image as { src?: string }).src;
    return src ? absoluteUrl(src) : undefined;
  }

  return undefined;
}

export async function generateStaticParams() {
  return blog_detail_data.blog_list.map((blog) => ({
    id: [blog.blogId],
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const blogId = id?.[0];
  const blog = blogId ? getBlogById(blogId) : undefined;

  if (!blog || !blogId) {
    return {
      title: "Blog Not Found | Stella College",
      description: "The blog post you are looking for does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const description = excerpt(getBlogDescription(blog), 160);
  const urlPath = `/blog-details/${blogId}`;
  const fullUrl = absoluteUrl(urlPath);
  const image = getImageSrc(blog.outsideimage || blog.insideimage);

  return {
    title: `${blog.title} | Stella College`,
    description,

    alternates: {
      canonical: fullUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    openGraph: {
      title: `${blog.title} | Stella College`,
      description,
      url: fullUrl,
      type: "article",
      siteName: "Stella College",
      publishedTime: toIsoDate(blog.date),
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: blog.title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Stella College`,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const blogId = id?.[0];
  if (!blogId) {
    notFound();
  }

  const blog = getBlogById(blogId);
  if (!blog) {
    notFound();
  }

  const schema = getBlogPostingSchema({
    title: blog.title,
    description: excerpt(getBlogDescription(blog), 240),
    urlPath: `/blog-details/${blogId}`,
    image: getImageSrc(blog.outsideimage || blog.insideimage),
    publishedAt: toIsoDate(blog.date),
    authorName: blog.author,
    articleSection: blog.category,
  });

  return (
    <>
      <HeaderOne />
      <section className="blog-details-area section-py-120">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="blog__details-wrapper">
                <div className="blog__details-thumb">
                  {blog.insideimage && (
                    <Image src={blog.insideimage} alt={blog.title} width={800} height={400} className="w-100" />
                  )}
                </div>

                <div className="blog__details-content">
                  <div className="blog__post-meta">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-calendar"></i> {blog.date}
                      </li>
                      <li>
                        <i className="flaticon-clock"></i> 3 Min Read
                      </li>
                    </ul>
                  </div>

                  <h1 className="title">{blog.title}</h1>
                  {/* <blockquote>
                    <p>{blog.detail[0]?.tabs[0]?.quoto}</p>
                  </blockquote> */}

                  {blog.detail.map((detailItem, detailIndex) =>
                    detailItem.tabs.map((tab, tabIndex) => (
                      <div key={`${detailIndex}-${tabIndex}`}>
                        <p dangerouslySetInnerHTML={{ __html: tab.description }} />
                        {tab.LearningOutcomes && tab.LearningOutcomes.length > 0 && (
                          <div className="blog__details-content-inner">
                            <h2 className="inner-title">Learning Outcomes</h2>
                            <ul className="about__info-list list-wrap">
                              {tab.LearningOutcomes.map((item, outcomeIndex) => (
                                <li key={outcomeIndex} className="about__info-list-item">
                                  <i className="flaticon-angle-right"></i>
                                  <p className="content">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))
                  )}

                  <div className="blog__details-bottom">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-md-7">
                        <div className="tg-post-tag">
                          <h5 className="tag-title">Tags :</h5>
                          <ul
                            style={{
                              listStyle: "none",
                              padding: 0,
                              marginBottom: 0,
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "12px",
                            }}
                          >
                            {blog.allBlogs.split(",").map((tag, i) => (
                              <li key={i}>
                                <span
                                  style={{
                                    display: "inline-block",
                                    backgroundColor: "white",
                                    color: "#1E3A8A",
                                    border: "none",
                                    padding: "8px 20px",
                                    fontWeight: 500,
                                    textDecoration: "none",
                                    boxShadow: "0 0 8px rgba(0,0,0,0.05)",
                                    borderRadius: "0px",
                                    transition: "all 0.2s ease-in-out",
                                  }}
                                >
                                  {tag.trim()}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: "20px" }}>
                    <Link href="/blog" className="btn btn-primary">
                      Back to Blog List
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <FooterOne />
    </>
  );
}
