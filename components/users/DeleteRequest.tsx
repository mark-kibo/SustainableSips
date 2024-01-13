"use server"

import axios from "axios"
import { revalidateTag } from "next/cache"

export const DeleteRequest = async (id: string) => {
    const res = await axios.delete(`http://127.0.0.1:8000/api/user/users/${id}/`)

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}


export const postUser = async (user: any) => {
    const res = await axios.post(`http://127.0.0.1:8000/api/user/users/`, { user })

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}


export const UpdateUser = async (user: any, id:string) => {
    const res = await axios.patch(`http://127.0.0.1:8000/api/user/users/${id}/`, { user })

    if (res.status !== 400) {
        revalidateTag("users")
    }
    return res.status
}

