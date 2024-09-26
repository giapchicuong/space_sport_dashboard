import React from 'react'
import DefaultTable from '../../components/DefaultTable'
import FilterLine from '../../components/FilterLine'

export default function OrdersPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Đơn hàng</h1>

            <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                <FilterLine />
            </div>

            <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                <DefaultTable />
            </div>

        </main>
    )
}
