"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const awards = [
  "/award-1.png",
  "/award-2.png",
  "/award-3.png",
  "/award-4.png",
  "/award-5.png",
  "/award-6.png",
  "/award-7.png",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Award = () => {
  return (
    <div className="py-10">
      <motion.p
        className="text-4xl font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Awards
      </motion.p>

      <motion.div
        className="grid grid-cols-4 gap-4 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {awards.map((src, index) => (
          <motion.div
            key={index}
            className={`flex justify-center ${index >= 4 ? "mt-8" : ""}`}
            variants={itemVariants}
          >
            <Image
              src={src}
              alt={`award-${index + 1}`}
              width={200}
              height={100}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Award;
