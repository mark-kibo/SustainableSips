"use client"
import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {isEmpty, totalUniqueItems, totalItems, emptyCart, items, updateItemQuantity, cartTotal, removeItem} = useCart()

    console.log(totalItems, totalUniqueItems, cartTotal, items)
  return (
    <div>
        Cart {totalUniqueItems} totalItems {totalItems}
    </div>
  )
}

export default Cart