"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/wsc-1.png",
  "/wsc-2.png",
  "/wsc-3.png",
  "/wsc-4.png",
];

const SoftwareCompany = () => {
  return (
    <div className="my-6 px-4">
      <motion.p
        className="text-2xl font-semibold text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Widely Endorsed Software Company
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {logos.map((src, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Image src={src} alt={`logo-${index + 1}`} width={180} height={100} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SoftwareCompany;
