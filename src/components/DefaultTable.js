import React from 'react';

export default function DefaultTable() {
    return (
        <table class="table-auto w-full h-fit text-textColor">
            <thead className='bg-inputPlaceholder'>
                <tr>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap rounded-l-xl'>Tên sản phẩm</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Nhân viên bán</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Phương thức thanh toán</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Tổng tiền</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Ngày bán</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap rounded-r-xl'>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b'>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Nước mía</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Giap Chi Cuong</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Tiền mặt</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>45.000</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>15:30 26/09/2024</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'><p className='bg-bgComplete text-textComplete font-bold rounded-full w-fit px-2.5 py-1'>Đã thanh toán</p></td>
                </tr>

                <tr className='border-b'>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Nước mía</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Giap Chi Cuong</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Tiền mặt</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>45.000</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>15:30 26/09/2024</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'><p className='bg-bgComplete text-textComplete font-bold rounded-full w-fit px-2.5 py-1'>Đã thanh toán</p></td>
                </tr>
            </tbody>
        </table>
    );
}
