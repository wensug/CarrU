import React from "react";
import { NavLink } from "react-router-dom";
import "./userDashboard.css";
import EventDashboard from "./EventDashboard";
import GroupDashboard from "./GroupDashboard";
import groups from "../data/groups-get.js";

class userDashboard extends React.Component {
  constructor() {
    super();
    this.state = { events: []}
  }
  componentDidMount() {
    fetch('/rest/events')
    .then(response => response.json())
    .then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <h2>User Name LastName</h2>
          <hr />
          <NavLink to="/user-profile">
            <button style={{ marginLeft: "90%" }}>Profile</button>
          </NavLink>
        </header>

        <div className="dashboard-columns">
          <div className="groups">
            <h3>My groups</h3>
            {groups().map(group => {
              return (
                <GroupDashboard
                  name={group.name}
                  description={group.description}
                />
              );
            })}
            <NavLink to="/new-group-form">
              <button>New Group</button>
            </NavLink>
            <NavLink to="/join-event">
              <button>Join an existing event</button>
            </NavLink>
            <NavLink to="/new-event-form">
              <button>New Event</button>
            </NavLink>
          </div>
          <div className="dashboard-grid">
            <h3>Upcoming events</h3>
            <div className="dashboard-groups">
              {
                
                
                  this.state.events.map(event => {
                    return (
                      <EventDashboard
                        id={event.id}
                        name={event.name}
                        group={event.group}
                      />
                    ); 
                  }) 
                }
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default userDashboard;
