import React from "react";
// import UsersData from "../../../UsersData";
import "./UserForm.css";
import { NavLink } from "react-router-dom";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="UserForm">
          <header className="headerUserForm">
            <h2>New User</h2>
            <hr />
            <h3>Create your user profile</h3>
          </header>
          <form className="UserForm-form">
            <div>
              <label>First Name:</label>

              <input className="UserForm-input" type="text" name="first name" />

              <label>Last Name:</label>

              <input className="UserForm-input" type="text" name="surname" />
            </div>

            <div>
              <label>Address:</label>

              <input className="UserForm-input" type="text" name="telephone" />

              <label>City:</label>

              <input className="UserForm-input" type="text" name="city" />

              <label>Postcode:</label>

              <input className="UserForm-input" type="text" name="postcode" />
            </div>
            <div>
              <label>Email:</label>

              <input className="UserForm-input" type="email" name="email" />

              <label>Country:</label>

              <select className="UserForm-input" selected="UK">
                <option value="uk">UK</option>
                <option value="italy">Italy</option>
                <option value="spain">Spain</option>
                <option value="venezuela">Venezuela</option>
              </select>
            </div>
            {/* submit button will go here */}
          </form>
        </div>
        <NavLink to="/user-profile">
          <button>Submit</button>
        </NavLink>

        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
      </>
    );
  }
}

export default UserForm;
