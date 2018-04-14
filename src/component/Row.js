import React, { Component } from 'react';
import Tile from './Tile';

class Row extends Component {
  render() {
    const {row, tileStates, onPieceClick} = this.props;
    return (
      <tr className="row" row={row}>
          {
            this.getRenderTiles(tileStates, onPieceClick)              
          }          
      </tr>
    );
  }  

  getRenderTiles = (tileStates, onPieceClick) => {    
    return tileStates.map((v, i) => (<Tile key={i} tileState={v} onPieceClick={onPieceClick}/>));
  }
}

export default Row;