"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FaCartPlus, FaChevronLeft, FaMoneyBill, FaPersonBooth, FaReceipt, FaTools } from 'react-icons/fa';
import { LogOutIcon, MenuSquare, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@mui/material';
import { SideNavContext } from '@/context/SideNavContext';



type Anchor = 'top' | 'left' | 'bottom' | 'right';

const menu: any = [
    {
        title: "Products",
        icon: <FaCartPlus color={"orange"} />,
        url: "/products",
    },
    {
        title: "Sales",
        icon: <FaMoneyBill color={"orange"} />,
        url: "/sales",
    },
    {
        title: "User Management",
        icon: <FaPersonBooth color={"orange"} />,
        url: "/user-management",
    },
    {
        title: "Receipts",
        icon: <FaReceipt color={"orange"} />,
        url: "/receipts",
    },
];

// Replace "YourReactIconComponentForProducts", "YourReactIconComponentForSales",
// "YourReactIconComponentForUserManagement", and "YourReactIconComponentForReceipts"
// with actual React icons components of your choice.


export default function SideBar() {
    // const [state, setState] = React.useState({

    //     left: false,

    // });

    const { open, dispatch } = React.useContext(SideNavContext)
    const active = React.useRef("inactive")

    const toggleDrawer =
        () =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                // setState({ ...state, [anchor]: open });
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
                    className="dark:bg-black"
                    sx={{
                        width: "100%",
                        // padding: "4px",
                        transition: "0.5s ease-out",
                        '&[data-theme="dark"]': {
                            backgroundColor: "black"
                        },
                        overflow: "hidden"

                    }}

                >
                    <div className='h-screen flex flex-col  w-full bg-white dark:bg-black dark:text-white'>
                        {/* heading */}
                        <div className='flex items-center gap-8 justify-between p-8'>
                            <h2 className='leading-4 cursor-pointer text-orange-500  font-semibold uppercase text-sm'>Sustainable Sips</h2>
                            <FaChevronLeft size={20} onClick={() => dispatch({
                                type: "CLOSE"
                            })} className="hover:cursor-pointer hover:scale-105" />
                        </div>
                        <div className='border border-b-gray-200 w-full shadow-sm'></div>

                        <div className=' flex flex-col flex-1 items-center justify-start w-full mt-4'>
                            <div className=' flex flex-col w-full pb-2'>



                                <>
                                    {menu.map((menuItem: any) => (
                                        <Link href={`${menuItem.url}`} key={menuItem.title} onClick={() => dispatch({ type: "CLOSE" })}>
                                            <div className={`w-full flex items-start gap-2 pl-4 py-2 mb-2 hover:bg-gray-200 transition-all duration-100 ease-in hover:cursor-pointer hover:scale-90 active:bg-primary-600`}>
                                                {menuItem.icon}
                                                <p className='text-gray-500 dark:text-white capitalize font-medium'>{menuItem.title}</p>
                                            </div>
                                        </Link>
                                    ))}

                                </>







                            </div>


                        </div>
                        <div className="border-t flex items-center p-3 mt-[230px] mb-0">
                            <Tooltip title="logout">
                                <LogOutIcon className='hover:cursor-pointer' size={20} color='orange' />
                            </Tooltip>
                            <div
                                className="
              flex justify-between items-center
              overflow-hidden transition-all w-52 ml-3"

                            >
                                <div className="leading-4">
                                    <h4 className="font-semibold">John Doe</h4>
                                    <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                                </div>

                            </div>
                        </div>

                    </div>


                </Drawer>
            </React.Fragment>

        </div>
    );
}
