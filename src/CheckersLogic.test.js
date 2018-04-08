import * as CheckersLogic from './CheckersLogic';

describe('CheckersLogic', () => {
    it('getInitializeState returns 8x8 board with states', () => {
            let state = CheckersLogic.getInitialState(0);
            expect(state.CurrentPlayer).toBe(0);
    });

    it('selected Piece is Allowed To Move one Place Ahead Left And Right for player 0', () => {
        let state = CheckersLogic.getInitialState(0);
        const row = 2;
        const col = 1;
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
    //    console.log(newState);
        expect(newState.tileStates[row+1][col-1].allowedMove).toBe(true);
        expect(newState.tileStates[row+1][col].allowedMove).toBe(false);
        expect(newState.tileStates[row+1][col+1].allowedMove).toBe(true);
    });

    it('selected Piece is Allowed To Move one Place Ahead Left And Right works for player 1', () => {
        let state = CheckersLogic.getInitialState(1);
        const row = 2;
        const col = 1;
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
  //      console.log(newState);
        expect(newState.tileStates[row-1][col-1].allowedMove).toBe(true);
        expect(newState.tileStates[row-1][col].allowedMove).toBe(false);
        expect(newState.tileStates[row-1][col+1].allowedMove).toBe(true);
    });

    it('Other tiles are not allowed to move too', () => {
        let state = CheckersLogic.getInitialState(0);
        const row = 2;
        const col = 1;
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
        newState.tileStates.forEach((rowArray,r) => {
            rowArray.forEach((tile, c) => {
                if ((r === (row + 1)) && ((c === col-1) || (c === col+1)) ){
                    expect(tile.allowedMove).toBe(true)
                }else{
                    expect(tile.allowedMove).toBe(false);
                } 
            });
        });
    });


    it('Cannot cross borders', () => {
        let state = CheckersLogic.getInitialState(0);
        const row = 2;
        const col = 7;
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
        newState.tileStates.forEach((rowArray,r) => {
            rowArray.forEach((tile, c) => {
                if (r === (row + 1) && (c === col-1) ){
                    expect(tile.allowedMove).toBe(true)
                }else{
                    expect(tile.allowedMove).toBe(false);
                } 
            });
        });
    });
});