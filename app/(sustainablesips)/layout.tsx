import Footer from '@/components/Layout/Footer'
import NavBar from '@/components/Layout/NavBar'



import { Metadata } from 'next'
import React, { ReactNode } from 'react'
import SideBar from '@/components/Layout/SideBar'
import SideNavContextProvider from '@/context/SideNavContext'

export const metadata: Metadata = {
  title: 'sustainable sips - dashboard',
  description: 'dash layout',
}

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid max-h-screen grid-rows-header bg-zinc-100'>
     <SideNavContextProvider>
      <NavBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <SideBar/>
        {children}
       
      </div>



      </SideNavContextProvider>

    </div>

  );
};



export default layout