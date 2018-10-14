import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import axios from 'axios';
import './style/draft.css';

class Notepad extends Component{
  constructor(props){
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      result: ""
    };
    //this.onChange = (editorState) => this.setState({editorState});
  }

  onChange(e) {
    this.setState({e});
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

  onPress = (e) => {
    var keyCode = e.which || e.keyCode;
    if(keyCode === 46){
      var par = this.state.editorState.getCurrentContent().getPlainText()
      console.log(par)
      axios.get('http://localhost:5000/', {
        params: {
          sent: par
        }
      }).then(res => {
        this.props.onOutputChange(res.data.text);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  render(){
    return (
      <div onKeyPress={this.onPress}>
        <button className='button' onClick={this.onItalicClick.bind(this)}>I</button>
        <button className='button' onClick={this.onBoldClick.bind(this)}>B</button>
        <button className='button' onClick={this.onUnderClick.bind(this)}>U</button>

        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}

        />
      </div>

    );
  }
}

export default Notepad;
