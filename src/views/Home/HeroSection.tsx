"use client";

import Button from "@/component/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div
          className="md:w-1/2 flex flex-col gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
            Experience Excellence with Top Software Company of Bangladesh
          </p>
          <p className="text-gray-500 text-base md:text-lg">
            Get your application developed by experts. As Bangladesh’s leading
            software company, we create top-notch custom software that meets our
            client’s requirements.
          </p>

          <Button icon={<MdKeyboardDoubleArrowRight size={20} />}>
            Our Services
          </Button>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/hero.png"
            alt="hero"
            width={400}
            height={400}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
