import React from "react";
// import UsersData from "../../../UsersData";
import "./UserForm.css";
import { NavLink } from "react-router-dom";

class UserForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault(event);
    const userName = document.getElementById("form_name").value;
    const userLastName = document.getElementById("form_lastname").value;
    const email = document.getElementById("form_email").value;
    const password = document.getElementById("form_password").value;
    const address = document.getElementById("form_address").value;
    const city = document.getElementById("form_city").value;
    const postcode = document.getElementById("form_postcode").value;
    const country = document.getElementById("form_country").value;
    const postBody = {
      userName,
      userLastName,
      email,
      password,
      address,
      city,
      postcode,
      country
    };
    console.log(postBody);
    fetch("/rest/storeUser", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postBody)
    });
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
          <form className="UserForm-form" onSubmit={e => this.handleSubmit(e)}>
            <div>
              <label>First Name:</label>
              <input
                id="form_name"
                className="UserForm-input"
                type="text"
                name="first name"
                required
              />
              <label>Last Name:</label>
              <input
                id="form_lastname"
                className="UserForm-input"
                type="text"
                name="surname"
              />
            </div>
            <div>
            <label>Password:</label>
            <input
                id="form_password"
                type="password"
                required
              />
              <label>Email:</label>
              <input
                id="form_email"
                className="UserForm-input"
                type="email"
                name="email"
              />
              <label>Address:</label>
              <input
                id="form_address"
                className="UserForm-input"
                type="text"
                name="telephone"
              />
            </div>
            <div>
            <label>City:</label>
              <input
                id="form_city"
                className="UserForm-input"
                type="text"
                name="city"
              />
              <label>Postcode:</label>
              <input
                id="form_postcode"
                className="UserForm-input"
                type="text"
                name="postcode"
              />
              <label>Country:</label>
              <select
                id="form_country"
                className="UserForm-input"
                selected="UK"
              >
                <option value="uk">UK</option>
                <option value="italy">Italy</option>
                <option value="spain">Spain</option>
                <option value="venezuela">Venezuela</option>
              </select>
              <input type="submit" />
            </div>
            {/* submit button will go here */}
          </form>
        </div>

        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
      </>
    );
  }
}

export default UserForm;
