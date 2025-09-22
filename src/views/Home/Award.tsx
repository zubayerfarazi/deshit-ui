import Image from 'next/image'
import React from 'react'

const Award = () => {
  return (
    <div className=''>
      <p className="text-4xl font-semibold text-center">
        Awards
      </p>

      <div className='grid grid-cols-4 place-items-center mt-4'>
        <Image src="/award-1.png" alt='award' width={200} height={100}/>
        <Image src="/award-2.png" alt='award' width={200} height={100}/>
        <Image src="/award-3.png" alt='award' width={200} height={100}/>
        <Image src="/award-4.png" alt='award' width={200} height={100}/>
        <Image src="/award-5.png" alt='award' width={150} height={100}/>
        <Image src="/award-6.png" alt='award' width={100} height={100}/>
        <Image src="/award-7.png" alt='award' width={100} height={100}/>
      </div>
    </div>
  )
}

export default Award
