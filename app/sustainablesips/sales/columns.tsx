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
import { useContext, useState } from "react";
import { EditModalContext } from "@/context/ModalContext";




export type Sale = {
    id: string;
    name: string;
    price: number;
    description: string;

}


export const columns: GridColDef[] = [

    { field: 'id', headerName: 'Identifier', width: 80, type: 'string',

    
},
  
    {
        field: 'product_name', headerName: 'Product Name', width: 150, type: 'string'
    },
    {
        field: 'sale_amount', headerName: 'Amount', width: 150, type: 'string',
        renderCell: (params) => {
            return ` $ ${parseFloat(params.row.sale_amount)}`

        },
    },

    // { field: 'product', headerName: 'product', type: 'string', width: 150 },
    {
        field: 'date_created', headerName: 'Sale date', type: 'string', width: 150,
        renderCell: (params) => {
            const saleDate = new Date(params.row.created_at); // changed from date_created to created_at
            return isNaN(saleDate.getTime()) ? "Invalid Date" : saleDate.toLocaleDateString();
        }
    }

]