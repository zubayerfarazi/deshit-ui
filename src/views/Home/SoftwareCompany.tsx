import Image from "next/image";
import React from "react";

const SoftwareCompany = () => {
  return (
    <div className="my-6">
      <p className="text-2xl font-semibold text-center">
        Widely Endorsed Software Company
      </p>
      <div className="flex items-center justify-between gap-4 mt-4">
        <Image src="/wsc-1.png" alt="aws" width={150} height={100} priority />
        <Image src="/wsc-2.png" alt="aws" width={150} height={100} priority />
        <Image src="/wsc-3.png" alt="aws" width={150} height={100} priority />
        <Image src="/wsc-4.png" alt="aws" width={150} height={100} priority />
      </div>
    </div>
  );
};

export default SoftwareCompany;
