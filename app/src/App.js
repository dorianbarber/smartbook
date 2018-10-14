import React, { Component } from 'react';
import logo from './logo.svg';
import button from 'react-bootstrap';
import axios from 'axios';
import Notepad from './notepad.js';
import './style/App.css';


class App extends Component {
  state = {
    files: []
  }

  /*
    files: [{lineNumber: , content: }]
  */

  render() {
    return (
      <div className="App">

        <div class = "panel1">
          <Directory />
        </div>
        <div class = "panel2">
          <Notepad />
        </div>
      </div>
    );
  }

  request() {
    axios.get('http://localhost:5000/')
      .then(res => {

        let newFile = {
          lineNumber: res.data.lineNumber,
          file: res.data.file
        }

        this.setState((prevState) => ({
          files: [...prevState.files, newFile]
        })
      })
  }
}

export default App;
