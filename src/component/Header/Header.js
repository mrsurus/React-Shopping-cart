import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <a href="">Order</a>
                    <a href="">Shop</a>
                    <a href="">Invertery</a>
                    <a href="">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;