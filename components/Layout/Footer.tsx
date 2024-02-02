import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex fixed py-2 bottom-0 w-full justify-center items-center px-4  dark:bg-black bg-white'>
      <Image src="/logo.png" alt='logo' width={30} height={30} className=''/>

      <h2 className='dark:text-white mr-2 text-center font-bold'>All rights reserved @ kibo</h2>


    </div>
  )
}

export default Footer