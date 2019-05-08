import React, {Component} from 'react';
import { HashRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';




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
