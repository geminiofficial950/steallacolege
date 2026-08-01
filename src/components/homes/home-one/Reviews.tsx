"use client";

export default function Reviews() {
  return (
    <section className="py-5">
      <div className="container-fluid text-center p-0">
        <h3 className="fw-bold mb-4">Student Reviews</h3>
        <p className="mb-4">
          Here’s what students say about Stella College — verified through Google
          Trustindex.
        </p>

        <div className="d-flex justify-content-center">
          <iframe
            src="https://f3ab921538b44619a0f5c2786ae6dd75.elf.site"
            style={{
              width: "120%",
              maxWidth: "1500px",
              height: "500px",
              border: "0",
              overflow: "hidden",
              borderRadius: "12px",
            }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}