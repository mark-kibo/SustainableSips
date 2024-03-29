"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FaCartPlus, FaChevronLeft, FaHome, FaMoneyBill, FaPersonBooth, FaReceipt, FaTools } from 'react-icons/fa';
import { LogOutIcon, MenuSquare, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@mui/material';
import { SideNavContext } from '@/context/SideNavContext';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react'
import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';






const menu = [
    {
        title: "dashboard",
        icon: <FaHome />,
        url: "/sustainablesips/dashboard",
    },
    {
        title: "Products",
        icon: <FaCartPlus />,
        url: "/sustainablesips/products",
    },
    {
        title: "Sales",
        icon: <FaMoneyBill />,
        url: "/sustainablesips/sales",
    },
    {
        title: "User Management",
        icon: <FaPersonBooth className="hover:text-orange-300" />,
        url: "/sustainablesips/usersmanagement",
    },
]






export default function SideBar() {
    // const { jwtDecode } = require('jwt-decode');
    const { data: session } = useSession();
    console.log('session', session);



    // if(session){
    //     console.log(jwtDecode(session?.user?.userToken))
    // }

    let sub = "" || undefined;
    if (session) {
        const decodedToken = jwtDecode(session?.user?.userToken || undefined); // Use the empty string as a default value
        console.log('decodedtoken', decodedToken)
        sub = decodedToken.sub;
    }



    const { open, dispatch } = React.useContext(SideNavContext)
    const active = React.useRef("inactive")

    const toggleDrawer =
        () =>
            (event) => {
                if (
                    event.type === 'keydown' &&
                    ((event).key === 'Tab' ||
                        (event).key === 'Shift')
                ) {
                    return;
                }


                dispatch({
                    type: "CLOSE"
                })
            };


    return (
        <div className=''>
            <React.Fragment key={"left"}>

                <Drawer
                    anchor={"left"}
                    open={open}
                    onClose={toggleDrawer()}
                    className="dark:bg-transparent"
                    sx={{
                        width: "100%",
                        // padding: "4px",
                        transition: "0.5s ease-out",
                        '&[data-theme="dark"]': {
                            backgroundColor: "transparent"
                        },
                        overflow: "hidden",


                    }}

                >
                    <div className='h-screen flex flex-col overflow-hidden flex-1 w-full dark:bg-black dark:text-white'>
                        {/* heading */}
                        <div className='flex items-center my-4 px-6'>
                            <div className='w-full flex gap-6 flex-row items-start text-left justify-center'>
                                <Image src="/logo.png" width={30} height={30} className='rounded-md mr-2 ' alt='logo' />
                                <h1 className='leading-6 font-semibold text-2xl'>Oasis <span>sips</span></h1>
                            </div>
                            <FaChevronLeft size={20} onClick={() => dispatch({
                                type: "CLOSE"
                            })} className="hover:cursor-pointer hover:scale-105" />
                        </div>
                        <div className='border border-b-gray-200 w-full shadow-sm'></div>

                        <div className=' flex  m-4 flex-col flex-1 items-center justify-start w-full mt-4'>
                            <div className=' flex flex-col w-full  pb-2'>



                                <>
                                    {menu.map((menuItem) => (
                                        <Link href={`${menuItem.url}`} key={menuItem.title} onClick={() => dispatch({ type: "CLOSE" })}>
                                            <div className="w-3/4 flex items-center ml-6 gap-2 pl-4 py-2 mb-4 transition-all duration-400 ease-in  hover:w-[180px]  hover:border-b-2  hover:bg-orange-400 hover:cursor-pointer">
                                                {menuItem.icon}
                                                <p className='text-gray-500 dark:text-white capitalize font-medium'>{menuItem.title}</p>
                                            </div>
                                        </Link>
                                    ))}

                                </>







                            </div>


                        </div>
                        <div className="border-t flex items-center gap-4 justify-start p-3  mb-0">
                            <Tooltip title="logout">
                                <LogOutIcon className='hover:cursor-pointer' size={20} color='orange' onClick={async () => {
                                    await signOut()
                                }} />
                            </Tooltip>
                            <div
                                className="
              flex justify-between items-center
              overflow-hidden transition-all w-52 ml-3"

                            >
                                <div className="leading-4">
                                    <h4 className="font-semibold"> {sub || 'Anonymous'}</h4>

                                </div>

                            </div>
                        </div>



                    </div>


                </Drawer>
            </React.Fragment>

        </div>
    );
}