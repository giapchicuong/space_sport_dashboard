import React from 'react'
import DefaultTable from '../../components/DefaultTable'
import { invoiceTable } from '../../mockData'
import { IoPrintOutline } from 'react-icons/io5'
import DefaultButton from '../../components/DefaultButton'

export default function InvoiceDetailsPage() {
    return (
        <main className='w-full h-fit flex flex-col gap-5'>

            <h1 className="text-[32px] font-semibold">Chi tiết đơn hàng</h1>

            <div className="w-full h-full p-10 rounded-lg bg-white">

                <div className="flex flex-col gap-10">

                    <div className="flex justify-between">

                        <div className="flex items-center gap-2.5">

                            <p className='text-base font-normal'>Hóa đơn từ</p>

                            <p className='text-base font-bold'>Giáp Chí Cường</p>

                        </div>


                        <div className="flex items-center gap-2.5">

                            <p className='text-base font-normal'>Ngày lập</p>

                            <p className='text-base font-bold'>30/09/2024</p>
                        </div>
                    </div>

                    <DefaultTable thead={invoiceTable.thead} tbody={invoiceTable.tbody} />

                    <div className="w-full flex justify-end items-center gap-2.5">

                        <p className='text-lg font-bold'>Tổng tiền</p>

                        <p className='text-lg font-bold'>=</p>

                        <p className='text-lg font-normal'>30.000</p>
                    </div>

                    <div className="w-full flex justify-end items-center gap-2.5">

                        <DefaultButton
                            widthFull={false}
                            title={<IoPrintOutline />}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
