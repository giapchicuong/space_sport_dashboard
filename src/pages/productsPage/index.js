import React from 'react'
import FilterLine from '../../components/FilterLine'
import SecondTable from '../../components/SecondTable'
import { productTable } from '../../mockData'

export default function ProductsPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Sản phẩm</h1>

            <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                <FilterLine />
            </div>

            <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                <SecondTable thead={productTable.thead} tbody={productTable.tbody} />
            </div>

        </main>
    )
}
