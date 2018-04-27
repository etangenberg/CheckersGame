import React, { Component } from 'react';
import Tile from './Tile';

class Row extends Component {
  render() {
    const {row, tileStates, onPieceClick, onAllowedMoveClicked} = this.props;
    return (
      <tr className="row" row={row}>
          {
            this.getRenderTiles(tileStates, onPieceClick, onAllowedMoveClicked)              
          }          
      </tr>
    );
  }  

  getRenderTiles = (tileStates, onPieceClick, onAllowedMoveClicked) => {    
    return tileStates.map((v, i) => (<Tile key={i} tileState={v} onPieceClick={onPieceClick}
      onAllowedMoveClicked={onAllowedMoveClicked}/>));
  }
}

export default Row;