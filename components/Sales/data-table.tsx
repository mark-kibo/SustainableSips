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




export default function DataTable({ data, columns }: { data: any, columns: GridColDef[] }) {
  const downloadPDF = (saleId: string) => {
    const sale = data.find((item: any) => item.id === saleId);

    if (!sale) {
      console.error(`Sale with ID ${saleId} not found`);
      return;
    }

    const input = document.getElementById('sales-table');

    if (!input) {
      console.error('Element with id "sales-table" not found');
      return;
    }

    html2canvas(input)
      .then((canvas) => {
        // const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a9');
        pdf.setFontSize(8);
        pdf.text('Sales Receipt', 20, 30);
        // pdf.addImage(imgData, 'PNG', 20, 30, 250, 250);

        // Customize the receipt content based on the sale data
        pdf.text(`Product: ${sale.product_name}`, 20, 60);
        pdf.text(`Amount: $${parseFloat(sale.sale_amount)}`, 20, 80);
        pdf.text(`Quantity: ${sale.quantity}`, 20, 100);
        pdf.text(`Sale Date: ${new Date(sale.created_at).toLocaleDateString()}`, 20, 120);

        pdf.save(`sales_receipt_${sale.id}.pdf`);
      })
      .catch((error) => {
        console.error('Error occurred while generating PDF:', error);
      });
  };
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
        
            <Button  onClick={() => downloadPDF(params.row.id)} className='bg-primary-300 active:bg-primary-900 flex items-center justify-between gap-2 text-white'><FaDownload/> receipt</Button> 
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
