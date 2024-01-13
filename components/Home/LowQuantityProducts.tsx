"use client"
import React from 'react'
import Image from 'next/image'
import { ScrollArea } from '@/shad/ui/scroll-area';

interface Product {
    id: string;
    name: string;
    quantity: number;
}

const LowQuantityProducts = ({ items }: { items: Product[] }) => {
    return (
        <>
            <ScrollArea className="h-[220px] flex-1 w-full overflow-visible">

                {items.map((item: Product, index: number) => (
                    <div className='flex items-start justify-between w-full gap-2 mb-2 h-full' key={index}>

                        <Image src={"/logo.png"} alt="product" width={30} height={30} className="rounded-full shadow-md bg-gray-200" key={index}/>

                        <div className='flex flex-col items-center'>
                            <h3 className='text-md font-semibold'>{item?.name}</h3>
                            <small className='text-gray-500'>Remaining {item?.quantity}</small>

                        </div>

                        <p className='shadow-sm rounded-full bg-gradient from-slate-100 to-orange-100 text-error-600 px-2'>low</p>

                    </div>


                ))}



            </ScrollArea>


        </>
    )
}

export default LowQuantityProducts