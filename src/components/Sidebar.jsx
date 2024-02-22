import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

import logo from '../assets/react.svg'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {

    const [menuActive,setMenuActive] = useState(false);

    return (
        <div className="sidebar">
            <div className="logo flex justify-center p-4">
                <img src={logo} alt="Logo de react" className="w-12 sm:w-16"/>
            </div>

            <div className="logo flex justify-center p-4 sm:hidden" onClick={() => setMenuActive(!menuActive)}>
                {
                    menuActive ? (<IoClose size={40}/>) : (<FiMenu size={40}/>)
                }
            </div>
            {/* ${activado ? 'header-open':'header-close'} */}
            <nav className={`${menuActive ? 'menu-open':'hidden'} sm:static sm:flex sm:flex-col`}>
                <NavLink to="/" className='menu-item'>
                    Home
                </NavLink>
                <NavLink to="/vista1" className='menu-item'>
                    Vista 1
                </NavLink>
                <NavLink to="/vista2" className='menu-item'>
                    Vista 2
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar