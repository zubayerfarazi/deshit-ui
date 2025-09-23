import React from "react";

interface SpecializeCardProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
}

const SpecializeCard: React.FC<SpecializeCardProps> = ({
  icon,
  title,
  paragraph,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-color)] transform translate-x-[-100%] translate-y-[-100%] transition-transform duration-600 ease-out group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></div>

      <div className="relative z-10 flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <div className="bg-[var(--primary-color)] group-hover:bg-white group-hover:text-[var(--primary-color)] text-white p-3 rounded-full text-2xl flex items-center justify-center transition-all duration-700 transform">
            {icon}
          </div>
          <p className="text-xl font-semibold group-hover:text-white transition-all duration-700 transform group-hover:translate-y-[-2px]">
            {title}
          </p>
        </div>

        <p className="text-gray-700 group-hover:text-white transition-all duration-700 transform group-hover:translate-y-[-1px]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SpecializeCard;
