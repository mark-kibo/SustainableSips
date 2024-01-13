"use client"
import React, { useEffect, useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
import ChartOptions  from 'react-apexcharts';

import dynamic from "next/dynamic";

function SalesChart({salesData}: {salesData: any}) {
  const Chart = dynamic(() =>import("react-apexcharts"), { ssr: false });

  const [series, setSeries] = useState<{ name: string; data: any[] }[]>([]);

  const [options, setOptions] = useState<any>({
    
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    
    yaxis: {
      title: {
        text: 'ksh',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val:number) => `ksh  ${val}`,
      },
    },
  });

  const [weeklySales, setWeeklySales] = useState([]);

  useEffect(() => {
    const formattedSeries = [
      {
        name: 'Total Amount',
        data: salesData.map((day: { total_amount: any; }) => day.total_amount),
      },
      
    ];

    const formattedCategories = salesData.map((day: { date: string | number | Date; }) =>
      new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })
    );

    setOptions({
      ...options,
      xaxis: {
        categories: formattedCategories,
        title:{
          text:"total amount"
        }
      },
    });
    setSeries(formattedSeries);
  }, [weeklySales]);


  return (
    <div className='dark:bg-black dark:text-white'>
      <Chart options={options} series={series} type="bar"  width={"100%"} height={250} />
    </div>
  );
}

export default SalesChart;
