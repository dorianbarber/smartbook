import React, { Component } from 'react';
import logo from './logo.svg';
import button from 'react-bootstrap';
import axios from 'axios';
import './style/App.css';
import Logo from './logo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Logo/>
        </header>
      </div>
    );
  }

  request(){
    axios.get('http://localhost:5000/')
      .then(res => {
        console.log(res.data)
      });
  }
}

export default App;
