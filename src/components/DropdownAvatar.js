// dropdown select component

import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'
import CircleImage from './CircleImage';

export default function DropdownAvatar({ title, data, handleClick, valueSelected, name, full, center }) {
    const [isOpen, setIsOpen] = useState(false); // show dropdown

    const dropdownRef = useRef(null);

    // handle toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // handle click outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='relative z-50' ref={dropdownRef}>

                <button
                    type='button'
                    onClick={toggleDropdown}
                    className="flex items-center gap-2.5 p-2.5 rounded-full transition-all duration-100 cursor-pointer hover:bg-inputPlaceholder"
                >

                    <CircleImage
                        title='avatar'
                        width='w-[44px]'
                        image='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1726358400&semt=ais_hybrid'
                    />
                    <div

                        className="flex items-center gap-5"
                    >

                        <div className="flex flex-col gap-1">

                            <p className='text-sm font-semibold text-textColor'>Giap Chi Cuong</p>
                            <p className='text-xs font-semibold text-textColor opacity-60'>Admin</p>
                        </div>

                        {!isOpen
                            ? <IoIosArrowDropdown className='text-lg text-textColor opacity-60' />
                            : <IoIosArrowDropup className='text-lg text-textColor opacity-60' />
                        }

                    </div>

                    {
                        isOpen
                        &&
                        <div className='absolute top-full inset-x-0 border translate-x-1  z-0 rounded-lg flex flex-col bg-white'>
                            {
                                data?.map(item =>
                                    <button
                                        type='button'
                                        key={item.id}
                                        onClick={() => {
                                            handleClick(item)
                                            toggleDropdown()
                                        }}
                                        className={`flex items-center gap-4 py-2.5 px-2 border-t hover:bg-inputPlaceholder hover:text-textColor  text-sm font-normal first:pt-[15px]  last:rounded-b-lg ${parseInt(valueSelected) === item.id && 'bg-primary text-white'}`}
                                    >
                                        {item.icon}

                                        {item.name}
                                    </button>
                                )
                            }
                        </div>
                    }
                </button>
            </div>
        </>
    )
}