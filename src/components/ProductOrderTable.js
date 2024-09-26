import React from 'react'
import ProductOrderItem from '../sections/appPage/ProductOrderItem'

export default function ProductOrderTable({ data }) {
    return (
        <div className='w-full flex flex-col gap-5'>

            {
                data && data.map((item, index) =>

                    <ProductOrderItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}

                    />
                )
            }

        </div>
    )
}
