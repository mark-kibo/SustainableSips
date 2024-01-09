"use client"
import dynamic from 'next/dynamic';
import React from 'react';



const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const InventorySummary = () => {
    const state = {
        series: [44, 55, 41, 17, 15],
        options: {

            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
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
                enabled: false,
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
                },
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
