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

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, paragraph }) => {
  return (
    <motion.div
      className="border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 w-90"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // triggers every time 30% visible
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // optional hover effect
    >
      <div className="bg-[var(--primary-color)] text-white w-12 h-12 p-2 rounded-full text-2xl flex items-center justify-center">
        {icon}
      </div>

      <p className="text-xl font-semibold">{title}</p>

      <p className="text-gray-600 text-center mt-2">{paragraph}</p>
    </motion.div>
  );
};

export default ServiceCard;
