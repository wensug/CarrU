import React from 'react';
import {NavLink} from 'react-router-dom';
import './userDashboard.css';
import EventDashboard from './EventDashboard';
import GroupDashboard from './GroupDashboard';
import events from '../data/events-get.js';
import groups from '../data/groups-get.js';

class userDashboard extends React.Component {

    render(){
    return (
        
            <div className='dashboard'>
                <header className='dashboard-header'>
                    <h1>User Name LastName</h1>
                </header>
                <div className='groups'>
                    <h3>My groups</h3> 
                    {
                    groups()
                        .map((group)=> {
                            return(<GroupDashboard 
                                    name={group.name}
                                    description={group.description}
                                    />); 
                            })
                    
                    }
                    <button className='buttonNew'><NavLink to='/new-group-form'>New Group</NavLink></button>
                    <button className='buttonNew'><NavLink to='/join-event'>Join an existing event</NavLink></button>
                </div>
                <div className='dashboard-grid'>
                    <div className='dashboard-groups'>
                        {
                            events()
                                .map((event)=>{
                                    return (<EventDashboard
                                        id={event.id}
                                        name={event.name}
                                        group={event.group}
                                        location={event.location}
                                        date={event.date}/>
                            );
                        })
                        }
                    </div>
                    <button className='buttonNew'><NavLink to='/new-event-form'>New Event</NavLink></button>
                </div>
                
            </div>
        )
    }
}



export default userDashboard