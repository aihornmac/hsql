import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

export default class GoodsDescriptionEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = editorState => {
    this.setState({ editorState });
  }

  render () {
    const { editorState } = this.state;

    return (
      <div style={{ padding: '1em', border: '1px solid #266caa' }}>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
