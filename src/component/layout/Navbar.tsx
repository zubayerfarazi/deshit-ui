"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";
import navItems from "@/config/Navitems";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href: string) => pathname === href;

  const baseClass =
    "relative w-28 flex justify-center pb-1 text-black hover:text-[var(--primary-color)] transition-colors";

  const activeUnderline =
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[var(--primary-color)] after:scale-x-100 after:origin-left after:transition-transform after:duration-300";

  const normalUnderline =
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[var(--primary-color)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-4">
      <nav className="flex gap-20 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const hasDropdown = item.children && item.children.length > 0;

            // Case 1: simple link
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

            // Case 2: hasChildren but no dropdown
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

            // Case 3: hasChildren + dropdown
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
                  <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md w-40 z-10">
                    {item.children!.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 hover:bg-orange-50 ${
                            isActive(child.href)
                              ? "text-[var(--primary-color)] font-semibold"
                              : ""
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
      </nav>
    </div>
  );
}
