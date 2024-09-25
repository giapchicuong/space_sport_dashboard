import React from 'react'
import ButtonCalendar from '../../components/ButtonCalendar'
import ColumnChart from '../../components/ColumnChart'
import DonutChart from '../../components/DonutChart'
import RadarChart from '../../components/RadarChart'
import RadialBarChart from '../../components/RadialBarChart'

export default function AnalystPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Báo cáo</h1>

            <div className="w-full p-3 flex flex-col gap-5 bg-white rounded-[14px] shadow-sm">

                <div className="flex items-center justify-between">

                    <p className="text-2xl font-bold">Tổng hóa đơn</p>

                    <ButtonCalendar />

                </div>

                <ColumnChart />
            </div>

            <div className="grid grid-cols-3 gap-10">

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Khách hàng</div>

                    <DonutChart />
                </div>

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Hóa đơn</div>

                    <RadarChart />
                </div>

                <div className="w-full p-5 flex flex-col justify-between bg-white rounded-[14px] shadow-sm">

                    <div className="text-[22px] font-bold ">Phân tích bán hàng</div>

                    <RadialBarChart />
                </div>
            </div>

            <div className="py-2.5"></div>

        </main>
    )
}
