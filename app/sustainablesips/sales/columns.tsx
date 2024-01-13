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
    image: string;
    price: number;
    description: string;

}


export const columns: GridColDef[] = [

    { field: 'id', headerName: 'Identifier', width: 80, type: 'string',

    // renderCell: (params) => {
    //     // Transform UUID to a number using Number()
    //     let [rowNumber, setRowNumber] = useState(0);
    //     return rowNumber += 1; //
    //   },
},
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
    {
        field: 'product_name', headerName: 'Product Name', width: 150, type: 'string'
    },
    {
        field: 'sale_amount', headerName: 'Amount', width: 150, type: 'string',
        renderCell: (params) => {
            return ` $ ${parseFloat(params.row.sale_amount)}`

        },
    },

    { field: 'product', headerName: 'product', type: 'string', width: 150 },
    {
        field: 'date_created', headerName: 'Sale date', type: 'string', width: 150,

        renderCell: (params) => {
            return new Date(params.row.date_created).toLocaleDateString()
        }
    },

]