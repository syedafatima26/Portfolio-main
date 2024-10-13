import React from 'react';
import logo from './images/Logo.png';
import './Navbar.css';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
            <img src={logo} alt="logo" /></div>
            <div className="website-name">Syeda Fatima Mansoor Portfolio</div>
            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
