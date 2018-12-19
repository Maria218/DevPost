import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>
          Video Call Demo<br />
        </h1>

        <h4>My Feed :</h4>
        <div id="me"></div>

        <h4>Remote Feeds :</h4>
        <div id="remote-container">

        </div>
        </header>
      </div>
    );
  }
}

export default App;
