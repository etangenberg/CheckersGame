import React, { Component } from 'react';

class Piece extends Component {    
  render() {
    // const onClick = () =>{
    //   onPieceClick(this.props.)
    // }

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

// Piece.propTypes = {
//   pieceState: PieceState
// }

export default Piece;