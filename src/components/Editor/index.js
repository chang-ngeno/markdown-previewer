import React from 'react';

export default class Editor extends React.Component {
  render() {
    return(
      <div>
        <span className="header">Editor</span>
        <textarea id="editor" className="textarea"></textarea>
      </div>
    )
  };
}
