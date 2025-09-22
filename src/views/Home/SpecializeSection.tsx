import SpecializeCard from "@/component/card/SpecializeCard";
import React from "react";
import { FaCloud, FaCode, FaMobileAlt } from "react-icons/fa";

const specializations = [
  {
    icon: <FaCode />,
    title: "Web Development",
    paragraph:
      "We build scalable and responsive websites using the latest technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    paragraph:
      "Custom mobile applications for iOS and Android tailored to your needs.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    paragraph:
      "Deploy your infrastructure safely and efficiently on the cloud.",
  },
];

const SpecializeSection = () => {
  return (
    <div>
      <p>We Specialize</p>
      <p>
        We specialize in providing on-demand software solutions across various
        sectors. Our expertise covers a wide range of domains, ensuring tailored
        solutions to meet diverse business needs.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {specializations.map((item, index) => (
          <SpecializeCard
            key={index}
            icon={item.icon}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecializeSection;
