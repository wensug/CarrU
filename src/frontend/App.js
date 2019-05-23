import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import NotFound from './components/NotFound/NotFound';
import UserLogin from './components/UserLogin/UserLogin';
import UserProfile from './components/UserProfile/UserProfile';
import UserForm from './components/UserForm/UserForm';
import NewEventForm from './components/NewEventForm/NewEventForm';
import NewGroupForm from './components/NewGroupForm/NewGroupForm';
import JoinEvent from './components/JoinEvent/JoinEvent';

// import Dashboard from '../../src/frontend/components/userDashboard/UserDashboard';

// import userDashboard from '../../src/frontend/components/userDashboard/UserDashboard';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/user-login' component={UserLogin} />
            <Route exact path='/user-profile' component={UserProfile} /> 
            <Route exact path='/user-form' component={UserForm} />
            <Route exact path='/new-event-form' component={NewEventForm} />
            <Route exact path='/new-group-form' component={NewGroupForm} /> 
            <Route exact path='/join-event' component={JoinEvent} />
            <Route path='/:badLink' component={NotFound} />
            {/* <Redirect to='not-found' />; may be used elsewhere */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
