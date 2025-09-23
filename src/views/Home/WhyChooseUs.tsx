"use client";

import Button from "@/component/ui/Button";
import React, { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 px-4 sm:px-0">
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <p className="text-2xl font-semibold">Why Choose Us</p>

          <p className="text-gray-700 leading-relaxed mt-10">
            We have been thriving for 7 years. Choose us for cutting-edge
            expertise and dedicated service. As Bangladesh’s premier software
            company, we deliver tailored solutions with a team of top-tier
            developers. Rely on us for innovative, efficient, and reliable
            results that drive your business forward.
          </p>

          <div className="mt-10">
            <Button>Our Team</Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8">
          <div className="relative w-70 h-70 mb-8">
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#f97316"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 48}
                strokeDashoffset={isAnimated ? 0 : 2 * Math.PI * 48}
                style={{ transition: "stroke-dashoffset 2s ease-out" }}
              />
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Development
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Creating high-quality, scalable software using the latest
                  technologies. Designing web and mobile app.
                </p>
              </div>
            </div>

            {/* Top Icon */}
            <div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
                isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Right Icon */}
            <div
              className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
                isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            {/* Bottom Icon */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
                isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "1.5s" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>

            {/* Left Icon */}
            <div
              className={`absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center transition-all duration-1000 ${
                isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "2s" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
