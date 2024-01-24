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
import { FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const downloadPDF = () => {
  // Get the HTML element to be converted to PDF
  const input = document.getElementById('sales-table');

  // Check if the element exists
  if (!input) {
    console.error('Element with id "sales-table" not found');
    return;
  }

  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4'); 
      pdf.setFontSize(40); 
      pdf.text('Sales Receipt', 20, 10); 
      pdf.addImage(imgData, 'PNG', 20, 30, 250, 250);
      pdf.save('sales_receipt.pdf');
    })
    .catch((error) => {
      console.error('Error occurred while generating PDF:', error);
    });
};


export default function DataTable({ data, columns }: { data: any, columns: GridColDef[] }) {
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
        
            // <Button onPress={onOpen} className='bg-primary-300 active:bg-primary-900'>Edit sale</Button>
            <Button onClick={downloadPDF} className='bg-primary-300 active:bg-primary-900 flex items-center justify-between gap-2 text-white'><FaDownload/> receipt</Button>

          
      )



    },
  }]

  return (
    <div className='w-full ' >
      <Box sx={{ height: 400, }}>
      <div id="sales-table">
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
        </div>
      </Box>
    </div>
  );
}
