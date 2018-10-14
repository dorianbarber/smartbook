import React, { Component } from 'react';
import Reference from './reference.js';
import {Collapse} from 'antd';

const Panel = Collapse.Panel;

class Sidebar extends Component {
	constructor(props){
		super(props);

		this.state = {
			references : this.props.data.map((ref) => {
				return <Reference word={ref.word} file={ref.file} text={ref.text}/>
			})
		}
	}

	render() {
		console.log("sidebar has rendered");
		console.log(this.state.references);

		return (
				<Collapse accordion>
					{this.props.data.map((ref) => {
						return <Panel header={ref.word} key={ref.text}><p>{ref.text}</p>/</Panel>
					})}
				</Collapse>
		);
	}
}

export default Sidebar;
