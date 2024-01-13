import Dashboard from '@/components/Home/dashboard'
import React, { Suspense } from 'react'
import axios from "axios"

const getSummary= async()=>{
      const res = await axios.get("https://sustainableapis.onrender.com/api/common/summary/")

      return res.data
}

const page = async() => {

  const summary= await getSummary() || []

  return (
    <div className='mt-[80px] mx-4 dark:bg-black'>
      <h2 className='mt-2 leading-3 font-semibold text-sxl ml-4 text-black mb-2'>Dashboard</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-1">


        <Suspense fallback={"<span> loading... </span>"}>

          <Dashboard summary={summary} />

        </Suspense>

      </div>
    </div>
  )
}

export default page