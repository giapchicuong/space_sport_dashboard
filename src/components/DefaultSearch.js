import React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function DefaultSearch({ placeholder, onChange, styles }) {
    return (
        <div className={`flex items-center gap-2.5 p-2.5 bg-inputPlaceholderSecond rounded-full ${styles}`}>

            <CiSearch className='text-xl text-textColor' />

            <input
                type="text"
                name="search"
                id="search"
                placeholder={placeholder}
                onChange={onChange}
                className='bg-inputPlaceholder'
            />

        </div>
    );
}
