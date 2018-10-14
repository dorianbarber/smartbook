import React, { Component } from 'react';
import logo from './logo.svg';
import button from 'react-bootstrap';
import axios from 'axios';
import Notepad from './notepad.js';
import './style/App.css';
<<<<<<< HEAD
import Logo from './logo.js';
=======
import Directory from "./directory.js";
import {Panel} from "react-bootstrap";
import './style/panel.css';
>>>>>>> fb845ca94e039a7a2f1cc78e0214bce2d78fd319

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header">
        <Logo/>
        </header>
=======
        <div class = "panel1">
          <Directory />
        </div>
        <div class = "panel2">
          <Notepad />
        </div>
>>>>>>> fb845ca94e039a7a2f1cc78e0214bce2d78fd319
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
