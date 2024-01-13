import React from 'react'
import { FaChartLine, FaCubes, FaMoneyBill, FaShoppingBag, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa'
import SalesChart from './SalesPurchase'
import Link from 'next/link'
import { ScrollArea } from '@/shad/ui/scroll-area'
import Image from 'next/image'
import InventorySummary from './InventorySummary'
import LowQuantityProducts from './LowQuantityProducts'

interface Product {
    id: string;
    name: string;
    quantity: number;
}

const Dashboard = ({ summary, summary2 }: { summary: any; summary2:any; }) => {
    console.log(summary2)
    return (
        <>
            <div className="col-span-7 p-4  text-black m-4 shadow-md border border-t-slate-200 rounded-sm">
                <h1 className='capitalize font-semibold py-2 text-gray-700 text-base md:text-md dark:text-white'>sales overview</h1>

                <div className='flex flex-col md:flex-row justify-between mt-4  gap-2'>
                    <div className='flex flex-col shadow-md rounded-md bg-gradient-to-tr from-slate-200 to-primary-200 p-2 gap-2'>
                        <FaShoppingBag size={30} color={"orange"} />
                        <div className='flex justify-between items-center gap-2 text-left mt-2 py-2'>
                            <p className='capitalize mr-2'>
                                total sales: $2000
                            </p>
                            <small className="text-gray-500 pr-2">today</small>
                        </div>

                    </div>
                    <div className='flex flex-col shadow-md rounded-md bg-gradient-to-tr from-slate-200 to-success-200 p-2 gap-2'>
                        <FaMoneyBill size={30} className="text-primary-400" />
                        <div className='flex justify-between items-center gap-2 text-left mt-2 py-2'>
                            <p className='capitalize mr-2'>
                                total revenue: $2000
                            </p>
                            <small className="text-gray-500 pr-2">today</small>
                        </div>

                    </div>
                    <div className='flex flex-col shadow-md rounded-md bg-gradient-to-tr from-slate-200 to-orange-200 p-2 gap-2'>
                        <FaChartLine size={30} color={"green"} />
                        <div className='flex justify-between items-center gap-2 text-left mt-2 py-2'>
                            <p className='capitalize mr-2'>
                                total profit: $2000
                            </p>
                            <small className="text-gray-500 pr-2">today</small>
                        </div>

                    </div>






                </div>
                <div className='flex md:flex-row flex-col justify-between items-center mx-2 mt-4'>
                    <p className='py-2 text-md text-gray-300 dark:text-white'>No of sales: <span className='font-semibold text-black  dark:text-white'>20</span></p>
                    <p className='py-2 text-md text-gray-300 dark:text-white'>No of products: <span className='font-semibold text-black dark:text-white'>20</span></p>
                    <p className='py-2-text-md text-gray-300 dark:text-white'>No of sales: <span className='font-semibold text-black dark:text-white'>20</span></p>

                </div>

            </div>
            <div id='dashboard_stats' className="col-span-5 my-4 mx-4 p-4 shadow-md border border-t-slate-200 rounded-sm">
                <h1 className='capitalize font-semibold py-2 text-gray-700 text-base md:text-md dark:text-white'>Inventory summary</h1>

                {/* <div className='flex items-center mt-2'> */}
                {/* <div className='flex flex-col items-center p-2 gap-2'>
                        <FaShoppingCart size={30} color={"green"} className="text-center" />
                        <div className='flex justify-between items-center gap-2 text-left mt-2 py-2'>
                            <p className='text-sm mt-2'>
                                Total available stock: <span className='text-slate-700 font-semibold'>50</span>
                            </p>

                        </div>
                    </div> */}

                <InventorySummary inventory={summary.category_product_count} />

                {/* <div className='flex flex-col items-center'>
                        <FaShoppingCart size={30} className="text-center text-error-400" />
                        <div className='flex justify-between items-center gap-2 text-left mt-2 py-2'>
                            <p>
                                Total inavailable stock: 50
                            </p>
                            
                        </div>
                    </div> */}
                {/* </div> */}


            </div>
            <div className="col-span-7 p-4 shadow-md rounded-md h-[320px] bg-white dark:bg-black text-black m-4">
                <h1 className='capitalize font-semibold py-2 text-gray-700 text-base md:text-md dark:text-white'>Daily sales revenue</h1>
                <SalesChart salesData={summary.weekly_sales}/>





            </div>
            <div id='dashboard_stats' className="col-span-5 shadow-md rounded-md h-[320px] bg-white dark:bg-black p-4 m-4">
                <div className='flex justify-between items-center mb-2'>
                    <h1 className='text-sm lg:text-md text-gray-700 font-semibold py-2 md:text-md dark:text-white'>Low quantity stock</h1>

                    <Link href={"products"} className='text-primary-600 text-sm font-semibold'>
                        See all
                    </Link>

                </div>

                <div className='block mt-4'>
                    <LowQuantityProducts items={summary.low_quantity_products}/>
                </div>



            </div>
        </>

    )
}

export default Dashboard