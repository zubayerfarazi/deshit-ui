"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/aws.png", alt: "AWS" },
  { src: "/oracle.png", alt: "Oracle" },
  { src: "/odoo.png", alt: "Odoo" },
  { src: "/iso.png", alt: "ISO" },
];

const PartnershipSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-6 px-4 py-10">
        <motion.p
          className="text-2xl font-semibold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Partnership & Certifications
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={100}
                priority
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
