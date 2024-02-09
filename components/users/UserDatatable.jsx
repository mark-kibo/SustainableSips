"use client"
import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid,
    GridToolbar,
    GridFilterModel,
    GridColDef,
} from '@mui/x-data-grid';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@/shad/ui/dropdown-menu";
import { Button } from '@nextui-org/react';
import { FaDownload, FaEdit, FaTrash } from 'react-icons/fa';
import { EditModalContext } from '@/context/ModalContext';
import { DeleteRequest } from './DeleteRequest';
import { useSession } from 'next-auth/react';
import { jwtDecode } from 'jwt-decode';

export default function UserDataTable({ data, columns }) {
    const [filterModel, setFilterModel] = useState({
        items: [],
        quickFilterExcludeHiddenColumns: true,
    });
    const { data: session } = useSession();
    console.log(session?.user);

    let role = "";
    if (session) {
        const decodedToken = jwtDecode(session?.user?.userToken);
        role = decodedToken.role;
    }

    const { onOpen, setId } = useContext(EditModalContext);

    const actions = [{
        field: 'actions',
        headerName: 'Actions',
        type: 'string',
        width: 200,
        renderCell: (params) => {
            return (
                <div className='flex items-start ml-2 justify-between gap-4 text-black'>
                    {Number(role) === 1 && (
                        <>
                            <p className='shadow-sm rounded-sm text-primary-800 bg-white p-2 hover:bg-orange-300 cursor-pointer'
                                onClick={() => {
                                    onOpen();
                                    setId(params.row);
                                }}
                            ><FaEdit /></p>
                            <p className='shadow-sm rounded-sm text-error-600 bg-white p-2 hover:bg-orange-300 cursor-pointer' onClick={() => {
                                DeleteRequest(params.row.id);
                            }}><FaTrash /></p>
                        </>
                    )}
                </div>
            );
        },
    }];

    return (
        <div className='w-full'>
            <Box sx={{ height: 400 }}>
                <DataGrid
                    columns={[...columns.map(col => ({
                        ...col,
                        headerClassName: 'font-bold text-black-1000 capitalize'
                    })), ...actions]}
                    rows={data}
                    disableColumnFilter
                    disableDensitySelector
                    components={{ Toolbar: GridToolbar }}
                    filterModel={filterModel}
                    onFilterModelChange={(newModel) => setFilterModel(newModel)}
                    componentsProps={{ toolbar: { showQuickFilter: true } }}
                    pageSize={5}
                    pageSizeOptions={[5, 10, 25]}
                    sx={{
                        border: "none",
                    }}
                    getRowId={(row) => row.id}
                    className='shadow-lg rounded-md  dark:text-white dark:border dark:border-white'
                />
            </Box>
        </div>
    );
}
