import React, { Component } from 'react';
import PieceState from '../PieceState';

class Piece extends Component {
  
  render(props) {
    const {pieceState} = this.props;
    return (
      <div className={`piece player${pieceState.player}`}
          pieceid={pieceState.id}  
          selected={pieceState.selected} 
          />      
    );
  }
}

// Piece.propTypes = {
//   pieceState: PieceState
// }

export default Piece;