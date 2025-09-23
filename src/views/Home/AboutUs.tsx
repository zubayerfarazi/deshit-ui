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

const AboutUs = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 },
    },
  };

  const fadeLeftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 },
    },
  };

  const fadeRightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 },
    },
  };

  return (
    <div className="bg-gray-100">
      <motion.div
        className="container max-w-screen-xl mx-auto flex flex-col gap-12 px-4 py-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div className="flex-1" variants={fadeLeftVariants}>
            <p className="text-2xl font-extrabold">About Us</p>
            <p className="mt-4 text-gray-700">
              DeshIt-BD is one of the best software companies in Bangladesh.
              With over 14+ years of experience, delivering innovative and
              tailored software solutions. Our journey has been driven by a
              passion for technology and a commitment to excellence, helping our
              clients navigate the complexities of the digital landscape.
            </p>
            <p className="mt-4 text-gray-700">
              At DeshIt-BD, we believe in the power of collaboration and the
              impact of well-crafted software. Our team of highly skilled
              developers, designers, and strategists work closely with our
              clients to understand their unique needs and challenges. We take
              pride in transforming ideas into robust, scalable solutions that
              drive growth and success.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            variants={fadeRightVariants}
          >
            <Image
              src="/aboutUs.png"
              alt="about us"
              width={500}
              height={100}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Grid Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
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
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4"
              variants={fadeUpVariants}
            >
              <div className="text-[var(--primary-color)] w-14 h-14 p-3 rounded-md border-2 border-[var(--primary-color)] flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-md font-extrabold">{item.title}</p>
                <p className="text-gray-700 max-w-md">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
