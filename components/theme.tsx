"use client"
import { GlobalStyles, dark, light } from '@/ThemeConfig'
import { Tooltip } from '@mui/material'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeProvider } from 'styled-components'

const Theme = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            {theme  == "dark" ? (
                <Tooltip title="lightmode">
                <button onClick={()=>setTheme("light")} className='mr-2 px-4 py-2 shadow-md rounded-md'>

                    <FaMoon size={20}/>
                </button>
                </Tooltip>
            ):(
                <Tooltip title="darkmode">
                <button onClick={()=>setTheme("dark")} className='mr-2 px-4 py-2 shadow-md rounded-md'>
                    <FaSun size={20}/>
                    </button>
                    </Tooltip>
            )
            
            }

        </>
    )
}

export default Theme