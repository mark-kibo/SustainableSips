"use client"
import React, { useContext } from 'react'
import Theme from '../theme'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { SideNavContext } from '@/context/SideNavContext'
import { Tooltip } from '@mui/material'
import { LogOutIcon, SearchIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shad/ui/dropdown-menu'
import { TypeAnimation } from 'react-type-animation'

const NavBar = () => {
    const { dispatch } = useContext(SideNavContext)
    return (

        <div className='w-full shadow-sm flex-1 sm:text-sm fixed bg-transparent bg-opacity-1 z-10 backdrop-blur-sm' style={
            {
                background: 'rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(13px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)'
            }
        }>

            <nav className="flex items-center justify-between flex-wrap dark:bg-black p-4">
                <div className='flex md:flex-row items-center justify-between gap-2'>
                    <div className='flex hover:cursor-pointer hover:scale-105 hover:shadow-md hover:rounded-md py-2 px-1 transition ease-in-out duration-75 hover:bg-gray-200 '>
                        <FaBars size={20} className='hover:scale-90' onClick={() => {
                            dispatch({
                                type: "OPEN"
                            });

                        }} />
                    </div>
                    <h2 className='flex text-base  font-semibold lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 items-center justify-start px-4 uppercase leading-4 text-orange-6  lg:text-md'>
                        <TypeAnimation
                            sequence={[
                                "OASIS",
                                1000,
                                "Liqour House",
                                1000,
                            ]}
                            wrapper='p'
                            speed={50}
                            style={{}}
                            repeat={Infinity}

                        />

                    </h2>


                </div>
                <div className='flex justify-between mx-2 pr-2'>
                    <div className='p-2 hidden flex-1 md:flex justify-between items-center shadow-md rounded-md gap-1'>

                        <input name="search" id="" placeholder="Search..." className='w-full px-2 bg-white dark:text-black text-sm outline-none rounded-sm' />
                        <SearchIcon size={20} className='hover:cursor-pointer' />

                    </div>
                    <Theme />
                    {/* <Tooltip title="profile">
                        <Image
                            src="https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg?size=626&ext=jpg&ga=GA1.1.639452111.1704197644&semt=sph"
                            alt="Logo"
                            width={30}
                            height={30}

                            objectFit='contain'
                            className='rounded-md shadow-md cursor-pointer'
                        />
                    </Tooltip> */}



                    <DropdownMenu >
                        <DropdownMenuTrigger>
                            <Tooltip title="profile">
                                <Image
                                    src="https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg?size=626&ext=jpg&ga=GA1.1.639452111.1704197644&semt=sph"
                                    alt="Logo"
                                    width={30}
                                    height={30}

                                    objectFit='contain'
                                    className='rounded-md shadow-md cursor-pointer'
                                />
                            </Tooltip>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40 p-2">
                            <DropdownMenuLabel className='items-center dark:text-black'>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='hover:cursor-pointer px-2 hover:border-none hover:bg-gray-200 dark:text-black dark:hover:bg-gray-300'>Profile</DropdownMenuItem>
                            <DropdownMenuItem className='hover:cursor-pointer px-2 hover:border-none hover:bg-gray-200 dark:text-black dark:hover:bg-gray-300'>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>



                </div>
            </nav>

        </div>
    )
}

export default NavBar