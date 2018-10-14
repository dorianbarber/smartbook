import React, { Component } from 'react';
import axios from 'axios';
import Notepad from './notepad.js';
import Directory from "./directory.js";
import Sidebar from "./Sidebar.js";
import Logo from "./logo.js";
import '../style/App.css';
import '../style/panel.css';
import '../style/logo.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      references: []
    }

    this.updateRef = this.updateRef.bind(this);
  }

  updateRef(data) {
    this.setState(prevState => ({
      references: [...prevState.references, data]
    }))
    console.log(this.state.references);
    this.forceUpdate();
  }


  render() {
    return (
      <div className="App">
        <div className = "logo">
          <Logo />
        </div>
        <div className = "panel1">
          <Directory />
        </div>
        <div className = "panel2">
          <Notepad onOutputChange={this.updateRef}/>
        </div>
        <div className = "panel1">
          <Sidebar data={this.state.references}/>
        </div>
      </div>
    );
  }
}

export default App;
