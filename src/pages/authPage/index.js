import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import authBackground from '../../assets/images/authBackground.png'
import DefaultInput from '../../components/DefaultInput'
import CheckboxInput from '../../components/CheckboxInput'
import DefaultButton from '../../components/DefaultButton'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { login } from '../../redux/actions/auth.action'
import * as Yup from 'yup'
import { INPUT_REQUIRED } from '../../utils/error'
export default function AuthPage() {
    const { pathname } = useLocation()
    return (
        <main className='relative w-full min-h-screen'>

            <img
                src={authBackground}
                alt="bg"
                className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-50 object-cover w-full h-full'
            />

            <div className='relative z-50 w-full min-h-screen flex justify-center items-center'>

                <div className="min-w-[630px] px-10 py-20 flex bg-white rounded-3xl stroke-stroke">

                    {
                        pathname === '/auth' ? <LoginPage /> : <Outlet />
                    }
                </div>
            </div>
        </main>
    )
}


export function LoginPage() {

    const dispatch = useDispatch()

    const [showError, setShowError] = useState(null)

    const { errorLogin } = useSelector(state => state.auth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required(INPUT_REQUIRED),
            password: Yup.string().required(INPUT_REQUIRED)
        }),

        onSubmit: values => {
            dispatch(login(values))
        }
    })

    useEffect(() => {
        setShowError(!!errorLogin)
    }, [errorLogin])

    return (
        <section className='w-full flex flex-col gap-5 '>
            <h1 className='text-[32px] text-center font-bold'>Login to Account</h1>

            <p className='text-lg text-center font-normal'>Please enter your email and password to continue</p>

            <form className='flex flex-col gap-5 justify-start items-start'>

                <DefaultInput
                    type='text'
                    id='email'
                    name='email'
                    title='Email address:'
                    placeholder='Enter your email address'
                    values={formik.values.email}
                    onChange={(e) => {
                        formik.handleChange(e)
                        setShowError(false)
                    }}
                    error={
                        (formik.errors.email) && formik.errors.email
                    }
                />

                <DefaultInput
                    type='password'
                    id='password'
                    name='password'
                    title='Password:'
                    placeholder='Enter your password'
                    values={formik.values.password}
                    onChange={(e) => {
                        formik.handleChange(e)
                        setShowError(false)
                    }}
                    error={
                        (formik.errors.password) && formik.errors.password
                    }
                />

                <div className="w-full flex items-center justify-between">

                    <CheckboxInput
                        id='remember'
                        name='remember'
                        title='Remember Password'
                        checked
                    />

                    <Link to='/auth'>
                        <p className='text-lg font-normal opacity-60 delay-100 transition-all hover:text-primary'>Forget password?</p>
                    </Link>
                </div>

                <Link to='' className='w-full'>
                    <DefaultButton
                        title='Sign In'
                        onClick={formik.handleSubmit}
                    />
                </Link>

                <Link to='register' className="w-full flex items-center justify-center gap-2">
                    <p className='text-lg font-normal opacity-60'>Don’t have an account?</p>

                    <span className='text-lg font-normal opacity-90 text-primary underline'>Create Account</span>
                </Link>


            </form>
        </section>
    )
}