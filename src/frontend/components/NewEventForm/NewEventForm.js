import React from "react";
import "./NewEventForm.css";
import { NavLink } from "react-router-dom";
// fix CSS
import getGroups from "../data/groups-get";
import getUsers from "../data/users-get";

class NewEventForm extends React.Component {
  constructor() {
    super();
    this.state = {
      groupName: "",
      invitedMembers: []
    };
  }

  makeSelection(e) {
    this.setState({ groupName: e.target.value });
  }

  chooseMember(e) {
    console.log("the id is", this);
    console.log(e.target.value);
    this.setState({
      invitedMembers: this.state.invitedMembers.concat(e.target.value)
    });
  }

  getGroup() {
    return getGroups().map(group => {
      return (
        <option key={group.id} value={group.name}>
          {group.name}
        </option>
      );
    });
  }

  getMembers() {
    return this.state.groupName === ""
      ? ""
      : getUsers()
          .filter(user => {
            return getGroups()
              .find(group => {
                return (
                  group.name === document.getElementById("groupSelector").value
                );
              })
              .users.includes(user.id);
          })
          .map(aUser => {
            return (
              <option
                type="text"
                key={aUser.email}
                id={`user ${aUser.id}`}
                onClick={e => this.chooseMember(e, this.id)}
                value={`${aUser.firstName} ${aUser.lastName}`}
              >
                {`${aUser.firstName} ${aUser.lastName}`}
              </option>
            );
          });
  }

  render() {
    return (
      <>
        <div className="NewEventForm">
          <header className="headerNewEventForm">Create a new event</header>
          <hr />
          <form className="NewEventForm">
            <div className="NewEventBox">
              <div className="paraInputWrap">
                <h3>Event Name</h3>
                <input type="text" className="NewEventName NewEventInput" />
              </div>
              <div className="paraInputWrap">
                <h3>Date</h3>
                <input type="text" className="NewEventSurname NewEventInput" />
              </div>
            </div>
            <h2> Destination</h2>
            <div className="NewEventBox">
              <div className="paraInputWrap">
                <h3>Address</h3>
                <input type="text" className="NewEventAddress NewEventInput" />
              </div>
              <div className="paraInputWrap">
                <h3>City</h3>
                <input type="text" className="NewEventCity NewEventInput" />
              </div>
              <div className="paraInputWrap">
                <h3>PostCode</h3>
                <input type="text" className="NewEventZipCode NewEventInput" />
              </div>
            </div>
            <div className="NewEventBox">
              <div className="paraInputWrap">
                <h3>Choose a group</h3>
                <select
                  onChange={e => this.makeSelection(e)}
                  value={this.state.groupName}
                  id="groupSelector"
                  className="NewEventPassengers NewEventInput"
                  // value={document.getElementById("groupSelected").value}
                >
                  <option />
                  {this.getGroup()}
                </select>
              </div>
              <div className="paraInputWrap">
                <h3>Choose members to invite</h3>
                <div className="membersBox">
                  {/* <select> */}
                  {this.getMembers()}
                  {/* </select> */}
                </div>
              </div>
              <div className="paraInputWrap">
                <h3>Invited members</h3>
                <div className="membersBox">
                  {this.state.invitedMembers.map(invited => {
                    return <p key={invited}>{invited}</p>;
                  })}
                </div>
              </div>
            </div>
            {/* we change the Create button because the presentation. this is the original position
        of the create button. */}
          </form>
        </div>
        <NavLink to="/user-dashboard">
          <button>Create</button>
        </NavLink>
        <NavLink to="/user-dashboard">
          <button>Cancel</button>
        </NavLink>
      </>
    );
  }
}

export default NewEventForm;
