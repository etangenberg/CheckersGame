import React, { Component } from 'react';

class MoveSelector extends Component {    
  render() {
     const {tileState, onMoveSelect} = this.props;
    return (
      <div className="moveselection" onClick={()=>onMoveSelect(tileState)}/>
    );
  }  
}

export default MoveSelector;