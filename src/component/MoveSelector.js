import React, { Component } from 'react';

class MoveSelector extends Component {    
  render() {
     const {tileState, onAllowedMoveClicked} = this.props;
    return (
      <div className="moveselection" onClick={() => onAllowedMoveClicked(tileState)}/>
    );
  }  
}

export default MoveSelector;