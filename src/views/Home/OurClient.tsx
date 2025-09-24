"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const clientImages = [
  "/our-client-1.png",
  "/our-client-2.png",
  "/our-client-3.png",
  "/our-client-4.png",
  "/our-client-5.png",
  "/our-client-6.png",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.7,
    y: 30,
    rotateY: -15
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateY: 0,
    transition: { 
      type: "spring", 
      stiffness: 120, 
      damping: 15,
      duration: 0.6
    },
  },
};

const OurClient = () => {
  const repeatedImages = Array(3).fill(clientImages).flat();

  return (
    <div className="my-20 mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-[var(--primary-color)]">Clients</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by leading companies worldwide. We're proud to work with industry leaders who believe in our expertise.
        </p>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {repeatedImages.map((src, index) => (
            <motion.div 
              key={index} 
              variants={imageVariants}
              className="group"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 group-hover:border-[var(--primary-color)]/20">
                <div className="relative overflow-hidden rounded-lg">
                  <Image 
                    src={src} 
                    alt="our client" 
                    width={120} 
                    height={80}
                    className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurClient;
