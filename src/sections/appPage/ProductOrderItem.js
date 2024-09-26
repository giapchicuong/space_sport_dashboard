import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { HiMiniMinus } from 'react-icons/hi2'
import { MdDelete } from 'react-icons/md'

export default function ProductOrderItem({ image, title, quantity, price, onClickPlus, onClickMinus, onDelete }) {
    return (

        <div className="flex items-center justify-between gap-5 shadow-sm bg-slate-100 rounded-lg p-2.5">
            <img
                src={image}
                alt={title}
                className='w-20 object-cover rounded-lg'
            />

            <div className="w-[150px] truncate text-lg font-normal">{title}</div>

            <div className="w-[150px] truncate text-lg font-normal">{price}</div>

            <div className="flex items-center gap-2.5">

                <button className='text-lg'>

                    <BsPlus onClick={onClickPlus} />
                </button>

                <p className='text-lg font-bold'>{quantity}</p>

                <button className='text-lg text-textReject'>
                    <HiMiniMinus onClick={onClickMinus} />
                </button>
            </div>

            <button className='text-lg text-textReject' onClick={onDelete}>

                <MdDelete />
            </button>
        </div>

    )
}
