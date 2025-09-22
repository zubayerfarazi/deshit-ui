import Image from 'next/image'
import React from 'react'

const PartnershipSection = () => {
  return (
    <div className='container max-w-screen-sm md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 py-4'>
      <p className='text-xl font-semibold text-center'>Partnership & Certifications</p>
      <div className='flex items-center justify-center gap-4 mt-4'>
        <Image src="/aws.png" alt='aws' width={100} height={100} priority/>
        <Image src="/oracle.png" alt='aws' width={100} height={100} priority/>
        <Image src="/aws.png" alt='aws' width={100} height={100} priority/>
        <Image src="/aws.png" alt='aws' width={100} height={100} priority/>
      </div>
    </div>
  )
}

export default PartnershipSection
