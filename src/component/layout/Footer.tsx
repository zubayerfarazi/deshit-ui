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

const Footer = () => {
  return (
    <footer className="mt-10 container max-w-screen-xl mx-auto px-4 py-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-20">
        {/* Left Info */}
        <div className="flex-1 space-y-4">
          <p className="font-semibold text-md">
            Grow Your Online Business and Improve Customer Retention
          </p>

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="bg-[var(--primary-color)] text-white w-6 h-6 rounded-full p-1" />
            +880 1537-570379
          </p>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="bg-[var(--primary-color)] text-white w-6 h-6 rounded-full p-1" />
            House D/36, Block E, Lalmatia, Dhaka-1207
          </p>

          <p className="flex items-center gap-2">
            <FaHandshake className="bg-[var(--primary-color)] text-white w-6 h-6 rounded-full p-1" />
            Get Estimate
          </p>
        </div>

        {/* Right Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 flex-1 w-full">
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

      {/* Social Icons */}
      <div className="flex flex-wrap items-center gap-4 mt-8 text-black">
        <FaFacebookF className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaTwitter className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaYoutube className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaLinkedinIn className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaDribbble className="hover:text-[var(--primary-color)] cursor-pointer" />
        <FaPinterestP className="hover:text-[var(--primary-color)] cursor-pointer" />
      </div>

      {/* Bottom Section */}
      <div className="py-4 mt-8 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p>© 2025 DeshiT-BD.ltd</p>
          <div className="flex gap-1 items-center">
            <Link href="#" className="text-[var(--primary-color)]">
              Sitemap
            </Link>
            <span>|</span>
            <Link href="#" className="text-[var(--primary-color)]">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-2 items-center">
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
