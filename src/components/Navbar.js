import React, { useState } from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { navLinks } from '../constants/index'
function Navbar() {

    const [active, setActive] = useState('')
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className={`padding:${styles.paddingX} w-full sm:px-16 px-6 flex items-center py-5 fixed top-0 z-20 bg-primary `}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link className='flex items-center gap-2' to="/" onClick={() => {
                    setActive("")
                    window.scrollTo(0, 0)
                }}>
                    <img alt='logo' src={logo} className='w-20 h-20 object-contain rounded-full' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>H &nbsp; <span className='sm:block hidden'>| MERN Developer</span></p>
                </Link>
                <ul className='list-none sm:flex hidden flex-row gap-10'>
                    {navLinks.map((link) =>
                        <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {
                            setToggleMenu(false)
                            setActive(link.title)
                        }}>
                            <Link to={`${link.id}`}>{link.title}</Link>
                        </li>
                    )}
                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img alt='menu' onClick={() => setToggleMenu(!toggleMenu)} src={toggleMenu ? close : menu} className='cursor-pointer w-[28px] h-[28px] object-contain' />
                    {toggleMenu && (<div className='flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'>
                        <ul className='list-none sm:hidden flex flex-col gap-10'>
                            {navLinks.map((link) =>
                                <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {
                                    setToggleMenu(false)
                                    setActive(link.title)
                                }}>
                                    <Link to={`${link.id}`}>{link.title}</Link>
                                </li>
                            )}
                        </ul>
                    </div>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar