import GameState from './GameState';
import Position from './Position';

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
                    newState.allowedMoves.push(new Position(nextRowIndex, nextCol));
                }
                // check if hit
                else if (hitTile.pieces[0].player !== state.CurrentPlayer){
                    let secondCol = col + 2*colDirection;
                    let secondRow = row + 2*rowDirection;
                    let nextTile = getTile(secondRow, secondCol);
                     if (isEmptyTile(nextTile)){
                        nextTile.hit.push(new Position(nextRowIndex, nextCol)); 
                        nextTile.allowedMove = true;
                        newState.allowedMoves.push(new Position(secondRow,secondCol));
                     }          
                }
            }    
        };
        
        deselect(newState);

        cleanAllowedMoves(newState);

        // left
        setStateDirection(row, col, direction, -1);

        // right
        setStateDirection(row, col, direction, +1);

        select(newState, row,col);

        return newState;
    };

    const deselect = (state) => {
        if (isEmpty(state.selected))
            return;
        
        const column = state.selected.col;
        const row = state.selected.row;        
        if (state.tileStates[row][column].pieces.length > 0){
            state.tileStates[row][column].pieces.forEach((v,k) => v.selected = false);
        }
        state.selected = {};
    };
    
    const cleanAllowedMoves = (newState) => {
        if (newState.allowedMoves.length<=0)
            return;
        
        newState.allowedMoves.forEach(tile => {
            const row = tile.row;
            const col = tile.col;
            newState.tileStates[row][col].allowedMove = false;
        });

        newState.allowedMoves = [];
    }

    const isEmpty = (object) => {
        return Object.keys(object).length === 0 && object.constructor === Object;
    };

    const select = (state, row, col) => {
        state.selected = new Position(row,col);
        state.tileStates[row][col].pieces.forEach((v, k) => { v.selected = true});        
    }    

    export const moveSelectedToNewTile = (state, tileState) => {
        let newState = duplicate(state);
        const row = tileState.row;
        const col = tileState.column;
        removeHitPieces(newState, tileState);
        let pieces = newState.tileStates[state.selected.row][state.selected.col].pieces;
        pieces.forEach((v,k) => {
            v.row = row; v.column = col;
        });
        newState.tileStates[row][col].pieces = pieces;
        newState.tileStates[state.selected.row][state.selected.col].pieces = [];
        deselect(newState);
        cleanAllowedMoves(newState);
        
        return newState;
    }

    const removeHitPieces = (state, tileState) => {
        if (tileState.hit.length <= 0)
            return;
            tileState.hit.forEach( (piece) => {
                state.tileStates[piece.row][piece.col].pieces = [];        
            });
    }
