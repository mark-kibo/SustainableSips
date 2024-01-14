"use server"

import axios from "axios"
import { revalidateTag } from "next/cache"

// export const DeleteProduct = async({id}:{id:string;}) => {
//   console.log
//   const res= await axios.delete(`http://127.0.0.1:8000/api/products/${id}/`)

//   if(res.status !== 400){
//     revalidateTag("products")
//   }
//   return res.status
// }


export const postProduct=async (product: any)=>{
  const res= await axios.post(`https://sustainableapis.onrender.com/api/products/list/`, {product})

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}


export const UpdateProduct=async (product: any, id:number)=>{
  const res= await axios.patch(`https://sustainablesips.onrender.com/api/products/${id}/`, {product})

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


