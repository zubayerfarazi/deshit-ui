"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import navItems from "@/config/ServiceNavItem";

const ServiceNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href: string) => pathname === href;

  const baseClass =
    "relative px-4 py-2 flex justify-center text-gray-700 hover:text-[var(--primary-color)] transition-all duration-300 font-medium text-sm group";

  const activeUnderline =
    "after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[3px] after:w-20 after:bg-[var(--primary-color)] after:scale-x-100 after:origin-center after:transition-all after:duration-300 after:rounded-full after:-translate-x-1/2";

  const normalUnderline =
    "after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[3px] after:w-20 after:bg-[var(--primary-color)] after:scale-x-0 after:origin-center after:transition-all after:duration-300 group-hover:after:scale-x-100 after:rounded-full after:-translate-x-1/2";

  return (
    <div className="bg-white/95">
      <div className="container max-w-screen-xl mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={120} 
              height={40} 
              priority 
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const hasDropdown = item.children && item.children.length > 0;

            if (!item.hasChildren) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${baseClass} ${
                      isActive(item.href) ? activeUnderline : normalUnderline
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            }

            if (item.hasChildren && !hasDropdown) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${baseClass} ${
                      isActive(item.href) ? activeUnderline : normalUnderline
                    } flex items-center`}
                  >
                    <span>{item.label}</span>
                    <RiArrowDropDownLine size={22} className="ml-1" />
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`${baseClass} ${
                    isActive(item.href) ? activeUnderline : normalUnderline
                  } flex items-center cursor-pointer`}
                >
                  <span>{item.label}</span>
                  <RiArrowDropDownLine size={22} className="ml-1" />
                </button>

                {openDropdown === item.label && (
                  <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl w-48 z-50 py-2">
                    {item.children!.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                            isActive(child.href)
                              ? "text-[var(--primary-color)] font-semibold bg-gray-50"
                              : "text-gray-700"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <RiCloseLine className="text-2xl text-gray-700" />
            ) : (
              <RiMenuLine className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 mt-4 -mx-4 px-4 py-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;

              if (!item.hasChildren) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-[var(--primary-color)] bg-gray-50"
                          : "text-gray-700 hover:text-[var(--primary-color)] hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              if (item.hasChildren && !hasDropdown) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-[var(--primary-color)] bg-gray-50"
                          : "text-gray-700 hover:text-[var(--primary-color)] hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 hover:text-[var(--primary-color)] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                    <RiArrowDropDownLine 
                      size={20} 
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <ul className="pl-4 mt-2 flex flex-col gap-1">
                      {item.children!.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                              isActive(child.href)
                                ? "text-[var(--primary-color)] font-semibold bg-gray-50"
                                : "text-gray-600 hover:text-[var(--primary-color)] hover:bg-gray-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}

export default ServiceNavbar;