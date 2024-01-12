import dynamic from 'next/dynamic'
import React from 'react'

const NoSSR = dynamic(() => import('@/components/products/Cart'), { ssr: false })
 

const page = () => {
  return (
    <div className='mt-[80px] px-10'>
        
        <NoSSR/>
      
    </div>
  )
}

export default page