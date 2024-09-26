import React from 'react'
import FilterLine from '../../components/FilterLine'
import DefaultTable from '../../components/DefaultTable'
import { invoiceTable } from '../../mockData'

export default function InvoicesPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Hóa đơn</h1>

            <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                <FilterLine />
            </div>

            <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                <DefaultTable thead={invoiceTable.thead} tbody={invoiceTable.tbody} />
            </div>

        </main>
    )
}
