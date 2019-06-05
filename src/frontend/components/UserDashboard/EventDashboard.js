import React from 'react';
import {NavLink} from 'react-router-dom';
import './userDashboard.css';

export default class EventDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            groups: []
        };
    }
    
    componentDidMount() {
        fetch(`/rest/groups`)
        .then(response => response.json())
        .then(groups => this.setState({ groups }));
      }
    
    render() {
        return (
            <>
                <a className='event'>
                    <NavLink to= '/new-event-form' href='#'>
                    <div className='event-title'>
                        <h3>{this.props.eventName}</h3>
                        {
                            this.state.groups.length <= 0 ?
                                <div></div>  :
                                <h5>{this.state.groups.find((group)=>(group._id === this.props.groupId)).groupName}</h5> 
                        }
                        <p>Info</p>
                    </div>
                
                    </NavLink>
                </a>
            </>
        );
    }
}