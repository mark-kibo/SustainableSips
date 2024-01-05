import Overview from '@/components/receipts/Overview'
import { DataTableDemo } from '@/components/receipts/ReceiptTable'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[80px] mx-4 dark:bg-black'>
      <h2 className='mt-2 leading-3 font-semibold text-2xl ml-4 text-black mb-2'>Receipts</h2>

      <div className=''>
        {/* <Overview/> */}
        <div className='mx-2 p-4 shadow-md rounded-md'>
        <DataTableDemo/>
        </div>
        


      </div>

    </div>
  )
}

export default page