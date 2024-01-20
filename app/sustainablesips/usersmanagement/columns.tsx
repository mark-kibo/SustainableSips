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







export const userrcolumns: GridColDef[] = [
    {
        field:"id",
        headerName:"User Identifier"
    },
    {
        field:"username",
        headerName:"Username"
    },
    {
        field:"role_id",
        headerName:"Role"
    }
    
]