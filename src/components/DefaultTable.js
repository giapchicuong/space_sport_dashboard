import React from 'react';

export default function DefaultTable() {
    return (
        <table class="table-auto w-full h-full text-textColor">
            <thead className='bg-inputPlaceholder'>
                <tr>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap rounded-l-xl'>Product Name</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Location</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Date- Time</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Piece</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Amount</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap rounded-r-xl'>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Apple Watch</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>TP HCM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>12.09.2024 - 12h32 PM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>420</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>34.295.000 VNĐ</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'><p className='bg-bgComplete text-textComplete font-bold rounded-full w-fit px-2.5 py-1'>Delivered</p></td>
                </tr>


                <tr>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Apple Watch</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>TP HCM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>12.09.2024 - 12h32 PM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>420</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>34.295.000 VNĐ</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'><p className='bg-bgReject text-textReject font-bold rounded-full w-fit px-2.5 py-1'>Rejected</p></td>
                </tr>


                <tr>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Apple Watch</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>TP HCM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>12.09.2024 - 12h32 PM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>420</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>34.295.000 VNĐ</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'><p className='bg-bgProcess text-textProcess font-bold rounded-full w-fit px-2.5 py-1'>Processing</p></td>
                </tr>


                <tr>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Apple Watch</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>TP HCM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>12.09.2024 - 12h32 PM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>420</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>34.295.000 VNĐ</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'><p className='bg-bgComplete text-textComplete font-bold rounded-full w-fit px-2.5 py-1'>Delivered</p></td>
                </tr>


                <tr>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Apple Watch</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>TP HCM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>12.09.2024 - 12h32 PM</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>420</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>34.295.000 VNĐ</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'><p className='bg-bgComplete text-textComplete font-bold rounded-full w-fit px-2.5 py-1'>Delivered</p></td>
                </tr>
            </tbody>
        </table>
    );
}
