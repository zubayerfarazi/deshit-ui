import Image from "next/image";
import React from "react";
import {
  FaAddressCard,
  FaHeart,
  FaHourglassHalf,
  FaUserSecret,
} from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container max-w-screen-sm md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 py-4">
        <div className="container max-w-screen-xl mx-auto flex flex-col gap-12 my-6 px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-2xl font-extrabold">About Us</p>
              <p className="mt-4 text-gray-700">
                DeshIt-BD is one of the best software companies in Bangladesh.
                With over 14+ years of experience, delivering innovative and
                tailored software solutions. Our journey has been driven by a
                passion for technology and a commitment to excellence, helping
                our clients navigate the complexities of the digital landscape.
              </p>
              <p className="mt-4 text-gray-700">
                At DeshIt-BD, we believe in the power of collaboration and the
                impact of well-crafted software. Our team of highly skilled
                developers, designers, and strategists work closely with our
                clients to understand their unique needs and challenges. We take
                pride in transforming ideas into robust, scalable solutions that
                drive growth and success.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src="/aboutUs.png"
                alt="about us"
                width={600}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <FaAddressCard className="text-[var(--primary-color)] w-14 h-14 p-3 rounded-md border-2 border-[var(--primary-color)]" />
              <div className="flex-1">
                <p className="text-md font-extrabold">Accountability</p>
                <p className="text-gray-700 max-w-md">
                  Client satisfaction defines our success measured by the smiles
                  we address.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaHourglassHalf className="text-[var(--primary-color)] w-14 h-14 p-3 rounded-md border-2 border-[var(--primary-color)]" />
              <div>
                <p className="text-md font-extrabold">Transparency</p>
                <p className="text-gray-700 max-w-md">
                  We maintain an employee policy, requiring timely follow-up.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 p-1 rounded-md border-2 border-[var(--primary-color)] flex items-center justify-center">
                <div className="w-full h-full rounded-md border-2 border-[var(--primary-color)] flex items-center justify-center p-2">
                  <FaUserSecret className="text-[var(--primary-color)] w-10 h-10" />
                </div>
              </div>

              <div>
                <p className="text-md font-extrabold">Confidentiality</p>
                <p className="text-gray-700 max-w-md">
                  Rest assured, your idea stays secure, confidentiality is our
                  practice and enduring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaHeart className="text-[var(--primary-color)] w-14 h-14 p-3 rounded-md border-2 border-[var(--primary-color)]" />
              <div>
                <p className="text-md font-semibold">Relationships</p>
                <p className="text-gray-700 max-w-md">
                  Our talented and dedicated team works together enthusiastically to materialize your idea.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center justify-center gap-16 mt-6">
          <div className="max-w-lg">
            <p className="text-xl font-semibold">About Us</p>
            <p className="mt-4 text-gray-700">
              DeshIt-BD is one of the best software companies in Bangladesh.
              With over 14+ years of experience, delivering innovative and
              tailored software solutions. Our journey has been driven by a
              passion for technology and a commitment to excellence, helping our
              clients navigate the complexities of the digital landscape.
            </p>
            <p className="mt-4 text-gray-700">
              At DeshIt-BD, we believe in the power of collaboration and the
              impact of well-crafted software. Our team of highly skilled
              developers, designers, and strategists work closely with our
              clients to understand their unique needs and challenges. We take
              pride in transforming ideas into robust, scalable solutions that
              drive growth and success.
            </p>
          </div>
          <Image src="/aboutUs.png" alt="about us" width={500} height={100} />
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaAddressCard className="text-[var(--primary-color)] w-16 h-16 p-3 rounded-md border-2 border-[var(--primary-color)]" />
              <div>
                <p className="text-md font-semibold">Accountability</p>
                <p className="text-gray-700 max-w-md">
                  Client satisfaction defines our success measured by the smiles
                  we address.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <GiSandsOfTime className="text-[var(--primary-color)] w-16 h-16 p-3 rounded-md border-2 border-[var(--primary-color)]" />
              <div>
                <p className="text-md font-semibold">Transparency</p>
                <p className="text-gray-700 max-w-md">
                  We maintain an employee policy, requiring timely follow-up
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaUserSecret className="text-[var(--primary-color)] w-16 h-16 p-3 rounded-md border-2 border-[var(--primary-color)]" />
              <div>
                <p className="text-md font-semibold">Confidentiality</p>
                <p className="text-gray-700 max-w-md">
                  Rest assured, your idea stays secure, confidentiality is our
                  practice and enduring.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaHeart className="text-[var(--primary-color)] w-16 h-16 p-3 rounded-md border-2 border-[var(--primary-color)]" />
              <div>
                <p className="text-md font-semibold">Relationships</p>
                <p className="text-gray-700 max-w-md">
                  Our talented and dedicated team works together
                  enthusiastically to materialize your ideas.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
