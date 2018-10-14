/*
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Logo extends Component {
  render(){
    return(
      <div className="App">
        <div className= "App-header">
          <View className="rectangle" />
          <img src ={logo}/>
        </div>
      </div>
    )
  }

}


export default Logo;
*/

import React, { Component } from 'react';




class TopBar extends Component{
  render(){
    return(
      <div className = 'TopBarDiv'>
        <Button message="My Profile" number={1}/>
        <Button message="New Patients" number={2}/>
      </div>
    );
  }
}

function clickMessage(){
  console.log('The button was clicked!');
  // Modal.handleShow();
}

function Button(props){
  if (props.number==1){
    return <button onClick={clickMessage} className ='ButtonOne'>{props.message}</button>;
  }
  if(props.number==2){
    return <button onClick={clickMessage} className ='ButtonTwo'>{props.message}</button>;
  }

}

export default TopBar;
