import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id="nav-bar">
        <h1>Jo'siYa Restaurant</h1>
            <nav>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/oderOnline'>Oder Online</Link></li>
                <li><Link to='/testimonials'>Testimonials</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;