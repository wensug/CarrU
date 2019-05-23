import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return(
        <div>
            <h1>The page does not exist.</h1>
            <NavLink to='/'>Back to CarrU home</NavLink>
        </div>
        
    );
}

