import React from "react";
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
            <div>
                <h3>You are invited to a NewEventName(var)</h3>
                <p>NewEventName(var) is at Location(var)<br /><br /></p>
                <p>Are you a passenger or are you driving a car to the event?
                    <br />Please select: 
                </p>
                <form>
                    <input type="checkbox"
                        checked={this.state.isPassenger}
                        value="passenger"
                        // defaultChecked
                        onChange={() => this.hideDriverBlock()}
                    />
                        &nbsp;I am a passenger
                    <br />
                    <input type="checkbox"
                        checked={this.state.isDriver}
                        value="driver" 
                        // defaultChecked={this.state.chkbox}
                        onChange={() => this.showDriverBlock()}
                    />
                        &nbsp;I will drive a car to the event
                    <br />
                    {
                        this.state.driverBlockVisible &&

                        <div>
                            <input type="text"
                                name="user"
                                value={this.state.seats}
                                onChange={(e) => this.changeSeats(e)}
                            />
                            &nbsp;Total number of seats in car (including driver)
                            <br />
                            <input type="text"
                                name="user"
                                value={this.state.additional}
                                onChange={(e) => this.changeAdditional(e)}
                            />
                            &nbsp;Additional seats required by driver
                            <br />
                        </div>
                    }

                    <br />
                    <button>Reset</button>
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}