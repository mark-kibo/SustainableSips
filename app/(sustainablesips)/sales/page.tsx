import React from 'react'
import { Sale, columns } from './columns'
import { DataTable } from '@/components/Sales/data-table'


async function getsales(): Promise<Sale[]> {
  const res = await fetch("https://659a4e05652b843dea536d5b.mockapi.io/liqour/sales")
  const data = await res.json()

  return data

}

const page = async () => {
  const sales: Sale[] | undefined = await getsales();
  return (
    <div className=' mt-[80px] w-full flex-1 relative dark:bg-black overflow-hidden'>
      <div className='px-10  mt-4 flex'>
        <h2 className='leading-4 font-semibold mb-6  text-3xl'> All Sales</h2>

        
      </div>

      <div className='h-full bottom-0 top-8 absolute w-full px-10 overflow-x-auto'>
        <DataTable data={sales} columns={columns} />

      </div>
    </div>
  )
}

export default page