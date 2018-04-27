import React, { Component } from 'react';

class Piece extends Component {    
  render() {
    const {pieceState, onPieceClick, playerTurn, selected} = this.props;
    return (
      <div className={`piece player${pieceState.player}${selected?'selected':''}` }
        pieceid={pieceState.id}  
        selected={pieceState.selected}        
        onClick={() => (playerTurn ===pieceState.player) ? onPieceClick(pieceState) : {} }
      />      
    );
  }  
}

export default Piece;