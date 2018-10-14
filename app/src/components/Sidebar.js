import React, { Component } from 'react';
import Reference from './reference.js';
import {Collapse} from 'antd';
import '../style/sidebar.css';

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
				<Collapse accordion className='container'>
					{this.props.data.map((ref) => {
						return <Panel showArrow={false} className='panel'header={ref.word} key={ref.text}><p>{ref.text}</p>/</Panel>
					})}
				</Collapse>
		);
	}
}

export default Sidebar;
