import React, { Component } from 'react';
import Tile from './Tile';

class Row extends Component {
  render() {
    const {row, tileStates, onPieceClick, onAllowedMoveClicked, playerTurn} = this.props;
    
    const getRenderTiles = (tileStates, onPieceClick, onAllowedMoveClicked) => {    
      return tileStates.map((v, i) => (<Tile key={i} tileState={v} onPieceClick={onPieceClick}
        onAllowedMoveClicked={onAllowedMoveClicked}
        playerTurn={playerTurn}/>));
    }

    return (
      <tr className="row" row={row}>
          {
            getRenderTiles(tileStates, onPieceClick, onAllowedMoveClicked)              
          }          
      </tr>
    );
  }  
}

export default Row;