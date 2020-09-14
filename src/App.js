import React from 'react';
import './App.scss';
import Previewer from './components/Previewer';
import Editor from './components/Editor'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mdText: '## Available Scripts In the project directory, you can run:### `npm start`'
    };
    this.onChange = this.onChange.bind(this);
    console.log(this.state.mdText);
  }
  onChange(event){
    this.setState({
      mdText: event.target.value
    });
  }
  componentDidMount(){
    this.setState ( {
      mdText: '## Available Scripts In the project directory, you can run:### `npm start`'
    });
  }
  render(){
    return (
      <div className="App">

        <header className="App-header">
          <h1>Markdown Previewer</h1>
        </header>

        <section >
          <Editor />
        </section>

        <section >
          <Previewer textPreview={marked(this.state.mdText)} />
        </section>

      </div>
    );
  };
}

export default App;
