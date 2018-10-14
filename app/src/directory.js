import React, {Component} from 'react';
import Heading from "./heading.js"

class Directory extends Component{

	render(){
		return(
			<div>
				<h2>Course: Sociology</h2>
				<ul>
					< Heading title='Chapter 1'/>
					< Heading title='Chapter 2'/>
					< Heading title='Chapter 3'/>
				</ul>

				<h2>Course: Psychology</h2>
				<ul>
					< Heading title='Chapter 1'/>
					< Heading title='Chapter 2'/>
					< Heading title='Chapter 3'/>
				</ul>

				<h2>Course: Economics</h2>
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
