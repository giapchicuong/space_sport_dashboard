import React from 'react'
import { Link } from 'react-router-dom'
import DefaultSearch from './DefaultSearch'
import CircleImage from './CircleImage'
import { IoIosArrowDropdown } from 'react-icons/io'

export default function Header() {
    return (
        <header className='w-full px-8 py-4 flex items-center justify-between'>

            <DefaultSearch
                placeholder='Search'
                styles='w-[388px]'
            />

            <div className="flex items-center gap-2.5 p-2.5 rounded-full transition-all duration-100 cursor-pointer hover:bg-inputPlaceholder">

                <CircleImage
                    title='avatar'
                    width='w-[44px]'
                    image='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1726358400&semt=ais_hybrid'
                />

                <div className="flex items-center gap-5">

                    <div className="flex flex-col gap-1">

                        <p className='text-sm font-semibold text-textColor'>Giap Chi Cuong</p>
                        <p className='text-xs font-semibold text-textColor opacity-60'>Admin</p>
                    </div>

                    <IoIosArrowDropdown className='text-lg text-textColor opacity-60' />

                </div>

            </div>
        </header>
    )
}
