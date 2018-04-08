import GameState from './GameState';

function duplicate(state){
    return JSON.parse(JSON.stringify(state));
};

export function getInitialState(startPlayerId){
        return new GameState(startPlayerId, 8, 8);
};

export function getPieceSelectedAllowedMovesState(state, selectedPieceState){
        let newState = duplicate(state);
        const row = selectedPieceState.row;
        const col = selectedPieceState.column;
        let direction = state.CurrentPlayer === 1 ? -1 : 1;
        newState.tileStates[row+direction][col-1].allowedMove = true;
        newState.tileStates[row+direction][col+1].allowedMove = true;
        return newState;
    };

    //export default {getInitialState};

