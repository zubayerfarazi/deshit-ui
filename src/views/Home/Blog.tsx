"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/component/ui/Button";

const blogTitle = [
  { id: 1, title: "Technologies" },
  { id: 2, title: "AI" },
  { id: 3, title: "Cases" },
  { id: 4, title: "RoR" },
  { id: 5, title: "Mobile" },
  { id: 6, title: "Design" },
];

const blogs = [
  {
    id: 1,
    imageUrl: "/blog-1.png",
    title:
      "Why your startup needs a fractional CTO: Benefits, Costs, and when to hire one",
  },
  { id: 2, imageUrl: "/blog-2.png", title: "Monolithic to headless migration" },
  {
    id: 3,
    imageUrl: "/blog-3.png",
    title:
      "Software rescue services: turning failed softere into success stories",
  },
  {
    id: 4,
    imageUrl: "/blog-4.png",
    title: "Custom odgo theme development solutions",
  },
];

const Blog = () => {
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
      {/* Section Title */}
      <motion.p
        className="text-2xl font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Our Blogs
      </motion.p>

      {/* Blog Category Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {blogTitle.map((blog) => (
          <motion.div
            key={blog.id}
            className="border border-[var(--primary-color)] px-4 py-1 cursor-pointer w-40 text-center rounded-md hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 ease-in-out"
            variants={itemVariants}
          >
            {blog.title}
          </motion.div>
        ))}
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                className="object-contain rounded-md"
                priority
              />
            </div>

            {/* Title */}
            <p className="text-[var(--primary-color)] text-center px-4 py-2 font-medium">
              {blog.title}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex items-center justify-center">
        <Button>All Blogs</Button>
      </div>
    </div>
  );
};

export default Blog;
