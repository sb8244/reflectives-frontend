'use strict';

import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

require('styles/reflection/DraftReflection.scss');
require('draft-js/dist/Draft.css');

class DraftReflectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
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
