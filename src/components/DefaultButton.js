import React from 'react';

export default function DefaultButton({ title, onClick }) {
    return (
        <button
            type='button'
            className='w-full p-4 rounded-lg stroke-stroke opacity-90 bg-primary delay-100 transition-all cursor-pointer hover:bg-hoverInput'
            onClick={onClick}
        >
            <p className='text-xl font-bold text-white text-center'>{title}</p>
        </button>
    );
}
