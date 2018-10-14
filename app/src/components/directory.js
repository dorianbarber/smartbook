import React, {Component} from 'react';
import Heading from "./heading.js"
import './style/directory.css';

class Directory extends Component{

	render(){
		return(
			<div>
				<h2><u>Contents</u></h2>
				<h3>Course: Sociology</h3>
				<ul>
					< Heading title='Chapter 1'/>
					< Heading title='Chapter 2'/>
					< Heading title='Chapter 3'/>
				</ul>

				<h3>Course: Psychology</h3>
				<ul>
					< Heading title='Chapter 1'/>
					< Heading title='Chapter 2'/>
					< Heading title='Chapter 3'/>
				</ul>

				<h3>Course: Economics</h3>
				<ul>
					< Heading title='Chapter 1'/>
					< Heading title='Chapter 2'/>
					< Heading title='Chapter 3'/>
				</ul>
				<h3>Course: Topology</h3>
				<ul>
					< Heading title='Chapter 1'/>
					< Heading title='Chapter 2'/>
					< Heading title='Chapter 3'/>
				</ul>

				<h3>Course: Probability</h3>
				<ul>
					< Heading title='Chapter 1'/>
					< Heading title='Chapter 2'/>
					< Heading title='Chapter 3'/>
				</ul>


			</div>
		)
	}
}

export default Directory;
