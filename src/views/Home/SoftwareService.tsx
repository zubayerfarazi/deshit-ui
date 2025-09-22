import SoftwareServiceCard from "@/component/card/SoftwareServiceCard";
import React from "react";

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting user experiences that resonate and engage",
    imageSrc: "/software-service-1.png",
  },
  {
    title: "Web Development",
    description: "Developing dynamic websites that are powerful and efficient",
    imageSrc: "/software-service-2.png",
  },
  {
    title: "Mobile Development",
    description: "Creating innovative mobile apps that connect and inspire",
    imageSrc: "/software-service-3.png",
  },
  {
    title: "Cutting Edge",
    description: "Latest technology solutions to lead the industry",
    imageSrc: "/software-service-2.png",
  },
  {
    title: "Quality Assurance",
    description: "Delivering excellence and reliability in every product",
    imageSrc: "/software-service-2.png",
  },
  {
    title: "Cyber Security",
    description: "Protecting your digital assets with advanced security solutions",
    imageSrc: "/software-service-2.png",
  },
];

const SoftwareService = () => {
  return (
    <div className="bg-gray-100">
      <div className="container max-w-screen-xl mx-auto px-4 py-10">
        <div className="flex items-center gap-20">
          <p className="text-3xl font-bold max-w-sm">
            Customer Enterprise Software Development Services
          </p>
          <p className="max-w-md">
            We prioritize cultivating lasting business partnerships as your
            trusted software development partner
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <SoftwareServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareService;
