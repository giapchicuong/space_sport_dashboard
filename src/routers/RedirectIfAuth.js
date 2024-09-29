// navigate when check status login

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function RedirectIfAuth({ children }) {
    const { isAuthenticated, userRole } = useSelector(state => state.auth)

    const isNavigateTo = (role) => { // navigate to ...
        switch (parseInt(role)) {
            case 1:
                return '/helpdesk'
            case 2:
                return '/helpdesk'
            case 3:
                return '/admin'
            case 4:
                return '/'
            case 5:
                return '/helpdesk'
            default:
                return '/auth';
        }
    }

    return isAuthenticated ? <Navigate to={isNavigateTo(userRole)} /> : children
}