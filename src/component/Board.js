import React, { Component } from 'react';
import Row from './Row';

class Board extends Component {
  render(rowCount, columnCount) {
    return (
      <div className="board">
          {this.getRows(this.props.rowCount, this.props.columnCount)}
      </div>
    );
  }

  getRows = (rowCount, tileCount) => {
    return Array.from({length: rowCount}, (v, i) => ( <Row key={i} row={i} columnCount={tileCount} />) );
  }
}

export default Board;