"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/component/ui/Button";

const Portfolio = () => {
  const projects = [
    { src: "/project-1.png"},
    { src: "/project-2.png"},
    { src: "/project-3.png"},
    { src: "/project-4.png"},
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
              width={180}
              height={100}
              className="rounded-md"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center justify-center mt-10">
        <Button>Read More Case Studies</Button>
      </div>
    </div>
  );
};

export default Portfolio;
