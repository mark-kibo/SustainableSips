"use client"
import dynamic from 'next/dynamic';
import React from 'react';
import { object } from 'yup';



const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })
const data = [
    { category: 'Alcohol', product_count: 2 },
    { category: 'Soda', product_count: 1 },
  ];

type Inventory={

    product_count:number;
    category:string;
}

const InventorySummary = ({inventory}: {inventory: Inventory[]}) => {
    const state = {
        series: inventory?.map((item) => item.product_count),
        
        options: {
            labels: inventory?.map((item) => item.category),
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
                    expandOnClick: true
                },
            },
            chart: {
                dropShadow: {
                    enabled: false,
                    enabledOnSeries: undefined,
                    top: 0,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.35
                }
            },
            
            dataLabels: {
                enabled: true,
                formatter: function (val: string) {
                    return parseInt(val) + "%"
                  }
            },
            fill: {
                type: 'gradient',
            },
           
            

            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className='w-full focus:blur-md'>
            <Chart options={state.options} series={state.series} type="donut" width={"100%"} height={200} />
        </div>
    );
};

export default InventorySummary;
