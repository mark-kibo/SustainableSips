import Dashboard from '@/components/Home/dashboard'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div className='mt-[80px] mx-4 dark:bg-black'>
      <h2 className='mt-2 leading-3 font-semibold text-2xl ml-4 text-black mb-2'>Dashboard</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-1">


        <Suspense fallback={"<span> loading... </span>"}>

          <Dashboard />

        </Suspense>

      </div>
    </div>
  )
}

export default page