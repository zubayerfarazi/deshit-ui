"use client";

import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="py-20 px-4 sm:px-0">
      <div className="flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.p
            className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Clients Testimonials
          </motion.p>

          {/* Stars */}
          <motion.div
            className="flex justify-start mb-4 space-x-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.svg
                key={star}
                className="w-5 h-5 text-[var(--primary-color)] fill-current"
                viewBox="0 0 20 20"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </motion.div>

          {/* Testimonial Text */}
          <motion.div
            className="mb-8 text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I have been working with DeshIt-BD since 2011. My contact person has
            now taken on the role of CTO. With the help of his team, he takes
            full responsibility for all tech-related things from daily
            maintenance to servers and security. Recently, DeshIt-BD also took
            over product development. I highly trust DeshIt-BD and am glad to
            work with such a committed and competent team. I can recommend
            DeshIt-BD for any web or Ruby on Rails project.
          </motion.div>

          {/* Client Info */}
          <motion.div
            className="flex items-center justify-start mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="contact-default.png"
              alt="Bodilija Abelsson"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-black font-medium">
                Bodilija Abelsson,{" "}
                <span className="text-[var(--primary-color)]">
                  Founder of SimpleSignup.se
                </span>
              </p>
            </div>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            className="flex justify-center space-x-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className={`w-3 h-3 rounded-full ${
                  dot === 0 ? "bg-[var(--primary-color)]" : "bg-gray-300"
                }`}
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1, transition: { duration: 0.5 } },
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
