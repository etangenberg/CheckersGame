import React, { Component } from 'react';

class Piece extends Component {    
  render() {
    const {pieceState, onPieceClick,selected} = this.props;
    return (
      <div className={`piece player${pieceState.player}${selected?'selected':''}` }
          
      pieceid={pieceState.id}  
          selected={pieceState.selected}           
          onClick={() => onPieceClick(pieceState)}
          />      
    );
  }  
}

export default Piece;