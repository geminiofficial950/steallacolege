"use client";
import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const target = 10;
    const duration = 3000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setCount(Math.floor(target * (frame / totalFrames)));
      if (frame >= totalFrames) clearInterval(interval);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="fact__area"
      style={{ marginTop: "30px" }}
    >
      <div className="container">
        <div className="fact__inner-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-6 text-center">
              <div className="fact__item">
                <h2 className="count text-4xl font-bold transition-all duration-300 ease-out">
                  {count}+
                </h2>
                <p>Years of Shaping Futures</p>
              </div>
            </div>
            <div className="col-lg-6 col-6 text-center">
              <div className="fact__item" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90px" }}>
                <p style={{ fontSize: "28px", fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
                  Industry Specific
                  <br />
                  Skills Training
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
