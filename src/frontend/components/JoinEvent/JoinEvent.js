import React from "react";
import { NavLink } from 'react-router-dom';
// import css when ready


export default class JoinEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPassenger: true,
            isDriver: false,
            driverBlockVisible: false,
            seats: 0,
            additional: 0
        };
    }

    showDriverBlock() {
        this.setState({
            isPassenger: !this.state.isPassenger,
            isDriver: !this.state.isDriver,
            driverBlockVisible: !this.state.driverBlockVisible
        });
    }

    hideDriverBlock() {
        this.setState({
            isPassenger: true,
            isDriver: false,
            driverBlockVisible: false
        });
    }

    changeSeats(e) {
        this.setState({seats: e.target.value})
    }

    changeAdditional(e) {
        this.setState({additional: e.target.value})
    }

    render() {
        //conditional rendering
        return (
            <div className='invitation'>
                <h3>You are invited to a NewEventName</h3>
                
                <p>NewEventName(var) is at Location</p>
                <p>Are you a passenger or are you driving a car to the event?</p>
                <p>Please select:</p>
                <form>
                    <div className='input-field'>
                    <input type="checkbox"
                        checked={this.state.isPassenger}
                        value="passenger"
                        // defaultChecked
                        onChange={() => this.hideDriverBlock()}
                    />
                        <p>I am a passenger</p>
                    </div>
                    
                    <div className='input-field'>
                    <input type="checkbox"
                        checked={this.state.isDriver}
                        value="driver" 
                        // defaultChecked={this.state.chkbox}
                        onChange={() => this.showDriverBlock()}
                    />
                        I will drive a car to the event
                
                    
                    </div>
                    <div className='input-field'>
                    {
                        this.state.driverBlockVisible &&

                        <div className='passengers-option'>
                            <input type="text"
                                name="user"
                                value={this.state.seats}
                                onChange={(e) => this.changeSeats(e)}
                            />
                            Total number of seats in car (including driver)
                            
                            <input type="text"
                                name="user"
                                value={this.state.additional}
                                onChange={(e) => this.changeAdditional(e)}
                            />
                            Additional seats required by driver
                            
                        </div>
                    }
                    </div>
                    
                    <button>Reset</button>
                    <NavLink to='/user-dashboard'><button>Submit</button></NavLink>
                    <NavLink to='/user-dashboard'><button>Cancel</button></NavLink>
                </form>

            </div>
        );
    }
}