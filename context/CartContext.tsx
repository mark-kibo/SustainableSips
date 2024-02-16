"use client"
import React, { ReactNode, createContext } from 'react'
import { CartProvider } from 'react-use-cart'

export const cartContext = createContext<any>("")
const CartContextProvider = ({children}:{children:ReactNode}) => {
  return (
    <cartContext.Provider value={""}>
      <CartProvider>
        {children}
      </CartProvider>
    </cartContext.Provider>
  )
}

export default CartContextProvider
