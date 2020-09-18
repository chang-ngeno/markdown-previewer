import React from 'react';

export default class Editor extends React.Component {
  render() {
    return(
      <div className="editorWrap">
        <h3 className="header">Editor</h3>
        <textarea id="editor" onChange={this.props.onChange} type="text">{this.props.text}</textarea>
      </div>
    )
  };
}
