import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './style/draft.css';

class Notepad extends Component{
  constructor(props){
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(){
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render(){
    return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

export default Notepad;
