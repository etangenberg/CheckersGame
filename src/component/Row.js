import React, { Component } from 'react';
import Tile from './Tile';

class Row extends Component {
  render(row, columnCount) {
    return (
      <div className="row" row={this.props.row}>
          {
            this.getRenderTiles(this.props.columnCount)              
          }          
      </div>
    );
  }  

  getRenderTiles = (count) => {    
    return (Array.from({length: count}, (v, i) => (<Tile key={i}/>)));
  }
}

export default Row;