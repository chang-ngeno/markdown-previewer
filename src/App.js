import React from 'react';
import './App.css';
import Previewer from './components/Previewer';
import Editor from './components/Editor'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Markdown Previewer</h1>
        </header>

        <section id="editor">
          <Editor />
        </section>

        <section id="previewer">
          <Previewer />
        </section>
      </div>
    );
  };
}

export default App;
