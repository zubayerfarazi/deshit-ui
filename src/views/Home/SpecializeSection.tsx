"use client";

import SpecializeCard from "@/component/card/SpecializeCard";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaCalculator,
  FaCloud,
  FaGlobe,
  FaShoppingCart,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { PiNoteFill } from "react-icons/pi";

const specializations = [
  {
    icon: <FaStar />,
    title: "Portal",
    paragraph:
      "Get Your Customized Portal to Engage, Collaborate, and Navigate the Digital Landscape.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    paragraph:
      "Showcase your Digital Storefronts with dynamic E-commerce Development Solutions for Lasting Success.",
  },
  {
    icon: <FaGlobe />,
    title: "Brand Website",
    paragraph:
      "Craft a Dynamic Website that articulates your vision and captivates your audience, amplifying your brand's unique identity.",
  },
  {
    icon: <FaCloud />,
    title: "SaaS",
    paragraph:
      "Step into the future of digital innovation with SaaS. We're here to turn your ideas into reality through custom SaaS dev.",
  },
  {
    icon: <FaUsers />,
    title: "CRM",
    paragraph:
      "We specialize in crafting robust CRM solutions meticulously designed to enhance and elevate every aspect of your customer interactions.",
  },
  {
    icon: <IoMdSettings />,
    title: "ERP",
    paragraph:
      "Design, Develop, and Deploy Customized ERP Solutions Tailored to Streamline and Maximize Efficiency in Your Business's Resource Planning.",
  },
  {
    icon: <FaCalculator />,
    title: "POS",
    paragraph:
      "Innovate at checkout with a tailored POS system designed to facilitate swift and secure transactions.",
  },
  {
    icon: <PiNoteFill />,
    title: "CMS",
    paragraph:
      "We specialize in customized CMS development to control, updates, and amplification of online content.",
  },
  {
    icon: <GiGraduateCap />,
    title: "LMS",
    paragraph:
      "We are dedicated to crafting bespoke Learning Management Systems (LMS) that empower education.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SpecializeSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-4 px-4 py-10">
        <motion.p
          className="text-2xl font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          We Specialize
        </motion.p>

        <motion.p
          className="text-gray-700 max-w-2xl text-center mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We specialize in providing on-demand software solutions across various
          sectors. Our expertise covers a wide range of domains, ensuring
          tailored solutions to meet diverse business needs.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
          variants={containerVariants}
          // initial="hidden"
          // whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {specializations.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <SpecializeCard
                icon={item.icon}
                title={item.title}
                paragraph={item.paragraph}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SpecializeSection;
