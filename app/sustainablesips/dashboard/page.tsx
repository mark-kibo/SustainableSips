import Dashboard from '@/components/Home/dashboard'
import React, { Suspense } from 'react'
import axios from "axios"
import MyApp from '../layout';


const getSummary1 = async () => {
  const res = await axios.get("https://varumar.pythonanywhere.com/summary")

  return res.data
}
const getSummary2 = async () => {
  const res = await axios.get("https://varumar.pythonanywhere.com/summary")

  return res.data
}

export const dynamic= "force-dynamic"
const page = async () => {

  const summary1 = await getSummary1() || []
  const summary2 = await getSummary2() || []

  return (
    <MyApp>
    <div className='mt-[80px] mx-4 dark:bg-black'>
      <h2 className='mt-2 leading-3 font-semibold text-sxl ml-4 text-black mb-2'>Dashboard</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-1">


        <Suspense fallback={"<span> loading... </span>"}>

          <Dashboard summary={summary1} summary2={summary2}/>

        </Suspense>

      </div>
    </div>
    </MyApp>
  )
}

export default page