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
            onClick={()=>{
              setId(params.row)
              onOpen()
            }}
          ><FaEdit /></p>
          <p className='shadow-sm rounded-sm text-error-600 bg-white p-2 hover:bg-orange-300 cursor-pointer' onClick={async() => {
          
              // console.log(params.row.id)
              // const res =await DeleteProduct(params.row.id)
              // if(res === 200){
              //   alert('Deletion Successful')
              // }
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
          headerClassName: 'font-bold text-black-1000 capitalize'
        })), ...actions]}
          // columns={[...columns, ...actions]}
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
          className='shadow-lg rounded-md  dark:text-white dark:border dark:border-white overflow-x-visible'
        />
      </Box>
    </div>
  );
}
