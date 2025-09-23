import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, icon, onClick }) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="mt-4 border-2 border-[var(--primary-color)] text-[var(--primary-color)] w-fit px-4 py-2 rounded-md cursor-pointer relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-[var(--primary-color)] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 cursor-pointer"></div>

      <button className="flex items-center gap-1 relative z-10 transition-colors duration-300 group-hover:text-white cursor-pointer">
        <span>{children}</span>
        {icon && icon}
      </button>
    </motion.div>
  );
};

export default Button;
