import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function SecondTable() {
    return (
        <table class="table-auto w-full h-full text-textColor">
            <thead className='bg-inputPlaceholder'>
                <tr>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap rounded-l-xl'>Image</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Product Name</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Category</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Price</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Piece</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap rounded-r-xl'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='w-[150px] p-5 text-base font-normal text-start whitespace-nowrap'>
                        <img
                            src="https://product.hstatic.net/1000141988/product/nuoc_ngot_sting_dau_320_ml__i0012143__375f4dd6b1bb42009f4df6bfac7c3dbd_1024x1024.jpg"
                            alt="alt"
                            className='w-full aspect-square object-contain rounded-lg border-stroke'
                        />
                    </td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Apple Watch</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>Tech</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>34.295.000 VNĐ</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>420</td>
                    <td className='p-5 text-base font-normal text-start whitespace-nowrap'>

                        <div className="flex items-center gap-5 border border-stroke w-fit px-2.5 py-2 rounded-lg bg-inputPlaceholder">

                            <button className='text-lg'>
                                <FaRegEdit />
                            </button>

                            <button className='text-lg text-textReject'>
                                <RiDeleteBinLine />
                            </button>

                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    );
}
