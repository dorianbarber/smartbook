import React, { Component } from 'react';
import logo from './logo.svg';
import button from 'react-bootstrap';
import axios from 'axios';
import Notepad from './notepad.js';
import './style/App.css';
import Directory from "./directory.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Directory />
        <Notepad />
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
