import React from 'react';
import { CiFilter } from 'react-icons/ci';
import DropdownSelect from './DefaultDropdown';
import { VscRefresh } from 'react-icons/vsc';

export default function FilterLine() {
    return (
        <div className='flex items-center border w-fit rounded-lg '>

            <div className='p-5 border-r'>
                <CiFilter className='text-3xl' />
            </div>

            <div className='p-5 border-r'>

                <p className='text-sm font-bold'>Lọc bằng</p>
            </div>

            <button className='p-2.5 border-r'>
                <DropdownSelect title='Ngày' />
            </button>

            <button className='p-2.5 border-r'>
                <DropdownSelect title='Loại đặt hàng' />
            </button>

            <button className='p-2.5 border-r'>
                <DropdownSelect title='Trạng thái đặt hàng' />
            </button>

            <button className='p-5 flex items-center gap-2.5 text-textReject'>
                <VscRefresh />
                <p className='text-sm font-bold'>Làm mới bộ lọc</p>
            </button>

        </div>
    );
}
