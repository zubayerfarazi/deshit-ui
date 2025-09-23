"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const Contact = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-4 px-4 py-10">
        {/* Section Title */}
        <motion.p
          className="text-xl font-semibold text-white"
          variants={itemVariants}
        >
          Let's Make Things Happen!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Left Side */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <Image
                src="/contact.png"
                alt="contact"
                width={500}
                height={100}
                priority
              />
            </motion.div>

            <motion.p
              className="text-white text-2xl italic my-8"
              variants={itemVariants}
            >
              "Do not suffer novices, hire a skilled team"
            </motion.p>

            <motion.div className="flex items-center gap-4 mt-4" variants={itemVariants}>
              <Image
                src="/contact-default.png"
                alt="contact default"
                width={60}
                height={60}
                priority
              />
              <div className="flex flex-col text-white">
                <p>Sajib</p>
                <p>COO, DeshIt-BD</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white flex flex-col p-6 md:p-8 rounded-xl"
            variants={itemVariants}
          >
            <motion.p
              className="text-2xl font-semibold text-center mb-6"
              variants={itemVariants}
            >
              Contact Us
            </motion.p>

            <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
              />
              <textarea
                rows={4}
                placeholder="Your Query"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition resize-none"
              />
            </motion.div>

            <motion.div className="mt-6 w-full" variants={itemVariants}>
              <button className="w-full bg-[var(--primary-color)] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[var(--primary-color)] transition cursor-pointer">
                Send
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
