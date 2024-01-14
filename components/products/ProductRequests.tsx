"use server"

import axios from "axios"
import { revalidateTag } from "next/cache"

export const DeleteProduct = async({id}:{id:number;}) => {
  const res= await axios.delete(`https://sustainableapis.onrender.com/api/user/users/${id}/`)

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}


export const postProduct=async (product: any)=>{
  const res= await axios.post(`https://sustainableapis.onrender.com/api/products/list/`, {product})

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}


export const UpdateProduct=async (product: any, id:number)=>{
  const res= await axios.patch(`https://sustainableapis.onrender.com/api/user/users/${id}/`, {product})

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}



export const makeSale=async (amount: any, id:string, quantity:any)=>{
  const res= await axios.post(`https://sustainableapis.onrender.com/api/sales/sale/${id}/`, {sale_amount: amount, quantity:quantity })

  if(res.status !== 400){
    revalidateTag("sales")
  }
  return [res.status, res.data]
}


