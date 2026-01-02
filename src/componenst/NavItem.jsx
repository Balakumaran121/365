import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, onClick, children, variant = "desktop" }) => {
    return (
        <NavLink to={to} onClick={onClick} className={({ isActive }) => {
            if (variant === 'mobile') {
                return isActive ? 'text-green-500 text-lg font-semibold' :
                    "text-lg font-medium"
            }
            return `text-lg font-medium border-b-2 pb-2 transition-all duration-200 ${isActive?'text-green-700 border-green-700':"border-transparent text-gray-700 hover:text-green-600 hover:border-green-600"}`
        }}>
            {children}
        </NavLink>
    )
}

export default NavItem
