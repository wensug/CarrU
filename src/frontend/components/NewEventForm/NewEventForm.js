import React from "react";
import "./NewEventForm.css";
import { NavLink, Redirect } from "react-router-dom";
// fix CSS
import getGroups from "../data/groups-get";
import getUsers from "../data/users-get";

class NewEventForm extends React.Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      redirect: false,
      groupName: "",      
      invitedMembers: [],      
    };
  }

  handleSubmit(event) {
    event.preventDefault(event);
    const newEventName = document.getElementById("new-event-name").value;
    const newEventDate = document.getElementById("new-event-date").value;
    const newEventAddress = document.getElementById("new-event-address").value;
    const newEventCity = document.getElementById("new-event-city").value;
    const newEventPostCode = document.getElementById("new-event-postcode").value;
    const newEventGroup = document.getElementById("new-event-group").value;

    const postBody = {
      newEventName,
      newEventDate,
      newEventAddress,
      newEventCity,
      newEventPostCode,
      newEventGroup,
    };

    console.log(postBody);
    fetch("/rest/storeEvents", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postBody)
    }).then(this.setState({ redirect: true }))
  }

  makeSelection(e) {
    this.setState({ groupName: e.target.value });
  }

     componentDidMount() {
      fetch('/rest/groups')
      .then(response => response.json())
      .then(groups => this.setState({ groups }));
    }

  getGroup() {
    return this.state.groups.map(group => {
      return (
        <option className="eventGroup" key={group.groupName} value={group.groupName}>
          {group.groupName}
        </option>
      );
    });
  }

  getMembers() {
    return this.state.groupName === "" ?
      ""
      : getUsers()
        .filter(user => {
          return this.state.groups
            .find(group => {
              return (
                group.name === document.getElementById("new-event-group").value
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

  chooseMember(e) {
    console.log("the id is", this);
    console.log(e.target.value);
    this.setState({
      invitedMembers: this.state.invitedMembers.concat(e.target.value)
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/user-dashboard" />
    } else {
      return (
        <div className="NewEventForm">
          <header className="headerNewEventForm">Create a new event</header>
          <hr />
          <form className="NewEventForm" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="NewEventBox">
              <label>Event Name</label>
              <input
                type="text"
                className="NewEventName NewEventInput"
                id="new-event-name"
                required
              />
              <label>Date</label>
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                className="NewEventDate NewEventInput"
                id="new-event-date"
                required
              />
            </div>
            <h2> Destination</h2>
            <div className="NewEventBox">
              <label>Address</label>
              <input
                type="text"
                className="NewEventAddress NewEventInput"
                id="new-event-address"
                required
              />
              <label>City</label>
              <input
                type="text"
                className="NewEventCity NewEventInput"
                id="new-event-city"
                required
              />
              <label>PostCode</label>
              <input
                type="text"
                className="NewEventPostCode NewEventInput"
                id="new-event-postcode"
                required
              />
            </div>
            <div className="NewEventBox">
              <label>Choose a group</label>
              <select
                onChange={e => this.makeSelection(e)}
                value={this.state.groupName}
                id="new-event-group"
                className="NewEventPassengers NewEventInput"
              // value={document.getElementById("groupSelected").value}
              >
                <option />
                {this.getGroup()}
              </select>
              <label>Choose members to invite</label>
              <div className="membersBox">
                {/* <select> */}
                {this.getMembers()}
                {/* </select> */}
              </div>
              <label>Invited members</label>
              <div className="membersBox">
                {this.state.invitedMembers.map(invited => {
                  return <p className="invited" key={invited}>{invited}</p>;
                })}
              </div>
            </div>
            {/* we change the Create button because the presentation. this is the original position
        of the create button. */}

            <input
              type="submit"
              value="Create"
            />
          </form>
        </div>
      );
    }
  }
}

export default NewEventForm;
