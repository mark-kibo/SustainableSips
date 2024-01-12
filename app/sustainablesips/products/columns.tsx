"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shad/ui/dropdown-menu";
import { GridColDef } from "@mui/x-data-grid";
import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import Image from "next/image";
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
  } from "@radix-ui/react-icons"
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { EditModalContext } from "@/context/ModalContext";




export type product = {
    id: string;
    name: string;
    image_url: string;
    quantity: number;
    buying_price: number;
    selling_price: number;
    description: string;

}


export const productcolumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80, type: 'number' },
    {
        field: 'image_url',
        headerName: 'Image',
        type: 'string',
        width: 150,
        renderCell: (params) => {
            const imageSrc = params.row.image_url as string;
            return <Image src={imageSrc} width={30} height={30} alt="product image" className="rounded-full" />;
        }
    },
    { field: 'name', headerName: 'Product name', width: 150, type: 'string' },
    // { field: 'buying_price', headerName: 'Amount', width: 150, type: 'number' },
    { field: 'selling_price', headerName: 'Unit price', width: 150, type: 'number' },
    { field: 'quantity', headerName: 'Product quantity', width: 150, type: 'string' },

    { field: 'description', headerName: 'Description', type: 'string', width: 350 },
    
]