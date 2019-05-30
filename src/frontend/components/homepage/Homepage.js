import React from 'react';
import img_1 from '../../images/carru3.png';
import img_2 from '../../images/image1.svg';
import { NavLink } from 'react-router-dom';
import './Homepage.css'


export default class Homepage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <div className='homepage-section' >
                    <div className='homepage-text'>
                        <h1>CarrU</h1>
                        <p>Are you a big group? Need help to organise a trip? CarrU is your solution!</p>
                    </div>
                    <div className='img-section'>
                        <div className='homepage-img box'>
                            <img src={img_1} alt='peoplecar' />
                        </div>
                        <div className='homepage-arrow box'>
                            <i class="fas fa-arrow-down"></i>
                        </div>
                        <div className='homepage-img box'>
                            <img src={img_2} alt='peoplecars' />
                        </div>
                    </div>
                </div>
                <div className='homepage-section'>
                    <div className='homepage-text'>
                        <h1>Manage your event more easily</h1>
                        <p>If you need to arrange transport for a group, match drivers with passengers
                            in different locations and sort it quickly.
                        </p>
                    </div>
                    <ul className='homepage-ticklist'>
                        <li><i class="far fa-check-circle" id='one'></i>
                            <a>Organise the group</a>
                            <p>Gather some friends and take a car trip!</p>
                        </li>
                        <li><i class="far fa-check-circle" id='two'></i>
                            <a><b>Create the events</b></a>
                            <p>Create the event, manage the calendar and add people to the event</p>
                        </li>
                        <li><i class="far fa-check-circle" id='three'></i>
                            <a>Manage the event</a>
                            <p>Check how many people need a ride and reduce the number of cars for the event</p>
                        </li>
                    </ul>
                </div>
                
            </div>
        );
    }

}