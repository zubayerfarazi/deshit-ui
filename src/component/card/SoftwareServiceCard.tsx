import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SoftwareServiceCard = ({
  imageSrc,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg flex flex-col items-start gap-4 w-72 relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-700">
      <div className="absolute inset-0 bg-[var(--primary-color)] transform scale-0 origin-top-left transition-all duration-700 ease-out group-hover:scale-150 rounded-lg opacity-0 group-hover:opacity-100"></div>

      <div className="relative z-10 flex flex-col items-start gap-4 w-full h-full">
        <div className="w-16 h-16 bg-[#fff1e8] group-hover:bg-white p-3 rounded-lg transition-all duration-700 transform ">
          <Image
            src={imageSrc}
            alt={title}
            width={64}
            height={64}
            className="object-contain transition-all duration-700"
          />
        </div>

        <p className="text-lg font-semibold group-hover:text-white transition-all duration-700 transform group-hover:translate-y-[-2px]">
          {title}
        </p>

        <p className="text-gray-700 group-hover:text-white text-sm transition-all duration-700 transform group-hover:translate-y-[-1px]">
          {description}
        </p>

        <div className="mt-auto transition-all duration-700 transform group-hover:translate-x-2 group-hover:text-white">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SoftwareServiceCard;
