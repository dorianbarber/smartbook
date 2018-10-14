import React, {Component} from 'react';
import { Collapse} from 'antd';

const Panel = Collapse.Panel;

class Reference extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false
    };
  }

  render(){
    return(
        <Panel header={this.props.word}>
          <p>{this.props.text}</p>
        </Panel>
    );
  };
};

export default Reference;
