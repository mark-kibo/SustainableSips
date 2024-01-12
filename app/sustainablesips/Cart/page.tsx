import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

const NoSSR = dynamic(() => import('@/components/products/Cart'), { ssr: false })


const page = () => {
  return (
    <div className='mt-[80px]'>
      <div className='mt-4 px-10 mb-2'>
        <h2 className="text-4xl font-bold">Cart checkout</h2>
      </div>
      <div className='mt-2'>
        <NoSSR/>

      </div>

    </div>
  )
}

export default page