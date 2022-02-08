import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/app-logo.png';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='game__navbar'>
            <div className='game__navbar-links'>
                <div className='game__navbar-links_logo'>
                    <img src={ logo } alt="logo" />
                </div>
                <div className='game__navbar-links_container'>
                    <a href="#"><p>About</p></a>
                    <a href="https://github.com/d1joseph/SuperChessKnightGame" target='_'><p>Repo</p></a>
                </div>
            </div>
            <div className='game__navbar-menu'>
                {toggleMenu
                  ? <RiCloseLine color="#f93C01" size={27} onClick={() => setToggleMenu(false)} />
                  : <RiMenu3Line color="#f93C01" size={27} onClick={() => setToggleMenu(true)} />}  
                {toggleMenu && (
                <div className='game__navbar-menu_container scale-up-center'>
                    <div className="game__navbar-menu_container-links">
                        <a href="#"><p>About</p></a>
                        <a href="https://github.com/d1joseph/SuperChessKnightGame" target='_'><p>Repo</p></a>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;