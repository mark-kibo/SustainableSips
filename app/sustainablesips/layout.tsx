import Footer from '@/components/Layout/Footer'



import { Metadata } from 'next'
import React, { ReactNode } from 'react'
import SideBar from '@/components/Layout/SideBar'
import SideNavContextProvider from '@/context/SideNavContext'
import dynamic from 'next/dynamic'
import HandleNavNoSSR from '@/components/Layout/HandleNavNoSSR'

export const metadata: Metadata = {
  title: 'oasis - dashboard',
  description: 'dash layout',
}

// const NavBar = dynamic(()=> import("@/components/Layout/NavBar"), {ssr:false})

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full relative grid max-h-screen grid-rows-header  h-screen'>
      <SideNavContextProvider>
        <HandleNavNoSSR />
        <div className=" flex flex-col flex-1 bg-white dark:bg-black pb-10">
          <SideBar />

          {children}
        </div>
      </SideNavContextProvider>
      <Footer />
    </div>

  );
};



export default layout