import React from 'react';
import img_1 from '../../images/carru1.png';
import img_2 from '../../images/carru2.jpg';
import './Homepage.css'


export default class Homepage extends React.Component {
    render() {
        return (
            <div className='Homepage'>
                <div className='Homepage-section' >
                    <div className='Homepage-text'>
                        <h1>CarrU</h1>
                        <p>Are you a big group? Need help to organise a trip? CarrU is your solution!</p>
                    </div>
                    <div className='Homepage-img'>
                        <img
                            src={img_2}
                            alt='peoplecar'
                        />
                    </div>
                    <div className='Homepage-arrow'></div>
                    <div className='Homepage-img'>
                        <img
                            src={img_1}
                            alt='peoplecars'
                        />
                    </div>
                </div>
                <div className='Homepage-section'>
                    <div className='Homepage-text'> 
                        <h1>Manage your event more easily</h1>
                        <p>If you need to arrange transport for a group, match drivers with passagers
                            in different locations, and sort it quickly.
                        </p>
                    </div>
                    <ol className='Homepage-ticklist'>
                        <li>Organise the group</li>
                        <li>Create the events</li>
                        <li>Manage the event</li>
                    </ol>
                </div>
            </div>
        );
    }

}