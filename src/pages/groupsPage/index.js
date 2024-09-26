import React from 'react'
import FilterLine from '../../components/FilterLine'
import SecondTable from '../../components/SecondTable'
import { groupsTable } from '../../mockData'

export default function GroupsPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Vai trò</h1>

            <div className="w-fit h-auto bg-white rounded-[14px] shadow-sm">

                <FilterLine />
            </div>

            <div className="w-full h-auto p-3 bg-white rounded-[14px] shadow-sm">

                <SecondTable thead={groupsTable.thead} tbody={groupsTable.tbody} />
            </div>

        </main>
    )
}
