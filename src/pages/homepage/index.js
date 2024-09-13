import React from 'react'
import HeaderFlatform from '../../components/HeaderFlatform'
import { Outlet, useLocation } from 'react-router-dom'

export default function HomePage() {
    const { pathname } = useLocation()

    return (
        <div>
            <HeaderFlatform />

            {
                pathname === '/flatform' ? 'Flatform page' : <Outlet />
            }
        </div>
    )
}

