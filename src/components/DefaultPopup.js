
import React from 'react'

export default function DefaultPopup({ children, handleShow, width, title }) {
    return (
        <>
            <div className='fixed inset-0 flex justify-center items-center bg-popup z-40 bg-bgBlur'></div>

            <div className='max-h-[697px] overflow-y-auto overflow-x-hidden bg-white rounded-[5px] p-[30px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hide-scroll'>
                {
                    title && <h2 className='text-center text-[26px] font-bold text-dark-ray mb-5'>{title}</h2>
                }

                <div
                    className='flex flex-col gap-5 items-center text-start'
                    style={{ width: width ? width : '794px' }}
                >
                    {children}
                </div>
            </div>
        </>
    )
}