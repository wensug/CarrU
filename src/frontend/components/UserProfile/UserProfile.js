import React from "react";
import "./UserProfile.css";


class UserProfile extends React.Component {
    constructor() {
        super();
        this.state= {

        }
    }
// create a logic where we capture login credentials from login page and load automatically the associated info


    render() {
        return (
            <div className="UserProfile">
                <header className="headerUserProfile">Profile</header>
                <hr></hr>
                <form className="profileForm">
                    <div className="profileBox">
                        <div className="paraInputWrap">
                            <p>FIRST NAME</p>
                            <input type="text" className="ProfileName profileInput" />
                        </div>
                        <div className="paraInputWrap">
                            <p>LAST NAME</p>
                            <input type="text" className="ProfileSurname profileInput" />
                        </div>
                    </div>
                    <div className="profileBox">
                        <div className="paraInputWrap">
                            <p>ADDRESS</p>
                            <input type="text" className="ProfileAddress profileInput" />
                        </div>
                        <div className="paraInputWrap">
                            <p>CITY</p>
                            <input type="text" className="ProfileCity profileInput" />
                        </div>
                        <div className="paraInputWrap">
                            <p>ZIP CODE</p>
                            <input type="text" className="ProfileZipCode profileInput" />
                        </div>
                    </div>
                    <div className="profileBox">
                        <div className="paraInputWrap">
                            <p>EMAIL</p>
                            <input type="email" className="ProfileEmail profileInput" />
                        </div>
                        <div className="paraInputWrap">
                            <p>COUNTRY</p>
                            <select className="ProfileCountry profileInput" selected="UK">
                                <option value="uk">UK</option>
                                <option value="italy">Italy</option>
                                <option value="spain">Spain</option>
                                <option value="venezuela">Venezuela</option>
                            </select>
                        </div>
                    </div>
                    <button className="profileButton">Edit details</button>
                </form>
            </div>
        );
    }
}

export default UserProfile;
