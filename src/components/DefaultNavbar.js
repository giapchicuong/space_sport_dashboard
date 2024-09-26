import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function DefaultNavbar({ title, linkTo, icon, isActive, iconChild }) {


    return (
        <div className="w-full flex flex-col gap-2">
            <Link
                to={linkTo}
            >
                <div className={`w-full p-2.5 rounded-lg stroke-stroke opacity-90 ${isActive ? 'bg-primary text-white' : 'text-textColor'} delay-100 transition-all cursor-pointer hover:bg-primary hover:text-white`}>
                    <span className='flex items-center gap-5'>
                        {
                            icon &&
                            icon
                        }
                        <div>
                            <p className='text-base font-normal text-center'>{title}</p>
                        </div>

                        {/* <RiArrowDropDownLine className='text-3xl' /> */}

                    </span>

                </div>
            </Link>
            {/* 
            {
                iconChild &&
                iconChild.map((item) =>
                    <Link
                        to={item.linkTo}
                        className={`pl-10 text-base font-normal text-textColor ${item.isActive ? 'text-primary' : 'text-textColor'}`}
                    >
                        {item.title}
                    </Link>
                )
            } */}
        </div >
    );
}
