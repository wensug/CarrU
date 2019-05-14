import React from "react";
import UsersData from "../../../UsersData";
import "./UserForm.css";



class UserForm extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="UserForm">
                <header className="headerUserForm">Create your user profile</header>
                <form className="form">
                    <p>
                        <label>
                            Name:
                        </label>
                        <br></br>   
                        <input
                            className="input"
                            type="text"
                            name="name"
                        />
                    </p>
                    <p>
                        <label>
                            Surname:
                        </label>
                        <br></br>   
                        <input
                           className="input"
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
                             className="input"
                             type="email"
                             name="email"
                        />
                    </p>
                    <p>
                        <label>
                            Telephone:
                        </label>
                        <br></br>   
                        <input
                            className="input"
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
                          className="input"
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
                             className="input"
                             type="text"
                             name="postcode"
                        />
                    </p>      
                    <button className="buttonForm">Submit</button>
                </form>
            </div>
        );
    }
}

export default UserForm;


