import React from 'react';
import authBackground from '../assets/images/authBackground.png';
import errorImage from '../assets/images/errorImage.png'
import DefaultButton from './DefaultButton';
import { Link } from 'react-router-dom';
export default function ErrorPage() {
    return (
        <main className='relative w-full min-h-screen'>

            <img
                src={authBackground}
                alt="bg"
                className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-50 object-cover w-full h-full'
            />

            <div className='relative z-50 w-full min-h-screen flex justify-center items-center'>

                <div className="min-w-[630px] px-40 py-20 flex bg-white rounded-3xl stroke-stroke">

                    <div className="w-full flex flex-col items-center justify-center gap-10">
                        <img src={errorImage} alt="errorImage" className='object-contain w-full' />

                        <div className="w-full flex flex-col gap-5">

                            <p className='text-[32px] font-bold'>Looks like you’ve got lost….</p>

                            <Link to='' className='w-full'>
                                <DefaultButton
                                    title='Back to Dashboard'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
