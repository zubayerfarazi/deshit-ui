"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide custom software development, web & mobile app development, SaaS solutions, ERP/CRM systems, and more.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration depends on scope and complexity. Small projects can take a few weeks, while larger ones may take several months.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! We provide maintenance, updates, and technical support after launch to ensure your software runs smoothly.",
  },
  {
    question: "Can you work with my existing team?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
];

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

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  return (
    <div className="my-20 container mx-auto px-4">
      {/* Top Heading + Button */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-4xl font-semibold">
          Get in Touch with Us for a Free Consultation Session
        </p>
        <button className="bg-[var(--primary-color)] text-white mt-8 px-4 py-2 rounded-md cursor-pointer">
          Book a Free Consultation
        </button>
      </motion.div>

      {/* Two-column Section: Image + Text / Form */}
      <motion.div
        className="grid md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left Side: Image, Title, Paragraph, Icon */}
        <motion.div variants={itemVariants}>
          <Image
            src="/get-in-touch.png"
            alt="get in touch"
            width={500}
            height={100}
          />
          <p className="text-4xl font-bold mt-3 max-w-md">
            Get in Touch with Our Expert Team
          </p>
          <p className="mt-2 text-gray-700 max-w-md text-lg">
            Our team with different talents, e.g., UX designers, project
            managers, frontend developers, backend developers, and devOps, will
            handhold through the rest of the process.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <Image
              src="/contact-default.png"
              alt="contact person"
              width={60}
              height={60}
            />
            <div className="flex flex-col">
              <p>Sajib</p>
              <p>COO, DeshIt-BD</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          className="bg-gray-100 px-4 py-6 mx-auto rounded-md flex flex-col items-start justify-center w-full"
          variants={itemVariants}
        >
          <p className="text-xl">
            Not up for a meeting yet? Just get in touch with a message only:
          </p>

          <motion.div
            className="flex flex-col gap-6 mt-8 w-full"
            variants={itemVariants}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
            />
            <textarea
              rows={4}
              placeholder="Your Query"
              className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition resize-none"
            />
          </motion.div>

          <motion.div
            className="mt-6 w-full text-center"
            variants={itemVariants}
          >
            <button className="w-full bg-[var(--primary-color)] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[var(--primary-color)] transition cursor-pointer">
              Send
            </button>
            <span className="mt-2 text-xs text-gray-700">
              We will contact you after you query submission.
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <p className="text-xl font-semibold text-center">
          Frequently Asked Questions
        </p>

        <div className="flex flex-col gap-4 mt-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              variants={itemVariants}
            >
              <div
                className="flex justify-between items-center py-3"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-lg font-medium">{faq.question}</p>
                {openIndex === index ? (
                  <FiMinus className="w-6 h-6 text-[var(--primary-color)]" />
                ) : (
                  <FiPlus className="w-6 h-6 text-[var(--primary-color)]" />
                )}
              </div>

              {openIndex === index && (
                <motion.p
                  className="text-gray-700 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
