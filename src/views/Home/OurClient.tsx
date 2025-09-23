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
      staggerChildren: 0.1,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const OurClient = () => {
  const repeatedImages = Array(5).fill(clientImages).flat();

  return (
    <div className="my-10">
      <p className="text-4xl font-semibold text-center">Our Clients</p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4 justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {repeatedImages.map((src, index) => (
          <motion.div key={index} variants={imageVariants}>
            <Image src={src} alt="our client" width={120} height={100} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurClient;
