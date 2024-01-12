
import React, { Suspense } from 'react'
import { FaUsers } from 'react-icons/fa'
import AddProduct from '../products/AddProduct'

import ProductDataTable from '@/components/products/productDataTable'
import { productcolumns } from '../products/columns'
import EditSale from '@/components/products/EditProductModal'
import UserDataTable from '@/components/users/UserDatatable'
import EditUserModal from '@/components/users/EditUserModal'
import AddUserModal from '@/components/users/AddUserModal'
import next from 'next'



const getUsers = async () => {
  const res = await fetch("https://659a4e05652b843dea536d5b.mockapi.io/liqour/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": ""
    },


    next: { tags: ["users"] }
  }
  )

  const data= await res.json()

  return data
}


const page = async() => {
  const users=await getUsers() || []
  return (
    <div className='mt-[80px]  dark:bg-black'>
      <div className='mt-2'>
        <h2 className='leading-4 font-semibold mb-4 mr-2 ml-8 text-3xl'>User Management</h2>
        <div className='flex justify-end px-10'>
          <AddUserModal />
          <EditUserModal />

        </div>

        {/* data table */}
        <div className='w-screen px-10'>
          <Suspense fallback="loading...">
            <UserDataTable data={users} columns={productcolumns} />
          </Suspense>
        </div>

      </div>
    </div>
  )
}

export default page