'use strict';

import React, { Component } from 'react';
import {convertToRaw, convertFromRaw, Editor, EditorState, RichUtils, ContentState} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import InlineStyleControls from '../draft/InlineStyleControls';

require('styles/reflection/DraftReflection.scss');
require('draft-js/dist/Draft.css');

export const IMPORTANT = 'BOLD';
const INLINE_STYLES = [
  { label: 'Mark Important', activeLabel: 'Unmark Important', style: IMPORTANT, tooltip: 'Important snippets will stand out in the reminder email.' }
];

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
      let styled = stateToHTML(editorState.getCurrentContent());
      let underlined = underlinedSnippets(raw);

      if (raw.blocks.length === 1 && !raw.blocks[0].text) {
        styled = undefined;
      }

      props.onChange({ raw, styled, underlined: underlined.length });
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

  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
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
        <InlineStyleControls inlineStyles={INLINE_STYLES}
                             editorState={editorState}
                             onToggle={this.toggleInlineStyle.bind(this)} />
        <Editor editorState={editorState}
                onChange={this.onChange}
                handleKeyCommand={this.handleKeyCommand.bind(this)}
                placeholder={`Reflect on ${this.props.theme}`} />
      </div>
    );
  }
}

function underlinedSnippets(raw) {
  let underlined = [];
  raw.blocks.forEach(block => {
    block.inlineStyleRanges.forEach(style => {
      if (style.style === IMPORTANT) {
        underlined.push(block.text);
      }
    });
  });

  return underlined;
}

DraftReflectionComponent.displayName = 'ReflectionDraftReflectionComponent';
export default DraftReflectionComponent;
