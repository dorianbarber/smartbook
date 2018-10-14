import React, { Component } from 'react';
import axios from 'axios';
import Notepad from './notepad.js';
import './style/App.css';
import Directory from "./directory.js"
import './style/panel.css'


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

        <div className = "panel1">
          <Directory />
        </div>
        <div className = "panel2">
          <Notepad />
        </div>
      </div>
    );
  }

  request() {
    axios.get('http://localhost:5000/')
      .then(res => {
        console.log(res.data)

      });
  }
}

export default App;
