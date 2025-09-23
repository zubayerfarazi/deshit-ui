"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const tabs = [
  "Frameworks",
  "Mobile App",
  "Artificial Intelligence",
  "DevOps",
  "CMS",
] as const;

type Tab = (typeof tabs)[number];

const tabContent: Record<Tab, { id: number; name: string; image: string }[]> = {
  Frameworks: [
    { id: 1, name: "Ruby On Rails", image: "/sdt-1.png" },
    { id: 2, name: "React Native", image: "/sdt-2.png" },
    { id: 3, name: "Django", image: "/sdt-3.png" },
    { id: 4, name: "Laravel", image: "/sdt-4.png" },
    { id: 5, name: "Flutter", image: "/sdt-5.png" },
    { id: 6, name: "Spring Boot", image: "/sdt-6.png" },
    { id: 7, name: "NodeJS", image: "/sdt-7.png" },
    { id: 8, name: "ReactJS", image: "/sdt-8.png" },
    { id: 9, name: "JQuery", image: "/sdt-9.png" },
  ],
  "Mobile App": [],
  "Artificial Intelligence": [],
  DevOps: [],
  CMS: [],
};

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const SoftwareTechnology = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Frameworks");

  return (
    <div className="my-6 px-4 sm:px-6 lg:px-8">
      <p className="text-2xl font-semibold text-center">
        Our Software Development Technology
      </p>

      <p className="mt-4 text-center max-w-3xl mx-auto">
        We are the architects of digital innovation. We continue our legacy to
        lead Artificial Intelligence development, Mobile apps, and Web
        development with our exceptional custom/bespoke software development
        services for our esteemed clients globally.
      </p>

      {/* Full-width scrollable tabs */}
      <div className="overflow-x-auto mt-6">
        <div className="flex flex-nowrap bg-gray-100 border border-gray-300 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[140px] text-center px-4 py-3 font-medium transition-colors duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-white border-t-4 border-[var(--primary-color)] text-[var(--primary-color)]"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center items-center p-4 bg-white border-l border-r border-b border-gray-300 mt-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {tabContent[activeTab] && tabContent[activeTab].length > 0 ? (
          tabContent[activeTab].map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center justify-center gap-2"
              variants={itemVariants}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="object-contain"
                priority
              />
              <p className="text-center text-sm font-medium">{item.name}</p>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No content available for this tab.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SoftwareTechnology;
