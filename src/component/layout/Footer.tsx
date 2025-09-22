"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaDribbble,
  FaPinterestP,
  FaHandshake,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-10 container max-w-screen-sm md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between gap-8">
        <div className="w-sm">
          <p className="font-semibold text-md mb-6">
            Grow Your Online Business and Improve Customer Retention
          </p>

          <p className="flex items-center gap-2 mb-4">
            <FaPhoneAlt className="bg-[var(--primary-color)] text-white w-6 h-6 rounded-full p-1" />{" "}
            +880 1537-570379
          </p>

          <p className="flex items-center gap-2 mb-4">
            <FaMapMarkerAlt className="bg-[var(--primary-color)] text-white w-6 h-6 rounded-full p-1" />{" "}
            House D/36, Block E, Lalmatia, Dhaka-1207
          </p>

          <p className="flex items-center gap-2">
            <FaHandshake className="bg-[var(--primary-color)] text-white w-6 h-6 rounded-full p-1" />{" "}
            Get Estimate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Cutting Edge
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Quality Assurance (QA)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Uddogi: NBR approved VAT software
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Biyeta: A matrimonial SaaS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-8 text-black">
        <FaFacebookF className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaTwitter className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaYoutube className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaLinkedinIn className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaDribbble className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaPinterestP className="hover:text-[var(--primary-color)] cursor-pointer" />
      </div>

      <div className="py-4 mt-8 text-sm flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-30">
          <p>© 2025 DeshiT-BD.ltd</p>
          <div className="flex gap-1 my-2 md:my-0">
            <Link href="#" className="text-[var(--primary-color)]">
              Sitemap
            </Link>
            <span>|</span>
            <Link href="#" className="text-[var(--primary-color)]">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-2">
            <p>Download Brochure:</p>
            <Link href="#" className="text-[var(--primary-color)]">
              English
            </Link>
          </div>
        </div>
        <p>info@deshit-bd.com</p>
      </div>
    </footer>
  );
};

export default Footer;
