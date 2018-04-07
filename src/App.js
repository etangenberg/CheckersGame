import React, { Component } from 'react';
import './App.css';
import CheckersGame from './component/CheckersGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheckersGame />
      </div>
    );
  }
}

export default App;
