import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


export default function Header() {
    return (
        <header>
            <ul className='header'>
                <li><NavLink to='/#home'>CarrU</NavLink></li>
                <li><NavLink to='/#home'>Home</NavLink></li>
                <li><NavLink to='/#LogIn'>LogIn</NavLink></li>
                <li><NavLink to='/#Contact'>Contact</NavLink></li>
            </ul>
            
        </header>
    );
}