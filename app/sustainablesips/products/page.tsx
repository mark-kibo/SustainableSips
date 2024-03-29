import ProductDataTable from '@/components/products/productDataTable'
import React, { Suspense } from 'react'
import { FaPlus, FaShoppingBag } from 'react-icons/fa'
import { productcolumns } from './columns'
import AddProduct from './AddProduct'
import EditProductModal from '@/components/products/EditProductModal'
import { Sale } from '../sales/columns'
import axios from 'axios'
import { AirplayIcon, Briefcase, BriefcaseIcon } from 'lucide-react'
import MyApp from '../layout';

export const dynamic="force-dynamic"

async function getProducts(): Promise<Sale[]> {
  const res = await fetch("https://varumar.pythonanywhere.com/product/products", {cache:"no-cache",next:{tags:["products"]}})
  const data = await res.json()

  return data

}

const getSummary = async () => {
  const res = await axios.get("https://varumar.pythonanywhere.com/summary/category-count")

  return res.data
}



const page = async() => {
  const products: Sale[] | undefined = await getProducts();
  const summary = await getSummary() || [];
  console.log(summary)
  return (
    <MyApp>
    <div className='mt-[80px] relative dark:bg-black'>
      <div className='mt-4 '>
        <h2 className='leading-4 font-semibold mb-6 mr-2 ml-8 text-3xl'> Products</h2>

        <div className='flex flex-col md:flex-row  mt-4 px-10 mb-4  gap-2'>
          <div className='flex flex-col shadow-md rounded-md bg-gradient-to-tr from-slate-200 to-primary-200 p-2 gap-2'>
            <AirplayIcon size={30} color={"orange"} />
            <div className='flex justify-between items-center gap-2 text-left mt-2 py-2'>
              <p className='capitalize mr-2'>
                Categories: {summary.category_count}
              </p>
            </div>

          </div>
          <div className='flex flex-col shadow-md rounded-md bg-gradient-to-tr from-slate-200 to-primary-200 p-2 gap-2'>
            <FaShoppingBag size={30} color={"orange"} />
            <div className='flex justify-between items-center gap-2 text-left mt-2 py-2'>
              <p className='capitalize mr-2'>
                total products: {summary.total_products}
              </p>
              {/* <small className="text-gray-500 pr-2">today</small> */}
            </div>

          </div>
        
          <div className='flex flex-col shadow-md rounded-md bg-gradient-to-tr from-slate-200 to-primary-200 p-2 gap-2'>
            <BriefcaseIcon size={30} color={"orange"} />
            <div className='flex justify-between items-center gap-2 text-left mt-2 py-2'>
              <p className='capitalize mr-2'>
                low stocks: {summary.low_quantity_products}
              </p>
              {/* <small className="text-gray-500 pr-2">today</small> */}
            </div>

          </div>
        </div>
        <div className='flex justify-end px-10'>
          <AddProduct/>
          </div>

        {/* data table */}

        <div className='h-auto w-screen sm:overflow-x-auto pb-10  px-10'>
          
          <Suspense fallback="loading...">
            <EditProductModal/>
            
            <ProductDataTable data={products} columns={productcolumns} />
          </Suspense>
        </div>

      </div>
    </div>
    </MyApp>
  )
}

export default page