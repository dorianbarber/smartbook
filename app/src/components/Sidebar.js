import React, { Component } from 'react';
import Reference from './reference.js';
import {Collapse} from 'antd';
import '../style/directory.css';

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
		return (
			<div>
				<Collapse accordion>
					{this.props.data.map((ref) => {
						return <Panel header={ref.word} key={ref.text}><p>{ref.text}</p>/</Panel>
					})}
				</Collapse>
			</div>
		);
	}
}

export default Sidebar;
