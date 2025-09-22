import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="container max-w-screen-sm md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 py-4">
      <div className="flex items-center justify-center">
        <div className="w-xl flex flex-col gap-5">
          <p className="text-2xl font-semibold">
            Experience Excellence with Top Software Company of Bangladesh
          </p>
          <p className="text-gray-500">
            Get your application developed by experts. As Bangladesh’s leading
            software company, we create top-notch custom software that meets our
            client’s requirements.
          </p>

          <div className="mt-4 border-2 w-fit px-4 py-2 rounded-md hover:bg-[var(--primary-color)] hover:text-white cursor-pointer transition-all ease-in-out duration-300">
            <button className="flex items-center gap-1 cursor-pointer">
              Our Services <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
        <Image src="/hero.png" alt="hero" width={300} height={100} priority />
      </div>
    </div>
  );
};

export default HeroSection;
