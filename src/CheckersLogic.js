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
 
        const isEmptyTile = (row, col, tileStates) => {
            return  (!tileStates[row][col].pieces || tileStates[row][col].pieces.length <= 0);
        };

        const setStateDirection = (row, col, rowDirection, colDirection ) => {
            let nextCol = col + colDirection;
            let nextRowIndex = row + rowDirection;
            let nextRow = newState.tileStates[nextRowIndex];
    
            if ( (colDirection > 0 && col < state.columns - 1) 
                || (colDirection<0 && col > 0))  {
                if (isEmptyTile(nextRowIndex, nextCol, newState.tileStates)){
                    nextRow[nextCol].allowedMove = true;
                }
                // check if hit
                else if (nextRow[nextCol].pieces[0].player !== state.CurrentPlayer){
                     if (isEmptyTile(row+(2*rowDirection),col+colDirection*2, newState.tileStates)){
                        newState.tileStates[row+(2*direction)][col+colDirection*2].hitPieces = newState.tileStates[row+direction][col+1].pieces; 
                        newState.tileStates[row+(2*direction)][col+colDirection*2].allowedMove = true;
                     }          
                }
            }    
        };

        // left
        setStateDirection(row, col, direction, -1);

        // right
        setStateDirection(row, col, direction, +1);

        return newState;
    };
