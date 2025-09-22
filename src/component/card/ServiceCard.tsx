import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, paragraph }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center gap-4">
      <div className="bg-[var(--primary-color)] text-white w-12 h-12 p-2 rounded-full text-2xl flex items-center justify-center">
        {icon}
      </div>
      
      <p className="text-xl font-semibold">{title}</p>
      
      <p className="text-gray-600">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
