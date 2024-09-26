import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function RadialBarChart() {

    const defaultValue = {

        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',

                        }
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },

    }

    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <div>
            <ReactApexChart options={valueChart.options} series={valueChart.series} type="radialBar" />
        </div>
    )
}
