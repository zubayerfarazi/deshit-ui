"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const Portfolio = () => {
  const projects = [
    { src: "/project-1.png", width: 150, height: 100 },
    { src: "/project-2.png", width: 160, height: 100 },
    { src: "/project-3.png", width: 160, height: 100 },
    { src: "/project-4.png", width: 150, height: 100 },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="py-10">
      <motion.p
        className="text-2xl font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.6 }}
      >
        Our Projects & Portfolio
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 place-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Image
              src={project.src}
              alt="project"
              width={project.width}
              height={project.height}
              className="rounded-md"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button className="bg-[var(--primary-color)] px-8 py-3 rounded-md text-white cursor-pointer font-medium">
          Read More Case Studies
        </button>
      </motion.div>
    </div>
  );
};

export default Portfolio;
