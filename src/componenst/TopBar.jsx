import { useState } from 'react'
import { NAV_ITEMS } from '../constants'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import NavItem from './NavItem';
const TopBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openMenu,setOpenMenu]=useState(false)
    return (
        <div className='bg-gray-100 py-4 px-6 flex items-center justify-between relative'>
            <h1 className='text-xl font-extrabold text-green-600'>365.in</h1>
            <nav className='hidden md:block'>
                <ul className='flex gap-10'>
                    {
                        NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <NavItem to={item.path} variant="desktop">{item.title}</NavItem>
                            </li>
                        ))
                    }
                </ul>

            </nav>
            <div className='flex items-center gap-4'>
                <div className='relative'>
                    <div className='size-10 rounded-full bg-gray-800' onClick={()=>{setOpenMenu(prev=>!prev)}}/>
                        {
                            openMenu && (
                                <div className='absolute z-10 top-12  bg-gray-300 flex flex-col gap-2 rounded p-2 right-1 text-base font-normal '>
                                    <p>Settings</p>
                                    <p>Profile</p>
                                </div>
                            )
                        }
                </div>
                <button type='button' onClick={() => setMobileOpen((v) => !v)} aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'} className='md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'>
                    {mobileOpen ? (<X className='cursor-pointer' />) : (<Menu className='cursor-pointer' />)}
                </button>
            </div>
            {
                mobileOpen && (
                    <nav className='absolute top-full left-0 w-full h-[calc(100vh-72px)] bg-black text-white p-6 md:hidden'>
                        <ul className='space-y-6'>
                            {NAV_ITEMS.map((item) => (
                                <li key={item.id}>
                                    <NavItem to={item.path} variant="mobile" onClick={() => setMobileOpen(false)}>{item.title}</NavItem>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )
            }
        </div>
    )
}

export default TopBar
