"use client";

import SoftwareServiceCard from "@/component/card/SoftwareServiceCard";
import React from "react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting user experiences that resonate and engage",
    imageSrc: "/software-service-1.png",
  },
  {
    title: "Web Development",
    description: "Developing dynamic websites that are powerful and efficient",
    imageSrc: "/software-service-2.png",
  },
  {
    title: "Mobile Development",
    description: "Creating innovative mobile apps that connect and inspire",
    imageSrc: "/software-service-3.png",
  },
  {
    title: "Cutting Edge",
    description: "Latest technology solutions to lead the industry",
    imageSrc: "/software-service-2.png",
  },
  {
    title: "Quality Assurance",
    description: "Delivering excellence and reliability in every product",
    imageSrc: "/software-service-2.png",
  },
  {
    title: "Cyber Security",
    description: "Protecting your digital assets with advanced security solutions",
    imageSrc: "/software-service-2.png",
  },
];

// Container for staggered animation
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 },
  },
};

const SoftwareService = () => {
  return (
    <div className="bg-gray-100">
      <div className="container max-w-screen-xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-20">
          <motion.p
            className="text-3xl font-bold md:max-w-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Customer Enterprise Software Development Services
          </motion.p>
          <motion.p
            className="md:max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            We prioritize cultivating lasting business partnerships as your
            trusted software development partner
          </motion.p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <SoftwareServiceCard
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareService;
