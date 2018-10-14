import React, {Component} from 'react';
import Heading from "./heading.js"
import './style/logo.css';
import Img from './logo.jpg';

class Logo extends Component{

	render(){
		return (
		<div>
			<img src={Img} height="40" class="image"/> 
			<h1 class="name">SMARTBOOK</h1>
		</div>
		)
	}
}

export default Logo;
