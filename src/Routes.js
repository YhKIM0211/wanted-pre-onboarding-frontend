import React from 'react'
import { Navigate, Outlet } from 'react-router'

export const Private = () => {
    const authenticated = JSON.parse(localStorage.getItem('token'));
    return (
        authenticated ? <Outlet /> : <Navigate to='/signin' />
    )
}

export const Public = () => {
    const authenticated = JSON.parse(localStorage.getItem('token'));
    return (
        authenticated ? <Navigate to='/todo' /> : <Outlet />
    )
}