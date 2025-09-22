import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-4 px-4 py-10">
        <p className="text-xl font-semibold text-white">
          Let's Make Things Happen!
        </p>
        <div className="grid grid-cols-2">
          <div>
            <Image
              src="/contact.png"
              alt="contact"
              width={500}
              height={100}
              priority
            />
            <p className="text-white text-2xl italic my-8">
              "Do not suffer novices, hire a skilled team"
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src="/contact-default.png"
                alt="contact default"
                width={60}
                height={60}
                priority
              />
              <div className="flex flex-col text-white">
                <p>Sajib</p>
                <p>COO, DeshIt-BD</p>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col p-6 md:p-8 rounded-xl">
            <p className="text-2xl font-semibold text-center mb-6">
              Contact Us
            </p>

            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition"
              />
              <textarea
                rows={4}
                placeholder="Your Query"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] transition resize-none"
              />
            </div>

            <div className="mt-6 w-full">
              <button className="w-full bg-[var(--primary-color)] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[var(--primary-color)] transition cursor-pointer">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
