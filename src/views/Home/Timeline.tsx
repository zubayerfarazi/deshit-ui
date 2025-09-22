import React from "react";

const Timeline = () => {
  return (
    <div className="flex items-center justify-between container max-w-screen-sm md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 py-4">
      <div className="flex flex-col items-center">
        <p className="text-[var(--primary-color)] text-4xl">14</p>
        <p className="text-xs">Years of Experience</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[var(--primary-color)] text-4xl">175</p>
        <p className="text-xs">Delivered Projects</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[var(--primary-color)] text-4xl">22</p>
        <p className="text-xs">Countries Served</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[var(--primary-color)] text-4xl">50</p>
        <p className="text-xs">Developers</p>
      </div>
    </div>
  );
};

export default Timeline;
