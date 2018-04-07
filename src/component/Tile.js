import React, { Component } from 'react';
import Piece from './Piece';

class Tile extends Component {  
  render() {
    const {tileState, onPieceClick, selected} = this.props;

    return (
      <td className={`tile${selected ? ' selected' : ''}`}>
        {this.getPieces(tileState.pieces, onPieceClick)}
      </td>
    );
  }

  getPieces(pieces, onPieceClick){
    return pieces.map((v,i)=>{
      return <Piece key={i} pieceState={v} onPieceClick={onPieceClick}/>
    });
  }
}

// Tile.propTypes = {
//   tileState: React.PropTypes.shape(TileState)
// }

export default Tile;