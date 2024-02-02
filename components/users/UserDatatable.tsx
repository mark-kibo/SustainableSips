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

export default function UserDataTable({ data, columns }: { data: any, columns: GridColDef[] }) {
    const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
        items: [],
        quickFilterExcludeHiddenColumns: true,
    });

    const { onOpen, setId } = useContext(EditModalContext)


    const [columnVisibilityModel, setColumnVisibilityModel] =
        React.useState<GridColumnVisibilityModel>({});

    const actions = [{
        field: 'actions', headerName: 'Actions', type: 'string', width: 150,
        renderCell: (params: { row: any; }) => {
            return (
                <div className='flex items-start ml-2 justify-between gap-4 text-black'>
                    
                    <p className='shadow-sm rounded-sm text-primary-800 bg-white p-2 hover:bg-orange-300 cursor-pointer'
                        onClick={()=>{
                            onOpen()
                            setId(params.row)
                        }}
                    ><FaEdit /></p>
                    <p className='shadow-sm rounded-sm text-error-600 bg-white p-2 hover:bg-orange-300 cursor-pointer' onClick={() => {
                        DeleteRequest(params.row.id)
                    }}><FaTrash /></p>
                    
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
