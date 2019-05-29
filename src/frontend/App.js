import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main'
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import NotFound from './components/NotFound/NotFound';
import UserLogin from './components/UserLogin/UserLogin';
import UserProfile from './components/UserProfile/UserProfile';
import UserForm from './components/UserForm/UserForm';
import NewEventForm from './components/NewEventForm/NewEventForm';
import NewGroupForm from './components/NewGroupForm/NewGroupForm';
import JoinEvent from './components/JoinEvent/JoinEvent';
import Dashboard from './components/UserDashboard/UserDashboard';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='wrapper'>
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
