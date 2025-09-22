import React from "react";

interface SpecializeCardProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
}

const SpecializeCard: React.FC<SpecializeCardProps> = ({ icon, title, paragraph }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-[var(--primary-color)] text-white p-3 rounded-full text-2xl flex items-center justify-center">
          {icon}
        </div>
        <p className="text-xl font-semibold">{title}</p>
      </div>

      <p className="text-gray-700">{paragraph}</p>
    </div>
  );
};

export default SpecializeCard;
