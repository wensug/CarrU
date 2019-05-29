import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    return (
        <footer className='page-footer'>
        <div className='footer-main'>
            <ul className='footer-navbar'>
               <li><a>about</a></li>
                
            </ul>
            <div className='footer-media'>
                <a><i class="fab fa-facebook"></i></a>
                <a><i class="fab fa-instagram"></i></a>
                <a><i class="fab fa-twitter"></i></a>
                <a><i class="fab fa-youtube"></i></a>
            </div>
        </div>
        <div className='footer-text'><p>© 2019 CarrU | All Rights Reserved</p></div>
    </footer>
    );
}