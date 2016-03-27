'use strict';

import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

require('styles/reflection/DraftReflection.scss');
require('draft-js/dist/Draft.css');

class DraftReflectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {
      console.log(editorState.getCurrentContent().getPlainText());
      return this.setState({editorState})
    };
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
                placeholder={`Reflect on ${this.props.theme}`} />
      </div>
    );
  }
}

DraftReflectionComponent.displayName = 'ReflectionDraftReflectionComponent';
export default DraftReflectionComponent;
