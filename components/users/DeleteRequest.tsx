"use server"

import axios from "axios"
import { revalidateTag } from "next/cache"

export const DeleteRequest = async (id: string) => {
    const res = await axios.delete(`https://sustainableapis.onrender.com/api/user/users/${id}/`)

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}


export const postUser = async (user: any) => {
    const res = await axios.post(`https://sustainableapis.onrender.com/api/user/new/user/`, { user })

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}


export const UpdateUser = async (user: any, id:string) => {
    const res = await axios.patch(`https://sustainableapis.onrender.com/api/user/users/${id}/`, { user })

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}

