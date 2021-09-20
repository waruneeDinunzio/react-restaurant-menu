import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id="nav-bar">
            <div className="logo">
                <h1>Jo'siYa <br/>Vegetarian Restaurant</h1>
            </div>
            <div>
                <nav>
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/oderOnline'>Order Online</Link></li>
                    <li><Link to='/testimonials'>Healthy recipes</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;