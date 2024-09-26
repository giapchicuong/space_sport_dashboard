import React from 'react'
import Header from '../../components/Header'
import DefaultButton from '../../components/DefaultButton'
import { productMenu, productOrderMenu, } from '../../mockData'
import ProductOrderTable from '../../components/ProductOrderTable'
import ProductItem from '../../sections/appPage/ProductItem'
import DropdownSelect from '../../components/DefaultDropdown'
import DefaultInput from '../../components/DefaultInput'

export default function MenuPage() {

    const paymentDropdown = [
        {
            id: 1,
            name: 'Tiền mặt'
        },
        {
            id: 2,
            name: 'Chuyển khoản'
        },
        {
            id: 3,
            name: 'Nợ'
        },
    ]


    return (

        <main className="w-full h-screen flex flex-col justify-center items-stretch hide-scroll">

            <div className="flex items-center gap-5">

                <div className='flex justify-center  items-center gap-1 pl-10'>

                    <p className='text-xl font-extrabold text-primary'>Space</p>

                    <p className='text-xl font-extrabold'>Spost</p>

                </div>

                <Header />
            </div>

            <div className="flex w-full h-screen bg-bgProduct overflow-hidden">

                <div className="flex-9 w-full p-5 flex flex-col flex-grow-0 hide-scroll overflow-y-auto">

                    <div className="grid grid-cols-4 gap-5">

                        {
                            productMenu && productMenu.map((item, index) =>

                                <ProductItem
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            )
                        }
                    </div>
                </div>

                <div className="flex-3 p-5 flex flex-col gap-10 shadow-xl h-full">

                    <div className="text-3xl font-normal text-center">Đơn đặt hàng</div>

                    <div className="w-full h-full hide-scroll overflow-y-auto">

                        <ProductOrderTable data={productOrderMenu} />

                    </div>


                    <div className="flex flex-col gap-2.5">

                        <div className="flex items-center justify-between">

                            <p className='text-xl font-normal'>Tổng tiền</p>

                            <p className='text-xl font-normal'>30.000 VNĐ</p>

                        </div>

                        <DefaultInput
                            placeholder='Nhập mô tả hóa đơn'
                        />

                        <div className="flex items-center justify-between">

                            <p className='text-xl font-normal'>Phương thức thanh toán</p>

                            <DropdownSelect title='Tiền mặt' data={paymentDropdown} />

                        </div>


                    </div>

                    <DefaultButton title='Thanh toán' />

                </div>
            </div>
        </main >
    )
}
