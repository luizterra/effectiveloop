import React from 'react';
import logo from '../assets/867085d0-a492-4d81-b5c7-a1195d930390.webp';

import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img src={logo} alt="Logo" className="logo" />
                <nav className="nav">
                    <a href="https://www.effectiveloop.com/" className="nav-link">Home</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
