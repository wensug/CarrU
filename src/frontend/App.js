import React, {Component} from 'react';
import { HashRouter as Router} from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Homepage />
        </div>
      </Router>
    );
  }
}

export default App;
