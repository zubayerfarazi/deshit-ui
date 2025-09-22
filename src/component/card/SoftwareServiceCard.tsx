import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SoftwareServiceCard = ({ imageSrc, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg flex flex-col items-start gap-4 w-72">
      <div className="w-16 h-16 bg-[#fff1e8] p-3 rounded-lg">
        <Image src={imageSrc} alt={title} width={64} height={64} className="object-contain" />
      </div>

      <p className="text-lg font-semibold">{title}</p>

      <p className="text-gray-700 text-sm">{description}</p>

      <div className="mt-auto">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default SoftwareServiceCard;
