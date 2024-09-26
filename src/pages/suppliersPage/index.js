import React from 'react'
import FilterLine from '../../components/FilterLine'
import SecondTable from '../../components/SecondTable'
import { supplierTable } from '../../mockData'

export default function SuppliersPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Nhà cung cấp</h1>

            <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                <FilterLine />
            </div>

            <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                <SecondTable thead={supplierTable.thead} tbody={supplierTable.tbody} />
            </div>

        </main>
    )
}
