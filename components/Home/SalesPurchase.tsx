"use client"
import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

import dynamic from "next/dynamic";

function SalesChart() {
  const Chart = dynamic(() =>import("react-apexcharts"), { ssr: false });

  const [series, setSeries] = useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ]);

  const [options, setOptions] = useState({
    
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
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val:number) => `$ ${val} thousands`,
      },
    },
  });

  return (
    <div className='dark:bg-black dark:text-white'>
      <Chart options={options} series={series} type="bar"  width={"100%"} height={250} />
    </div>
  );
}

export default SalesChart;
