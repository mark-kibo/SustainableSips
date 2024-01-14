"use client"
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

const template = ({children}:{children:ReactNode}) => {
  return (
    <motion.div
    initial={{y:20, opacity:0}}
    animate={{ y: 0, opacity:1 }}
    transition={{ duration: .5, ease:'easeInOut' }}>
    
{children}
    </motion.div>
  )
}

export default template