import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function DonutChart() {

    const defaultValue = {
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },

            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };

    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <div>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="donut" />
        </div>
    )
}
