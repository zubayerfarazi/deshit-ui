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
  {
    question:
      "Do you have prior experience working with US/European/Japanese clients?",
    answer:
      "Yes, we have successfully worked with clients from the US, Europe, and Japan, gaining experience in diverse business cultures and expectations.",
  },
  {
    question: "Can your team members speak in English?",
    answer:
      "Absolutely. Our team members are proficient in English and can communicate clearly throughout the project.",
  },
  {
    question: "Are you familiar with CI tools?",
    answer:
      "Yes, we actively use CI/CD tools to streamline development, testing, and deployment processes.",
  },
  {
    question: "How can I communicate with you?",
    answer:
      "We are flexible with communication channels such as email, Slack, Zoom, Google Meet, or any tool you prefer.",
  },
  {
    question: "Do you follow Agile/Scrum?",
    answer:
      "Yes, we follow Agile methodologies including Scrum for iterative development, transparency, and faster delivery.",
  },
  {
    question: "How is your office environment?",
    answer:
      "Our office environment is collaborative, professional, and focused on innovation and productivity.",
  },
  {
    question: "Do you use project management tools?",
    answer:
      "Yes, we use tools like Jira, Trello, and Asana to manage projects efficiently and keep everything transparent.",
  },
  {
    question: "Do you use version control?",
    answer:
      "Yes, we use Git and platforms like GitHub, GitLab, or Bitbucket for proper version control and collaboration.",
  },
  {
    question: "Do you have experience with AWS and cloud?",
    answer:
      "Yes, we have experience working with AWS, as well as other cloud platforms like Azure and Google Cloud.",
  },
  {
    question: "Do you have experience with Android/iOS development?",
    answer:
      "Yes, we develop native as well as cross-platform mobile applications for both Android and iOS.",
  },
  {
    question: "Do you have experience with Ruby on Rails/PHP/.NET?",
    answer:
      "Yes, our team has experience with Ruby on Rails, PHP frameworks, and .NET technologies.",
  },
  {
    question:
      "Is it possible to become your sales/marketing executive in my country?",
    answer:
      "Yes, we are open to partnerships and collaboration opportunities in sales and marketing.",
  },
  {
    question: "Do your employees work from home or office?",
    answer:
      "We maintain a hybrid approach depending on the situation, ensuring productivity and flexibility.",
  },
  {
    question: "Do you hire part-time employees?",
    answer:
      "Yes, we consider part-time roles depending on the project requirements and candidate expertise.",
  },
  {
    question: "Do you offer maintenance and support after development?",
    answer:
      "Yes, we provide ongoing maintenance and support even after project delivery.",
  },
  {
    question: "Can you help further develop it?",
    answer:
      "Of course. We can continue to enhance and scale your project based on future needs.",
  },
  {
    question: "Apart from software development, can you maintain my server?",
    answer:
      "Yes, we also provide server setup, monitoring, and maintenance services.",
  },
  {
    question: "How do you ensure code quality?",
    answer:
      "We ensure quality through code reviews, automated testing, and industry-standard best practices.",
  },
  {
    question: "Can I talk to someone to discuss my project/idea?",
    answer:
      "Yes, you can directly talk to our consultants or developers to discuss your project in detail.",
  },
  {
    question: "What is the educational background of your employees?",
    answer:
      "Our team consists of professionals with computer science, software engineering, and related technical degrees.",
  },
  {
    question: "Do you have or encourage child labor?",
    answer:
      "No, we strongly oppose child labor and strictly follow ethical employment practices.",
  },
  {
    question: "Can you ensure the security of my project?",
    answer:
      "Yes, we follow best practices in security, encryption, and access control to safeguard your project.",
  },
  {
    question: "Do you follow GDPR compliance?",
    answer:
      "Yes, we adhere to GDPR and other international data protection regulations.",
  },
  {
    question: "Are you open during the Corona outbreak?",
    answer:
      "Yes, our team is fully operational with remote and hybrid work models during the pandemic.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

const slideInVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
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
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.0,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
      >
        <motion.p
          className="text-4xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
        >
          Get in Touch with Us for a Free Consultation Session
        </motion.p>
        <div className="flex items-center justify-center">
          <Button>Book a Free Consultation</Button>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          variants={slideInVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            <Image
              src="/get-in-touch.png"
              alt="get in touch"
              width={500}
              height={100}
            />
          </motion.div>
          <motion.p
            className="text-4xl font-bold mt-3 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            Get in Touch with Our Expert Team
          </motion.p>
          <motion.p
            className="mt-2 text-gray-700 max-w-md text-lg"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6,
            }}
          >
            Our team with different talents, e.g., UX designers, project
            managers, frontend developers, backend developers, and devOps, will
            handhold through the rest of the process.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mt-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8,
            }}
            whileHover={{
              x: 5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src="/contact-default.png"
                alt="contact person"
                width={60}
                height={60}
              />
            </motion.div>
            <div className="flex flex-col">
              <p className="font-semibold">Sajib</p>
              <p className="text-gray-600">COO, DeshIt-BD</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gray-100 px-4 py-6 mx-auto rounded-md flex flex-col items-start justify-center w-full"
          variants={fadeInUpVariants}
          whileHover={{
            scale: 1.01,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            Not up for a meeting yet? Just get in touch with a message only:
          </motion.p>

          <motion.div
            className="flex flex-col gap-6 mt-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {[
              { type: "text", placeholder: "Your Name" },
              { type: "email", placeholder: "Your Email" },
              { type: "text", placeholder: "Subject" },
              { type: "textarea", placeholder: "Your Query", rows: 4 },
            ].map((field, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                    },
                  },
                }}
                whileFocus={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {field.type === "textarea" ? (
                  <textarea
                    rows={field.rows}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-300 hover:border-gray-400 resize-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-300 hover:border-gray-400"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8,
            }}
          >
            <motion.button
              className="w-full bg-[var(--primary-color)] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.0,
              }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                Send
              </motion.span>
            </motion.button>
            <motion.span
              className="mt-2 text-xs text-gray-700 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 1.2,
              }}
            >
              We will contact you after you query submission.
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        <p className="text-xl font-semibold text-center">
          Frequently Asked Questions
        </p>

        <div className="flex flex-col gap-4 mt-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="cursor-pointer bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center py-4 px-6 bg-gray-50">
                <p className="text-lg font-medium">{faq.question}</p>
                <span className="text-[var(--primary-color)] text-xl">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
