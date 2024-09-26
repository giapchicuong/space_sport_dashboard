import React from 'react'
import FilterLine from '../../components/FilterLine'
import SecondTable from '../../components/SecondTable'
import { categoryTable } from '../../mockData'

export default function CategoriesPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Danh mục</h1>

            <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                <FilterLine />
            </div>

            <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                <SecondTable thead={categoryTable.thead} tbody={categoryTable.tbody} />
            </div>

        </main>
    )
}
