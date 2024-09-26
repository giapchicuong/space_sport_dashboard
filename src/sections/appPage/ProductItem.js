import React from 'react'
import DefaultButton from '../../components/DefaultButton'
import { FaStar } from 'react-icons/fa'

export default function ProductItem({ image, title, price, quantity, onClick }) {
    return (
        <button className="flex flex-col gap-2 p-5 bg-white aspect-square rounded-lg shadow-sm hover:opacity-70 hover:shadow-xl  transition-all duration-300" onClick={onClick}>

            <img
                src={image}
                alt={title}
                className='aspect-square rounded-lg object-cover'
            />

            <div className="w-full flex justify-between gap-2.5">

                <div className="flex flex-col items-start flex-1">

                    <p className='text-lg font-bold'>{title}</p>

                    <p className='text-lg font-bold text-primary'>{price} VNĐ</p>
                </div>

                <div>
                    <DefaultButton title='+' />
                </div>

            </div>
            <div className='flex items-center gap-2.5'>

                <div className="flex items-center gap-2.5">
                    <FaStar className='text-lg text-yellow-400' />
                    <FaStar className='text-lg text-yellow-400' />
                    <FaStar className='text-lg text-yellow-400' />
                    <FaStar className='text-lg text-yellow-400' />
                    <FaStar className='text-lg text-yellow-400' />
                </div>

                <p className='text-sm font-semibold text-gray-400'>({quantity})</p>
            </div>

        </button>
    )
}
