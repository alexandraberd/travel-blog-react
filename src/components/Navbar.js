import React from 'react';
import icon from '../assets/icon.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <img src={icon} className="navbar__logo" />
            <h2>My Travel Blog</h2>
        </nav>
    );
}

export default Navbar;
