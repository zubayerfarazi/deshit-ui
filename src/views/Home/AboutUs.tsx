"use client";

import Image from "next/image";
import React from "react";
import {
  FaAddressCard,
  FaHeart,
  FaHourglassHalf,
  FaUserSecret,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: <FaAddressCard />,
    title: "Accountability",
    text: "Client satisfaction defines our success measured by the smiles we address.",
  },
  {
    icon: <FaHourglassHalf />,
    title: "Transparency",
    text: "We maintain an employee policy, requiring timely follow-up.",
  },
  {
    icon: <FaUserSecret />,
    title: "Confidentiality",
    text: "Rest assured, your idea stays secure, confidentiality is our practice and enduring.",
  },
  {
    icon: <FaHeart />,
    title: "Relationships",
    text: "Our talented and dedicated team works together enthusiastically to materialize your idea.",
  },
];

const AboutUs = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      } 
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 15, 
        mass: 0.8,
        duration: 0.6
      },
    },
  };

  const fadeLeftVariants: Variants = {
    hidden: { opacity: 0, x: -80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12, 
        mass: 0.7,
        duration: 0.7
      },
    },
  };

  const fadeRightVariants: Variants = {
    hidden: { opacity: 0, x: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12, 
        mass: 0.7,
        duration: 0.7
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 10, 
        mass: 1,
        duration: 0.8
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15, 
        mass: 0.5,
        duration: 0.5
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 0.8,
        duration: 0.6
      },
    },
  };

  return (
    <motion.div 
      className="bg-gray-100 mt-10 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-12 px-4 py-10">
        <div className="flex flex-col items-start">
          <div className="grid grid-cols-12 gap-8 w-full">
            <motion.div 
              className="col-span-12 lg:col-span-5"
              variants={fadeLeftVariants}
            >
              <motion.p 
                className="text-2xl font-extrabold"
                variants={textVariants}
              >
                About Us
              </motion.p>
              <motion.p 
                className="mt-4 text-gray-700"
                variants={textVariants}
              >
                DeshIt-BD is one of the best software companies in Bangladesh.
                With over 14+ years of experience, delivering innovative and
                tailored software solutions. Our journey has been driven by a
                passion for technology and a commitment to excellence, helping
                our clients navigate the complexities of the digital landscape.
              </motion.p>
              <motion.p 
                className="mt-4 text-gray-700"
                variants={textVariants}
              >
                At DeshIt-BD, we believe in the power of collaboration and the
                impact of well-crafted software. Our team of highly skilled
                developers, designers, and strategists work closely with our
                clients to understand their unique needs and challenges. We take
                pride in transforming ideas into robust, scalable solutions that
                drive growth and success.
              </motion.p>
            </motion.div>

            <motion.div 
              className="col-span-12 lg:col-span-7 flex justify-center"
              variants={fadeRightVariants}
            >
              <motion.div
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/aboutUs.png"
                  alt="about us"
                  width={500}
                  height={300}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
            variants={containerVariants}
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 group"
                variants={fadeUpVariants}

              >
                <motion.div 
                  className="text-[var(--primary-color)] w-14 h-14 p-3 rounded-md border-2 border-[var(--primary-color)] flex items-center justify-center group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors duration-300"
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.icon}
                </motion.div>
                <motion.div variants={textVariants}>
                  <p className="text-md font-extrabold group-hover:text-[var(--primary-color)] transition-colors duration-300">
                    {item.title}
                  </p>
                  <p className="text-gray-700 max-w-md group-hover:text-gray-800 transition-colors duration-300">
                    {item.text}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
