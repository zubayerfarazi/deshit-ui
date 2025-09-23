"use client";

import ServiceCard from "@/component/card/ServiceCard";
import { FaUsersCog, FaPeopleCarry, FaBoxOpen } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: <FaUsersCog />,
    title: "Dedicated Team",
    paragraph: `Our Dedicated Team of expert developers will work exclusively on your projects. They’ll ensure the progress, flexibility, and seamless integration with your existing processes, delivering top-notch results tailored to your on-demand needs.`,
  },
  {
    icon: <FaPeopleCarry />,
    title: "Staff Augmentation",
    paragraph: `Engage top-tier professionals from our talent pool to strengthen your existing team. Our highly skilled individuals will accelerate project growth, and boost productivity without the need for long-term hiring commitments.`,
  },
  {
    icon: <FaBoxOpen />,
    title: "Project Deliveries",
    paragraph: `From concept to completion, we’ll handle every aspect of your project and ensure the final product will be completely satisfactory. Expect timely, high-quality results and a seamless experience as we manage end-to-end development.`,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // cards animate one after another
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring", // smoother, natural motion
      stiffness: 120,
      damping: 20,
      mass: 0.5,
    },
  },
};

const ServiceSection = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-10 my-20 justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {services.map((service, index) => (
        <motion.div key={index} variants={cardVariants}>
          <ServiceCard
            icon={service.icon}
            title={service.title}
            paragraph={service.paragraph}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceSection;
