"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shad/ui/dropdown-menu";
import { GridColDef } from "@mui/x-data-grid";
import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal, ArrowUpDown } from "lucide-react";

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
    quantity: number;
    buying_price: number;
    selling_price: number;
    description: string;
    profit:number;

}


export const productcolumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80, type: 'number' },
    
    { field: 'name', headerName: 'Product name', width: 150, type: 'string' },
    // { field: 'buying_price', headerName: 'Amount', width: 150, type: 'number' },
    { field: 'price', headerName: 'Unit price', width: 150, type: 'number' },
    {
        field: 'quantity', headerName: 'Product quantity', width: 150, type: 'string',
        renderCell: (params) => {
            if (params.row.quantity < 10 && params.row.quantity > 0) {
                return <p className="bg-error-400 px-3 py-1 rounded-full mb-1">{params.row.quantity}</p>
            }else if(params.row.quantity === 0)
                return <p className="bg-error-400 px-3 py-1 rounded-full mb-1">out of stock</p>

            return <p className="bg-success-400 px-3 py-1 rounded-full mb-1">{params.row.quantity}</p>
        }
    },

    { field: 'description', headerName: 'Description', type: 'string', width: 350 },

    {
        field: 'profit', headerName: 'Profit', width: 150, type: 'number',
        valueGetter: (params) => {
            return (params.row.price - params.row.buying_price) * params.row.quantity;
        }
    },
   
]