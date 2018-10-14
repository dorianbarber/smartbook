import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import {Button, ButtonToolbar} from 'react-bootstrap';
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

  render(){
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.onItalicClick.bind(this)}>Italic</Button>
          <Button onClick={this.onBoldClick.bind(this)}>Bold</Button>
          <Button bsStyle='primary'>Hello</Button>
        </ButtonToolbar>

        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange} />
      </div>

    );
  }
}

export default Notepad;
