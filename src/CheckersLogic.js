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
 
        const getTile = (row,col) => {
            return newState.tileStates[row][col];
        }

        const isEmptyTile = (tile) => {
            return  (!tile.pieces || tile.pieces.length <= 0);
        };

        const setStateDirection = (row, col, rowDirection, colDirection ) => {
            let nextCol = col + colDirection;
            let nextRowIndex = row + rowDirection;
            let hitTile = getTile(nextRowIndex, nextCol);

            if ( (colDirection > 0 && col < state.columns - 1) 
                || (colDirection<0 && col > 0))  {
                if (isEmptyTile(hitTile)){
                    hitTile.allowedMove = true;
                }
                // check if hit
                else if (hitTile.pieces[0].player !== state.CurrentPlayer){
                    let secondCol = col + 2*colDirection;
                    let secondRow = row + 2*rowDirection;
                    let nextTile = getTile(secondRow, secondCol);
                     if (isEmptyTile(nextTile)){
                        nextTile.hitPieces = hitTile.pieces; 
                        nextTile.allowedMove = true;
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
