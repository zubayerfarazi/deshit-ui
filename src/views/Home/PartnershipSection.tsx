import Image from "next/image";
import React from "react";

const PartnershipSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-4 px-4 py-10">
        <p className="text-2xl font-semibold text-center">
          Partnership & Certifications
        </p>
        <div className="flex items-center justify-between">
          <Image src="/aws.png" alt="aws" width={150} height={100} priority />
          <Image
            src="/oracle.png"
            alt="aws"
            width={150}
            height={100}
            priority
          />
          <Image src="/odoo.png" alt="aws" width={150} height={100} priority />
          <Image src="/iso.png" alt="aws" width={150} height={100} priority />
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
