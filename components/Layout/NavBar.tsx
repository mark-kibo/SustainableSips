"use client"
import React, { useContext } from 'react'
import Theme from '../theme'
import Image from 'next/image'
import { FaBars, FaCartPlus } from 'react-icons/fa'
import { SideNavContext } from '@/context/SideNavContext'
import { Tooltip } from '@mui/material'
import { LogOutIcon, SearchIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shad/ui/dropdown-menu'
import { TypeAnimation } from 'react-type-animation'
import { useCart } from 'react-use-cart'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const NavBar = () => {
    const { dispatch } = useContext(SideNavContext)
    const { totalUniqueItems } = useCart()
    return (

        <div className='w-full h-auto shadow-sm flex-1 sm:text-sm fixed bg-transparent bg-opacity-1 z-10 backdrop-blur-sm'>

            <nav className="flex items-center justify-between flex-wrap dark:bg-black p-4 max-h-30">
                <div className='flex md:flex-row items-center justify-between gap-2'>
                    <div className='flex hover:cursor-pointer hover:scale-105 hover:shadow-md hover:rounded-md py-2 px-1 transition ease-in-out duration-75 hover:bg-gray-200 '>
                        <FaBars size={20} className='hover:scale-90' onClick={() => {
                            dispatch({
                                type: "OPEN"
                            });

                        }} />
                    </div>
                    <h2 className='flex text-base font-semibold lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 items-center justify-start px-4 uppercase leading-4 text-orange-6  lg:text-md'>
                        <TypeAnimation
                            sequence={[
                                "OASIS",
                                1000,
                               
                            ]}
                            wrapper='p'
                            speed={50}
                            style={{}}
                            repeat={Infinity}
                        />
                    </h2>
                </div>
                <div className='flex justify-between mr-1 pr-2'>
                
                    <Link href={"Cart"}>
                        <button className='mx-2 rounded-full relative shadow-md  px-3 py-2'>
                            <FaCartPlus size={15} className="mt-2" />

                            <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 bg-primary-200 rounded-full px-2 py-1 text-xs font-bold text-center text-white">{totalUniqueItems}</span>
                        </button>
                    </Link>
                    <Theme />
                    <DropdownMenu  >
                        <DropdownMenuTrigger className='rounded-full px-1 py-1 shadow-md'>
                            <Tooltip title="profile">
                                <Image
                                    src="https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg?size=626&ext=jpg&ga=GA1.1.639452111.1704197644&semt=sph"
                                    alt="Logo"
                                    width={30}
                                    height={30}
                                    className='rounded-full block'
                                />
                            </Tooltip>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40 p-2 z-10 mr-4">
                            <DropdownMenuLabel className='items-center dark:text-black'>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuItem className='hover:cursor-pointer px-2 hover:border-none hover:bg-gray-200 dark:text-black dark:hover:bg-gray-300'>Profile</DropdownMenuItem> */}
                            <DropdownMenuItem className='hover:cursor-pointer px-2 hover:border-none hover:bg-gray-200 dark:text-black dark:hover:bg-gray-300' onClick={async()=>{
                                await signOut()
                            }}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>

        </div>
    )
}

export default NavBar