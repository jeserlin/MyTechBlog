import React, { Component } from 'react';

import NavBar from './components/NavBar';

import './App.css';
import logo from './static/img/yuan.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
