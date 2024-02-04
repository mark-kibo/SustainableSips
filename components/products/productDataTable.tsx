// import * as React from 'react';
"use client"
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbar,
  GridColDef,
  GridFilterModel,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import React, { useContext } from 'react';
import { EditModalContext } from '@/context/ModalContext';
import { FaCartPlus, FaDownload, FaEdit, FaTrash } from 'react-icons/fa';
import {useCart} from "react-use-cart"
import axios from 'axios';
import { Revalidation } from './Revalidation';


export default function ProductDataTable({ data, columns }: { data: any, columns: GridColDef[] }) {
  const { addItem } = useCart()
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
    quickFilterExcludeHiddenColumns: true,
  });

  const { onOpen, setId } = useContext(EditModalContext)


  const [columnVisibilityModel, setColumnVisibilityModel] =
    React.useState<GridColumnVisibilityModel>({});

  const actions = [{
    field: 'actions', headerName: 'Actions', type: 'string', width: 150,
    renderCell: (params: any) => {
      return (
        <div className='flex items-center ml-2 justify-between gap-4 font-bold text-black- capitalize'>
          <p className='shadow-sm rounded-sm text-primary-800 bg-white p-2 hover:bg-orange-300 cursor-pointer'
            onClick={()=>{
              setId(params.row)
              onOpen()
            }}
          ><FaEdit /></p>
          <p className='shadow-sm rounded-sm text-error-600 bg-white p-2 hover:bg-orange-300 cursor-pointer' onClick={async() => {
              const confirmMessage=confirm("Are you sure you wish to delete this product")
              if(confirmMessage){
                const res= await axios.delete(`https://varumar.pythonanywhere.com/product/products/${params.row.id}/`)

              if(res.status === 204){
                Revalidation("products")
                alert(res.data)
              }else{
                alert(res.data)
              }

              }
          }}>

            <FaTrash />

          </p>
          <p className='shadow-sm rounded-sm text-success-600 bg-white p-2 hover:bg-orange-300 cursor-pointer ' onClick={() => {
            console.log(params.row)
            if(params.row.quantity > 0){
              addItem(params.row)

            }else{
            alert("out of stock")
            }
          }}><FaCartPlus /></p>
        </div>

      )

    },
  }]

  return (
    <div className='w-full overflow-x-visible' >
      <Box sx={{ height: 400, }}>
        <DataGrid
            columns={[...columns.map(col => ({
          ...col,
          headerClassName: 'font-bold text-black-2000 capitalize'
        })), ...actions]}
          rows={data}
          disableColumnFilter
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
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
          className='shadow-lg rounded-md  dark:text-white dark:border dark:border-white overflow-x-visible'
        />
      </Box>
    </div>
    
  );
}
