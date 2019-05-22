import React from 'react'
import './userDashboard.css'

function userDashboard() {
    return (
        <>
            <div className='dashboard'>
                <header className='dashboard-header'>
                    <h1>User Name LastName</h1>
                </header>
                <div className='dashboard-grid'>
                    <div className='dashboard-groups'>
                        <h3>My groups</h3>
                        <div className='groups-table'>
                            <ul className='group-name'>
                                <li>Name</li>
                                <li>BBQ</li>
                                <li>JS Meet up</li>
                                <li>Salsa</li>
                                <li>Basketball Games</li>
                                <li>David Concert</li>
                                <li>Dinner</li>
                            </ul>
                            <ul className='group-description'>
                                <li>Description</li>
                                <li>Going out for BBQ</li>
                                <li>JS Meet up to imporve our skills</li>
                                <li>Salsa meeting having a bit of fun</li>
                                <li>Parents of Basketball team</li>
                                <li>Enjoy Davide banjo playing</li>
                                <li>Friends for dinner</li>
                            </ul>
                        </div>
                        <div className="group one">
                            <a href='#'>
                                <div className='event-title'>
                                    <h3>BBQ</h3>
                                </div>
                                <ul>
                                    <li>Date</li>
                                    <li>Location</li>
                                    <li>Info</li>
                                </ul>
                            </a>
                        </div>
                        <div className="group two"><a href='#'>
                                <div className='event-title'>
                                    <h3>Parents</h3>
                                </div>
                                <ul>
                                    <li>Date</li>
                                    <li>Location</li>
                                    <li>Info</li>
                                </ul>
                            </a>
                        </div>
                        <div className="group three"><a href='#'>
                                <div className='event-title'>
                                    <h3>Meet up</h3>
                                </div>
                                <ul>
                                    <li>Date</li>
                                    <li>Location</li>
                                    <li>Info</li>
                                </ul>
                            </a>
                        </div>
                        <div className="group four"><a href='#'>
                                <div className='event-title'>
                                    <h3>Salsa</h3>
                                </div>
                                <ul>
                                    <li>Date</li>
                                    <li>Location</li>
                                    <li>Info</li>
                                </ul>
                            </a>
                        </div>
                        <div className="group five">
                            <a href='#'>
                                <div className='event-title'>
                                    <h3>Davide Concert</h3>
                                </div>
                                <ul>
                                    <li>Date</li>
                                    <li>Location</li>
                                    <li>Info</li>
                                </ul>
                            </a></div>
                        <div className="group six">
                            <a href='#'>
                                <div className='event-title'>
                                    <h3>Dinner</h3>
                                </div>
                                <ul>
                                    <li>Date</li>
                                    <li>Location</li>
                                    <li>Info</li>
                                </ul>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}





export default userDashboard