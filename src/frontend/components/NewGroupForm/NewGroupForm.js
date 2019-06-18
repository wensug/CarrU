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
        const groupName = document.getElementById("group-name").value;
        const groupDescription = document.getElementById("group-description").value;
        const memberList = this.state.memberList;
        const postBody = {
            groupName,
            groupDescription,
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
            
                <div className='new-group'>
                    <form className='form-newGroup'>
                        <h1 className='newGroup-title'>New Group</h1>
                        <div className='form-box'>
                        <label>Group Name:</label>
                        <input id='group-name' className='group-name'  placeholder='Group Name'/>
                        </div>
                        <div className='form-box'>
                        <label>Description:</label>
                        <input id='group-description' className='group-description'  placeholder='Description'/>
                        </div>
                        <div className='form-box'>
                       
                            <label>Add Member:</label>
                            <input id='input-member' className='new-member' placeholder='Member e-mail'></input>
                            <button onClick={() => this.addMemberList()}>Add</button>
                            
                        
                        </div>
                        <div className='form-box add-member'>
                            <list>
                                {
                                    this.state.memberList.map(member => <p>{member}</p>)
                                }
                            </list>
                        </div>

                        
                        <div className='form-box'>
                            <NavLink to='/user-dashboard'><button onClick={e => this.handleSubmit(e)}>Create</button></NavLink>
                            <button onClick={() => this.resetter()}>Reset</button>
                            <NavLink to='/user-dashboard'><button>Cancel</button></NavLink>
                        </div>
                    </form>
                </div>
            
        )
    }

}