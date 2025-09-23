"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.5,
    },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  paragraph,
}) => {
  return (
    <motion.div
      className="border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 w-90 group relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 bg-[var(--primary-color)] transform scale-0 origin-top-left transition-all duration-700 ease-out group-hover:scale-150 rounded-lg opacity-0 group-hover:opacity-100"></div>

      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        <div className="bg-[var(--primary-color)] group-hover:bg-white group-hover:text-[var(--primary-color)] text-white w-12 h-12 p-2 rounded-full text-2xl flex items-center justify-center transition-all duration-700 transform group-hover:rotate-12">
          {icon}
        </div>

        <p className="text-xl font-semibold group-hover:text-white transition-all duration-700 transform group-hover:translate-y-[-2px]">
          {title}
        </p>

        <p className="text-gray-600 group-hover:text-white text-center mt-2 transition-all duration-700 transform group-hover:translate-y-[-1px]">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
