import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex fixed bottom-0 w-full justify-between items-center px-4  dark:bg-black bg-white'>
      <Image src="/logo.png" alt='logo' width={30} height={30} className=''/>

      <p className='dark:text-white mr-2 text-center'>All rights reserved @ kibo</p>

    </div>
  )
}

export default Footer