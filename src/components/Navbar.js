import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/post">Post</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
