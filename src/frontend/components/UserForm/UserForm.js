import React from "react";
import "./UserForm.css";
import { NavLink, Redirect } from "react-router-dom";

class UserForm extends React.Component {
  constructor() {
    super();
    this.state={ redirect: false };
  }
  
  handleSubmit(event) {
    event.preventDefault(event);
    const userName = document.getElementById("form_name").value;
    const userLastName = document.getElementById("form_lastname").value;
    const email = document.getElementById("form_email").value;
    const password = document.getElementById("form_password").value;
    const address = document.getElementById("form_address").value;
    const city = document.getElementById("form_city").value;
    const postcode = document.getElementById("form_postcode").value;
    const postBody = {
      userName,
      userLastName,
      email,
      password,
      address,
      city,
      postcode
    };
    console.log(postBody);
    fetch("/rest/storeUser", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postBody)
    }).then(this.setState({redirect: true}))
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/user-dashboard" />;
    } else {
      return (
        <>
          <div className="UserForm">
            <header className="headerUserForm">
              <h2>New User</h2>
              <hr />
              <h3>Create your user profile</h3>
            </header>
            <form
              className="UserForm-form"
              onSubmit={e => this.handleSubmit(e)}
            >
              <div>
                <label>First Name:</label>
                <input id="form_name" type="text" required />
                <label>Last Name:</label>
                <input id="form_lastname" type="text" required />
                <label>Password:</label>
                <input id="form_password" type="password" required />
                <label>Email:</label>
                <input id="form_email" type="email" required />
                <label>Address:</label>
                <input id="form_address" type="text" required />
                <label>City:</label>
                <input id="form_city" type="text" required />
                <label>Postcode:</label>
                <input id="form_postcode" type="text" required />
                <input type="submit" />
                <NavLink to="/">
                  <button>Cancel</button>
                </NavLink>
              </div>
            </form>
          </div>
        </>
      );
    }
  }
}

export default UserForm;
