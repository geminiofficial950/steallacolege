"use client"
import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

const CurvedCircle: React.FC = () => {

  const curvedCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!curvedCircleRef.current) return;
    const circleType = new CircleType(curvedCircleRef.current);
    circleType.radius(280).dir(1); // Customize as needed
    // Restore the plain text on cleanup; otherwise a re-run (StrictMode / Fast Refresh) splits the
    // already-split letters again and they all collapse into one spot
    return () => {
      circleType.destroy();
    };
  }, []);

  return (
    <div className="curved-circle" ref={curvedCircleRef}>
      * Education * System * can * Make * Change *
    </div>
  );
};

export default CurvedCircle;


