import React, { Component } from 'react';
import TileState from '../TileState';
import Piece from './Piece';

class Tile extends Component {  
  render(props) {
    const {tileState} = this.props;

    return (
      <div className="tile">
        {this.getPieces(tileState.pieces )}
      </div>
    );
  }

  getPieces(pieces){
    return pieces.map((v,i)=>{
      return <Piece key={i} pieceState={v} />
    });
  }
}

// Tile.propTypes = {
//   tileState: React.PropTypes.shape(TileState)
// }

export default Tile;