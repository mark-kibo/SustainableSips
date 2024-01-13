"use server"

import axios from "axios"
import { revalidateTag } from "next/cache"

export const DeleteProduct = async({id}:{id:number;}) => {
  const res= await axios.delete(`http://127.0.0.1:8000/api/user/users/${id}/`)

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}


export const postProduct=async (product: any)=>{
  const res= await axios.post(`http://127.0.0.1:8000/api/user/users/`, {product})

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}


export const UpdateProduct=async (product: any, id:number)=>{
  const res= await axios.patch(`http://127.0.0.1:8000/api/user/users/${id}`, {product})

  if(res.status !== 400){
    revalidateTag("products")
  }
  return res.status
}

