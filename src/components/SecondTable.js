import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function SecondTable({ thead, tbody }) {
    return (
        <table class="table-auto w-full h-full text-textColor">
            <thead className='bg-inputPlaceholder'>
                <tr>
                    {
                        thead && thead.map((item, index) =>

                            <th className='p-5 text-base font-bold text-start whitespace-nowrap first:rounded-l-xl last:rounded-r-xl'>{item.title}</th>
                        )
                    }

                </tr>
            </thead>
            <tbody>

                {
                    tbody && tbody.map((item, index) =>

                        <tr key={index}>
                            {
                                item.data && item.data.map((item, index) =>
                                    <>
                                        {
                                            item.image &&

                                            <td className='w-[50px] p-5 text-base font-normal text-start whitespace-nowrap'>

                                                <img
                                                    src={item.image}
                                                    alt={item.image}
                                                    className='w-full aspect-square object-cover rounded-lg border-stroke'
                                                />
                                            </td>
                                        }

                                        {
                                            item.title &&

                                            <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.title}</td>
                                        }
                                    </>
                                )
                            }
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
                    )
                }

            </tbody>
        </table>
    );
}
