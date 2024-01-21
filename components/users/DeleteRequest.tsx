"use server"

import axios from "axios"
import { revalidateTag } from "next/cache"

export const DeleteRequest = async (id: string) => {
    const res = await axios.delete(`https://varumar.pythonanywhere.com/users/users/${id}/`)

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}


export const postUser = async (user: any) => {
    const res = await axios.post(`https://varumar.pythonanywhere.com/auth/signup`, { user })

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}


export const UpdateUser = async (user: any, id:string) => {
    const res = await axios.patch(`https://varumar.pythonanywhere.com/users/users/${id}/`, { user })

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}

