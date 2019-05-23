import React from 'react';
import groups from '../data/groups-get.js';
import {NavLink} from 'react-router-dom';
import './userDashboard.css';

export default function EventDashboard(event) {
    
    return (
       
        <>
            <a className='event'> <NavLink to= '/new-event-form' href='#'>
                <div className='event-title'>
                    <h3>{event.name}</h3>
                    <h5>{groups().find((group)=>(group.id === event.group)).name}</h5>
                </div>
                <ul>
                    <li>{event.date}</li>
                    <li>{event.location}</li>
                    <li>Info</li>
                </ul>
                </NavLink>
            </a>
        </>
    );
}