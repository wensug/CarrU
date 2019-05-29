import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


export default function Header() {
    return (
        <header className='page-header'>
            <ul className='header'>
                <li><NavLink to='/'>CarrU</NavLink></li>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/user-login'>LogIn</NavLink></li>
                
            </ul>
        </header>
    );
}