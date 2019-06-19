import React from "react";
import "./NewEventForm.css";
import { NavLink, Redirect } from "react-router-dom";


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
    const eventName = document.getElementById("new-event-name").value;
    const date = document.getElementById("new-event-date").value;
    const eventLocation = document.getElementById("new-event-location").value;
    const meetingPoint = document.getElementById("new-event-meeting-point").value;
    // const groupName = document.getElementById("new-event-group-name").value;
    const groupId = this.getId();

    const postBody = {
      eventName,
      date,
      eventLocation,
      meetingPoint,
      // groupName,
      groupId,
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
    this.setState({
      groupName: e.target.value,
      groupId: e.target.value.groupId
    });
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

  getId() {
    let groups = this.state.groups;
    return groups.find(group => {
      console.log(group._id);
      return group.groupName === document.getElementById("new-event-group-name").value;
    })._id;

  }


  // getMembers() {
  //   return this.state.groupName === "" ?
  //     ""
  //     : getUsers()
  //       .filter(user => {
  //         return this.state.groups
  //           .find(group => {
  //             return (
  //               group.name === document.getElementById("new-event-group-name").value
  //             );
  //           })
  //           .users.includes(user.id);
  //       })
  //       .map(aUser => {
  //         return (
  //           <option
  //             type="text"
  //             key={aUser.email}
  //             id={`user ${aUser.id}`}
  //             onClick={e => this.chooseMember(e, this.id)}
  //             value={`${aUser.firstName} ${aUser.lastName}`}
  //           >
  //             {`${aUser.firstName} ${aUser.lastName}`}
  //           </option>
  //         );
  //       });
  // }

  // chooseMember(e) {
  //   console.log("the id is", this);
  //   console.log(e.target.value);
  //   this.setState({
  //     invitedMembers: this.state.invitedMembers.concat(e.target.value)
  //   });
  // }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/user-dashboard" />
    } else {
      return (
        <div className="NewEventForm">
          <div className="headerNewEventForm">
            <h2>Create a new event</h2>

          <form className="NewEventForm" onSubmit={(e) => this.handleSubmit(e)}>
              <div className="NewEventBox">
                <div className='event-box'>
                  <label>Event Name</label>
                  <input
                    type="text"
                    className="NewEventName NewEventInput"
                    id="new-event-name"
                    placeholder='event name'
                    required
                  />
                </div>
                <div className='event-box'>
                  <label>Date</label>
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    className="NewEventDate NewEventInput"
                    id="new-event-date"
                    required
                  />
                </div>

              </div>
              <h2> Destination</h2>
              <div className="NewEventBox">
                <div className='event-box'>
                  <label>Event Location</label>
                  <input
                    type="text"
                    className="NewEventAddress NewEventInput"
                    id="new-event-location"
                    placeholder='Event Location'
                    required
                  />
                </div>
                <div className='event-box'>
                  <label>Meeting Point</label>
                  <input
                    type="text"
                    className="NewEventCity NewEventInput"
                    id="new-event-meeting-point"
                    placeholder='Meeting Point'
                    required
                  />
                </div>

              </div>
              <div className="NewEventBox">
                <div className='event-box list'>
                  <label>Choose a group</label>
                  <select
                    onChange={e => this.makeSelection(e)}
                    value={this.state.groupName}
                    id="new-event-group-name"
                    className="NewEventPassengers NewEventInput"
                  // value={document.getElementById("groupSelected").value}
                  >
                    <option />
                    {this.getGroup()}
                  </select>
                </div>

                {/* <label>Choose members to invite</label>
              <div className="membersBox">
               
                {this.getMembers()}
                
              </div>
              <label>Invited members</label>
              <div className="membersBox">
                {this.state.invitedMembers.map(invited => {
                  return <p className="invited" key={invited}>{invited}</p>;
                })}
              </div> */}
              </div>


              <input
                type='submit'
                value='Create'
                className='sub-btn'
              />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default NewEventForm;
