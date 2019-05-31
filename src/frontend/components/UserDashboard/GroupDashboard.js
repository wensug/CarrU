import React from 'react';
import './userDashboard.css'
export default function GroupDashboard(group) {

    
    return (
        <>
            <a href='#/new-group-form'>
                <div className='groups-table'>
                    <ul className='group-name'>
                        <li>{group.groupName}</li>
                    </ul> -
                    <ul className='group-description'>
                        <li>{group.groupDescription}</li>
                    </ul>
                </div>
            </a>
        </>
    );
}