import React from 'react';

export default function DefaultInput({ title, name, id, placeholder, type, onChange, error }) {
    return (
        <div className="w-full flex flex-col gap-2.5">

            <label htmlFor={id} title={title} name={name} className='text-lg font-semibold delay-100 transition-all cursor-pointer hover:text-primary'>{title}</label>

            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={`w-full p-4 bg-inputPlaceholder border rounded-lg  ${error && 'border border-textReject'}`}
                onChange={onChange}
            />

            {
                error &&
                <p className='text-lg font-normal text-textReject'>{error}</p>
            }
        </div>
    );
}
