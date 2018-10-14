import React, { Component } from 'react';
import logo from './logo.svg';
import button from 'react-bootstrap';
import axios from 'axios';
import './style/App.css';
import Sidebar from './components/Sidebar';

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
        <header className="App-header">
          
          <div>
            <button onClick={this.request}>
              hello
            </button>
          </div>
        </header>
        <Sidebar files={this.state.files}/>
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
      }))
  }
}

export default App;
