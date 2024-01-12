
import React, { Suspense } from 'react'
import { Sale, columns } from './columns'
import DataTable from '@/components/Sales/data-table'




async function getsales(): Promise<Sale[]> {
  const res = await fetch("https://659a4e05652b843dea536d5b.mockapi.io/liqour/sales")
  const data = await res.json()

  return data

}

const page = async () => {
  const sales: Sale[] | undefined = await getsales();
  console.log(sales)
  return (
    <div className=' mt-[80px] flex-1 relative dark:bg-black overflow-hidden '>
      <div className='px-10  mt-4 flex'>
        <h2 className='leading-4 font-semibold mb-6  text-3xl'> All Sales</h2>

        
      </div>

      <div className='h-full w-screen sm:overflow-x-scroll flex flex-1 px-10'>
        
        <Suspense fallback="loading...">
        <DataTable data={sales} columns={columns} />
        </Suspense>
      </div>
    </div>
  )
}

export default page