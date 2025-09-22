import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="py-10">
      <p className="text-2xl font-semibold text-center">
        Our Projects & Portfolio
      </p>

      <div className="grid grid-cols-4 gap-4 mt-6 place-items-center">
        <Image src="/project-1.png" alt="project" width={150} height={100} />
        <Image src="/project-2.png" alt="project" width={160} height={100} />
        <Image src="/project-3.png" alt="project" width={160} height={100} />
        <Image src="/project-4.png" alt="project" width={150} height={100} />
      </div>

      <div className="text-center mt-10">
        <button className="bg-[var(--primary-color)] px-8 py-3 rounded-md text-white cursor-pointer font-medium">Read More Case Studies</button>
      </div>
    </div>
  );
};

export default Portfolio;
