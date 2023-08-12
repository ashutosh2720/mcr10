import React from 'react'
import { NavLink } from 'react-router-dom'

function LeftSide() {
    return (
        <div className='bg-gray-600 fixed text-white font-serif w-[280px] h-screen flex flex-col justify-around items-center'>
            <NavLink to={'/'}>
                <h1 className='text-lg cursor-pointer'>DashBoard</h1>
            </NavLink>
            <NavLink to={'/departments'}>
                <h1 className='text-lg cursor-pointer'>DepartMents</h1>
            </NavLink>
            <NavLink to={'/products'}>
                <h1 className='text-lg cursor-pointer'>Products</h1>
            </NavLink>



        </div>
    )
}

export default LeftSide
