import React from 'react';
import logo from '../assets/867085d0-a492-4d81-b5c7-a1195d930390.webp';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} alt="Digital Logo" className="footer-logo" />
                    <p className="footer-email"><a href="mailto:luizterra@hotmail.com" className="footer-link">luizterra@hotmail.com</a></p>
                    <p className="footer-location">Salt Lake City, UT</p>
                </div>
                <div className="footer-right">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="footer-link">LinkedIn</a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" className="footer-link">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
