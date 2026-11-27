// Shimmer skeletons shown by the route loading.tsx files while a page loads (styles: globals.css → .sk-*).
// The real header/breadcrumb live inside each page, so the skeleton draws placeholders for them too —
// that way nothing jumps when the page arrives.

const Bar = ({ w = "100%", h = 14, className = "" }: { w?: string | number; h?: number; className?: string }) => (
  <span className={`sk sk-bar ${className}`} style={{ width: w, height: h }} />
);

const SkeletonHeader = () => (
  <div className="sk-header">
    <div className="sk-header__inner">
      <span className="sk sk--dark sk-header__logo" />
      <div className="sk-header__nav d-none d-lg-flex">
        {[60, 70, 95, 110, 75].map((w, i) => (
          <span key={i} className="sk sk--dark" style={{ width: w, height: 12 }} />
        ))}
      </div>
      <span className="sk sk--dark sk-header__btn" />
    </div>
  </div>
);

const SkeletonBreadcrumb = () => (
  <div className="sk-breadcrumb">
    <div className="container">
      <Bar w={280} h={34} className="mb-3" />
      <Bar w={130} h={12} />
    </div>
  </div>
);

const CardSkeleton = ({ lines = 2 }: { lines?: number }) => (
  <div className="sk-card">
    <span className="sk sk-card__img" />
    <div className="sk-card__body">
      <Bar w="40%" h={10} />
      {Array.from({ length: lines }).map((_, i) => (
        <Bar key={i} w={i === lines - 1 ? "70%" : "95%"} h={14} />
      ))}
    </div>
  </div>
);

const Shell = ({ children, breadcrumb = true }: { children: React.ReactNode; breadcrumb?: boolean }) => (
  <div className="sk-page" aria-busy="true" aria-live="polite">
    <span className="visually-hidden">Loading…</span>
    <SkeletonHeader />
    {breadcrumb && <SkeletonBreadcrumb />}
    {children}
  </div>
);

/** /blog — grid of blog cards */
export const BlogListSkeleton = () => (
  <Shell>
    <div className="container sk-section">
      <div className="row gutter-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <CardSkeleton />
          </div>
        ))}
      </div>
    </div>
  </Shell>
);

/** /courses — filter sidebar + course cards */
export const CourseListSkeleton = () => (
  <Shell>
    <div className="container sk-section">
      <div className="row">
        <div className="col-xl-3 col-lg-4 d-none d-lg-block">
          {[4, 6, 2].map((rows, i) => (
            <div key={i} className="sk-panel mb-4">
              <Bar w="55%" h={18} className="mb-3" />
              {Array.from({ length: rows }).map((_, j) => (
                <Bar key={j} w={`${60 + ((j * 13) % 30)}%`} h={12} className="mb-2" />
              ))}
            </div>
          ))}
        </div>
        <div className="col-xl-9 col-lg-8">
          <Bar w={180} h={12} className="mb-4" />
          <div className="row">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="col-xl-4 col-md-6 mb-4">
                <CardSkeleton lines={3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Shell>
);

/** /blog-details/[id] — hero image + article + sidebar */
export const BlogDetailsSkeleton = () => (
  <Shell breadcrumb={false}>
    <div className="container sk-section">
      <div className="row">
        <div className="col-xl-9 col-lg-8">
          <span className="sk sk-hero mb-4" />
          <Bar w={180} h={12} className="mb-3" />
          <Bar w="85%" h={30} className="mb-2" />
          <Bar w="55%" h={30} className="mb-4" />
          {Array.from({ length: 7 }).map((_, i) => (
            <Bar key={i} w={i % 3 === 2 ? "75%" : "100%"} h={13} className="mb-2" />
          ))}
        </div>
        <div className="col-xl-3 col-lg-4 d-none d-lg-block">
          <span className="sk mb-4" style={{ display: "block", height: 48, borderRadius: 50 }} />
          <div className="sk-panel mb-4">
            <Bar w="60%" h={18} className="mb-3" />
            {Array.from({ length: 5 }).map((_, j) => (
              <Bar key={j} w="85%" h={12} className="mb-2" />
            ))}
          </div>
          <div className="sk-panel">
            <Bar w="50%" h={18} className="mb-3" />
            {Array.from({ length: 3 }).map((_, j) => (
              <div key={j} className="d-flex gap-3 mb-3">
                <span className="sk" style={{ width: 70, height: 70, borderRadius: 6, flex: "none" }} />
                <div className="flex-grow-1">
                  <Bar w="50%" h={10} className="mb-2" />
                  <Bar w="95%" h={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Shell>
);

/** /course-details/[id] — course image, tabs, overview + fee sidebar */
export const CourseDetailsSkeleton = () => (
  <Shell breadcrumb={false}>
    <div className="container sk-section" style={{ maxWidth: 1400 }}>
      <div className="row">
        <div className="col-lg-8">
          <span className="sk sk-hero sk-hero--course mb-4" />
          <Bar w={130} h={24} className="mb-3" />
          <Bar w="70%" h={30} className="mb-4" />
          <div className="d-flex gap-2 mb-4">
            {[110, 80, 160].map((w, i) => (
              <span key={i} className="sk" style={{ width: w, height: 42, borderRadius: 50 }} />
            ))}
          </div>
          <div className="sk-panel">
            <Bar w="35%" h={20} className="mb-3" />
            {Array.from({ length: 6 }).map((_, i) => (
              <Bar key={i} w={i % 3 === 2 ? "70%" : "100%"} h={13} className="mb-2" />
            ))}
          </div>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <div className="sk-panel">
            <span className="sk mb-3" style={{ display: "block", height: 210, borderRadius: 10 }} />
            <span className="sk mb-4" style={{ display: "block", height: 110, borderRadius: 10 }} />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="d-flex justify-content-between mb-3">
                <Bar w="35%" h={13} />
                <Bar w="40%" h={13} />
              </div>
            ))}
            <span className="sk mt-3" style={{ display: "block", height: 50, width: 190, borderRadius: 50, margin: "0 auto" }} />
          </div>
        </div>
      </div>
    </div>
  </Shell>
);

/** Every other route — generic content skeleton */
export const PageSkeleton = () => (
  <Shell>
    <div className="container sk-section">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <Bar w="40%" h={12} className="mb-3" />
          <Bar w="90%" h={30} className="mb-2" />
          <Bar w="65%" h={30} className="mb-4" />
          {Array.from({ length: 4 }).map((_, i) => (
            <Bar key={i} w={i === 3 ? "60%" : "100%"} h={13} className="mb-2" />
          ))}
        </div>
        <div className="col-lg-6">
          <span className="sk sk-hero" />
        </div>
      </div>
      <div className="row">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="col-md-4 mb-4">
            <CardSkeleton />
          </div>
        ))}
      </div>
    </div>
  </Shell>
);
