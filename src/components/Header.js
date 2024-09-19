import React from 'react'
import DefaultSearch from './DefaultSearch'
import CircleImage from './CircleImage'
import { IoIosArrowDropdown, IoIosLogOut } from 'react-icons/io'
import DropdownAvatar from './DropdownAvatar'
import { RiUserSettingsLine } from 'react-icons/ri'
import { PiKeyBold } from 'react-icons/pi'

export default function Header() {
    return (
        <header className='w-full px-8 py-4 flex items-center justify-between'>

            <DefaultSearch
                placeholder='Search'
                styles='w-[388px]'
            />


            <DropdownAvatar
                data={[
                    {
                        id: 1,
                        name: 'Quản lý tài khoản',
                        icon: <RiUserSettingsLine className='text-xl text-primary' />
                    },
                    {
                        id: 2,
                        name: 'Quên mật khẩu',
                        icon: <PiKeyBold className='text-xl text-uptrend' />
                    },
                    {
                        id: 3,
                        name: 'Đăng xuất',
                        icon: <IoIosLogOut className='text-xl text-downtrend' />
                    },
                ]}
            />
        </header>
    )
}
