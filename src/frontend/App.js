import React, {Component} from 'react';
import { HashRouter as Router} from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import Dashboard from '../../src/frontend/components/userDashboard/UserDashboard';

import './App.css';
import userDashboard from '../../src/frontend/components/userDashboard/UserDashboard';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
         <Homepage />
          <Footer />
          
        </div>
      </Router>
    );
  }
}

export default App;
