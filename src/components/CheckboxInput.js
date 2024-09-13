import React from 'react';

export default function CheckboxInput({ name, id, title, checked, onClick }) {
    return (
        <div className='flex gap-2.5'>
            <input
                type="checkbox"
                name={name}
                id={id}
                checked={checked}
                onClick={onClick}
                className='w-4 aspect-square stroke-stroke'
            />
            {title &&
                <label
                    htmlFor={id}
                    className='text-lg font-normal opacity-60 cursor-pointer delay-100 transition-all hover:text-primary'
                >{title}
                </label>
            }
        </div>
    );
}
