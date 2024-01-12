"use client"
import Detail from '@/components/productdetails'
import React from 'react'

// Sample product data
const product = {
    id: 1,
    name: 'Doux champagne',
    image: '/cham.jpg',
    Buyingprice: 99.99,
    sellingprice: 79.99,
    Quantity: 50,
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
const page = () => {
    return (
        <div>
            <Detail product={product} />

        </div>
    )
}

export default page
