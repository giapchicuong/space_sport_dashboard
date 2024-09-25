import React, { useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';


export default function ButtonCalendar() {
    const [startDate, setStartDate] = useState(new Date());

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
        <div className='relative z-10' ref={dropdownRef}>
            <button onClick={toggleDropdown}>

                <div className="flex items-center justify-between rounded border-stroke bg-inputPlaceholder border px-1 ">

                    <div className="text-xs font-semibold text-stroke">Tháng 10</div>

                    {!isOpen
                        ? <RiArrowDropDownLine className="text-3xl font-semibold text-stroke" />
                        : <RiArrowDropUpLine className="text-3xl font-semibold text-stroke" />}
                </div >

            </button>

            {
                isOpen &&
                <div className="absolute top-full right-0 z-0">

                    <Calendar
                        locale="en-VN"
                        className="p-5 rounded-[10px]"
                        selected={startDate}
                        onClickMonth={(date) => setStartDate(date)}
                        view='year'
                    />
                </div>
            }

        </div>
    )
}
