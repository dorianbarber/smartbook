import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		return (<div>
			{
				this.props.files.map((file, i) => {
					return <p key={i}>{file.lineNumber}</p>
				})
			}
		</div>
		);
	}
}

export default Sidebar;