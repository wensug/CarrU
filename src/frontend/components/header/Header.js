import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


export default function Header() {
    return (
        <header>
            <ul className='header'>
                <li><NavLink to='/'>CarrU</NavLink></li>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/user-login'>LogIn</NavLink></li>
                <li><NavLink to='/'>Contact</NavLink></li>
            </ul>
        </header>
    );
}