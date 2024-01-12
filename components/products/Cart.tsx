"use client"
import React from 'react'
import { useCart } from 'react-use-cart'
import "./cart.css"
import CartItem from './CartItem'

const Cart = () => {
    const { isEmpty, totalUniqueItems, totalItems, emptyCart, items, updateItemQuantity, cartTotal, removeItem } = useCart()

    console.log(totalItems, totalUniqueItems, cartTotal, items)
    return (

        <div className="pt-15">
            {/* <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
            <div className="mx-auto pt-10 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {items.length > 0 ? (
                        items.map((item, id) => (
                            <CartItem key={id} item={item} />
                        ))
                    ) : (
                        <p>No Products added to cart</p>
                    )}


                </div>


                <div className="mt-6 h-full rounded-lg border bg-white p-10 shadow-md md:mt-0 md:w-1/3">

                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">${cartTotal}</p>
                            <p className="text-sm text-gray-700">including VAT</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed" disabled={cartTotal === 0 ? true : false}>Check out</button>
                </div>
            </div>
        </div>

    )
}

export default Cart



