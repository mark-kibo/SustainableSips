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




export type Sale = {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;

}


export const columns: GridColDef[] = [
    
    { field: 'id', headerName: 'ID', width: 80, type: 'number' },
    {
        field: 'image',
        headerName: 'Image',
        type: 'string',
        width: 20,
        renderCell: (params) => {
            console.log(params)
            const imageSrc = params.row.image as string;
            return <Image src={imageSrc} width={30} height={30} alt="product image" className="rounded-full" />;
        }
    },
    { field: 'name', headerName: 'Name', width: 150, type: 'string' },
    { field: 'price', headerName: 'Amount', width: 150, type: 'string' },
    { field: 'description', headerName: 'Description', type: 'string', width: 350 },
    
]