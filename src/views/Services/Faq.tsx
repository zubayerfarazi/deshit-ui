"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "@/component/ui/Button";

const faqs = [
  {
    question:
      "I have a web application and I would like to check for security vulnerabilities. Is it possible to get that information?",
    answer:
      "We provide custom software development, web & mobile app development, SaaS solutions, ERP/CRM systems, and more.",
  },
  {
    question:
      "I have a project idea, but I’m not an engineer. Would you please cooperate with the development of this project?",
    answer:
      "Project duration depends on scope and complexity. Small projects can take a few weeks, while larger ones may take several months.",
  },
  {
    question: "What is the time difference?",
    answer:
      "Yes! We provide maintenance, updates, and technical support after launch to ensure your software runs smoothly.",
  },
  {
    question: "How do you manage projects?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Do you offer maintenance and support after development?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What kind of development process do you follow?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question:
      "What kind of organization is DeshIT-BD? What type of work do you do?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Where are you located?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Who are your clients?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What is your policy on copyright and intellectual property?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question:
      "How do you assure confidentiality and safeguard my intellectual property?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Are you a member of any industry bodies?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What is the minimum project size that you accept?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Do you have any references that I can call?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "How large is your company?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What is the mix of personnel that would work on the project?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "How do you recruit and hire your developers?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What is the quality of people you employ?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Can you meet/work onsite?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Which development methodology do you use?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What is your QA process?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "How do you deal with urgent bug fixing?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "How would you keep us aware of your progress?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Who will be my point of contact?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Will you sign my NDA?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Have you ever failed on a project?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Do you provide post-development maintenance?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "How can I request for a change?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Do you do software testing, verifications, and QA services?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Can we do a pilot project?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What control do I have over the project?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What happens when you are done?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What are your payment terms? Do I need to pay any advance?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "What is the timeline to get started on a new project?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "How long does a software project take?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Which time zone are you in?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "How many hours do you work per week?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "Who owns the right of the code?",
    answer:
      "Absolutely. We can collaborate with your team or work independently depending on your requirements.",
  },
  {
    question: "I am feeling insecure to share my idea. What if you steal it?",
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
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-4xl font-semibold">
          Get in Touch with Us for a Free Consultation Session
        </p>
        <div className="flex items-center justify-center">
          <Button>Book a Free Consultation</Button>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
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

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.2
        }}
      >
        <motion.p 
          className="text-xl font-semibold text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.4
          }}
        >
          Frequently Asked Questions
        </motion.p>

        <motion.div 
          className="flex flex-col gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 30,
                  scale: 0.95
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: { 
                    duration: 0.6, 
                    ease: "easeOut" 
                  } 
                }
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex justify-between items-center py-4 px-6 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileHover={{ 
                  backgroundColor: "rgba(0, 0, 0, 0.02)"
                }}
              >
                <p className="text-lg font-medium pr-4">{faq.question}</p>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 45 : 0,
                    scale: openIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openIndex === index ? (
                    <FiMinus className="w-6 h-6 text-[var(--primary-color)]" />
                  ) : (
                    <FiPlus className="w-6 h-6 text-[var(--primary-color)]" />
                  )}
                </motion.div>
              </motion.div>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeInOut"
                }}
                className="overflow-hidden"
              >
                <motion.p
                  className="text-gray-700 px-6 pb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: openIndex === index ? 1 : 0,
                    y: openIndex === index ? 0 : -10
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: openIndex === index ? 0.1 : 0
                  }}
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Faq;
