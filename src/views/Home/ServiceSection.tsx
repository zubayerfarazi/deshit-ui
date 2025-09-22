import ServiceCard from "@/component/card/ServiceCard";
import {
  FaUsers,
  FaPeopleCarry,
  FaProjectDiagram,
  FaUsersCog,
  FaBoxOpen,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUsersCog />,
    title: "Dedicated Team",
    paragraph: `Our Dedicated Team of expert developers will work exclusively on your projects. They’ll ensure the progress, flexibility, and seamless integration with your existing processes, 
delivering top-notch results tailored to your on-demand needs.`,
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

const ServiceSection = () => {
  return (
    <div className="flex flex-wrap gap-10 my-20">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          paragraph={service.paragraph}
        />
      ))}
    </div>
  );
};

export default ServiceSection;
