import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './component/Board';
import Piece from './component/Piece';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board rowCount="8" columnCount="8"/>

        <Piece />
      </div>
    );
  }
}

export default App;
