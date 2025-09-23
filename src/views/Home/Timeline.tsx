"use client";
import React, { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);
  const [developers, setDevelopers] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Easing function
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  // Generic counter animation
  const animateCount = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    end: number,
    duration: number
  ) => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Apply easing
      const easedProgress = easeOutCubic(progress);

      setter(Math.round(easedProgress * end));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateCount(setYears, 14, 2000);
          animateCount(setProjects, 175, 2500);
          animateCount(setCountries, 22, 2200);
          animateCount(setDevelopers, 50, 2300);
          setHasAnimated(true); 
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="bg-gray-100 mt-10 w-full">
  <div className="container max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-12 px-4 py-10">
    
    <div className="flex flex-col items-center">
      <p className="text-[var(--primary-color)] text-4xl font-bold">{years}</p>
      <p className="text-xs">Years of Experience</p>
    </div>

    <div className="flex flex-col items-center">
      <p className="text-[var(--primary-color)] text-4xl font-bold">{projects}</p>
      <p className="text-xs">Delivered Projects</p>
    </div>

    <div className="flex flex-col items-center">
      <p className="text-[var(--primary-color)] text-4xl font-bold">{countries}</p>
      <p className="text-xs">Countries Served</p>
    </div>

    <div className="flex flex-col items-center">
      <p className="text-[var(--primary-color)] text-4xl font-bold">{developers}</p>
      <p className="text-xs">Developers</p>
    </div>
    
  </div>
</div>

  );
};

export default Timeline;
