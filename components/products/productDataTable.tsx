// import * as React from 'react';
"use client"
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
  GridFilterModel,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import React, { useContext } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shad/ui/dropdown-menu";
import { Button } from '@nextui-org/react';
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import { EditModalContext } from '@/context/ModalContext';
import { FaCartPlus, FaDownload, FaEdit, FaTrash } from 'react-icons/fa';

import {useCart} from "react-use-cart"


export default function ProductDataTable({ data, columns }: { data: any, columns: GridColDef[] }) {
  const { addItem } = useCart()

  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: ['1'],
  });

  const { onOpen } = useContext(EditModalContext)


  const [columnVisibilityModel, setColumnVisibilityModel] =
    React.useState<GridColumnVisibilityModel>({});

  const actions = [{
    field: 'actions', headerName: 'actions', type: 'string', width: 150,
    renderCell: (params: any) => {
      return (
        <div className='flex items-start ml-2 justify-between gap-4 text-black'>
          {/* <Button onPress={onOpen} className='bg-primary-300 active:bg-primary-900'>Edit product</Button>
          <Button  className='bg-primary-300 active:bg-primary-900 flex items-center justify-between gap-2 text-white'>Edit Product</Button>
          <Button  className='bg-primary-300 active:bg-primary-900 flex items-center justify-between gap-2 text-white'>add to cart</Button> */}
          {/* <button>
          <Edit2Icon className='mr-2 hover:cursor-pointer hover:bg-gray-200 hover: rounded-full p-2' size={15} color={"orange"}/>
          </button> */}
          <p className='shadow-sm rounded-sm text-primary-800 bg-white p-2 hover:bg-orange-300 cursor-pointer'
            onClick={onOpen}
          ><FaEdit /></p>
          <p className='shadow-sm rounded-sm text-error-600 bg-white p-2 hover:bg-orange-300 cursor-pointer' onClick={() => {
            if (confirm("are you sure?")) {
              console.log("deleted")
            }
          }}>

            <FaTrash />

          </p>
          <p className='shadow-sm rounded-sm text-success-600 bg-white p-2 hover:bg-orange-300 cursor-pointer ' onClick={() => {
            console.log(params.row)
                addItem(params.row)
          }}><FaCartPlus /></p>
        </div>

      )



    },
  }]

  return (
    <div className='w-full' >
      <Box sx={{ height: 400, }}>
        <DataGrid
          columns={[...columns, ...actions]}
          rows={data}
          disableColumnFilter
          // disableColumnMenu
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          // columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
          initialState={{

            pagination: { paginationModel: { pageSize: 5 } },
          }}

          pageSizeOptions={[5, 10, 25]}
          sx={{
            border: "none",


          }}
          className='shadow-lg rounded-md  dark:text-white dark:border dark:border-white'
        />
      </Box>
    </div>
  );
}
