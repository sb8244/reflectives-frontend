'use strict';

import React, { Component } from 'react';
import {convertToRaw, convertFromRaw, Editor, EditorState, RichUtils, ContentState} from 'draft-js';

require('styles/reflection/DraftReflection.scss');
require('draft-js/dist/Draft.css');

class DraftReflectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }
  
  componentDidMount(props = this.props) {
    if (props.contentState) {
      let contentBlockArray = convertFromRaw(props.contentState.toJS());
      let contentState = ContentState.createFromBlockArray(contentBlockArray);
      this.state = {editorState: EditorState.createWithContent(contentState)};
    } else {
      this.state = {editorState: EditorState.createEmpty()};
    }

    this.onChange = (editorState) => {
      let raw = convertToRaw(editorState.getCurrentContent());
      props.onChange(raw);
      return this.setState({editorState})
    };
  }

  componentWillReceiveProps(newProps) {
    if(this.props.theme !== newProps.theme) {
      this.componentDidMount(newProps);
    }
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  render() {
    const {editorState} = this.state;

    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className={className}>
        <Editor editorState={editorState}
                onChange={this.onChange}
                handleKeyCommand={this.handleKeyCommand.bind(this)}
                placeholder={`Reflect on ${this.props.theme}`} />
      </div>
    );
  }
}

DraftReflectionComponent.displayName = 'ReflectionDraftReflectionComponent';
export default DraftReflectionComponent;
