import React, { Component } from 'react';
import logo from './logo.svg';
import button from 'react-bootstrap';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <button onClick={request}>
              Hello
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
