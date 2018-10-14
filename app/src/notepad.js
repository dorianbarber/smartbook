import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './style/draft.css';

class Notepad extends Component{
  constructor(props){
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }

  onUnderClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
  }

  render(){
    return (
      <div>
        <button className='button' onClick={this.onItalicClick.bind(this)}>I</button>
        <button className='button' onClick={this.onBoldClick.bind(this)}>B</button>
        <button className='button' onClick={this.onUnderClick.bind(this)}>U</button>

        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange} />
      </div>

    );
  }
}

export default Notepad;
