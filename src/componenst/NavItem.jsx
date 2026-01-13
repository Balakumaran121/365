import { NavLink } from 'react-router-dom'

const NavItem = ({ to, onClick, children, variant = "desktop" }) => {
    return (
        <NavLink to={to} onClick={onClick} className={({ isActive }) => {
            if (variant === 'mobile') {
                return isActive ? 'text-pharlap-500 text-lg font-semibold' :
                    "text-lg font-medium"
            }
            return `text-lg font-medium border-b-2 pb-2 transition-all duration-200 ${isActive?'text-pharlap-700 border-pharlap-700':"border-transparent text-gray-700 hover:text-pharlap-600 hover:border-pharlap-600"}`
        }}>
            {children}
        </NavLink>
    )
}

export default NavItem
