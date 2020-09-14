import React from 'react';

export default class Previewer extends React.Component {
  render() {
    return(
      <div>
        <span className="header">Previewer</span>
        <textarea id="previewer" className="textarea" placeholder={this.props.textPreview}></textarea>
      </div>
    )
  };
}
