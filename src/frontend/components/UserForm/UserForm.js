import React from "react";
// import UsersData from "../../../UsersData";
import "./UserForm.css";
import { NavLink } from 'react-router-dom';


class UserForm extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="UserForm">
                <header className="headerUserForm">
                    <h1>New User</h1>
                    <h2>Create your user profile</h2>
                </header>
                <form className="UserForm-form">
                    <p>
                        <label>
                            First Name:
                        </label>
                        <br></br>   
                        <input
                            className="UserForm-input"
                            type="text"
                            name="first name"
                        />
                    </p>
                    <p>
                        <label>
                            Surname:
                        </label>
                        <br></br>   
                        <input
                           className="UserForm-input"
                           type="text"
                           name="surname"
                        />
                    </p>
                    <p>
                        <label>
                            Email:
                        </label>
                        <br></br>   
                        <input
                             className="UserForm-input"
                             type="email"
                             name="email"
                        />
                    </p>
                    <p>
                        <label>
                            Address:
                        </label>
                        <br></br>   
                        <input
                            className="UserForm-input"
                            type="text"
                            name="telephone"
                                />
                    </p>
                    <p>
                        <label>
                            City:
                        </label>
                        <br></br>   
                        <input
                          className="UserForm-input"
                          type="text"
                          name="city"
                        />
                    </p>
                    <p>
                        <label>
                            Postcode:
                        </label>
                        <br></br>   
                        <input
                             className="UserForm-input"
                             type="text"
                             name="postcode"
                        />
                    </p>  
                    <p>
                        <label>
                            Country:
                        </label>
                        <br></br>   
                        <select className="UserForm-input" selected="UK">
                                <option value="uk">UK</option>
                                <option value="italy">Italy</option>
                                <option value="spain">Spain</option>
                                <option value="venezuela">Venezuela</option>
                            </select>
                    </p> 
                    {/* submit button will go here */}
                    
                </form>
                <button className="buttonUserLogin"><NavLink to='/user-profile'>Submit</NavLink></button>
            </div>
        );
    }
}

export default UserForm;


