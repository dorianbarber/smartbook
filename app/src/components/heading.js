import React, {Component} from 'react';

class Heading extends Component{

	constructor(props){
		super(props);

		this.state = {
			chapter: props.title
		}
	}

	render(){
		return(
			<div>
				<li>
					{this.props.title}
				</li>
			</div>
		)
	}
}

export default Heading;
