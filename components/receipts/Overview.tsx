import React from 'react'

const Overview = () => {
  return (
    <div className='shadow-lg rounded-lg bg-white dark:bg-black px-2 mb-2 mt-4'>
        <h2 className='text-sm lg:text-lg mx-2 p-2'>Overview</h2>
        <div className='flex items-center justify-between'>
            <div className='border-r-gray-300 mb-4'>
                <p className="p-2 font-semibold text-primary-400 text-md">Total receipts</p>

                <h3 className='font-semibold text-gray-700 p-4'>37</h3>

                <small className='mt-2 mx-2 mb-2 capitalize text-gray-600'>last 7 days</small>

            </div>

        </div>
        
    </div>
  )
}

export default Overview