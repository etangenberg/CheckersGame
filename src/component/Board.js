import React, { Component } from 'react';
//import GameState from '../GameState';
import Row from './Row';

class Board extends Component {  
  render() {
    const {state, onPieceClick} = this.props;
    
    const getRows = (rowCount, tileStates) => {
      return Array.from({length: rowCount}, (v, i) => 
        ( <Row key={i} row={i} tileStates={tileStates[i]} onPieceClick={onPieceClick}/>) );
    }

    return (
      <table className="board">
        <tbody>
          {getRows(state.rows, state.tileStates)}
        </tbody>
      </table>
    );
  }


}

// Board.propTypes = {
//   state: React.propTypes.Object.isRequired
// }

export default Board;