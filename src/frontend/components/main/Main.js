import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import NotFound from '../NotFound/NotFound';
import UserLogin from '../UserLogin/UserLogin';
import UserProfile from '../UserProfile/UserProfile';
import UserForm from '../UserForm/UserForm';
import NewEventForm from '../NewEventForm/NewEventForm';
import NewGroupForm from '../NewGroupForm/NewGroupForm';
import JoinEvent from '../JoinEvent/JoinEvent';
import Dashboard from '../UserDashboard/UserDashboard';

function Main() {
    return (
        <div className="main">

        
        <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/user-login' component={UserLogin} />
                <Route exact path='/user-profile' component={UserProfile} />
                <Route exact path='/user-form' component={UserForm} />
                <Route exact path='/new-event-form' component={NewEventForm} />
                <Route exact path='/new-group-form' component={NewGroupForm} />
                <Route exact path='/join-event' component={JoinEvent} />
                <Route exact path='/user-dashboard' component={Dashboard} />
                <Route path='/:badLink' component={NotFound} />
                {/* <Redirect to='not-found' />; may be used elsewhere */}
              </Switch>

        </div>
    )
}



export default Main