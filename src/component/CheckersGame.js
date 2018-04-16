import React from 'react';
import Board from './Board';
import * as CheckersLogic from '../CheckersLogic';

class CheckersGame extends React.Component{
    constructor(props){
        super(props);
        this.state = CheckersLogic.getInitialState(0);
    }

    render(){
        return(
        <div>
            <h1>Checkers Game</h1>
            <div>
                <Board state={this.state} onPieceClick={this.onPieceClick.bind(this)}/>
            </div>
        </div>
        );
    }

    onPieceClick(pieceState){
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(this.state, pieceState);
        console.log('New State', newState);
        this.setState((state)=>(newState));
    }
    
    onAllowedMoveClicked(tileState){
        let newState = CheckersLogic.moveSelectedToNewTile(this.state, tileState);
        console.log('New State', newState);
        newState.CurrentPlayer = 1-this.state.CurrentPlayer;
        this.setState((state) => (newState));
    }
}

export default CheckersGame;