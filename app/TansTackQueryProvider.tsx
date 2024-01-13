"use client"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import React, { ReactNode } from 'react'

const queryClient = new QueryClient()

const TansTackQueryProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default TansTackQueryProvider