import React from "react";
import "./UserProfile.css";
import "../UserForm/UserForm";
import getUsers from  "../../data/users-get";


class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
// create a logic where we capture login credentials from login page and load the associated info automatically 


    render() {
        return (
            <div className="UserProfile">
                <header className="headerUserProfile">
                    <h1>User Profile</h1>
                </header>
                <hr></hr>
                <form className="profileForm">
                    <div className="profileBox">
                        <div className="paraInputWrap">
                            <p>First Name</p>
                            <input type="text" 
                            className="ProfileName profileInput" 
                            value={getUsers()[0].firstName}
                            />
                        </div>
                        <div className="paraInputWrap">
                            <p>Surname</p>
                            <input type="text" 
                            className="ProfileSurname profileInput" 
                            value= {getUsers()[0].lastName}                            
                            />
                        </div>
                    </div>
                    <div className="profileBox">
                        <div className="paraInputWrap">
                            <p>Address</p>
                            <input type="text" className="ProfileAddress profileInput" />
                        </div>
                        <div className="paraInputWrap">
                            <p>City</p>
                            <input type="text" className="ProfileCity profileInput" />
                        </div>
                        <div className="paraInputWrap">
                            <p>Post Code</p>
                            <input type="text" className="ProfileZipCode profileInput" />
                        </div>
                    </div>
                    <div className="profileBox">
                        <div className="paraInputWrap">
                            <p>Email</p>
                            <input type="email" 
                                className="ProfileEmail profileInput" 
                                value= {getUsers()[0].email}
                            />
                        </div>
                        <div className="paraInputWrap">
                            <p>Country</p>
                            <select className="ProfileCountry profileInput" selected="UK">
                                <option value="uk">UK</option>
                                <option value="italy">Italy</option>
                                <option value="spain">Spain</option>
                                <option value="venezuela">Venezuela</option>
                            </select>
                        </div>
                    </div>
                    <button className="buttonUserLogin">Edit details</button>
                </form>
            </div>
        );
    }
}

export default UserProfile;
