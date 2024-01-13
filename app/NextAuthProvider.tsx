"use client"
import { SessionProvider } from 'next-auth/react'
import React, { Children, ReactNode } from 'react'

const NextAuthProvider = ({children}:{children: ReactNode}) => {
  return (
    <div>
        <SessionProvider>
            {children}
        </SessionProvider>
    </div>
  )
}

export default NextAuthProvider