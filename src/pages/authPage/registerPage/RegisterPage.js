import React from 'react';
import DefaultButton from '../../../components/DefaultButton';
import { Link } from 'react-router-dom';
import CheckboxInput from '../../../components/CheckboxInput';
import DefaultInput from '../../../components/DefaultInput';

export default function RegisterPage() {
    return (
        <section className='w-full flex flex-col gap-5 '>
            <h1 className='text-[32px] text-center font-bold'>Create an Account</h1>

            <p className='text-lg text-center font-normal'>Create a account to continue</p>

            <form className='flex flex-col gap-5 justify-start items-start'>

                <DefaultInput
                    type='text'
                    id='email'
                    name='email'
                    title='Email address:'
                    placeholder='Enter your email address'
                />

                <DefaultInput
                    type='text'
                    id='username'
                    name='username'
                    title='Username:'
                    placeholder='Enter your username'
                />

                <DefaultInput
                    type='password'
                    id='password'
                    name='password'
                    title='Password:'
                    placeholder='Enter your password'
                />

                <div className="w-full flex items-center justify-between">

                    <CheckboxInput
                        id='conditions'
                        name='conditions'
                        title='I accept terms and conditions'
                        checked
                    />

                    <Link to='/auth'>
                        <p className='text-lg font-normal opacity-60 delay-100 transition-all hover:text-primary'>Forget password?</p>
                    </Link>
                </div>

                <Link to='/auth' className='w-full'>
                    <DefaultButton
                        title='Sign Up'
                    />
                </Link>

                <Link to='/auth' className="w-full flex items-center justify-center gap-2">
                    <p className='text-lg font-normal opacity-60'>Already have an account?   </p>

                    <span className='text-lg font-normal opacity-90 text-primary underline'>Login</span>
                </Link>


            </form>
        </section>
    );
}
