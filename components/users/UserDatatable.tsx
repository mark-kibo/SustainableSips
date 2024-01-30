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
import { FaDownload, FaEdit, FaTrash } from 'react-icons/fa';
import { DeleteRequest } from './DeleteRequest';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 80 },
//   { field: 'name', headerName: 'Name', width: 150 },
//   { field: 'email', headerName: 'Email', width: 150 },
//   { field: 'age', headerName: 'Age', type: 'number' },
// ];

// const rows: GridRowsProp = [
//   { id: 1, name: randomTraderName(), email: randomEmail(), age: 25 },
//   { id: 2, name: randomTraderName(), email: randomEmail(), age: 36 },
//   { id: 3, name: randomTraderName(), email: randomEmail(), age: 19 },
//   { id: 4, name: randomTraderName(), email: randomEmail(), age: 28 },
//   { id: 5, name: randomTraderName(), email: randomEmail(), age: 23 },
//   { id: 6, name: randomTraderName(), email: randomEmail(), age: 27 },
//   { id: 7, name: randomTraderName(), email: randomEmail(), age: 18 },
//   { id: 8, name: randomTraderName(), email: randomEmail(), age: 31 },
//   { id: 9, name: randomTraderName(), email: randomEmail(), age: 24 },
//   { id: 10, name: randomTraderName(), email: randomEmail(), age: 35 },
// ];

export default function UserDataTable({ data, columns }: { data: any, columns: GridColDef[] }) {
    const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
        items: [],
        quickFilterExcludeHiddenColumns: true,
    });

    const { onOpen, setId } = useContext(EditModalContext)


    const [columnVisibilityModel, setColumnVisibilityModel] =
        React.useState<GridColumnVisibilityModel>({});

    const actions = [{
        field: 'actions', headerName: 'actions', type: 'string', width: 150,
        renderCell: (params: { row: any; }) => {
            return (
                <div className='flex items-start ml-2 justify-between gap-4 text-black'>
                    {/* <Button onPress={onOpen} className='bg-primary-300 active:bg-primary-900'>Edit product</Button>
          <Button  className='bg-primary-300 active:bg-primary-900 flex items-center justify-between gap-2 text-white'>Edit Product</Button>
          <Button  className='bg-primary-300 active:bg-primary-900 flex items-center justify-between gap-2 text-white'>add to cart</Button> */}
                    {/* <button>
          <Edit2Icon className='mr-2 hover:cursor-pointer hover:bg-gray-200 hover: rounded-full p-2' size={15} color={"orange"}/>
          </button> */}
                    <p className='shadow-sm rounded-sm text-primary-800 bg-white p-2 hover:bg-orange-300 cursor-pointer'
                        onClick={()=>{
                            onOpen()
                            setId(params.row)
                        }}
                    ><FaEdit /></p>
                    <p className='shadow-sm rounded-sm text-error-600 bg-white p-2 hover:bg-orange-300 cursor-pointer' onClick={() => {
                        DeleteRequest(params.row.id)
                    }}><FaTrash /></p>
                    {/* <p className='shadow-sm rounded-sm text-success-600 bg-white p-2 hover:bg-orange-300 cursor-pointer ' onClick={() => {

                    }}><FaCartPlus /></p> */}
                </div>
            )



        },
    }]

    console.log(data)

    return (
        <div className='w-full ' >
            <Box sx={{ height: 400, }}>
                <DataGrid
                   columns={[...columns.map(col => ({
                    ...col,
                    headerClassName: 'font-bold text-black-1000 capitalize'
                  })), ...actions]}
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
                    getRowId={(row)=> row.id}
                    className='shadow-lg rounded-md  dark:text-white dark:border dark:border-white'
                />
            </Box>
        </div>
    );
}
