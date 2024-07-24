import React, { useState } from 'react';
import './Navbar.css';
import toggle from './img/toggle.png'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div>
            <div className="tabnav">
                <div className="navbarDesktop">
                    <ul className='ml-[9%]'>
                        <li><a href="#detail" >About</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="#highlight">Highlight</a></li>
                    </ul>
                    <a href="https://www.mhesifair.com/"><button type="button">Register</button></a>
                </div>
            </div>

            <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
                <img src={toggle} alt="" />
            </button>

            {isMenuOpen ? (
                <div className="navbarMobile">
                    <div className="wrapper">
                        <ul>
                            <li className='my-4'><a href="#detail" onClick={closeMenu}>About</a></li>
                            <li className='my-4'><a href="#schedule" onClick={closeMenu}>Schedule</a></li>
                            <li className='my-4'><a href="#highlight" onClick={closeMenu}>Highlight</a></li>
                            <a href="https://www.mhesifair.com/"><button type="button">Register</button></a>
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Navbar;
