"use client"
import { GlobalStyles, dark, light } from '@/ThemeConfig'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
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
        {theme}
            <button onClick={() => { setTheme("light") }}>Switch Theme</button>
            <button onClick={() => { setTheme("dark") }}>Switch Theme</button>

        </>
    )
}

export default Theme