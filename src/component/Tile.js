import React, { Component } from 'react';
import Piece from './Piece';
import MoveSelector from './MoveSelector';

class Tile extends Component {  
  render() {
    const {tileState, onPieceClick, onSelectMove} = this.props;

    return (
      <td className={`tile${tileState.allowedMove ? ' allowMovement' : ''}`}>
        {this.getPieces(tileState.pieces, onPieceClick)}
        { (tileState.allowedMove)?
            <MoveSelector tileState={tileState} onMoveSelect={onSelectMove} />
        :''}
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