import React from 'react';
import './App.scss';
import Previewer from './components/Previewer';
import Editor from './components/Editor';

import { placeholder } from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mdText: placeholder
    };
    this.onChange = this.onChange.bind(this);
    console.log(this.state.mdText);
  }
  onChange(event) {
    this.setState({
      mdText: event.target.value
    });
  }
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Markdown Previewer</h1>
        </header>

        <section className="text-left">
          <Editor onChange={this.onChange} text={this.state.mdText}/>
        </section>

        <section className="text-left">
          <Previewer textPreview={this.state.mdText} />
        </section>

      </div>
    );
  };
}

export default App;
