import React, { useEffect, useRef, useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

export default function DropdownSelect({ title, data, handleClick, valueSelected, name, full, center }) {
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
            <div className='relative z-10' ref={dropdownRef}>
                <button
                    type='button'
                    onClick={toggleDropdown}
                    className={`min-h-[42px] flex items-center ${center ? 'justify-center' : 'justify-between'}  text-sm font-bold gap-2.5 px-5 py-2.5 rounded-[10px] whitespace-nowrap relative z-10 bg-white min-w-[130px] ${full && 'w-full'}`}
                >
                    <span>
                        {name || title}
                    </span>

                    {!isOpen ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
                </button>

                {
                    isOpen
                    &&
                    <div className='absolute top-full left-0  inset-x-0 pt-[5px] -translate-y-3 z-0 rounded-b-[10px] flex flex-col bg-white'>
                        {
                            data?.map(item =>
                                <button
                                    type='button'
                                    key={item.id}
                                    onClick={() => {
                                        handleClick(item)
                                        toggleDropdown()
                                    }}
                                    className={`py-2.5 hover:bg-primary hover:text-white first:pt-[15px]  last:rounded-b-[8px] ${parseInt(valueSelected) === item.id && 'bg-primary text-white'}`}
                                >
                                    {item.name}
                                </button>
                            )
                        }
                    </div>
                }
            </div>
        </>
    )
}