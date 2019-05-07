import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './car.png';

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img className='logoMenu' src={logo}/>
                <div className='title'>CarrU</div> 
            </div>
            
            <ul className='Header'>
                <li><NavLink to='/#home'>Home</NavLink></li>
                <li><NavLink to='/#LogIn'>LogIn</NavLink></li>
                <li><NavLink to='/#Contact'>Contact</NavLink></li>
            </ul>
            
        </header>
    );
}