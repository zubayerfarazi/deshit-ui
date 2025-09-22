import Image from "next/image";
import React from "react";

const blogTitle = [
  {
    id: 1,
    title: "Technologies",
  },
  {
    id: 2,
    title: "AI",
  },
  {
    id: 3,
    title: "Cases",
  },
  {
    id: 4,
    title: "RoR",
  },
  {
    id: 5,
    title: "Mobile",
  },
  {
    id: 6,
    title: "Design",
  },
];

const blogs = [
  {
    id: 1,
    imageUrl: "/blog-1.png",
    title:
      "Why your startup needs a fractional CTO: Benefits, Costs, and when to hire one",
  },
  {
    id: 2,
    imageUrl: "/blog-2.png",
    title: "Monolithic to headless migration",
  },
  {
    id: 3,
    imageUrl: "/blog-3.png",
    title:
      "Software rescue services: turning failed softere into success stories",
  },
  {
    id: 4,
    imageUrl: "/blog-4.png",
    title: "custom odgo theme development solutions",
  },
];

const Blog = () => {
  return (
    <div className="py-10">
      <p className="text-2xl font-semibold text-center">Our Blogs</p>

      <div className="flex items-center justify-between mt-6">
        {blogTitle.map((blog) => (
          <div
            key={blog.id}
            className="border border-[var(--primary-color)] px-4 py-1 cursor-pointer w-40 text-center rounded-md hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 ease-in-out"
          >
            {blog.title}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col items-center">
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Title */}
            <p className="text-[var(--primary-color)] text-center px-4 py-2 font-medium">
              {blog.title}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-[var(--primary-color)] px-4 py-2 rounded-md text-white cursor-pointer">All Blogs</button>
      </div>
    </div>
  );
};

export default Blog;
