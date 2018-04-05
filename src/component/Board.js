import React, { Component } from 'react';
import GameState from '../GameState';
import Row from './Row';

class Board extends Component {  
  render(props) {
    const {state} = this.props;
    
    return (
      <div className="board">
          {this.getRows(state.rows, state.tileStates)}
      </div>
    );
  }

  getRows = (rowCount, tileStates) => {
    return Array.from({length: rowCount}, (v, i) => 
      ( <Row key={i} row={i} tileStates={tileStates[i]} />) );
  }
}

// Board.propTypes = {
//   gameState: GameState
// }

export default Board;