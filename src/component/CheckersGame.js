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
        console.log(pieceState);
        const row = pieceState.row;
        const column = pieceState.column;
        
        let newStates = JSON.parse(JSON.stringify(this.state.tileStates))
        newStates[row][column].selected = true;
        newStates[row][column].pieces[0].selected = true;
        this.setState((state)=>({tileStates: newStates}));
      }
}

export default CheckersGame;