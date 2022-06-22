import React, { FC, useState } from 'react';
import './Navbar.sass';

import { FaBars, FaTimes } from 'react-icons/fa';



const Logo = require("../../images/logo.png");

const Navbar: FC = () => {

    const [click, setClick] = useState<boolean>(false);

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (): void => {
        setClick(!click);
    }

    return (
        <header className='header'>
            <nav className='navbar'>

                <a href="/" className='logo'>
                    <img src={Logo} alt="logo" />
                </a>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="">About</a>
                    </li>
                    <li className='nav-item'>
                        <a href="">Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href="">Demo</a>
                    </li>
                </ul>

                <div className='humburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'white' }} />) : (<FaBars size={30} style={{ color: 'white' }} />)}
                </div>

            </nav>
        </header>
    )
}

export default Navbar;