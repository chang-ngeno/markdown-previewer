import React from 'react';

import marked from 'marked';

export default class Previewer extends React.Component {
  render() {
    //console.log(this.props.textPreview);
    const renderer = new marked.Renderer();
    marked.setOptions({
      breaks: true,
    });
    renderer.link = function (href, title, text) {
      return `${`<a target="_blank" href="${href}">${text}`}</a>`;
    }
    renderer.table = function (title, body) {
      return `${`<div class="table-responsive"><table class="table table-bordered table-hover table-sm"><thead>${title}</thead><tbody>${body}`}</tbody></table></div>`;
    }
    renderer.image = (href, title, text)=>(
      `${`<img src="${href}" alt="${text}" `} class="img img-thumbnail"/>`
    )
    const html = marked.parser(marked.lexer(this.props.textPreview));
    console.log(html);

    return (
      <div className="previewerWrap">
        <h3 className="header">Previewer</h3>
        <div id="preview" className="textarea" /* placeholder={html} */
          dangerouslySetInnerHTML={{ __html: marked(this.props.textPreview, { renderer: renderer }) }} >

        </div>
      </div>
    )
  };
}
