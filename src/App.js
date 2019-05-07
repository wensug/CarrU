import React, {Component} from 'react';
import { HashRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
