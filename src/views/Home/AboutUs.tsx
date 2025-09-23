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
    <div className="bg-gray-100 mt-10 w-full">
      <div className="container max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-12 px-4 py-10">
        <div className="flex flex-col items-start">
          <div className="grid grid-cols-12 gap-8 w-full">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-2xl font-extrabold">About Us</p>
              <p className="mt-4 text-gray-700">
                DeshIt-BD is one of the best software companies in Bangladesh.
                With over 14+ years of experience, delivering innovative and
                tailored software solutions. Our journey has been driven by a
                passion for technology and a commitment to excellence, helping
                our clients navigate the complexities of the digital landscape.
              </p>
              <p className="mt-4 text-gray-700">
                At DeshIt-BD, we believe in the power of collaboration and the
                impact of well-crafted software. Our team of highly skilled
                developers, designers, and strategists work closely with our
                clients to understand their unique needs and challenges. We take
                pride in transforming ideas into robust, scalable solutions that
                drive growth and success.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 flex justify-center">
              <Image
                src="/aboutUs.png"
                alt="about us"
                width={500}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {features.map((item, idx) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
