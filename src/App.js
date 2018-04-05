import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './component/Board';
import Piece from './component/Piece';
import GameState from './GameState';

class App extends Component {
  render() {
    const state = new GameState(0,8,8);
    return (
      <div className="App">
        <Board state={state}/>
      </div>
    );
  }
}

export default App;
