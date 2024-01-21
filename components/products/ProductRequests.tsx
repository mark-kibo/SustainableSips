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
  console.log('post product',product)
  const res= await axios.post(`https://varumar.pythonanywhere.com/product/products`, {product})

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}


export const UpdateProduct=async (product: any, id:number)=>{
  const res= await axios.patch(`https://varumar.pythonanywhere.com/product/products/${id}/`, {product})

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}



export const makeSale=async (amount: any, id:string, quantity:any)=>{
  const res= await axios.post(`https://varumar.pythonanywhere.com/sale/makesale`, {sale_amount: amount, quantity:quantity, product_id: id })

  if(res.status !== 400){
    revalidateTag("sales")
  }
  return [res.status, res.data]
}


