"use server"
import { revalidateTag } from 'next/cache'


export const Revalidation = (name: string) => {
    revalidateTag(name)
}
