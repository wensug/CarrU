import React, {Component} from "react";
import "./UserLogin.css";
import { NavLink } from 'react-router-dom';

class UserLogin extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }

    }

// user login details to be passed as props from UserLogin to UserProfile
// there to run a find function to retrieve the matching details


    render() {
        return(
            <div className="boxUserLogin">
                <header className="headerUserLogin">Login</header>
                   
                        <input 
                            type="email"                         
                            placeholder="Username (your email address)"
                            className="inputFieldsUserLogin"
                        />
                        <input 
                            type="text"                     
                            placeholder="Password"
                            className="inputFieldsUserLogin"
                        />

                    <NavLink to='/user-dashboard'><button className='buttonUserLogin'>Login</button></NavLink>
                    <div className="loginHelpLinks">
                        <NavLink to='/'>Forgot password?</NavLink>
                        <NavLink to='/user-form'>Not a member yet?</NavLink>
                    </div>
            </div>
        );
    }
}


export default UserLogin;