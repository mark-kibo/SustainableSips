"use client"

import { ThemeProvider } from "next-themes"


import React, { ReactNode, useEffect, useState } from 'react'

const ThemeProviders = ({children}:{children:ReactNode}) => {
    const [mounted, setMounted]= useState<boolean>(false)

    useEffect(()=>{
        setMounted(true)

    }, [])

    if(!mounted){
        return <>{children}</>
    }
  return (
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  )
}

export default ThemeProviders