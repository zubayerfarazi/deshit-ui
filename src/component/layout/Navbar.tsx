"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import navItems, { NavItem } from "@/config/Navitems";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (label: string, hasChildren: boolean) => {
    if (hasChildren) {
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <div className="container max-w-screen-sm md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 py-4">
      <nav className="flex gap-20 items-center">
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
          {navItems.map((item, index) => {
            const activeClass = isActive(item.href)
              ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
              : "text-black border-b-2 border-transparent hover:text-[var(--primary-color)] transition-colors";

            return (
              <li
                key={item.label}
                className="relative flex items-center h-full"
              >
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className={`flex items-center pb-1 h-full ${activeClass}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex flex-col">
                    <button
                      onClick={() =>
                        toggleDropdown(item.label, !!item.children?.length)
                      }
                      className={`flex items-center pb-1 h-full ${activeClass} cursor-pointer`}
                    >
                      {item.label}
                      <RiArrowDropDownLine size={26} />
                    </button>

                    {item.children &&
                      item.children.length > 0 &&
                      openDropdown === item.label && (
                        <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md w-40 z-10">
                          {item.children.map((child: NavItem) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={`block px-4 py-2 hover:bg-orange-50 ${
                                  isActive(child.href)
                                    ? "text-orange-500 font-semibold"
                                    : ""
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
