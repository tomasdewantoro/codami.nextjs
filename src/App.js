import React, { Component } from 'react';
import CodeEditor from './components/editor.jsx';

class App extends Component {
  render() {
    return (
      <div style={{width:'75%', height:'50vh'}}>
        <CodeEditor />
      </div>
    );
  }
}

export default App;