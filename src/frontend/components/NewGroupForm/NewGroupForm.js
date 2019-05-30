import React from 'react';
import { NavLink } from 'react-router-dom';
// import css when ready

export default class NewGroupForm extends React.Component {
    constructor() {
        super();
        this.state = {
            memberList: [] // users added here
        };
    }

    addMemberList() {
        let member = document.getElementById('input-member').value;
        let memberList = this.state.memberList;
        if (member.length !== 0) {
            memberList.push(member);
        }
        this.setState({ memberList: memberList });
        document.getElementById('input-member').value = '';
    }

    handleSubmit(event) {
        //event.preventDefault(event);
        const name = document.getElementById("group-name").value;
        const description = document.getElementById("group-description").value;
        const memberList = this.state.memberList;
        const postBody = {
            name,
            description,
            memberList
        };

        console.log(postBody);
        fetch("/rest/storeGroup", { // where is storeGroup?
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postBody)
        });
    }

    resetter(event) {
        this.setState({ memberList: [] });
        document.getElementById("group-name").value = '';
        document.getElementById("group-description").value = '';
    };

    render() {
        return (
            <div>
                <div className='new-group'>
                    <form>
                        <h1>New Group</h1>
                        <hr></hr>
                        <label>
                            Group Name:
                            <input id='group-name' className='group-name' />
                        </label>
                        <label>
                            Description:
                            <input id='group-description' className='group-description' />
                        </label>

                        <div className='add-member'>
                            <label> Add Member:
                        <input id='input-member' className='new-member' placeholder='Please add the member email'></input>
                            </label>
                            <button onClick={() => this.addMemberList()}>Add</button>
                            <list>
                                {
                                    this.state.memberList.map(member => <p>{member}</p>)
                                }
                            </list>
                        </div>
                        <div>
                            <NavLink to='/user-dashboard'><button onClick={e => this.handleSubmit(e)}>Create</button></NavLink>
                            <button onClick={() => this.resetter()}>Reset</button>
                            <NavLink to='/user-dashboard'><button>Cancel</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}