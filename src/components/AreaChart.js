import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function AreaChart() {

    const defaultValue = {
        series: [
            {
                name: 'Chỉ số lượt xem kênh',
                color: '#00B69B',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: 'Chỉ số lượt xem kênh',
                data: [11, 32, 45, 32, 34, 52, 41],
                color: '#4880FF',
            }],
        options: {
            responsive: [{
                breakpoint: 767,
                options: {
                    title: {
                        style: {
                            fontSize: '14px',
                        }
                    },
                    yaxis: [
                        {
                            title: {
                                text: 'Lượt xem',
                                style: {
                                    color: '#202224',
                                    fontSize: '10px',
                                    fontWeight: '400',
                                }
                            },
                            labels: {
                                offsetX: -25,
                                style: {
                                    colors: '#202224',
                                    fontSize: '10px',
                                    fontWeight: '300',
                                }
                            },
                        },
                        {
                            opposite: true,
                            title: {
                                rotate: 90,
                                offsetX: 10,
                                text: 'Lượt yêu thích',
                                style: {
                                    color: '#202224',
                                    fontSize: '10px',
                                    fontWeight: '400',
                                }
                            },
                            labels: {
                                offsetX: -10,
                                style: {
                                    colors: '#202224',
                                    fontSize: '10px',
                                    fontWeight: '300',
                                }
                            },
                        },
                    ],
                },
            }],
            chart: {
                fontFamily: 'Roboto, sans-serif',
                height: '100%',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false
                },
            },
            grid: {
                padding: {
                    left: -10,
                    right: -0,
                },
                borderColor: "rgba(165, 165, 165, 0.12)",
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            title: {
                margin: 0,
                offsetX: -10,
                text: 'Thời gian xem',
                style: {
                    color: '#202224',
                    fontSize: '16px',
                    fontWeight: '700',
                }
            },
            stroke: {
                width: 2,
                curve: 'smooth'
            },
            yaxis: [
                {
                    title: {
                        text: 'Lượt xem',
                        style: {
                            color: '#202224',
                            fontSize: '12px',
                            fontWeight: '400',
                        }
                    },
                    labels: {
                        offsetX: -25,
                        style: {
                            colors: '#202224',
                            fontSize: '10px',
                            fontWeight: '300',
                        }
                    },
                },
                {
                    opposite: true,
                    title: {
                        rotate: 90,
                        offsetX: 10,
                        text: 'Lượt yêu thích',
                        style: {
                            color: '#202224',
                            fontSize: '12px',
                            fontWeight: '400',
                        }
                    },
                    labels: {
                        offsetX: -10,
                        style: {
                            colors: '#202224',
                            fontSize: '10px',
                            fontWeight: '300',
                        }
                    },
                },
            ],
            xaxis: {
                labels: {
                    style: {
                        colors: '#202224',
                        fontSize: '10px',
                        fontWeight: '300',
                    }
                },
                axisBorder: {
                    show: true,
                    height: 2,
                    color: "rgba(165, 165, 165, 0.12)"
                },
                categories: ["18/9", "20/9", "21/9", "22/9", "23/9", "24/9", "25/9"]
            },
        },

    };

    const [valueChart, setValueChart] = useState(defaultValue)

    return (
        <>
            <div id="chart">
                <ReactApexChart options={valueChart.options} series={valueChart.series} type="area" height={450} />
            </div>
        </>
    );
}
