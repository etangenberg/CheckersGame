import React, { Component } from 'react';
import Tile from './Tile';

class Row extends Component {
  render(props) {
    const {row, tileStates} = this.props;
    return (
      <div className="row" row={row}>
          {
            this.getRenderTiles(tileStates)              
          }          
      </div>
    );
  }  

  getRenderTiles = (tileStates) => {    
    return tileStates.map((v, i) => (<Tile key={i} tileState={v}/>));
  }
}

export default Row;